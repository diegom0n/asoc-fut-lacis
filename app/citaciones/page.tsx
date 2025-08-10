'use client'

import { useState, useEffect } from 'react'
import { Navbar } from '@/components/navbar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Calendar, Clock, MapPin, Users, Megaphone, AlertCircle, CheckCircle } from 'lucide-react'
import { citationService, type Citation } from '@/lib/supabase-admin'

const announcements = [
  {
    id: 1,
    title: 'Nuevo protocolo de citaciones',
    content: 'A partir del próximo mes, todas las citaciones se realizarán exclusivamente a través de la plataforma digital.',
    type: 'info',
    date: '2024-01-15',
  },
  {
    id: 2,
    title: 'Recordatorio: Documentación al día',
    content: 'Recordamos a todos los jugadores mantener su documentación deportiva actualizada para participar en las citaciones oficiales.',
    type: 'warning',
    date: '2024-01-12',
  },
]

export default function CitacionesPage() {
  const [citaciones, setCitaciones] = useState<Citation[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    loadCitaciones()
  }, [])

  const loadCitaciones = async () => {
    try {
      setLoading(true)
      const citacionesData = await citationService.getActive()
      setCitaciones(citacionesData)
    } catch (err) {
      setError('Error al cargar las citaciones')
      console.error('Error loading citations:', err)
    } finally {
      setLoading(false)
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200'
      case 'normal': return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'low': return 'bg-green-100 text-green-800 border-green-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Urgente': return 'destructive'
      case 'Activa': return 'default'
      case 'Confirmada': return 'secondary'
      default: return 'outline'
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="text-xl text-gray-600 dark:text-gray-400">Cargando citaciones...</div>
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
            Citaciones y Convocatorias
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Mantente informado sobre entrenamientos, convocatorias y reuniones importantes. 
            No te pierdas ninguna citación oficial de tu club.
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-8 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <p className="text-red-800 dark:text-red-200">{error}</p>
            <button 
              onClick={loadCitaciones}
              className="mt-2 text-red-600 dark:text-red-400 underline hover:no-underline"
            >
              Intentar de nuevo
            </button>
          </div>
        )}

        {/* Important Announcements */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Anuncios Importantes
          </h2>
          <div className="space-y-4">
            {announcements.map((announcement) => (
              <Alert key={announcement.id} className={announcement.type === 'warning' ? 'border-yellow-200 bg-yellow-50 dark:border-yellow-500 dark:bg-yellow-900' : 'border-blue-200 bg-blue-50 dark:border-blue-600 dark:bg-blue-900'}>
                {announcement.type === 'warning' ? 
                  <AlertCircle className="h-4 w-4" /> : 
                  <Megaphone className="h-4 w-4" />
                }
                <AlertDescription>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold mb-1">{announcement.title}</h3>
                      <p>{announcement.content}</p>
                    </div>
                    <span className="text-sm text-gray-500 ml-4 dark:text-white">
                      {new Date(announcement.date).toLocaleDateString('es-CL')}
                    </span>
                  </div>
                </AlertDescription>
              </Alert>
            ))}
          </div>
        </div>

        {/* Citaciones Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {citaciones.filter(c => c.status === 'Activa').length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Citaciones Activas
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2">
                {citaciones.filter(c => c.status === 'Urgente').length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Urgentes
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                {citaciones.reduce((sum, c) => sum + c.attendees, 0)}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Total Confirmados
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                {citaciones.filter(c => c.type === 'Entrenamiento').length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Entrenamientos
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Citaciones List */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Citaciones Activas
          </h2>
          
          {citaciones.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500 dark:text-gray-400">No hay citaciones activas en este momento.</p>
            </div>
          ) : (
            citaciones.map((citacion) => (
              <Card key={citacion.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <Badge variant={getStatusColor(citacion.status)}>
                          {citacion.status}
                        </Badge>
                        <Badge variant="outline">
                          {citacion.type}
                        </Badge>
                        <div className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(citacion.priority)}`}>
                          {citacion.priority === 'high' && 'Alta Prioridad'}
                          {citacion.priority === 'normal' && 'Prioridad Normal'}
                          {citacion.priority === 'low' && 'Baja Prioridad'}
                        </div>
                      </div>
                      <CardTitle className="text-xl">{citacion.title}</CardTitle>
                      <p className="text-sm text-gray-500 mt-1">{citacion.club}</p>
                    </div>
                    
                    <div className="text-right">
                      <div className="flex items-center text-sm text-gray-500 mb-1">
                        <Users className="h-4 w-4 mr-1" />
                        {citacion.attendees}/{citacion.max_attendees}
                      </div>
                      {citacion.status === 'Confirmada' && (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      )}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {citacion.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Calendar className="h-4 w-4 mr-2 text-blue-500" />
                      <span>
                        {new Date(citacion.date).toLocaleDateString('es-CL', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Clock className="h-4 w-4 mr-2 text-green-500" />
                      <span>{citacion.time} hrs</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <MapPin className="h-4 w-4 mr-2 text-red-500" />
                      <span>{citacion.venue}</span>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-between items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(citacion.attendees / citacion.max_attendees) * 100}%` }}
                      ></div>
                    </div>
                    <span className="ml-3 text-xs text-gray-500">
                      {Math.round((citacion.attendees / citacion.max_attendees) * 100)}%
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            ¿No encuentras tu citación?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Si no ves tu citación o tienes dudas sobre una convocatoria, 
            contacta directamente con tu entrenador o la administración del club.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Contactar Administración
            </button>
            <button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Notificar Problema
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}