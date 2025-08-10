import { Navbar } from '@/components/navbar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { MapPin, Phone, Mail, Clock, Users, Trophy, Calendar, Facebook, Instagram } from 'lucide-react'
import Image from 'next/image'

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contacto e Información
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Ponte en contacto con nosotros o conoce más sobre nuestra asociación. 
            Estamos aquí para ayudarte y responder todas tus consultas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Envíanos un Mensaje</CardTitle>
                <p className="text-gray-600 dark:text-gray-400">
                  Completa el formulario y nos pondremos en contacto contigo a la brevedad.
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Nombre</Label>
                      <Input id="firstName" placeholder="Tu nombre" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Apellido</Label>
                      <Input id="lastName" placeholder="Tu apellido" required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Correo Electrónico</Label>
                    <Input id="email" type="email" placeholder="tu@email.com" required />
                  </div>

                  <div>
                    <Label htmlFor="phone">Teléfono (Opcional)</Label>
                    <Input id="phone" type="tel" placeholder="+56 9 XXXX XXXX" />
                  </div>

                  <div>
                    <Label htmlFor="subject">Asunto</Label>
                    <Input id="subject" placeholder="¿En qué podemos ayudarte?" required />
                  </div>

                  <div>
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Escribe tu mensaje aquí..."
                      rows={6}
                      required 
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    <Mail className="h-4 w-4 mr-2" />
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Association Info */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 relative">
                    <Image
                      src="/logos/logo asoc-fut-lacis.png"
                      alt="AFC La Cisterna Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <CardTitle>Asociación de Fútbol La Cisterna</CardTitle>
                    <p className="text-gray-600 dark:text-gray-400">
                      Unidos por la pasión del fútbol
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-medium">Dirección</p>
                    <p className="text-gray-600 dark:text-gray-400">
                      La Cisterna, Santiago<br />
                      Región Metropolitana, Chile
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-medium">Teléfono</p>
                    <p className="text-gray-600 dark:text-gray-400">
                      +56 9 XXXX XXXX
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-red-600 mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600 dark:text-gray-400">
                      info@afclacisterna.cl
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-purple-600 mt-1" />
                  <div>
                    <p className="font-medium">Horarios de Atención</p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Lunes a Viernes: 18:00 - 21:00<br />
                      Sábados: 09:00 - 13:00
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Nuestra Asociación en Números</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-600">12</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Clubes Afiliados</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <Trophy className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-600">8</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Años de Historia</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <Calendar className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-purple-600">25</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Partidos por Temporada</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <Users className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-orange-600">300+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Jugadores Activos</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card>
              <CardHeader>
                <CardTitle>Síguenos en Redes Sociales</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/asociaciondefutbollacisterna"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                    <span>Facebook</span>
                  </a>
                  <a
                    href="https://www.instagram.com/asociacionfutbollacisterna/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                    <span>Instagram</span>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card>
              <CardHeader>
                <CardTitle>Nuestra Misión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Promover el desarrollo del fútbol amateur en La Cisterna, fomentando los valores 
                  del deporte, la competencia sana y la integración social a través del fútbol. 
                  Trabajamos para brindar oportunidades deportivas a jugadores de todas las edades 
                  y contribuir al crecimiento de nuestra comunidad.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Preguntas Frecuentes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Cómo puedo afiliar mi club?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Para afiliar tu club, contacta con nosotros a través del formulario o nuestros 
                  canales de comunicación. Te proporcionaremos toda la información sobre requisitos 
                  y el proceso de afiliación.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Cuándo son los entrenamientos?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Los horarios de entrenamiento varían según cada club. Consulta la sección de 
                  citaciones o contacta directamente con tu club para conocer los horarios específicos.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Hay categorías juveniles?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Sí, varios de nuestros clubes afiliados cuentan con categorías juveniles. 
                  Contacta con nosotros para más información sobre las divisiones disponibles.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Cómo me mantengo informado?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Puedes seguir nuestras redes sociales, visitar regularmente nuestro sitio web 
                  o suscribirte a nuestras notificaciones para estar al día con todas las novedades.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}