import Image from 'next/image'
import styles from './ProjectGallery.module.css'

export default function ProjectGallery() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>Έργα & Μεταμορφώσεις</h2>
        <div className={styles.grid}>
          <div className={`${styles.galleryItem} ${styles.large}`}>
            <Image
              src="/images/renovation/living_room.png"
              alt="Luxury modern living room renovation"
              fill
              className={styles.image}
              sizes="(max-width: 768px) 100vw, 66vw"
            />
            <div className={styles.caption}>Σαλόνι</div>
          </div>
          <div className={styles.galleryItem}>
            <Image
              src="/images/renovation/kitchen.png"
              alt="Luxury modern kitchen renovation"
              fill
              className={styles.image}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className={styles.caption}>Κουζίνα</div>
          </div>
          <div className={styles.galleryItem}>
            <Image
              src="/images/renovation/bathroom.png"
              alt="Modern minimal bathroom renovation"
              fill
              className={styles.image}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className={styles.caption}>Μπάνιο</div>
          </div>
        </div>
      </div>
    </section>
  )
}
