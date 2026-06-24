import styles from './ProcessSection.module.css'

export default function ProcessSection({ dict }: { dict: any }) {
  const content = dict.landing.process

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>{content.title}</h2>
        <div className={styles.steps}>
          {content.steps.map((step: string, i: number) => (
            <div key={i} className={styles.step}>
              <div className={styles.stepNumber}>{i + 1}</div>
              <h3 className={styles.stepTitle}>{step}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
