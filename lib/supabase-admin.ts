import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
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
  created_at?: string
  updated_at?: string
}

// Match Management Functions
export const matchService = {
  // Get all upcoming matches
  async getUpcoming(): Promise<Match[]> {
    const { data, error } = await supabase
      .from('matches')
      .select('*')
      .eq('status', 'upcoming')
      .order('date', { ascending: true })
    
    if (error) {
      console.error('Error fetching upcoming matches:', error)
      return []
    }
    return data || []
  },

  // Get recent completed matches
  async getRecent(): Promise<Match[]> {
    const { data, error } = await supabase
      .from('matches')
      .select('*')
      .eq('status', 'completed')
      .order('date', { ascending: false })
      .limit(10)
    
    if (error) {
      console.error('Error fetching recent matches:', error)
      return []
    }
    return data || []
  },

  // Add new match
  async create(match: Omit<Match, 'id' | 'created_at' | 'updated_at'>): Promise<Match | null> {
    const { data, error } = await supabase
      .from('matches')
      .insert(match)
      .select()
      .single()
    
    if (error) {
      console.error('Error creating match:', error)
      return null
    }
    return data
  },

  // Update match (for adding scores)
  async update(id: number, updates: Partial<Match>): Promise<Match | null> {
    const { data, error } = await supabase
      .from('matches')
      .update(updates)
      .eq('id', id)
      .select()
      .single()
    
    if (error) {
      console.error('Error updating match:', error)
      return null
    }
    return data
  },

  // Get matches by division
  async getByDivision(division: string): Promise<Match[]> {
    const { data, error } = await supabase
      .from('matches')
      .select('*')
      .eq('division', division)
      .order('date', { ascending: true })
    
    if (error) {
      console.error('Error fetching matches by division:', error)
      return []
    }
    return data || []
  }
}

// News Management Functions
export const newsService = {
  // Get all news
  async getAll(): Promise<News[]> {
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .order('date', { ascending: false })
    
    if (error) {
      console.error('Error fetching news:', error)
      return []
    }
    return data || []
  },

  // Get featured news
  async getFeatured(): Promise<News[]> {
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .eq('featured', true)
      .order('date', { ascending: false })
      .limit(3)
    
    if (error) {
      console.error('Error fetching featured news:', error)
      return []
    }
    return data || []
  },

  // Create news
  async create(news: Omit<News, 'id' | 'created_at' | 'updated_at' | 'views' | 'comments'>): Promise<News | null> {
    const newsWithDefaults = {
      ...news,
      views: 0,
      comments: 0,
      date: new Date().toISOString().split('T')[0]
    }

    const { data, error } = await supabase
      .from('news')
      .insert(newsWithDefaults)
      .select()
      .single()
    
    if (error) {
      console.error('Error creating news:', error)
      return null
    }
    return data
  }
}

// Citation Management Functions
export const citationService = {
  // Get active citations
  async getActive(): Promise<Citation[]> {
    const { data, error } = await supabase
      .from('citations')
      .select('*')
      .in('status', ['Activa', 'Urgente'])
      .order('date', { ascending: true })
    
    if (error) {
      console.error('Error fetching citations:', error)
      return []
    }
    return data || []
  },

  // Create citation
  async create(citation: Omit<Citation, 'id' | 'created_at' | 'updated_at' | 'attendees'>): Promise<Citation | null> {
    const citationWithDefaults = {
      ...citation,
      attendees: 0
    }

    const { data, error } = await supabase
      .from('citations')
      .insert(citationWithDefaults)
      .select()
      .single()
    
    if (error) {
      console.error('Error creating citation:', error)
      return null
    }
    return data
  }
}

// Standings calculation function
export const calculateStandings = (matches: Match[]) => {
  const teams: { [key: string]: any } = {}
  
  // Initialize all teams
  const allTeams = new Set<string>()
  matches.forEach(match => {
    allTeams.add(match.home_team)
    allTeams.add(match.away_team)
  })
  
  allTeams.forEach(team => {
    teams[team] = {
      team,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      goalDifference: 0,
      points: 0
    }
  })
  
  // Process completed matches
  matches
    .filter(match => match.status === 'completed' && match.home_score !== null && match.away_score !== null)
    .forEach(match => {
      const homeTeam = teams[match.home_team]
      const awayTeam = teams[match.away_team]
      
      homeTeam.played++
      awayTeam.played++
      
      homeTeam.goalsFor += match.home_score!
      homeTeam.goalsAgainst += match.away_score!
      awayTeam.goalsFor += match.away_score!
      awayTeam.goalsAgainst += match.home_score!
      
      if (match.home_score! > match.away_score!) {
        // Home win
        homeTeam.won++
        homeTeam.points += 3
        awayTeam.lost++
      } else if (match.home_score! < match.away_score!) {
        // Away win
        awayTeam.won++
        awayTeam.points += 3
        homeTeam.lost++
      } else {
        // Draw
        homeTeam.drawn++
        awayTeam.drawn++
        homeTeam.points += 1
        awayTeam.points += 1
      }
    })
  
  // Calculate goal difference and sort
  Object.values(teams).forEach((team: any) => {
    team.goalDifference = team.goalsFor - team.goalsAgainst
    team.goals = `${team.goalsFor}:${team.goalsAgainst}`
  })
  
  return Object.values(teams)
    .sort((a: any, b: any) => {
      if (b.points !== a.points) return b.points - a.points
      if (b.goalDifference !== a.goalDifference) return b.goalDifference - a.goalDifference
      return b.goalsFor - a.goalsFor
    })
    .map((team: any, index) => ({
      position: index + 1,
      ...team
    }))
}