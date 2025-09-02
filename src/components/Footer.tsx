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
    <footer className="bg-dark text-cream py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              {/* Logo with Spinning Animation */}
              <div className="flex justify-center mb-6">
                <motion.div
                  animate={{ rotateY: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="w-40 h-40"
                >
                  <img
                    src="/images/logo-transparent.png"
                    alt="Darkom Logo"
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              </div>
              
              <p className="text-cream/80 leading-relaxed mb-6 max-w-sm mx-auto">
                {t('footer.slogan')}
              </p>
              
              <div className="flex justify-center space-x-4">
                <a
                  href="https://facebook.com/Darkom Ja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center hover:bg-gold/30 transition-colors duration-300"
                >
                  <Facebook className="w-5 h-5 text-gold" />
                </a>
                <a
                  href="https://instagram.com/darkom.q8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center hover:bg-gold/30 transition-colors duration-300"
                >
                  <Instagram className="w-5 h-5 text-gold" />
                </a>
                <a
                  href="https://tiktok.com/@darkomdarkom0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center hover:bg-gold/30 transition-colors duration-300"
                >
                  <Video className="w-5 h-5 text-gold" />
                </a>
                <a
                  href="https://snapchat.com/add/darkom_q8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center hover:bg-gold/30 transition-colors duration-300"
                >
                  <MessageCircle className="w-5 h-5 text-gold" />
                </a>
                <a
                  href="https://twitter.com/darkom_q8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center hover:bg-gold/30 transition-colors duration-300"
                >
                  <Twitter className="w-5 h-5 text-gold" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-xl font-playfair font-semibold text-gold mb-6">{t('footer.quickLinks')}</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-cream/80 hover:text-gold transition-colors duration-300">
                    {t('navigation.home')}
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-cream/80 hover:text-gold transition-colors duration-300">
                    {t('navigation.about')}
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-cream/80 hover:text-gold transition-colors duration-300">
                    {t('navigation.team')}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-cream/80 hover:text-gold transition-colors duration-300">
                    {t('navigation.contact')}
                  </Link>
                </li>
              </ul>
              <div className="mt-6">
                <Link 
                  href="/services" 
                  className="btn btn-cta px-6 py-3 text-sm font-semibold rounded-lg inline-flex items-center gap-2"
                >
                  {t('navigation.services')}
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Get In Touch */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-xl font-playfair font-semibold text-gold mb-6">{t('footer.getInTouch')}</h3>
              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start justify-center space-x-3">
                  <MapPin className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <a 
                    href="https://maps.google.com/?q=Shuwaikh+Industrial+1+Block+2+Street+13+Kuwait+City+Kuwait"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream/80 text-sm leading-relaxed hover:text-gold transition-colors duration-300"
                  >
                    Shuwaikh Industrial 1 - Block 2, Street 13, Kuwait City
                  </a>
                </div>

                {/* Phone */}
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                  <a 
                    href="tel:+96597759069" 
                    className="text-cream/80 text-sm hover:text-gold transition-colors duration-300"
                  >
                    +965 9775 9069
                  </a>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center justify-center space-x-3">
                  <MessageCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <button
                    onClick={handleWhatsAppClick}
                    className="text-cream/80 text-sm hover:text-gold transition-colors duration-300"
                  >
                    {t('contact.chatWhatsapp')}
                  </button>
                </div>

                {/* Email */}
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                  <a 
                    href="mailto:info@darkom.com" 
                    className="text-cream/80 text-sm hover:text-gold transition-colors duration-300"
                  >
                    info@darkom.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gold/20 text-center"
        >
          <div className="flex flex-col items-center space-y-4">
            <LanguageSwitcher />
            <p className="text-cream/60 text-sm">
              {t('footer.copyright')}
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
