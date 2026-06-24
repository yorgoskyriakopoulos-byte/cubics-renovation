import { getDictionary } from '@/dictionaries'
import { Locale } from '@/i18n.config'
import ContactForm from '@/components/ContactForm/ContactForm'
import styles from './page.module.css'

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const locale = lang as Locale
  const dict = await getDictionary(locale)

  return (
    <main>
      <header className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>CUBICS Renovation Studio</h1>
          <p className={styles.subtitle}>
            Αρχιτεκτονική ανακαίνιση κατοικιών στην Πάτρα και γύρω περιοχές
          </p>
          <div className={styles.contactDetails}>
            <p>Agiou Andreou 9, Patras, Greece</p>
            <p>
              <a href="tel:+302610222188">+30 2610 222188</a> | <a href="mailto:info@cubics.gr">info@cubics.gr</a>
            </p>
          </div>
        </div>
      </header>
      <section className={styles.content}>
        <div className="container">
          <ContactForm dict={dict} />
        </div>
      </section>
    </main>
  )
}
