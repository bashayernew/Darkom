'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Facebook, Instagram, Twitter, Video, MessageCircle, Phone, Mail, MapPin } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'

const Footer = () => {
  const { t } = useLanguage()
  
  const handleWhatsAppClick = () => {
    const message = "Hello! I'd like to get in touch with Darkom Construction & Consulting."
    const whatsappUrl = `https://wa.me/96597759069?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <footer className="bg-dark text-cream py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <div className="flex justify-center">
              <motion.div
                animate={{ rotateY: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 lg:w-20 lg:h-20"
              >
                <img
                  src="/images/logo-transparent.png"
                  alt="Darkom Logo"
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </div>
            <p className="text-cream/70 text-xs max-w-xs mx-auto">
              {t('footer.slogan')}
            </p>
            <div className="flex justify-center space-x-2">
              <a
                href="https://instagram.com/darkom.q8"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center hover:bg-gold/30 transition-colors duration-300"
              >
                <Instagram className="w-3.5 h-3.5 text-gold" />
              </a>
              <a
                href="https://tiktok.com/@darkomdarkom0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center hover:bg-gold/30 transition-colors duration-300"
              >
                <Video className="w-3.5 h-3.5 text-gold" />
              </a>
              <a
                href="https://snapchat.com/add/darkom_q8"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center hover:bg-gold/30 transition-colors duration-300"
              >
                <MessageCircle className="w-3.5 h-3.5 text-gold" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h3 className="text-base font-playfair font-semibold text-gold">{t('footer.quickLinks')}</h3>
            <div className="flex flex-wrap justify-center gap-3 text-xs">
              <Link href="/" className="text-cream/80 hover:text-gold transition-colors duration-300">
                {t('navigation.home')}
              </Link>
              <Link href="/about" className="text-cream/80 hover:text-gold transition-colors duration-300">
                {t('navigation.about')}
              </Link>
              <Link href="/team" className="text-cream/80 hover:text-gold transition-colors duration-300">
                {t('navigation.team')}
              </Link>
              <Link href="/contact" className="text-cream/80 hover:text-gold transition-colors duration-300">
                {t('navigation.contact')}
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xs"
          >
            <h3 className="text-base font-playfair font-semibold text-gold mb-4">{t('footer.getInTouch')}</h3>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-center">
              <div className="flex items-center gap-2 justify-center lg:justify-start lg:text-left max-w-[220px]">
                <MapPin className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                <a
                  href="https://maps.google.com/?q=Shuwaikh+Industrial+1+Block+2+Street+13+Kuwait+City+Kuwait"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/80 hover:text-gold transition-colors duration-300"
                >
                  Shuwaikh Industrial 1 - Block 2, Street 13, Kuwait City
                </a>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start whitespace-nowrap">
                <Phone className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                <a href="tel:+96597759069" className="text-cream/80 hover:text-gold transition-colors duration-300">
                  +965 9775 9069
                </a>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start whitespace-nowrap">
                <MessageCircle className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                <button
                  onClick={handleWhatsAppClick}
                  className="text-cream/80 hover:text-gold transition-colors duration-300"
                >
                  {t('contact.chatWhatsapp')}
                </button>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start whitespace-nowrap">
                <Mail className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                <a href="mailto:hello@darkom.design" className="text-cream/80 hover:text-gold transition-colors duration-300">
                  hello@darkom.design
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-6 pt-4 border-t border-gold/20 text-center space-y-2"
        >
          <LanguageSwitcher />
          <p className="text-cream/60 text-[11px]">
            {t('footer.copyright')}
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
