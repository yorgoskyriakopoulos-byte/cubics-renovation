import Image from 'next/image'
import styles from './ServiceArea.module.css'

export default function ServiceArea({ dict }: { dict: any }) {
  const content = dict.landing.serviceArea

  return (
    <section className={styles.section}>
      <Image
        src="/images/renovation/local_authority.png"
        alt="Residential architecture in Patras"
        fill
        className={styles.bgImage}
        sizes="100vw"
      />
      <div className={styles.overlay}></div>
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
