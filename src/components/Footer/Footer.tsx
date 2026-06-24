import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.css'
import { Locale } from '@/i18n.config'

export default function Footer({ 
  dict, 
  lang 
}: { 
  dict: any, 
  lang: Locale 
}) {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.content}`}>
        <div className={styles.info}>
          <h3 className={styles.brandName}>CUBICS Renovation Studio</h3>
          <address className={styles.addressBlock}>
            Agiou Andreou 9, Patras, Greece<br />
            <a href="tel:+302610222188" className={styles.contactLink}>+30 2610 222188</a><br />
            <a href="mailto:info@cubics.gr" className={styles.contactLink}>info@cubics.gr</a>
          </address>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className="container">
          &copy; {new Date().getFullYear()} CUBICS Renovation Studio. {dict.footer.rights}
        </div>
      </div>
    </footer>
  )
}
