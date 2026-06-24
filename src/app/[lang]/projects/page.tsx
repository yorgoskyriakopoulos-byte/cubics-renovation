import { getDictionary } from '@/dictionaries'
import { Locale } from '@/i18n.config'
import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'

const MOCK_PROJECTS = [
  {
    slug: 'apartment-renovation-patras',
    image: '/images/renovation/hero-bg.jpg', // Reusing hero image as placeholder
    titleEl: 'Ανακαίνιση Διαμερίσματος - Κέντρο Πάτρας',
    titleEn: 'Apartment Renovation - Patras Center',
    descEl: 'Πλήρης ανακαίνιση διαμερίσματος 90 τ.μ. στο κέντρο της Πάτρας με minimal αισθητική.',
    descEn: 'Full renovation of a 90 sq.m. apartment in the center of Patras with a minimal aesthetic.'
  },
  {
    slug: 'villa-renovation-rio',
    image: '/images/renovation/hero-bg.jpg', // Reusing hero image as placeholder
    titleEl: 'Ανακατασκευή Βίλας - Ρίο',
    titleEn: 'Villa Renovation - Rio',
    descEl: 'Ενεργειακή αναβάθμιση και εσωτερική αναδιαμόρφωση βίλας.',
    descEn: 'Energy upgrade and interior remodeling of a villa.'
  }
]

export default async function ProjectsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const locale = lang as Locale
  const dict = await getDictionary(locale)

  return (
    <main>
      <header className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>{dict.projects.title}</h1>
          <p className={styles.subtitle}>{dict.projects.subtitle}</p>
        </div>
      </header>

      <section className={styles.projectsList}>
        <div className="container">
          <div className={styles.projectsList}>
            {MOCK_PROJECTS.map((project) => (
              <Link href={`/${locale}/projects/${project.slug}`} key={project.slug} className={styles.projectCard}>
                <div className={styles.imageWrapper}>
                  <Image 
                    src={project.image} 
                    alt={locale === 'el' ? project.titleEl : project.titleEn}
                    fill
                    className={styles.image}
                  />
                </div>
                <div className={styles.info}>
                  <h3>{locale === 'el' ? project.titleEl : project.titleEn}</h3>
                  <p>{locale === 'el' ? project.descEl : project.descEn}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
