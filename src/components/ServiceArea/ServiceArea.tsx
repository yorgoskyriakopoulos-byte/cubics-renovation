import styles from './ServiceArea.module.css'

export default function ServiceArea({ dict }: { dict: any }) {
  const content = dict.landing.serviceArea

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>{content.title}</h2>
        <div className={styles.locations}>
          {content.locations.map((loc: string, i: number) => (
            <span key={i} className={styles.locationItem}>
              {loc}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
