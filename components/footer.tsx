import Image from "next/image"
import { Trophy, Facebook, Instagram, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-12 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Logo y nombre de la asociación */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center space-x-3 mb-4">
          <Image
            src="/logos/logo asoc-fut-lacis.png"
            alt="Logo Asociación"
            width={100}
            height={100}
            className="object-contain"
          />
            <h3 className="text-2xl font-bold">
              Asociación de Fútbol La Cisterna
            </h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Promoviendo el fútbol y los valores deportivos en nuestra comunidad
          </p>
        </div>

        {/* Imágenes de patrocinadores */}
        <div className="flex justify-center items-center flex-wrap gap-6 mb-8">
            <h1>Patrocinadores:</h1>
          {/* Puedes duplicar esto con distintas imágenes */}
          <Link
            href="https://www.gobiernosantiago.cl/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform duration-300 ease-in-out hover:scale-110"
          >
            <Image
                src="/sponsor/logo-gobierno-santiago.png"
                alt="Patrocinador 1"
                width={100}
                height={50}
                className="object-contain"
            />
          </Link>
          <Link
            href="https://www.anfa.cl/index.php"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform duration-300 ease-in-out hover:scale-110"
          >
            <Image
                src="/sponsor/logo-anfa.png"
                alt="Patrocinador 1"
                width={100}
                height={50}
                className="object-contain"
            />
          </Link>
        </div>

        {/* Botones de redes sociales */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://www.facebook.com/asociaciondefutbollacisterna"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <Facebook />
          </a>
          <a
            href="https://www.instagram.com/asociacionfutbollacisterna/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition"
          >
            <Instagram />
          </a>
        </div>

        {/* Derechos reservados */}
        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          © 2025 Asociación de Fútbol La Cisterna. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
