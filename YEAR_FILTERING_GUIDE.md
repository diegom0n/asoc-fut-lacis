# Year-Based Filtering Guide

## 🗓️ How to Add Year-Based Content Separation

This guide shows you how to add year filtering to your website so you can separate content by seasons/years.

---

## 📋 Database Changes Needed

### Step 1: Add Year Columns to Tables

Add these SQL commands in your Supabase SQL Editor:

```sql
-- Add year column to matches table
ALTER TABLE matches ADD COLUMN IF NOT EXISTS year INTEGER DEFAULT EXTRACT(YEAR FROM CURRENT_DATE);

-- Add year column to news table  
ALTER TABLE news ADD COLUMN IF NOT EXISTS year INTEGER DEFAULT EXTRACT(YEAR FROM CURRENT_DATE);

-- Add year column to citations table
ALTER TABLE citations ADD COLUMN IF NOT EXISTS year INTEGER DEFAULT EXTRACT(YEAR FROM CURRENT_DATE);

-- Update existing records to have current year
UPDATE matches SET year = EXTRACT(YEAR FROM date::date) WHERE year IS NULL;
UPDATE news SET year = EXTRACT(YEAR FROM date::date) WHERE year IS NULL;
UPDATE citations SET year = EXTRACT(YEAR FROM date::date) WHERE year IS NULL;
```

---

## 🔧 Frontend Implementation

### Step 2: Update Type Definitions

Add year property to your types in `lib/supabase-admin.ts`:

```typescript
export interface Match {
  id?: number
  home_team: string
  away_team: string
  home_score?: number
  away_score?: number
  date: string
  time?: string
  venue: string
  division: string
  matchday?: string
  status: 'upcoming' | 'completed' | 'live'
  year?: number  // Add this line
  created_at?: string
  updated_at?: string
}

export interface News {
  id?: number
  title: string
  summary: string
  content?: string
  category: string
  author: string
  date: string
  views: number
  comments: number
  featured: boolean
  year?: number  // Add this line
  created_at?: string
  updated_at?: string
}

export interface Citation {
  id?: number
  type: string
  title: string
  description: string
  club: string
  date: string
  time: string
  venue: string
  status: string
  priority: string
  attendees: number
  max_attendees: number
  year?: number  // Add this line
  created_at?: string
  updated_at?: string
}
```

### Step 3: Add Year Filter Functions

Add these functions to `lib/supabase-admin.ts`:

```typescript
// Get available years for filtering
export const getAvailableYears = async (): Promise<number[]> => {
  const { data: matchYears } = await supabase
    .from('matches')
    .select('year')
    .not('year', 'is', null)
  
  const { data: newsYears } = await supabase
    .from('news')
    .select('year')
    .not('year', 'is', null)
  
  const { data: citationYears } = await supabase
    .from('citations')
    .select('year')
    .not('year', 'is', null)
  
  const allYears = [
    ...(matchYears?.map(m => m.year) || []),
    ...(newsYears?.map(n => n.year) || []),
    ...(citationYears?.map(c => c.year) || [])
  ]
  
  const uniqueYears = [...new Set(allYears)].sort((a, b) => b - a)
  return uniqueYears
}

// Update match service to include year filtering
export const matchService = {
  // Get matches by year
  async getByYear(year: number): Promise<Match[]> {
    const { data, error } = await supabase
      .from('matches')
      .select('*')
      .eq('year', year)
      .order('date', { ascending: false })
    
    if (error) {
      console.error('Error fetching matches by year:', error)
      return []
    }
    return data || []
  },

  // Get upcoming matches with year filter
  async getUpcoming(year?: number): Promise<Match[]> {
    let query = supabase
      .from('matches')
      .select('*')
      .eq('status', 'upcoming')
      .order('date', { ascending: true })
    
    if (year) {
      query = query.eq('year', year)
    }
    
    const { data, error } = await query
    
    if (error) {
      console.error('Error fetching upcoming matches:', error)
      return []
    }
    return data || []
  },

  // ... rest of your existing functions
}
```

### Step 4: Add Year Filter Component

Create a reusable year filter component:

```typescript
// components/year-filter.tsx
'use client'

import { useState, useEffect } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { getAvailableYears } from '@/lib/supabase-admin'

interface YearFilterProps {
  selectedYear: number | null
  onYearChange: (year: number | null) => void
}

export function YearFilter({ selectedYear, onYearChange }: YearFilterProps) {
  const [availableYears, setAvailableYears] = useState<number[]>([])

  useEffect(() => {
    loadYears()
  }, [])

  const loadYears = async () => {
    const years = await getAvailableYears()
    setAvailableYears(years)
  }

  return (
    <div className="flex items-center space-x-2">
      <label className="text-sm font-medium">Año:</label>
      <Select 
        value={selectedYear?.toString() || 'all'} 
        onValueChange={(value) => onYearChange(value === 'all' ? null : parseInt(value))}
      >
        <SelectTrigger className="w-32">
          <SelectValue placeholder="Todos" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos</SelectItem>
          {availableYears.map((year) => (
            <SelectItem key={year} value={year.toString()}>
              {year}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
```

### Step 5: Update Pages with Year Filtering

Example for matches page (`app/partidos/page.tsx`):

```typescript
// Add to imports
import { YearFilter } from '@/components/year-filter'

// Add to component state
const [selectedYear, setSelectedYear] = useState<number | null>(null)

// Update loadData function
const loadData = async () => {
  try {
    setLoading(true)
    
    // Load matches with year filter
    const upcoming = await matchService.getUpcoming(selectedYear || undefined)
    setUpcomingMatches(upcoming)
    
    const recent = await matchService.getRecent(selectedYear || undefined)
    setRecentResults(recent)
    
    // Calculate standings for selected year only
    const allMatches = [...upcoming, ...recent]
    const calculatedStandings = calculateStandings(allMatches)
    setStandings(calculatedStandings)
    
  } catch (err) {
    setError('Error al cargar los datos')
    console.error('Error loading matches:', err)
  } finally {
    setLoading(false)
  }
}

// Add useEffect to reload when year changes
useEffect(() => {
  loadData()
}, [selectedYear])

// Add year filter to your JSX
<div className="mb-8 flex justify-between items-center">
  <div>
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
      Filtrar por Categoría
    </h3>
    {/* Your existing category filter */}
  </div>
  
  <YearFilter 
    selectedYear={selectedYear} 
    onYearChange={setSelectedYear} 
  />
</div>
```

---

## 🎯 Usage Examples

### Adding Content with Year

When creating new content through admin panel, it will automatically use current year:

```typescript
// In your admin forms, year is automatically set
const matchData = {
  home_team: matchForm.homeTeam,
  away_team: matchForm.awayTeam,
  date: matchForm.date,
  // year is automatically set by database default
  // or you can explicitly set it:
  year: new Date().getFullYear()
}
```

### Filtering by Year

Users can now:
- View all content (default)
- Filter by specific year (2024, 2025, etc.)
- See separate standings for each year
- Browse historical data

---

## 🚀 Benefits

1. **Season Separation**: Each year's data is separate
2. **Historical Data**: Keep records of past seasons
3. **Clean Interface**: Users see relevant year's data
4. **Performance**: Faster queries with year filtering
5. **Scalability**: Easy to add new years

---

## 📊 Future Enhancements

- **Season Archives**: Create dedicated archive pages
- **Year Comparison**: Compare stats between years
- **Automatic Rollover**: Auto-create new season
- **Export Data**: Download year-specific reports

This system will grow with your association and keep historical data organized! 🏆