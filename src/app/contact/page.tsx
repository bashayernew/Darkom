'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BookingCards from '@/components/BookingCards'
import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from 'lucide-react'

export default function Contact() {
  const { t } = useLanguage()
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section with Background */}
      <section className="relative pt-32 pb-20 bg-dark-gray overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/bg-contact.jpg"
            alt="Contact Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-playfair font-bold text-gold mb-6"
          >
            {t('contact.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-cream/80 max-w-3xl mx-auto"
          >
            {t('contact.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {/* Email Card */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-dark-gray rounded-2xl p-8 text-center border border-gold/20 hover:border-gold/40 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-gold mb-3">
                {t('contact.emailUs')}
              </h3>
              <a 
                href="mailto:info@darkom.com" 
                className="text-cream/80 hover:text-gold transition-colors duration-300"
              >
                info@darkom.com
              </a>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-dark-gray rounded-2xl p-8 text-center border border-gold/20 hover:border-gold/40 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-gold mb-3">
                {t('contact.callUs')}
              </h3>
              <a 
                href="tel:+96597759069" 
                className="text-cream/80 hover:text-gold transition-colors duration-300"
              >
                +965 9775 9069
              </a>
            </motion.div>

            {/* WhatsApp Card */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-dark-gray rounded-2xl p-8 text-center border border-gold/20 hover:border-gold/40 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-gold mb-3">
                {t('contact.whatsapp')}
              </h3>
              <a 
                href="https://wa.me/96597759069" 
                className="text-cream/80 hover:text-gold transition-colors duration-300"
              >
                {t('contact.chatWhatsapp')}
              </a>
            </motion.div>

            {/* Office Hours Card */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-dark-gray rounded-2xl p-8 text-center border border-gold/20 hover:border-gold/40 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-gold mb-3">
                {t('contact.officeHours')}
              </h3>
              <p className="text-cream/80 text-sm">
                {t('contact.officeHoursText')}<br />
                {t('contact.officeHoursClosed')}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-dark-gray">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gold mb-6">
                {t('contact.sendMessage')}
              </h2>
              <p className="text-xl text-cream/80 max-w-2xl mx-auto">
                {t('contact.getInTouchDesc')}
              </p>
            </div>

            <div className="bg-dark rounded-2xl shadow-2xl p-8 md:p-12 border border-gold/20">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-cream mb-3">
                      {t('contact.fullName')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-4 bg-dark-gray border-2 border-gold/30 rounded-xl focus:ring-2 focus:ring-gold focus:border-gold transition-all duration-300 text-cream placeholder-cream/50"
                      placeholder={t('contact.placeholderFullName')}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-cream mb-3">
                      {t('contact.phoneNumber')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-4 bg-dark-gray border-2 border-gold/30 rounded-xl focus:ring-2 focus:ring-gold focus:border-gold transition-all duration-300 text-cream placeholder-cream/50"
                      placeholder={t('contact.placeholderPhone')}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-cream mb-3">
                    {t('contact.emailAddress')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-4 bg-dark-gray border-2 border-gold/30 rounded-xl focus:ring-2 focus:ring-gold focus:border-gold transition-all duration-300 text-cream placeholder-cream/50"
                    placeholder={t('contact.placeholderEmail')}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-cream mb-3">
                    {t('contact.subject')}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-4 bg-dark-gray border-2 border-gold/30 rounded-xl focus:ring-2 focus:ring-gold focus:border-gold transition-all duration-300 text-cream placeholder-cream/50"
                    placeholder={t('contact.placeholderSubject')}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-cream mb-3">
                    {t('contact.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-4 bg-dark-gray border-2 border-gold/30 rounded-xl focus:ring-2 focus:ring-gold focus:border-gold transition-all duration-300 text-cream placeholder-cream/50 resize-none"
                    placeholder={t('contact.placeholderMessage')}
                    required
                  ></textarea>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-gold to-gold/80 text-dark font-bold py-4 px-8 rounded-xl hover:from-gold/90 hover:to-gold/70 transition-all duration-300 flex items-center justify-center gap-3 text-lg"
                >
                  <Send className="w-5 h-5" />
                  {t('contact.sendMessageCta')}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gold mb-6">
              {t('contact.findUs')}
            </h2>
            <p className="text-xl text-cream/80 max-w-3xl mx-auto">
              {t('contact.findUsDesc')}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-dark-gray rounded-2xl p-8 md:p-12 border border-gold/20"
          >
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mr-6">
                <MapPin className="w-8 h-8 text-gold" />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-playfair font-semibold text-gold mb-2">
                  {t('contact.headOffice')}
                </h3>
                <p className="text-cream/80 text-lg">
                  Shuwaikh Industrial 1 - Block 2, Street 13, Kuwait City
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://maps.google.com/?q=Shuwaikh+Industrial+1+Block+2+Street+13+Kuwait+City+Kuwait"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-cta px-8 py-4 text-lg font-semibold rounded-xl inline-flex items-center gap-3"
              >
                <MapPin className="w-5 h-5" />
                {t('contact.openInMaps')}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking Section */}
      <BookingCards />
      
      <Footer />
    </main>
  )
}
