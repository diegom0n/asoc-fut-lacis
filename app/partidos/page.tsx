'use client'

import { Navbar } from '@/components/navbar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, MapPin, Trophy, Users } from 'lucide-react'
import { useState } from 'react'

const categories = [
  'Todas las Categorías',
  'Categoría 1',
  'Categoría 2', 
  'Categoría 3',
  'Categoría 4',
  'Categoría 5'
]

const upcomingMatches = [
  {
    id: 1,
    homeTeam: 'América',
    awayTeam: 'C.D American',
    date: '2024-01-20',
    time: '15:30',
    venue: 'Estadio Municipal La Cisterna',
    division: 'Categoría 1',
    matchday: 'Fecha 12',
  },
  {
    id: 2,
    homeTeam: 'Carlos Muñoz',
    awayTeam: 'Cachavacha',
    date: '2024-01-21',
    time: '11:00',
    venue: 'Cancha Norte',
    division: 'Categoría 2',
    matchday: 'Fecha 12',
  },
  {
    id: 3,
    homeTeam: 'Cultural Renacer',
    awayTeam: 'Cultural Uruguay',
    date: '2024-01-21',
    time: '13:30',
    venue: 'Complejo Sur',
    division: 'Categoría 1',
    matchday: 'Fecha 12',
  },
  {
    id: 4,
    homeTeam: 'FC La Burgueño',
    awayTeam: 'Gremio',
    date: '2024-01-22',
    time: '16:00',
    venue: 'Estadio La Burgueño',
    division: 'Categoría 3',
    matchday: 'Fecha 12',
  },
  {
    id: 5,
    homeTeam: 'Juventud Brasil',
    awayTeam: 'Real Lo Espejo',
    date: '2024-01-22',
    time: '18:30',
    venue: 'Complejo Brasil',
    division: 'Categoría 4',
    matchday: 'Fecha 12',
  },
]

const recentResults = [
  {
    id: 1,
    homeTeam: 'FC La Burgueño',
    awayTeam: 'Gremio',
    homeScore: 3,
    awayScore: 1,
    date: '2024-01-14',
    venue: 'Estadio Municipal La Cisterna',
    division: 'Categoría 1',
  },
  {
    id: 2,
    homeTeam: 'Gremio 2010',
    awayTeam: 'Juventud Brasil',
    homeScore: 2,
    awayScore: 2,
    date: '2024-01-13',
    venue: 'Cancha Municipal',
    division: 'Categoría 2',
  },
  {
    id: 3,
    homeTeam: 'Real Lo Espejo',
    awayTeam: 'Unión Salas',
    homeScore: 1,
    awayScore: 0,
    date: '2024-01-12',
    venue: 'Estadio Lo Espejo',
    division: 'Categoría 3',
  },
  {
    id: 4,
    homeTeam: 'Cachavacha',
    awayTeam: 'Cultural Renacer',
    homeScore: 2,
    awayScore: 1,
    date: '2024-01-11',
    venue: 'Estadio Cachavacha',
    division: 'Categoría 4',
  },
  {
    id: 5,
    homeTeam: 'América',
    awayTeam: 'Carlos Muñoz',
    homeScore: 4,
    awayScore: 0,
    date: '2024-01-10',
    venue: 'Estadio América',
    division: 'Categoría 5',
  },
]

const standings = [
  { position: 1, team: 'América', played: 11, won: 8, drawn: 2, lost: 1, goals: '24:8', points: 26 },
  { position: 2, team: 'C.D American', played: 11, won: 7, drawn: 3, lost: 1, goals: '21:10', points: 24 },
  { position: 3, team: 'Carlos Muñoz', played: 11, won: 6, drawn: 3, lost: 2, goals: '18:12', points: 21 },
  { position: 4, team: 'Cachavacha', played: 11, won: 5, drawn: 4, lost: 2, goals: '16:13', points: 19 },
  { position: 5, team: 'Cultural Renacer', played: 11, won: 4, drawn: 2, lost: 5, goals: '14:16', points: 14 },
  { position: 6, team: 'Cultural Uruguay', played: 11, won: 2, drawn: 3, lost: 6, goals: '9:18', points: 9 },
  { position: 7, team: 'FC La Burgueño', played: 11, won: 3, drawn: 1, lost: 7, goals: '12:20', points: 10 },
  { position: 8, team: 'Gremio', played: 11, won: 2, drawn: 4, lost: 5, goals: '10:15', points: 10 },
  { position: 9, team: 'Gremio 2010', played: 11, won: 2, drawn: 2, lost: 7, goals: '8:19', points: 8 },
  { position: 10, team: 'Juventud Brasil', played: 11, won: 1, drawn: 3, lost: 7, goals: '7:17', points: 6 },
  { position: 11, team: 'Real Lo Espejo', played: 11, won: 1, drawn: 2, lost: 8, goals: '6:20', points: 5 },
  { position: 12, team: 'Unión Salas', played: 11, won: 0, drawn: 4, lost: 7, goals: '5:18', points: 4 },
]

export default function PartidosPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todas las Categorías')

  const filterByCategory = (matches: any[]) => {
    if (selectedCategory === 'Todas las Categorías') {
      return matches
    }
    return matches.filter(match => match.division === selectedCategory)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Partidos y Resultados
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Consulta el calendario de partidos, resultados recientes y la tabla de posiciones 
            de todas las divisiones de nuestra asociación.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Filtrar por Categoría
          </h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-200"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <Tabs defaultValue="proximos" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="proximos">Próximos Partidos</TabsTrigger>
            <TabsTrigger value="resultados">Resultados</TabsTrigger>
            <TabsTrigger value="tabla">Tabla de Posiciones</TabsTrigger>
          </TabsList>

          {/* Upcoming Matches */}
          <TabsContent value="proximos" className="space-y-6">
            <div className="grid gap-6">
              {filterByCategory(upcomingMatches).map((match) => (
                <Card key={match.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{match.division}</Badge>
                      <Badge variant="secondary">{match.matchday}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-center flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {match.homeTeam}
                        </h3>
                        <p className="text-sm text-gray-500">Local</p>
                      </div>
                      
                      <div className="text-center px-4">
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                          VS
                        </div>
                      </div>
                      
                      <div className="text-center flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {match.awayTeam}
                        </h3>
                        <p className="text-sm text-gray-500">Visitante</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center justify-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {new Date(match.date).toLocaleDateString('es-CL')}
                      </div>
                      <div className="flex items-center justify-center">
                        <Clock className="h-4 w-4 mr-2" />
                        {match.time}
                      </div>
                      <div className="flex items-center justify-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {match.venue}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Recent Results */}
          <TabsContent value="resultados" className="space-y-6">
            <div className="grid gap-6">
              {filterByCategory(recentResults).map((result) => (
                <Card key={result.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{result.division}</Badge>
                      <Badge variant="secondary">
                        {new Date(result.date).toLocaleDateString('es-CL')}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-center flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {result.homeTeam}
                        </h3>
                        <p className="text-sm text-gray-500">Local</p>
                      </div>
                      
                      <div className="text-center px-6">
                        <div className="text-3xl font-bold text-gray-900 dark:text-white">
                          {result.homeScore} - {result.awayScore}
                        </div>
                      </div>
                      
                      <div className="text-center flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {result.awayTeam}
                        </h3>
                        <p className="text-sm text-gray-500">Visitante</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center text-sm text-gray-600 dark:text-gray-400">
                      <MapPin className="h-4 w-4 mr-2" />
                      {result.venue}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Standings Table */}
          <TabsContent value="tabla" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="h-5 w-5 mr-2" />
                  {selectedCategory === 'Todas las Categorías' ? 'Todas las Categorías' : selectedCategory} - Tabla de Posiciones
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-3 px-2 font-semibold text-gray-900 dark:text-white">#</th>
                        <th className="text-left py-3 px-2 font-semibold text-gray-900 dark:text-white">Equipo</th>
                        <th className="text-center py-3 px-2 font-semibold text-gray-900 dark:text-white">PJ</th>
                        <th className="text-center py-3 px-2 font-semibold text-gray-900 dark:text-white">G</th>
                        <th className="text-center py-3 px-2 font-semibold text-gray-900 dark:text-white">E</th>
                        <th className="text-center py-3 px-2 font-semibold text-gray-900 dark:text-white">P</th>
                        <th className="text-center py-3 px-2 font-semibold text-gray-900 dark:text-white">GF:GC</th>
                        <th className="text-center py-3 px-2 font-semibold text-gray-900 dark:text-white">Pts</th>
                      </tr>
                    </thead>
                    <tbody>
                      {standings.map((team) => (
                        <tr key={team.position} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800">
                          <td className="py-3 px-2">
                            <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${
                              team.position <= 3 ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                            }`}>
                              {team.position}
                            </span>
                          </td>
                          <td className="py-3 px-2 font-medium text-gray-900 dark:text-white">
                            {team.team}
                          </td>
                          <td className="py-3 px-2 text-center text-gray-600 dark:text-gray-400">
                            {team.played}
                          </td>
                          <td className="py-3 px-2 text-center text-green-600 dark:text-green-400">
                            {team.won}
                          </td>
                          <td className="py-3 px-2 text-center text-yellow-600 dark:text-yellow-400">
                            {team.drawn}
                          </td>
                          <td className="py-3 px-2 text-center text-red-600 dark:text-red-400">
                            {team.lost}
                          </td>
                          <td className="py-3 px-2 text-center text-gray-600 dark:text-gray-400">
                            {team.goals}
                          </td>
                          <td className="py-3 px-2 text-center font-bold text-blue-600 dark:text-blue-400">
                            {team.points}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}