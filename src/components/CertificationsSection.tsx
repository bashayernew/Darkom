'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { Award, Shield, Leaf, Globe } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function CertificationsSection() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null)
  const { t } = useLanguage()
  
  const certifications = [
    {
      name: t('certifications.iso9001.name'),
      description: t('certifications.iso9001.description'),
      icon: <Award className="w-12 h-12 text-gold" />,
      color: "from-blue-500/20 to-blue-600/20"
    },
    {
      name: t('certifications.iso45001.name'),
      description: t('certifications.iso45001.description'),
      icon: <Shield className="w-12 h-12 text-gold" />,
      color: "from-green-500/20 to-green-600/20"
    },
    {
      name: t('certifications.leed.name'),
      description: t('certifications.leed.description'),
      icon: <Leaf className="w-12 h-12 text-gold" />,
      color: "from-emerald-500/20 to-emerald-600/20"
    },
    {
      name: t('certifications.breeam.name'),
      description: t('certifications.breeam.description'),
      icon: <Globe className="w-12 h-12 text-gold" />,
      color: "from-teal-500/20 to-teal-600/20"
    },
  ]

  return (
    <section className="py-16 bg-dark-gray">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gold mb-6">
            {t('certifications.title')}
          </h2>
          <p className="text-xl text-cream/80 max-w-3xl mx-auto">
            {t('certifications.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative h-80 perspective-1000"
              onMouseEnter={() => setFlippedCard(index)}
              onMouseLeave={() => setFlippedCard(null)}
              onTouchStart={() => setFlippedCard(flippedCard === index ? null : index)}
            >
              {/* Card Front */}
              <motion.div
                className="absolute inset-0 w-full h-full bg-dark rounded-2xl border border-gold/20 p-8 cursor-pointer"
                animate={{ 
                  rotateY: flippedCard === index ? 180 : 0,
                }}
                transition={{ duration: 0.6 }}
                style={{ backfaceVisibility: 'hidden' }}
              >
                <div className="flex flex-col items-center text-center h-full justify-center">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${cert.color} flex items-center justify-center mx-auto mb-6`}>
                    {cert.icon}
                  </div>
                  <h3 className="text-xl font-playfair font-semibold text-gold mb-4">
                    {cert.name}
                  </h3>
                  <p className="text-cream/80 text-sm leading-relaxed">
                    Hover or tap to see details
                  </p>
                </div>
              </motion.div>

              {/* Card Back */}
              <motion.div
                className="absolute inset-0 w-full h-full bg-gold/10 rounded-2xl border border-gold p-8 cursor-pointer"
                animate={{ 
                  rotateY: flippedCard === index ? 0 : -180,
                }}
                transition={{ duration: 0.6 }}
                style={{ backfaceVisibility: 'hidden' }}
              >
                <div className="flex flex-col h-full justify-center">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${cert.color} flex items-center justify-center mx-auto mb-6`}>
                    {cert.icon}
                  </div>
                  <h3 className="text-xl font-playfair font-semibold text-gold mb-4 text-center">
                    {cert.name}
                  </h3>
                  <p className="text-cream/80 text-sm leading-relaxed text-center">
                    {cert.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-dark rounded-2xl p-8 border border-gold/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-playfair font-semibold text-gold mb-4">
              {t('certifications.whyMatter')}
            </h3>
            <p className="text-cream/80 text-lg leading-relaxed mb-6">
              {t('certifications.whyMatterDesc')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-gold" />
                </div>
                <h4 className="text-gold font-semibold mb-2">{t('certifications.qualityAssured.title')}</h4>
                <p className="text-cream/70 text-sm">{t('certifications.qualityAssured.description')}</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-gold" />
                </div>
                <h4 className="text-gold font-semibold mb-2">{t('certifications.safetyFirst.title')}</h4>
                <p className="text-cream/70 text-sm">{t('certifications.safetyFirst.description')}</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Leaf className="w-6 h-6 text-gold" />
                </div>
                <h4 className="text-gold font-semibold mb-2">{t('certifications.ecoFriendly.title')}</h4>
                <p className="text-cream/70 text-sm">{t('certifications.ecoFriendly.description')}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
