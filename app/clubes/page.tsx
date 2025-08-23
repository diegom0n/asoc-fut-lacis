import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Facebook, Instagram, Twitter, Calendar } from "lucide-react";

const clubs = [
  // Pega aquí el array de datos actualizado con `founded`, `member` y `colors`
  {
    id: 1,
    name: "América",
    location: "La Cisterna",
    logo: "/logos/clubs/américa.jpg",
    founded: 2025,
    member: 2025,
    colors: "bg-white border-brand-neutral-900",
    social: {
      facebook: "https://www.facebook.com/america",
      instagram: "https://www.instagram.com/america",
      twitter: "https://www.twitter.com/america",
    },
  },
  {
    id: 2,
    name: "C.D American",
    location: "La Cisterna",
    logo: "/logos/clubs/american.jpg",
    founded: 2025,
    member: 2025,
    colors: "bg-brand-neutral-900",
    social: {
      facebook: "https://www.facebook.com/cd-american",
      instagram: "https://www.instagram.com/cd-american",
      twitter: "https://www.twitter.com/cd-american",
    },
  },
  {
    id: 3,
    name: "Carlos Muñoz",
    location: "La Cisterna",
    logo: "/logos/clubs/carlos muñoz.jpg",
    founded: 2025,
    member: 2025,
    colors: "bg-brand-neutral-100",
    social: {
      facebook: "https://www.facebook.com/carlos-munoz",
      instagram: "https://www.instagram.com/carlos-munoz",
      twitter: "https://www.twitter.com/carlos-munoz",
    },
  },
  {
    id: 4,
    name: "Cachavacha",
    location: "La Cisterna",
    logo: "/logos/clubs/cachavacha.jpg",
    founded: 2025,
    member: 2025,
    colors: "bg-blue-500",
    social: {
      facebook: "https://www.facebook.com/cachavacha",
      instagram: "https://www.instagram.com/cachavacha",
      twitter: "https://www.twitter.com/cachavacha",
    },
  },
  {
    id: 5,
    name: "Cultural Renacer",
    location: "La Cisterna",
    logo: "/logos/clubs/renacer.jpg",
    founded: 2025,
    member: 2025,
    colors: "bg-brand-neutral-900",
    social: {
      facebook: "https://www.facebook.com/cultural-renacer",
      instagram: "https://www.instagram.com/cultural-renacer",
      twitter: "https://www.twitter.com/cultural-renacer",
    },
  },
  {
    id: 6,
    name: "Cultural Uruguay",
    location: "La Cisterna",
    logo: "/logos/clubs/uruguay.png",
    founded: "1945",
    member: 2025,
    colors: "bg-cyan-500",
    social: {
      facebook: "https://www.facebook.com/cultural-uruguay",
      instagram: "https://www.instagram.com/cultural-uruguay",
      twitter: "https://www.twitter.com/cultural-uruguay",
    },
  },
  {
    id: 7,
    name: "FC La Burgueño",
    location: "La Cisterna",
    logo: "/logos/clubs/fc la burgueño.jpg",
    founded: 2025,
    member: 2025,
    colors: "bg-brand-neutral-900",
    social: {
      facebook: "https://www.facebook.com/fc-la-burgueno",
      instagram: "https://www.instagram.com/fc-la-burgueno",
      twitter: "https://www.twitter.com/fc-la-burgueno",
    },
  },
  {
    id: 8,
    name: "Gremio",
    location: "La Cisterna",
    logo: "/logos/clubs/gremio.jpg",
    founded: 2025,
    member: 2025,
    colors: "bg-brand-neutral-900",
    social: {
      facebook: "https://www.facebook.com/gremio",
      instagram: "https://www.instagram.com/gremio",
      twitter: "https://www.twitter.com/gremio",
    },
  },
  {
    id: 9,
    name: "Gremio 2010",
    location: "La Cisterna",
    logo: "/logos/clubs/gremio 2010.jpg",
    founded: 2025,
    member: 2025,
    colors: "bg-brand-neutral-900",
    social: {
      facebook: "https://www.facebook.com/gremio-2010",
      instagram: "https://www.instagram.com/gremio-2010",
      twitter: "https://www.twitter.com/gremio-2010",
    },
  },
  {
    id: 10,
    name: "Juventud Brasil",
    location: "La Cisterna",
    logo: "/logos/clubs/juventud brasil.jpg",
    founded: 2025,
    member: 2025,
    colors: "bg-brand-secondary-400",
    social: {
      facebook: "https://www.facebook.com/juventud-brasil",
      instagram: "https://www.instagram.com/juventud-brasil",
      twitter: "https://www.twitter.com/juventud-brasil",
    },
  },
  {
    id: 11,
    name: "Real Lo Espejo",
    location: "La Cisterna",
    logo: "/logos/clubs/real lo espejo.jpg",
    founded: 2025,
    member: 2025,
    colors: "bg-brand-neutral-900",
    social: {
      facebook: "https://www.facebook.com/real-lo-espejo",
      instagram: "https://www.instagram.com/real-lo-espejo",
      twitter: "https://www.twitter.com/real-lo-espejo",
    },
  },
  {
    id: 12,
    name: "Unión Salas",
    location: "La Cisterna",
    logo: "/logos/clubs/unión salas.jpg",
    founded: 9999,
    member: 2025,
    colors: "bg-brand-neutral-900",
    social: {
      facebook: "https://www.facebook.com/union-salas",
      instagram: "https://www.instagram.com/union-salas",
      twitter: "https://www.twitter.com/union-salas",
    },
  },
];

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
            Conoce a los clubes que forman parte de nuestra asociación, ubicados
            en La Cisterna.
          </p>
        </div>

        {/* Clubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubs.map((club) => (
            <Card
              key={club.id}
              className="hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
            >
              <CardHeader className="relative">
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-16 h-16 ${club.colors} rounded-full flex items-center justify-center relative overflow-hidden`}
                  >
                    {club.logo ? (
                      <Image
                        src={club.logo}
                        alt={`${club.name} logo`}
                        fill
                        sizes="64px"
                        className="object-contain"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-white font-bold text-xl">
                          {club.name
                            .split(" ")
                            .map((word) => word[0])
                            .join("")
                            .slice(0, 2)}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg leading-tight">
                      {club.name}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <MapPin className="h-4 w-4 mr-2" />
                  {club.location}
                </div>

                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <Calendar className="h-4 w-4 mr-2" />
                  Fundado en {club.founded}
                </div>
                {/* Redes Sociales */}
                <div className="flex items-center space-x-1">
                  <div className="flex items-center space-x-2">
                    {club.social.facebook && (
                      <Link
                        href={club.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Facebook className="h-6 w-6 text-gray-500 hover:text-blue-600 transition-colors" />
                      </Link>
                    )}
                    {club.social.instagram && (
                      <Link
                        href={club.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Instagram className="h-6 w-6 text-gray-500 hover:text-pink-600 transition-colors" />
                      </Link>
                    )}
                    {club.social.twitter && (
                      <Link
                        href={club.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Twitter className="h-6 w-6 text-gray-500 hover:text-blue-400 transition-colors" />
                      </Link>
                    )}
                  </div>
                </div>
                {/* Barra blanca -.- */}
                <div className="border-t border-gray-200 dark:border-gray-700"></div>
                <div className="text-xs text-gray-500 dark:text-gray-400 ">
                  Miembro desde {club.member}
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
            Únete a nuestra familia futbolística y forma parte de la comunidad
            deportiva más importante de La Cisterna. Juntos promovemos los
            valores del deporte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-brand-primary-600 hover:bg-brand-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Solicitar Afiliación
            </button>
            <button className="border border-brand-primary-600 text-brand-primary-600 hover:bg-brand-primary-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Más Información
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
