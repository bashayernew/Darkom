'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function CertificationsSection() {
  const { t } = useLanguage()
  const certifications = [
    {
      name: t('certifications.iso9001.name'),
      description: t('certifications.iso9001.description'),
      image: '/images/ISO 9001.webp'
    },
    {
      name: t('certifications.iso45001.name'),
      description: t('certifications.iso45001.description'),
      image: '/images/ISO 45001.webp'
    },
    {
      name: t('certifications.leed.name'),
      description: t('certifications.leed.description'),
      image: '/images/LEED Certification.png'
    },
    {
      name: t('certifications.breeam.name'),
      description: t('certifications.breeam.description'),
      image: '/images/BREEAM.webp'
    }
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
              className="bg-dark rounded-[32px] border border-gold/15 p-6 flex flex-col items-center text-center space-y-6 shadow-[0_20px_35px_-25px_rgba(196,158,87,0.6)]"
            >
              <div className="relative w-32 h-32 rounded-full overflow-hidden border border-gold/30 bg-dark-gray/40">
                <Image
                  src={cert.image}
                  alt={`${cert.name} logo`}
                  fill
                  sizes="(max-width: 768px) 70vw, (max-width: 1024px) 40vw, 20vw"
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-playfair font-semibold text-gold mb-3">
                  {cert.name}
                </h3>
                <p className="text-cream/80 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
