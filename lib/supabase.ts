import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Club {
  id: number
  name: string
  founded: number
  category: string
  players: number
  location: string
  achievements: number
  colors: string
  created_at?: string
  updated_at?: string
}

export interface News {
  id: number
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

export interface Match {
  id: number
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

export interface Citation {
  id: number
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

// Database functions
export const clubsService = {
  async getAll(): Promise<Club[]> {
    const { data, error } = await supabase
      .from('clubs')
      .select('*')
      .order('name')
    
    if (error) throw error
    return data || []
  },

  async getById(id: number): Promise<Club | null> {
    const { data, error } = await supabase
      .from('clubs')
      .select('*')
      .eq('id', id)
      .single()
    
    if (error) throw error
    return data
  },

  async create(club: Omit<Club, 'id' | 'created_at' | 'updated_at'>): Promise<Club> {
    const { data, error } = await supabase
      .from('clubs')
      .insert(club)
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  async update(id: number, updates: Partial<Club>): Promise<Club> {
    const { data, error } = await supabase
      .from('clubs')
      .update(updates)
      .eq('id', id)
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  async delete(id: number): Promise<void> {
    const { error } = await supabase
      .from('clubs')
      .delete()
      .eq('id', id)
    
    if (error) throw error
  }
}

export const newsService = {
  async getAll(): Promise<News[]> {
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .order('date', { ascending: false })
    
    if (error) throw error
    return data || []
  },

  async getFeatured(): Promise<News[]> {
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .eq('featured', true)
      .order('date', { ascending: false })
      .limit(3)
    
    if (error) throw error
    return data || []
  },

  async getByCategory(category: string): Promise<News[]> {
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .eq('category', category)
      .order('date', { ascending: false })
    
    if (error) throw error
    return data || []
  }
}

export const matchesService = {
  async getUpcoming(): Promise<Match[]> {
    const { data, error } = await supabase
      .from('matches')
      .select('*')
      .eq('status', 'upcoming')
      .order('date', { ascending: true })
    
    if (error) throw error
    return data || []
  },

  async getRecent(): Promise<Match[]> {
    const { data, error } = await supabase
      .from('matches')
      .select('*')
      .eq('status', 'completed')
      .order('date', { ascending: false })
      .limit(10)
    
    if (error) throw error
    return data || []
  }
}

export const citationsService = {
  async getActive(): Promise<Citation[]> {
    const { data, error } = await supabase
      .from('citations')
      .select('*')
      .in('status', ['Activa', 'Urgente'])
      .order('date', { ascending: true })
    
    if (error) throw error
    return data || []
  },

  async getByClub(clubName: string): Promise<Citation[]> {
    const { data, error } = await supabase
      .from('citations')
      .select('*')
      .eq('club', clubName)
      .order('date', { ascending: true })
    
    if (error) throw error
    return data || []
  }
}