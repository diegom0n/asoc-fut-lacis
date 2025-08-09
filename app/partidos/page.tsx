'use client'

import { useState, useEffect } from 'react'
import { Navbar } from '@/components/navbar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, MapPin, Trophy, Users } from 'lucide-react'
import { matchService, calculateStandings, type Match } from '@/lib/supabase-admin'

const categories = [
  'Todas las Categorías',
  'Categoría 1',
  'Categoría 2', 
  'Categoría 3',
  'Categoría 4',
  'Categoría 5'
]

export default function PartidosPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todas las Categorías')
  const [upcomingMatches, setUpcomingMatches] = useState<Match[]>([])
  const [recentResults, setRecentResults] = useState<Match[]>([])
  const [standings, setStandings] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      setLoading(true)
      
      // Load upcoming matches
      const upcoming = await matchService.getUpcoming()
      setUpcomingMatches(upcoming)
      
      // Load recent results
      const recent = await matchService.getRecent()
      setRecentResults(recent)
      
      // Calculate standings from all completed matches
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

  const filterByCategory = (matches: any[]) => {
    if (selectedCategory === 'Todas las Categorías') {
      return matches
    }
    return matches.filter(match => match.division === selectedCategory)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="text-xl text-gray-600 dark:text-gray-400">Cargando partidos...</div>
          </div>
        </div>
      </div>
    )
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

        {/* Error Message */}
        {error && (
          <div className="mb-8 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <p className="text-red-800 dark:text-red-200">{error}</p>
            <button 
              onClick={loadData}
              className="mt-2 text-red-600 dark:text-red-400 underline hover:no-underline"
            >
              Intentar de nuevo
            </button>
          </div>
        )}

        <Tabs defaultValue="proximos" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="proximos">Próximos Partidos</TabsTrigger>
            <TabsTrigger value="resultados">Resultados</TabsTrigger>
            <TabsTrigger value="tabla">Tabla de Posiciones</TabsTrigger>
          </TabsList>

          {/* Upcoming Matches */}
          <TabsContent value="proximos" className="space-y-6">
            <div className="grid gap-6">
              {filterByCategory(upcomingMatches).length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500 dark:text-gray-400">No hay partidos próximos programados.</p>
                </div>
              ) : (
              {filterByCategory(upcomingMatches).map((match) => (
                <Card key={match.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{match.division}</Badge>
                      {match.matchday && <Badge variant="secondary">{match.matchday}</Badge>}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-center flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {match.home_team}
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
                          {match.away_team}
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
                        {match.time || 'Por confirmar'}
                      </div>
                      <div className="flex items-center justify-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {match.venue}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              )}
            </div>
          </TabsContent>

          {/* Recent Results */}
          <TabsContent value="resultados" className="space-y-6">
            <div className="grid gap-6">
              {filterByCategory(recentResults).length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500 dark:text-gray-400">No hay resultados recientes disponibles.</p>
                </div>
              ) : (
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
                          {result.home_team}
                        </h3>
                        <p className="text-sm text-gray-500">Local</p>
                      </div>
                      
                      <div className="text-center px-6">
                        <div className="text-3xl font-bold text-gray-900 dark:text-white">
                          {result.home_score} - {result.away_score}
                        </div>
                      </div>
                      
                      <div className="text-center flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {result.away_team}
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
              )}
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
                    {standings.length === 0 ? (
                      <tbody>
                        <tr>
                          <td colSpan={8} className="text-center py-8 text-gray-500 dark:text-gray-400">
                            No hay datos suficientes para generar la tabla de posiciones.
                          </td>
                        </tr>
                      </tbody>
                    ) : (
                    <>
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
                    </>
                    )}
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