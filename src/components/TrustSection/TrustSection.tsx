import Image from 'next/image'
import styles from './TrustSection.module.css'

export default function TrustSection({ dict }: { dict: any }) {
  const content = dict.landing.trust

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>{content.title}</h2>
            <ul className={styles.points}>
              {content.points.map((point: string, i: number) => (
                <li key={i}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.imageContent}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/renovation/trust_construction.png"
                alt="Professional renovation construction site in Patras"
                fill
                className={styles.image}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
