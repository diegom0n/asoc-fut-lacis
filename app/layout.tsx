import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Asociación de Fútbol La Cisterna',
  description: 'Sitio oficial de la Asociación de Fútbol La Cisterna - Noticias, clubes, partidos y más',
  keywords: 'fútbol, La Cisterna, Santiago, Chile, ANFA, asociación, partidos, clubes, noticias, amateur',
  authors: [{ name: 'Asociación de Fútbol La Cisterna' }],
  openGraph: {
    title: 'Asociación de Fútbol La Cisterna',
    description: 'Sitio oficial de la Asociación de Fútbol La Cisterna',
    type: 'website',
    locale: 'es_CL',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}