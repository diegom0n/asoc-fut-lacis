import Image from 'next/image'
import { Navbar } from '@/components/navbar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Users, MapPin, Trophy, Calendar } from 'lucide-react'

const clubs = [
  {
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
  },
  {
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
  },
  {
    id: 3,
    name: 'Carlos Muñoz',
    founded: 2025,
    category: 'Primera División',
    players: 99,
    location: 'La Cisterna',
    achievements: 99,
    colors: 'bg-brand-neutral-100',
    logo: '/logos/clubs/carlos muñoz.jpg',
    member: 2025,
  },
  {
    id: 4,
    name: 'Cachavacha',
    founded: 2025,
    category: 'Primera División',
    players: 99,
    location: 'La Cisterna',
    achievements: 99,
    colors: 'bg-blue-500',
    logo: '/logos/clubs/cachavacha.jpg',
    member: 2025,
  },
  {
    id: 5,
    name: 'Cultural Renacer',
    founded: 2025,
    category: 'Primera División',
    players: 99,
    location: 'La Cisterna',
    achievements: 99,
    colors: 'bg-brand-neutral-900',
    logo: '/logos/clubs/renacer.jpg',
    member: 2025,
  },
  {
    id: 6,
    name: 'Cultural Uruguay',
    founded: '1 de enero de 1945',
    category: 'Primera División',
    players: 99,
    location: 'La Cisterna',
    achievements: 99,
    colors: 'bg-cyan-500',
    logo: '/logos/clubs/uruguay.png',
    member: 2025,
  },
  {
    id: 7,
    name: 'FC La Burgueño',
    founded: 2025,
    category: 'Primera División',
    players: 99,
    location: 'La Cisterna',
    achievements: 99,
    colors: 'bg-brand-neutral-900',
    logo: '/logos/clubs/fc la burgueño.jpg',
    member: 2025,
  },
  {
    id: 8,
    name: 'Gremio',
    founded: 2025,
    category: 'Primera División',
    players: 99,
    location: 'La Cisterna',
    achievements: 99,
    colors: 'bg-brand-neutral-900',
    logo: '/logos/clubs/gremio.jpg',
    member: 2025,
  },
  {
    id: 9,
    name: 'Gremio 2010',
    founded: 2025,
    category: 'Primera División',
    players: 99,
    location: 'La Cisterna',
    achievements: 99,
    colors: 'bg-brand-neutral-900',
    logo: '/logos/clubs/gremio 2010.jpg',
    member: 2025,
  },
  {
    id: 10,
    name: 'Juventud Brasil',
    founded: 2025,
    category: 'Primera División',
    players: 99,
    location: 'La Cisterna',
    achievements: 99,
    colors: 'bg-brand-secondary-400',
    logo: '/logos/clubs/juventud brasil.jpg',
    member: 2025,
  },
  {
    id: 11,
    name: 'Real Lo Espejo',
    founded: 2025,
    category: 'Primera División',
    players: 99,
    location: 'La Cisterna',
    achievements: 99,
    colors: 'bg-brand-neutral-900',
    logo: '/logos/clubs/real lo espejo.jpg',
    member: 2025,
  },
  {
    id: 12,
    name: 'Unión Salas',
    founded: 9999,
    category: 'Primera División',
    players: 99,
    location: 'La Cisterna',
    achievements: 99,
    colors: 'bg-brand-neutral-900',
    logo: '/logos/clubs/unión salas.jpg',
    member: 2025,
  },
]

export default function ClubesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Clubes Afiliados
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Conoce todos los clubes que forman parte de nuestra asociación, 
            cada uno con su historia única y compromiso con el fútbol local.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {clubs.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Clubes Activos
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                {clubs.reduce((sum, club) => sum + club.players, 0)}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Jugadores Totales
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                5
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Categorías
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                {clubs.reduce((sum, club) => sum + club.achievements, 0)}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Títulos Totales
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Clubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubs.map((club) => (
            <Card key={club.id} className="hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
              <CardHeader className="relative">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 ${club.colors} rounded-full flex items-center justify-center relative overflow-hidden`}>
                    {club.logo ? (
                      <Image
                        src={club.logo}
                        alt={`${club.name} logo`}
                        fill
                        sizes="64px"
                        className="object-contain"
                        priority
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-white font-bold text-xl">
                          {club.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg leading-tight">
                      {club.name}
                    </CardTitle>
                    <Badge variant="outline" className="mt-1">
                      {club.category}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <Calendar className="h-4 w-4 mr-2" />
                  Fundado en {club.founded}
                </div>
                
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <Users className="h-4 w-4 mr-2" />
                  {club.players} jugadores
                </div>
                
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <MapPin className="h-4 w-4 mr-2" />
                  {club.location}
                </div>
                
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <Trophy className="h-4 w-4 mr-2" />
                  {club.achievements} títulos
                </div>

                <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Miembro desde {club.member}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            ¿Quieres unir tu club a nuestra asociación?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Únete a nuestra familia futbolística y forma parte de la comunidad deportiva 
            más importante de La Cisterna. Juntos promovemos los valores del deporte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Solicitar Afiliación
            </button>
            <button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Más Información
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
