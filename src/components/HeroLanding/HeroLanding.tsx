import styles from './HeroLanding.module.css'

export default function HeroLanding({ dict }: { dict: any }) {
  const content = dict.landing.hero

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h1 className={styles.headline}>{content.headline}</h1>
          <p className={styles.subheadline}>{content.subheadline}</p>
          
          <ul className={styles.bullets}>
            {content.bullets.map((bullet: string, i: number) => (
              <li key={i}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                {bullet}
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            <a href="tel:+306933217835" className={styles.primaryCta}>
              {content.primaryCTA}
            </a>
            <div className={styles.secondaryActions}>
              <a href="https://wa.me/306933217835?text=Hello%20CUBICS%20Architecture,%20I%20am%20interested%20in%20a%20renovation%20project." target="_blank" rel="noopener noreferrer" className={styles.whatsappCta}>
                {content.whatsappCTA}
              </a>
              <a href="viber://chat?number=%2B306933217835" className={styles.viberCta}>
                {content.viberCTA}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
