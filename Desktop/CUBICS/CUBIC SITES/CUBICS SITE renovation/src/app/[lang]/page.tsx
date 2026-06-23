import { getDictionary } from '@/dictionaries'
import { Locale } from '@/i18n.config'
import Hero from '@/components/Hero/Hero'
import Link from 'next/link'
import styles from './page.module.css'

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const locale = lang as Locale
  const dict = await getDictionary(locale)

  return (
    <>
      <Hero dict={dict} lang={locale} />
      
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.trustTitle}>{dict.home.trust.title}</h2>
          <p className={styles.trustText}>{dict.home.trust.text}</p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <h2 className={styles.servicesTitle}>{dict.home.services.title}</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <h3>{dict.home.services.apartment}</h3>
            </div>
            <div className={styles.serviceCard}>
              <h3>{dict.home.services.house}</h3>
            </div>
            <div className={styles.serviceCard}>
              <h3>{dict.home.services.villa}</h3>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <h2>{dict.home.cta.title}</h2>
          <Link href={`/${lang}/contact`} className={styles.ctaBtn}>
            {dict.home.cta.button}
          </Link>
        </div>
      </section>
    </>
  )
}
