import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Asociación Fútbol La Cisterna',
  description: 'Sitio oficial de la Asociación Fútbol La Cisterna - Noticias, clubes, partidos y más',
  keywords: 'fútbol, La Cisterna, Chile, asociación, partidos, clubes, noticias',
  authors: [{ name: 'Asociación Fútbol La Cisterna' }],
  openGraph: {
    title: 'Asociación Fútbol La Cisterna',
    description: 'Sitio oficial de la Asociación Fútbol La Cisterna',
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
        </ThemeProvider>
      </body>
    </html>
  )
}