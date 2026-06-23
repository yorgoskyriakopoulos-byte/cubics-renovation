import { getDictionary } from '@/dictionaries'
import { Locale } from '@/i18n.config'
import styles from './page.module.css'

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const locale = lang as Locale
  const dict = await getDictionary(locale)

  return (
    <main>
      <header className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>{dict.about.title}</h1>
        </div>
      </header>
      <section className={styles.content}>
        <div className="container">
          <p>{dict.about.content}</p>
        </div>
      </section>
    </main>
  )
}
