import styles from './TrustSection.module.css'

export default function TrustSection({ dict }: { dict: any }) {
  const content = dict.landing.trust

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>{content.title}</h2>
        <div className={styles.content}>
          <ul className={styles.points}>
            {content.points.map((point: string, i: number) => (
              <li key={i}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
