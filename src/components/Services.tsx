'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { Building2, Palette, Hammer, Sparkles, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const Services = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null)
  const { t } = useLanguage()
  
  const services = [
    {
      title: t('services.architecture.title'),
      description: t('services.architecture.description'),
      icon: <Building2 className="w-8 h-8 text-gold" />,
      features: ['Concept Development', '3D Modeling', 'Sustainable Design', 'Project Planning']
    },
    {
      title: t('services.interior.title'),
      description: t('services.interior.description'),
      icon: <Palette className="w-8 h-8 text-gold" />,
      features: [
        t('services.interiorFeatures.spacePlanning'),
        t('services.interiorFeatures.colorSchemes'),
        t('services.interiorFeatures.furnitureSelection'),
        t('services.interiorFeatures.lightingDesign')
      ]
    },
    {
      title: t('services.construction.title'),
      description: t('services.construction.description'),
      icon: <Hammer className="w-8 h-8 text-gold" />,
      features: [
        t('services.constructionFeatures.qualityMaterials'),
        t('services.constructionFeatures.expertCraftsmanship'),
        t('services.constructionFeatures.timelineManagement'),
        t('services.constructionFeatures.safetyStandards')
      ]
    },
    {
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
      icon: <Sparkles className="w-8 h-8 text-gold" />,
      features: [
        t('services.consultingFeatures.projectAssessment'),
        t('services.consultingFeatures.costAnalysis'),
        t('services.consultingFeatures.regulatoryCompliance'),
        t('services.consultingFeatures.riskManagement')
      ]
    }
  ]

  return (
    <section className="py-16 bg-dark-gray">
      <div className="container mx-auto px-4">
        {/* Section Header with Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gold mb-6">
            {t('services.title')}
          </h2>
          <p className="text-xl text-cream/80 max-w-4xl mx-auto leading-relaxed">
            {t('services.description')}
          </p>
        </motion.div>

        {/* Services Flip Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
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
                className="absolute inset-0 w-full h-full bg-dark rounded-2xl border border-gold/20 p-6 cursor-pointer"
                animate={{ 
                  rotateY: flippedCard === index ? 180 : 0,
                }}
                transition={{ duration: 0.6 }}
                style={{ backfaceVisibility: 'hidden' }}
              >
                <div className="flex flex-col items-center text-center h-full justify-center">
                  <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-playfair font-semibold text-gold mb-4">
                    {service.title}
                  </h3>
                  <p className="text-cream/80 text-sm leading-relaxed">
                    {t('services.hoverText')}
                  </p>
                </div>
              </motion.div>

              {/* Card Back */}
              <motion.div
                className="absolute inset-0 w-full h-full bg-gold/10 rounded-2xl border border-gold p-6 cursor-pointer"
                animate={{ 
                  rotateY: flippedCard === index ? 0 : -180,
                }}
                transition={{ duration: 0.6 }}
                style={{ backfaceVisibility: 'hidden' }}
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <h3 className="text-xl font-playfair font-semibold text-gold mb-4 text-center">
                      {service.title}
                    </h3>
                    <p className="text-cream/80 text-sm leading-relaxed mb-4 text-center">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-cream/70 text-xs flex items-center">
                          <div className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href="/services"
                    className="w-full btn btn-gold py-2 text-sm font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-center"
                  >
                    {t('services.learnMore')}
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/services"
            className="btn btn-cta px-10 py-4 text-lg font-semibold rounded-full inline-flex items-center gap-2"
          >
            {t('services.cta')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
