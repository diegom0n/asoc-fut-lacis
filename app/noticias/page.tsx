import { Navbar } from '@/components/navbar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, User, Eye, MessageCircle } from 'lucide-react'

const news = [
  {
    id: 1,
    title: 'Gran victoria de América en el clásico local',
    summary: 'El club América se impuso 3-1 ante C.D American en un emocionante encuentro que se jugó en el estadio municipal.',
    category: 'Resultados',
    author: 'Carlos Mendoza',
    date: '2024-01-15',
    views: 245,
    comments: 12,
    featured: true,
  },
  {
    id: 2,
    title: 'Nuevo sistema de inscripciones online disponible',
    summary: 'La asociación implementó un nuevo sistema digital para facilitar las inscripciones de jugadores y la gestión de documentos.',
    category: 'Administración',
    author: 'María González',
    date: '2024-01-12',
    views: 189,
    comments: 8,
    featured: false,
  },
  {
    id: 3,
    title: 'Inauguración de nueva cancha en La Cisterna Norte',
    summary: 'Se inauguró oficialmente la nueva cancha de césped sintético que beneficiará a todos los clubes de la zona norte de la comuna.',
    category: 'Infraestructura',
    author: 'Roberto Silva',
    date: '2024-01-10',
    views: 312,
    comments: 25,
    featured: true,
  },
  {
    id: 4,
    title: 'Seminario de capacitación para entrenadores',
    summary: 'Se realizó exitosamente el primer seminario del año con la participación de reconocidos técnicos de fútbol nacional.',
    category: 'Capacitación',
    author: 'Ana Rodríguez',
    date: '2024-01-08',
    views: 156,
    comments: 6,
    featured: false,
  },
  {
    id: 5,
    title: 'Gremio 2010 mantiene su posición en Primera División',
    summary: 'El club confirmó su permanencia en la máxima categoría después de una temporada de consolidación.',
    category: 'Resultados',
    author: 'Luis Morales',
    date: '2024-01-05',
    views: 428,
    comments: 34,
    featured: true,
  },
  {
    id: 6,
    title: 'Campaña solidaria: "Fútbol que une"',
    summary: 'Lanzamos una nueva campaña para recolectar implementos deportivos destinados a jóvenes de sectores vulnerables.',
    category: 'Social',
    author: 'Patricia López',
    date: '2024-01-03',
    views: 203,
    comments: 15,
    featured: false,
  },
]

const categories = ['Todas', 'Resultados', 'Administración', 'Infraestructura', 'Capacitación', 'Social']

export default function NoticiasPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Noticias
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Mantente informado con las últimas novedades de nuestra asociación, 
            resultados de partidos, eventos y actividades.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === 'Todas' ? 'default' : 'outline'}
                className="cursor-pointer hover:bg-blue-600 hover:text-white transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Featured News */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Noticias Destacadas
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {news.filter(article => article.featured).slice(0, 2).map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow cursor-pointer group overflow-hidden">
                <div className="aspect-video bg-gradient-to-r from-blue-500 to-blue-700"></div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{article.category}</Badge>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Destacada
                    </span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {article.summary}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {article.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(article.date).toLocaleDateString('es-CL')}
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        {article.views}
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        {article.comments}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All News */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Todas las Noticias
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="aspect-video bg-gradient-to-r from-gray-400 to-gray-600"></div>
                <CardHeader>
                  <Badge variant="outline" className="w-fit">
                    {article.category}
                  </Badge>
                  <CardTitle className="text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                    {article.summary}
                  </p>
                  <div className="space-y-2 text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        {article.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(article.date).toLocaleDateString('es-CL')}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Eye className="h-3 w-3 mr-1" />
                        {article.views} vistas
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="h-3 w-3 mr-1" />
                        {article.comments} comentarios
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Cargar Más Noticias
          </button>
        </div>
      </div>
    </div>
  )
}