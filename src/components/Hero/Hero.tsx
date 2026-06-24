import Image from 'next/image'
import Link from 'next/link'
import styles from './Hero.module.css'
import { Locale } from '@/i18n.config'

export default function Hero({ 
  dict,
  lang 
}: { 
  dict: any,
  lang: Locale
}) {
  return (
    <section className={styles.hero}>
      <Image
        src="/images/renovation/hero-bg.jpg"
        alt="Premium residential renovation in Patras"
        fill
        priority
        className={styles.bgImage}
        sizes="100vw"
      />
      <div className={`container fade-in ${styles.content}`}>
        <h1 className={styles.title}>CUBICS TEST 12345</h1>
        <p className={styles.subtitle}>{dict.home.hero.subtitle}</p>
        <Link href={`/${lang}/contact`} className={styles.cta}>
          {dict.navigation.cta}
        </Link>
      </div>
    </section>
  )
}
