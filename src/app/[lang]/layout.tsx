import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { i18n, type Locale } from '@/i18n.config'
import { getDictionary } from '@/dictionaries'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

const inter = Inter({ subsets: ['latin', 'greek'] })

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export const metadata: Metadata = {
  title: 'CUBICS RENOVATION | Αρχιτεκτονική Ανακαίνιση',
  description: 'Μεταμορφώνουμε κατοικίες μέσα από δομή, φως και υλικά.',
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const locale = lang as Locale
  const dict = await getDictionary(locale)

  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "CUBICS RENOVATION",
    "image": "https://www.cubics.gr/images/renovation/hero-bg.jpg",
    "description": "Αρχιτεκτονική Ανακαίνιση στην Πάτρα. Μεταμορφώνουμε κατοικίες μέσα από δομή, φως και υλικά.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Patras",
      "addressRegion": "Achaia",
      "addressCountry": "GR"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 38.2466,
        "longitude": 21.7346
      },
      "geoRadius": "30000"
    },
    "telephone": "+302610000000"
  }

  return (
    <html lang={lang}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className={inter.className} style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', paddingTop: '64px' }}>
        <Header dict={dict} lang={locale} />
        <main style={{ flex: 1 }}>
          {children}
        </main>
        <Footer dict={dict} lang={locale} />
      </body>
    </html>
  )
}
