'use client'

import { useParams } from 'next/navigation'
import { Navbar } from '@/components/navbar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Users, MapPin, Trophy, Calendar, ArrowLeft, Star, Award, History } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const clubsData = {
  'america': {
    id: 1,
    name: 'América',
    founded: 2025,
    category: 'Primera División',
    players: 99,
    location: 'La Cisterna',
    achievements: 99,
    colors: 'bg-white border-brand-neutral-900',
    logo: '/logos/clubs/américa.jpg',
    member: 2025,
    description: 'Club América es una institución deportiva con gran tradición en La Cisterna, conocido por su juego ofensivo y su compromiso con el desarrollo de jóvenes talentos.',
    history: 'Fundado en 2025, el Club América ha sido una pieza fundamental en el desarrollo del fútbol local. Con una filosofía basada en el juego limpio y la formación integral de sus jugadores.',
    achievements_detail: [
      'Campeón Torneo Local 2024',
      'Subcampeón Copa La Cisterna 2023',
      'Mejor Defensa Temporada 2023'
    ],
    recent_matches: [
      { opponent: 'C.D American', result: '2-1', date: '2024-01-15', type: 'Victoria' },
      { opponent: 'Carlos Muñoz', result: '1-1', date: '2024-01-08', type: 'Empate' },
      { opponent: 'Cachavacha', result: '3-0', date: '2024-01-01', type: 'Victoria' }
    ],
    staff: [
      { name: 'Juan Pérez', role: 'Director Técnico' },
      { name: 'María González', role: 'Preparador Físico' },
      { name: 'Carlos Mendoza', role: 'Entrenador de Arqueros' }
    ]
  },
  'cd-american': {
    id: 2,
    name: 'C.D American',
    founded: 2025,
    category: 'Primera División',
    players: 99,
    location: 'La Cisterna',
    achievements: 99,
    colors: 'bg-brand-neutral-900',
    logo: '/logos/clubs/american.jpg',
    member: 2025,
    description: 'C.D American se caracteriza por su disciplina táctica y su fuerte identidad de club, siendo uno de los equipos más respetados de la asociación.',
    history: 'Con una rica historia desde su fundación, C.D American ha mantenido siempre los valores del deporte y la competencia sana.',
    achievements_detail: [
      'Campeón Copa Asociación 2023',
      'Mejor Ataque Temporada 2024',
      'Fair Play Award 2023'
    ],
    recent_matches: [
      { opponent: 'América', result: '1-2', date: '2024-01-15', type: 'Derrota' },
      { opponent: 'Cultural Uruguay', result: '2-0', date: '2024-01-08', type: 'Victoria' },
      { opponent: 'Gremio', result: '1-1', date: '2024-01-01', type: 'Empate' }
    ],
    staff: [
      { name: 'Roberto Silva', role: 'Director Técnico' },
      { name: 'Ana Rodríguez', role: 'Asistente Técnico' },
      { name: 'Luis Morales', role: 'Preparador Físico' }
    ]
  }
  // Add more clubs as needed
}

export default function ClubPage() {
  const params = useParams()
  const slug = params.slug as string
  const [club, setClub] = useState<any>(null)

  useEffect(() => {
    // In a real app, you'd fetch from your database
    const clubData = clubsData[slug as keyof typeof clubsData]
    if (clubData) {
      setClub(clubData)
    }
  }, [slug])

  if (!club) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Club no encontrado
            </h1>
            <Link href="/clubes">
              <Button>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Volver a Clubes
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/clubes">
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver a Clubes
            </Button>
          </Link>
        </div>

        {/* Club Header */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            <div className={`w-32 h-32 ${club.colors} rounded-full flex items-center justify-center relative overflow-hidden`}>
              {club.logo ? (
                <Image
                  src={club.logo}
                  alt={`${club.name} logo`}
                  fill
                  sizes="128px"
                  className="object-contain"
                  priority
                />
              ) : (
                <span className="text-white font-bold text-4xl">
                  {club.name.split(' ').map((word: string) => word[0]).join('').slice(0, 2)}
                </span>
              )}
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {club.name}
              </h1>
              <Badge variant="outline" className="mb-4">
                {club.category}
              </Badge>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
                {club.description}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {club.founded}
                  </div>
                  <div className="text-sm text-gray-500">Fundado</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                    {club.players}
                  </div>
                  <div className="text-sm text-gray-500">Jugadores</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                    {club.achievements}
                  </div>
                  <div className="text-sm text-gray-500">Títulos</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                    {club.member}
                  </div>
                  <div className="text-sm text-gray-500">Miembro desde</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* History */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <History className="h-5 w-5 mr-2" />
                  Historia del Club
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  {club.history}
                </p>
              </CardContent>
            </Card>

            {/* Recent Matches */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="h-5 w-5 mr-2" />
                  Últimos Partidos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {club.recent_matches.map((match: any, index: number) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Badge variant={
                          match.type === 'Victoria' ? 'default' : 
                          match.type === 'Empate' ? 'secondary' : 'destructive'
                        }>
                          {match.type}
                        </Badge>
                        <span className="font-medium">vs {match.opponent}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg">{match.result}</div>
                        <div className="text-sm text-gray-500">{match.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="h-5 w-5 mr-2" />
                  Logros Destacados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {club.achievements_detail.map((achievement: string, index: number) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Staff */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Cuerpo Técnico
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {club.staff.map((member: any, index: number) => (
                    <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-3 last:border-b-0">
                      <div className="font-medium text-gray-900 dark:text-white">
                        {member.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {member.role}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Información de Contacto
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium">Ubicación:</span>
                    <br />
                    {club.location}
                  </div>
                  <div>
                    <span className="font-medium">Entrenamientos:</span>
                    <br />
                    Martes y Jueves 19:00 hrs
                  </div>
                  <div>
                    <span className="font-medium">Contacto:</span>
                    <br />
                    +56 9 XXXX XXXX
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}