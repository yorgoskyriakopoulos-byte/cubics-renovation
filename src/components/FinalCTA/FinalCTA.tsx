import styles from './FinalCTA.module.css'

export default function FinalCTA({ dict }: { dict: any }) {
  const content = dict.landing.finalCTA

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.headline}>{content.headline}</h2>
        <p className={styles.content}>{content.content}</p>
        
        <div className={styles.contactInfo}>
          <div className={styles.address}>
            {content.address.split('\n').map((line: string, i: number) => (
              <span key={i}>{line}<br/></span>
            ))}
          </div>
          <div className={styles.phones}>
            <a href="tel:+302610222188">{content.phone1}</a>
            <a href="tel:+306933217835">{content.phone2}</a>
          </div>
        </div>

        <div className={styles.actions}>
          <a href="tel:+306933217835" className={styles.btnCall}>
            {content.btnCall}
          </a>
          <div className={styles.secondaryActions}>
            <a href="https://wa.me/306933217835" target="_blank" rel="noopener noreferrer" className={styles.btnWhatsapp}>
              {content.btnWhatsapp}
            </a>
            <a href="viber://chat?number=%2B306933217835" className={styles.btnViber}>
              {content.btnViber}
            </a>
          </div>
          <a href="#contact" className={styles.btnEstimate}>
            {content.btnEstimate}
          </a>
        </div>
      </div>
    </section>
  )
}
