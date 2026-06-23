import { getDictionary } from '@/dictionaries'
import { Locale } from '@/i18n.config'
import styles from './page.module.css'

export default async function RenovationPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const locale = lang as Locale
  const dict = await getDictionary(locale)

  return (
    <main>
      <header className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>{dict.renovation.title}</h1>
          <p className={styles.subtitle}>{dict.renovation.subtitle}</p>
        </div>
      </header>

      <section className={styles.process}>
        <div className="container">
          <h2 className={styles.processTitle}>{dict.renovation.process.title}</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepInfo}>
                <h3>{dict.renovation.process.step1.title}</h3>
                <p>{dict.renovation.process.step1.text}</p>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepInfo}>
                <h3>{dict.renovation.process.step2.title}</h3>
                <p>{dict.renovation.process.step2.text}</p>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepInfo}>
                <h3>{dict.renovation.process.step3.title}</h3>
                <p>{dict.renovation.process.step3.text}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
