import styles from './WhyCubics.module.css'

export default function WhyCubics({ dict }: { dict: any }) {
  const content = dict.landing.whyCubics

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>{content.title}</h2>
        <div className={styles.grid}>
          <div className={styles.textContent}>
            <p className={styles.p1}>{content.content1}</p>
            <p className={styles.p2}>{content.content2}</p>
          </div>
          <div className={styles.benefitsContent}>
            <ul className={styles.benefitsList}>
              {content.benefits.map((benefit: string, i: number) => (
                <li key={i}>
                  <div className={styles.bullet}></div>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
