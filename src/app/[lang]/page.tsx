import { getDictionary } from '@/dictionaries'
import { Locale } from '@/i18n.config'
import StickyMobileBar from '@/components/StickyMobileBar/StickyMobileBar'
import FloatingContactBtn from '@/components/FloatingContactBtn/FloatingContactBtn'
import HeroLanding from '@/components/HeroLanding/HeroLanding'
import WhyCubics from '@/components/WhyCubics/WhyCubics'
import ProjectGallery from '@/components/ProjectGallery/ProjectGallery'
import ProcessSection from '@/components/ProcessSection/ProcessSection'
import ServiceArea from '@/components/ServiceArea/ServiceArea'
import TrustSection from '@/components/TrustSection/TrustSection'
import ContactForm from '@/components/ContactForm/ContactForm'
import FinalCTA from '@/components/FinalCTA/FinalCTA'
import styles from './page.module.css'

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const locale = lang as Locale
  const dict = await getDictionary(locale)

  return (
    <>
      <StickyMobileBar />
      <FloatingContactBtn />
      
      <main>
        <HeroLanding dict={dict} />
        <WhyCubics dict={dict} />
        <ProjectGallery />
        <ProcessSection dict={dict} />
        <ServiceArea dict={dict} />
        <TrustSection dict={dict} />
        
        {/* Lead Form Section */}
        <section id="contact" className={styles.leadFormSection}>
          <div className="container">
            <h2 className={styles.leadFormTitle}>{dict.landing.leadForm.title}</h2>
            <div className={styles.formWrapper}>
              <ContactForm dict={dict} />
            </div>
          </div>
        </section>

        <FinalCTA dict={dict} />
      </main>
    </>
  )
}
