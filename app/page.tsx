import { Navbar } from '@/components/navbar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Trophy, Users, Calendar, Megaphone, ArrowRight, Star } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-primary-600 to-brand-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Asociación Fútbol
              <span className="block text-brand-secondary-400">La Cisterna</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Unidos por la pasión del fútbol en La Cisterna, Chile. 
              Promoviendo el deporte y los valores en nuestra comunidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-brand-secondary-500 hover:bg-brand-secondary-600 text-black font-semibold">
                Ver Próximos Partidos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-primary-600">
                Conocer Clubes
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-brand-primary-600 dark:text-brand-primary-400">12</div>
              <div className="text-gray-600 dark:text-gray-400">Clubes Afiliados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-accent-600 dark:text-brand-accent-400">1188</div>
              <div className="text-gray-600 dark:text-gray-400">Jugadores</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-info-600 dark:text-brand-info-400">25</div>
              <div className="text-gray-600 dark:text-gray-400">Partidos Jugados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-warning-600 dark:text-brand-warning-400">8</div>
              <div className="text-gray-600 dark:text-gray-400">Años de Historia</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Acceso Rápido
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Encuentra toda la información que necesitas sobre nuestra asociación
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/clubes">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader className="text-center">
                  <div className="mx-auto bg-brand-primary-100 dark:bg-brand-primary-900 p-3 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-brand-primary-200 dark:group-hover:bg-brand-primary-800 transition-colors">
                    <Users className="h-8 w-8 text-brand-primary-600 dark:text-brand-primary-400" />
                  </div>
                  <CardTitle className="text-xl">Clubes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    Conoce todos los clubes afiliados a nuestra asociación
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/noticias">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader className="text-center">
                  <div className="mx-auto bg-brand-accent-100 dark:bg-brand-accent-900 p-3 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-brand-accent-200 dark:group-hover:bg-brand-accent-800 transition-colors">
                    <Star className="h-8 w-8 text-brand-accent-600 dark:text-brand-accent-400" />
                  </div>
                  <CardTitle className="text-xl">Noticias</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    Mantente al día con las últimas novedades
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/partidos">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader className="text-center">
                  <div className="mx-auto bg-brand-info-100 dark:bg-brand-info-900 p-3 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-brand-info-200 dark:group-hover:bg-brand-info-800 transition-colors">
                    <Calendar className="h-8 w-8 text-brand-info-600 dark:text-brand-info-400" />
                  </div>
                  <CardTitle className="text-xl">Partidos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    Consulta el calendario de partidos y resultados
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/citaciones">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader className="text-center">
                  <div className="mx-auto bg-brand-warning-100 dark:bg-brand-warning-900 p-3 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-brand-warning-200 dark:group-hover:bg-brand-warning-800 transition-colors">
                    <Megaphone className="h-8 w-8 text-brand-warning-600 dark:text-brand-warning-400" />
                  </div>
                  <CardTitle className="text-xl">Citaciones</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    Revisa entrenamientos y convocatorias
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News Preview */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Últimas Noticias
            </h2>
            <Link href="/noticias">
              <Button variant="outline">
                Ver Todas
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-r from-blue-400 to-blue-600 rounded-t-lg"></div>
                <CardHeader>
                  <CardTitle className="text-lg">
                    Gran victoria del Club Deportivo Los Leones
                  </CardTitle>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Hace 2 días
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    El club América logró una importante victoria por 3-1 en el último partido del campeonato...
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-2 mb-4">
              <Trophy className="h-8 w-8 text-brand-secondary-400" />
              <h3 className="text-2xl font-bold">Asociación Fútbol La Cisterna</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Promoviendo el fútbol y los valores deportivos en nuestra comunidad
            </p>
            <div className="text-sm text-gray-500">
              © 2024 Asociación Fútbol La Cisterna. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}