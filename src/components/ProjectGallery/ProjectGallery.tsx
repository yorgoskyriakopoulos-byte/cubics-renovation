import styles from './ProjectGallery.module.css'

export default function ProjectGallery() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>Έργα & Μεταμορφώσεις</h2>
        <div className={styles.grid}>
          <div className={`${styles.galleryItem} ${styles.large}`}>
            <div className={styles.placeholder}>
              <span>Σαλόνι (Προσθέστε Εικόνα)</span>
            </div>
          </div>
          <div className={styles.galleryItem}>
            <div className={styles.placeholder}>
              <span>Κουζίνα (Προσθέστε Εικόνα)</span>
            </div>
          </div>
          <div className={styles.galleryItem}>
            <div className={styles.placeholder}>
              <span>Μπάνιο (Προσθέστε Εικόνα)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
