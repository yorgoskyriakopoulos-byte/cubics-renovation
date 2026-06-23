import { Locale } from '@/i18n.config'
import Image from 'next/image'
import styles from './page.module.css'
import { notFound } from 'next/navigation'

const MOCK_PROJECTS = [
  {
    slug: 'apartment-renovation-patras',
    image: '/images/renovation/hero-bg.jpg',
    titleEl: 'Ανακαίνιση Διαμερίσματος - Κέντρο Πάτρας',
    titleEn: 'Apartment Renovation - Patras Center',
    descEl: 'Πλήρης ανακαίνιση διαμερίσματος 90 τ.μ. στο κέντρο της Πάτρας με minimal αισθητική. Η μελέτη περιελάμβανε νέα διάταξη χώρων, σύγχρονο φωτισμό και custom ξυλουργικές κατασκευές.',
    descEn: 'Full renovation of a 90 sq.m. apartment in the center of Patras with a minimal aesthetic. The design included a new spatial layout, modern lighting, and custom woodwork.'
  },
  {
    slug: 'villa-renovation-rio',
    image: '/images/renovation/hero-bg.jpg',
    titleEl: 'Ανακατασκευή Βίλας - Ρίο',
    titleEn: 'Villa Renovation - Rio',
    descEl: 'Ενεργειακή αναβάθμιση και εσωτερική αναδιαμόρφωση βίλας. Αντικατάσταση κουφωμάτων, θερμοπρόσοψη και ανακαίνιση μπάνιων.',
    descEn: 'Energy upgrade and interior remodeling of a villa. Replacement of frames, thermal insulation, and bathroom renovation.'
  }
]

export function generateStaticParams() {
  return MOCK_PROJECTS.map((p) => ({ slug: p.slug }))
}

export default async function ProjectPage({ 
  params 
}: { 
  params: Promise<{ lang: string, slug: string }> 
}) {
  const { lang, slug } = await params
  const locale = lang as Locale
  const project = MOCK_PROJECTS.find(p => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <main>
      <header className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>{locale === 'el' ? project.titleEl : project.titleEn}</h1>
        </div>
      </header>
      <section className={styles.content}>
        <div className="container">
          <div className={styles.imageWrapper}>
            <Image 
              src={project.image}
              alt={locale === 'el' ? project.titleEl : project.titleEn}
              fill
              className={styles.image}
              priority
            />
          </div>
          <p className={styles.desc}>
            {locale === 'el' ? project.descEl : project.descEn}
          </p>
        </div>
      </section>
    </main>
  )
}
