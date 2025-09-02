'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import IntroGallery from '@/components/IntroGallery'
import Services from '@/components/Services'
import CertificationsSection from '@/components/CertificationsSection'
import Footer from '@/components/Footer'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Home() {
  const { t } = useLanguage()
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <IntroGallery />
      <Services />
      <CertificationsSection />
      
      {/* Ready to Start Section */}
      <section className="py-16 bg-dark text-center">
        <div className="container mx-auto px-4">
          <h2 className="heading-lg text-gold mb-4">{t('readyToStart.title')}</h2>
          <p className="text-xl text-cream/80 mb-8 max-w-2xl mx-auto">
            {t('readyToStart.description')}
          </p>
          <a 
            href="/contact" 
            className="btn btn-cta px-10 py-4 text-lg font-semibold rounded-full inline-block"
          >
            {t('readyToStart.cta')}
          </a>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
