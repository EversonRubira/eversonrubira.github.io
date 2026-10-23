import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Everson Rubira — Backend Engineer · AI Systems',
  description:
    'Backend Engineer a construir sistemas de IA com Java, Spring Boot, LangChain e Claude API. Disponível para oportunidades em AI Engineering.',
  openGraph: {
    title: 'Everson Rubira — Backend Engineer · AI Systems',
    description: 'Backend Engineer a construir sistemas de IA.',
    url: 'https://eversonrubira.github.io',
    siteName: 'Everson Rubira',
    locale: 'pt_PT',
    type: 'website',
  },
  robots: { index: true, follow: true },
  icons: {
    icon: '/icon-192.png',
    apple: '/icon-180.png',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  )
}
