'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Calendar, Plus, Edit, Trash2, Users, FileText, Trophy, Megaphone } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert'

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('matches')
  const [showSuccess, setShowSuccess] = useState(false)

  // Match Form State
  const [matchForm, setMatchForm] = useState({
    homeTeam: '',
    awayTeam: '',
    date: '',
    time: '',
    venue: 'Estadio Municipal La Cisterna',
    division: 'Primera División',
    matchday: '',
    status: 'upcoming'
  })

  // News Form State
  const [newsForm, setNewsForm] = useState({
    title: '',
    summary: '',
    content: '',
    category: 'Resultados',
    author: '',
    featured: false
  })

  // Citation Form State
  const [citationForm, setCitationForm] = useState({
    type: 'Entrenamiento',
    title: '',
    description: '',
    club: '',
    date: '',
    time: '',
    venue: '',
    priority: 'normal',
    maxAttendees: 25
  })

  const clubs = [
    'América', 'C.D American', 'Carlos Muñoz', 'Cachavacha',
    'Cultural Renacer', 'Cultural Uruguay', 'FC La Burgueño',
    'Gremio', 'Gremio 2010', 'Juventud Brasil', 'Real Lo Espejo', 'Unión Salas'
  ]

  const handleMatchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend/Supabase
    console.log('Match submitted:', matchForm)
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
    // Reset form
    setMatchForm({
      homeTeam: '',
      awayTeam: '',
      date: '',
      time: '',
      venue: 'Estadio Municipal La Cisterna',
      division: 'Primera División',
      matchday: '',
      status: 'upcoming'
    })
  }

  const handleNewsSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('News submitted:', newsForm)
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
    setNewsForm({
      title: '',
      summary: '',
      content: '',
      category: 'Resultados',
      author: '',
      featured: false
    })
  }

  const handleCitationSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Citation submitted:', citationForm)
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
    setCitationForm({
      type: 'Entrenamiento',
      title: '',
      description: '',
      club: '',
      date: '',
      time: '',
      venue: '',
      priority: 'normal',
      maxAttendees: 25
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Panel de Administración
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Gestiona partidos, noticias y citaciones de la asociación
          </p>
        </div>

        {/* Success Alert */}
        {showSuccess && (
          <Alert className="mb-6 border-green-200 bg-green-50 dark:border-green-500 dark:bg-green-900">
            <AlertDescription className="text-green-800 dark:text-green-200">
              ¡Contenido guardado exitosamente!
            </AlertDescription>
          </Alert>
        )}

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="matches" className="flex items-center">
              <Trophy className="h-4 w-4 mr-2" />
              Partidos
            </TabsTrigger>
            <TabsTrigger value="news" className="flex items-center">
              <FileText className="h-4 w-4 mr-2" />
              Noticias
            </TabsTrigger>
            <TabsTrigger value="citations" className="flex items-center">
              <Megaphone className="h-4 w-4 mr-2" />
              Citaciones
            </TabsTrigger>
          </TabsList>

          {/* Matches Tab */}
          <TabsContent value="matches" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Plus className="h-5 w-5 mr-2" />
                  Agregar Nuevo Partido
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleMatchSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="homeTeam">Equipo Local</Label>
                      <Select value={matchForm.homeTeam} onValueChange={(value) => setMatchForm({...matchForm, homeTeam: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar equipo local" />
                        </SelectTrigger>
                        <SelectContent>
                          {clubs.map((club) => (
                            <SelectItem key={club} value={club}>{club}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="awayTeam">Equipo Visitante</Label>
                      <Select value={matchForm.awayTeam} onValueChange={(value) => setMatchForm({...matchForm, awayTeam: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar equipo visitante" />
                        </SelectTrigger>
                        <SelectContent>
                          {clubs.map((club) => (
                            <SelectItem key={club} value={club}>{club}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="date">Fecha</Label>
                      <Input
                        id="date"
                        type="date"
                        value={matchForm.date}
                        onChange={(e) => setMatchForm({...matchForm, date: e.target.value})}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="time">Hora</Label>
                      <Input
                        id="time"
                        type="time"
                        value={matchForm.time}
                        onChange={(e) => setMatchForm({...matchForm, time: e.target.value})}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="venue">Venue</Label>
                      <Input
                        id="venue"
                        value={matchForm.venue}
                        onChange={(e) => setMatchForm({...matchForm, venue: e.target.value})}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="division">División</Label>
                      <Select value={matchForm.division} onValueChange={(value) => setMatchForm({...matchForm, division: value})}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Primera División">Primera División</SelectItem>
                          <SelectItem value="Segunda División">Segunda División</SelectItem>
                          <SelectItem value="Tercera División">Tercera División</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="matchday">Fecha del Torneo</Label>
                      <Input
                        id="matchday"
                        placeholder="ej: Fecha 12"
                        value={matchForm.matchday}
                        onChange={(e) => setMatchForm({...matchForm, matchday: e.target.value})}
                      />
                    </div>

                    <div>
                      <Label htmlFor="status">Estado</Label>
                      <Select value={matchForm.status} onValueChange={(value) => setMatchForm({...matchForm, status: value})}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="upcoming">Próximo</SelectItem>
                          <SelectItem value="live">En Vivo</SelectItem>
                          <SelectItem value="completed">Completado</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button type="submit" className="w-full">
                    <Plus className="h-4 w-4 mr-2" />
                    Crear Partido
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* News Tab */}
          <TabsContent value="news" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Plus className="h-5 w-5 mr-2" />
                  Agregar Nueva Noticia
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleNewsSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="title">Título</Label>
                    <Input
                      id="title"
                      value={newsForm.title}
                      onChange={(e) => setNewsForm({...newsForm, title: e.target.value})}
                      placeholder="Título de la noticia"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="summary">Resumen</Label>
                    <Textarea
                      id="summary"
                      value={newsForm.summary}
                      onChange={(e) => setNewsForm({...newsForm, summary: e.target.value})}
                      placeholder="Resumen breve de la noticia"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="content">Contenido Completo</Label>
                    <Textarea
                      id="content"
                      value={newsForm.content}
                      onChange={(e) => setNewsForm({...newsForm, content: e.target.value})}
                      placeholder="Contenido completo de la noticia"
                      rows={8}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="category">Categoría</Label>
                      <Select value={newsForm.category} onValueChange={(value) => setNewsForm({...newsForm, category: value})}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Resultados">Resultados</SelectItem>
                          <SelectItem value="Administración">Administración</SelectItem>
                          <SelectItem value="Infraestructura">Infraestructura</SelectItem>
                          <SelectItem value="Capacitación">Capacitación</SelectItem>
                          <SelectItem value="Social">Social</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="author">Autor</Label>
                      <Input
                        id="author"
                        value={newsForm.author}
                        onChange={(e) => setNewsForm({...newsForm, author: e.target.value})}
                        placeholder="Nombre del autor"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="featured"
                      checked={newsForm.featured}
                      onChange={(e) => setNewsForm({...newsForm, featured: e.target.checked})}
                      className="rounded"
                    />
                    <Label htmlFor="featured">Marcar como noticia destacada</Label>
                  </div>

                  <Button type="submit" className="w-full">
                    <Plus className="h-4 w-4 mr-2" />
                    Publicar Noticia
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Citations Tab */}
          <TabsContent value="citations" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Plus className="h-5 w-5 mr-2" />
                  Agregar Nueva Citación
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCitationSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="type">Tipo de Citación</Label>
                      <Select value={citationForm.type} onValueChange={(value) => setCitationForm({...citationForm, type: value})}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Entrenamiento">Entrenamiento</SelectItem>
                          <SelectItem value="Convocatoria">Convocatoria</SelectItem>
                          <SelectItem value="Reunión">Reunión</SelectItem>
                          <SelectItem value="Evento">Evento</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="club">Club</Label>
                      <Select value={citationForm.club} onValueChange={(value) => setCitationForm({...citationForm, club: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar club" />
                        </SelectTrigger>
                        <SelectContent>
                          {clubs.map((club) => (
                            <SelectItem key={club} value={club}>{club}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="citationTitle">Título</Label>
                    <Input
                      id="citationTitle"
                      value={citationForm.title}
                      onChange={(e) => setCitationForm({...citationForm, title: e.target.value})}
                      placeholder="Título de la citación"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="description">Descripción</Label>
                    <Textarea
                      id="description"
                      value={citationForm.description}
                      onChange={(e) => setCitationForm({...citationForm, description: e.target.value})}
                      placeholder="Descripción detallada de la citación"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <Label htmlFor="citationDate">Fecha</Label>
                      <Input
                        id="citationDate"
                        type="date"
                        value={citationForm.date}
                        onChange={(e) => setCitationForm({...citationForm, date: e.target.value})}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="citationTime">Hora</Label>
                      <Input
                        id="citationTime"
                        type="time"
                        value={citationForm.time}
                        onChange={(e) => setCitationForm({...citationForm, time: e.target.value})}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="priority">Prioridad</Label>
                      <Select value={citationForm.priority} onValueChange={(value) => setCitationForm({...citationForm, priority: value})}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Baja</SelectItem>
                          <SelectItem value="normal">Normal</SelectItem>
                          <SelectItem value="high">Alta</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="citationVenue">Lugar</Label>
                      <Input
                        id="citationVenue"
                        value={citationForm.venue}
                        onChange={(e) => setCitationForm({...citationForm, venue: e.target.value})}
                        placeholder="Lugar de la citación"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="maxAttendees">Máximo de Asistentes</Label>
                      <Input
                        id="maxAttendees"
                        type="number"
                        value={citationForm.maxAttendees}
                        onChange={(e) => setCitationForm({...citationForm, maxAttendees: parseInt(e.target.value)})}
                        min="1"
                        max="50"
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full">
                    <Plus className="h-4 w-4 mr-2" />
                    Crear Citación
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}