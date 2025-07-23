/*
  # Initial Schema for AFC La Cisterna

  1. New Tables
    - `clubs` - Football clubs in the association
    - `news` - News articles and updates
    - `matches` - Football matches (upcoming and completed)
    - `citations` - Training citations and announcements

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access
    - Add policies for authenticated admin access
*/

-- Create clubs table
CREATE TABLE IF NOT EXISTS clubs (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  founded INTEGER NOT NULL DEFAULT 2024,
  category TEXT NOT NULL DEFAULT 'Primera División',
  players INTEGER NOT NULL DEFAULT 0,
  location TEXT NOT NULL DEFAULT 'La Cisterna',
  achievements INTEGER NOT NULL DEFAULT 0,
  colors TEXT NOT NULL DEFAULT 'bg-blue-500',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create news table
CREATE TABLE IF NOT EXISTS news (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  summary TEXT NOT NULL,
  content TEXT,
  category TEXT NOT NULL,
  author TEXT NOT NULL,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  views INTEGER NOT NULL DEFAULT 0,
  comments INTEGER NOT NULL DEFAULT 0,
  featured BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create matches table
CREATE TABLE IF NOT EXISTS matches (
  id SERIAL PRIMARY KEY,
  home_team TEXT NOT NULL,
  away_team TEXT NOT NULL,
  home_score INTEGER,
  away_score INTEGER,
  date DATE NOT NULL,
  time TIME,
  venue TEXT NOT NULL,
  division TEXT NOT NULL DEFAULT 'Primera División',
  matchday TEXT,
  status TEXT NOT NULL DEFAULT 'upcoming' CHECK (status IN ('upcoming', 'completed', 'live')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create citations table
CREATE TABLE IF NOT EXISTS citations (
  id SERIAL PRIMARY KEY,
  type TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  club TEXT NOT NULL,
  date DATE NOT NULL,
  time TIME NOT NULL,
  venue TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'Activa',
  priority TEXT NOT NULL DEFAULT 'normal' CHECK (priority IN ('high', 'normal', 'low')),
  attendees INTEGER NOT NULL DEFAULT 0,
  max_attendees INTEGER NOT NULL DEFAULT 25,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE clubs ENABLE ROW LEVEL SECURITY;
ALTER TABLE news ENABLE ROW LEVEL SECURITY;
ALTER TABLE matches ENABLE ROW LEVEL SECURITY;
ALTER TABLE citations ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Public can read clubs"
  ON clubs
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Public can read news"
  ON news
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Public can read matches"
  ON matches
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Public can read citations"
  ON citations
  FOR SELECT
  TO public
  USING (true);

-- Create policies for authenticated users (admins) to manage data
CREATE POLICY "Authenticated users can manage clubs"
  ON clubs
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can manage news"
  ON news
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can manage matches"
  ON matches
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can manage citations"
  ON citations
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Insert initial club data
INSERT INTO clubs (name, founded, category, players, location, achievements, colors) VALUES
  ('América', 9999, 'Primera División', 99, 'La Cisterna', 99, 'bg-pink-500'),
  ('C.D American', 9999, 'Primera División', 99, 'La Cisterna', 99, 'bg-green-500'),
  ('Carlos Muñoz', 9999, 'Primera División', 99, 'La Cisterna', 99, 'bg-orange-500'),
  ('Cachavacha', 9999, 'Primera División', 99, 'La Cisterna', 99, 'bg-blue-500'),
  ('Cultural Renacer', 9999, 'Primera División', 99, 'La Cisterna', 99, 'bg-red-500'),
  ('Cultural Uruguay', 9999, 'Primera División', 99, 'La Cisterna', 99, 'bg-cyan-500'),
  ('FC La Burgueño', 9999, 'Primera División', 99, 'La Cisterna', 99, 'bg-yellow-500'),
  ('Gremio', 9999, 'Primera División', 99, 'La Cisterna', 99, 'bg-purple-500'),
  ('Gremio 2010', 9999, 'Primera División', 99, 'La Cisterna', 99, 'bg-rose-500'),
  ('Juventud Brasil', 9999, 'Primera División', 99, 'La Cisterna', 99, 'bg-teal-500'),
  ('Real Lo Espejo', 9999, 'Primera División', 99, 'La Cisterna', 99, 'bg-lime-500'),
  ('Unión Salas', 9999, 'Primera División', 99, 'La Cisterna', 99, 'bg-indigo-500')
ON CONFLICT (name) DO NOTHING;

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_clubs_updated_at BEFORE UPDATE ON clubs FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_news_updated_at BEFORE UPDATE ON news FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_matches_updated_at BEFORE UPDATE ON matches FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_citations_updated_at BEFORE UPDATE ON citations FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();