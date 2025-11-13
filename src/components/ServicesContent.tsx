'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

type ServicesContentProps = {
  showPageHeader?: boolean
}

const ServicesContent = ({ showPageHeader = true }: ServicesContentProps) => {
  const { t, language } = useLanguage()
  const englishServices = [
    {
      icon: '/images/icon-construction.png',
      title: t('services.architecture.title'),
      description: t('services.architecture.description'),
      features: t('services.architecture.features'),
      href: '/contact'
    },
    {
      icon: '/images/icon-interior.png',
      title: t('services.interior.title'),
      description: t('services.interior.description'),
      features: t('services.interior.features'),
      href: '/contact'
    },
    {
      icon: '/images/icon-facade.png',
      title: t('services.facade.title'),
      description: t('services.facade.description'),
      features: t('services.facade.features'),
      href: '/contact'
    },
    {
      icon: '/images/icon-landscape.png',
      title: t('services.landscaping.title'),
      description: t('services.landscaping.description'),
      features: t('services.landscaping.features'),
      href: '/contact'
    },
    {
      icon: '/images/icon-model.png',
      title: t('services.modeling3d.title'),
      description: t('services.modeling3d.description'),
      features: t('services.modeling3d.features'),
      href: '/contact'
    },
    {
      icon: '/images/icon-design.png',
      title: t('services.renovation.title'),
      description: t('services.renovation.description'),
      features: t('services.renovation.features'),
      href: '/contact'
    },
    {
      icon: '/images/icon-construction.png',
      title: t('services.construction.title'),
      description: t('services.construction.description'),
      features: t('services.construction.features'),
      href: '/contact'
    },
    {
      icon: '/images/icon-interior.png',
      title: t('services.materials.title'),
      description: t('services.materials.description'),
      features: t('services.materials.features'),
      href: '/contact'
    }
  ]

  const arabicServices = [
    {
      icon: '/images/icon-design.png',
      title: 'التصميم',
      description: 'التصميم الداخلي والخارجي والواجهات والحدائق',
      features: [
        'إعداد المخططات الهندسية والمعمارية حسب المواصفات',
        'استخدام برامج حديثة لضمان الدقة والجودة'
      ],
      href: '/contact'
    },
    {
      icon: '/images/icon-construction.png',
      title: 'التنفيذ',
      description: 'تنفيذ المشاريع طبقًا للمواصفات والمخططات',
      features: [
        'تنفيذ المشاريع طبقًا للمواصفات والمخططات',
        'الإشراف على جميع مراحل البناء والتشطيب'
      ],
      href: '/contact'
    },
    {
      icon: '/images/icon-interior.png',
      title: 'الخدمات',
      description: 'صيانة وترميم المباني والمنشآت',
      features: [
        'صيانة وترميم المباني والمنشآت',
        'تقديم الاستشارات الهندسية وخدمات ما بعد التنفيذ'
      ],
      href: '/contact'
    },
    {
      icon: '/images/icon-landscape.png',
      title: 'مواد البناء',
      description: 'توريد رخام، عازل، حجر، خشب، سيراميك، لاصق من السعودية',
      features: [
        'توريد رخام، عازل، حجر، خشب، سيراميك، لاصق من السعودية',
        'توريد أبواب',
        'التعاون مع أفضل الموردين داخل وخارج الكويت',
        'الالتزام بمعايير السلامة والجودة في اختيار المواد'
      ],
      href: '/contact'
    }
  ]

  const services = language === 'ar' ? arabicServices : englishServices

  const processSteps = [
    {
      step: '01',
      title: t('services.process.consultation.title'),
      description: t('services.process.consultation.description')
    },
    {
      step: '02',
      title: t('services.process.conceptDesign.title'),
      description: t('services.process.conceptDesign.description')
    },
    {
      step: '03',
      title: t('services.process.detailedPlanning.title'),
      description: t('services.process.detailedPlanning.description')
    },
    {
      step: '04',
      title: t('services.process.construction.title'),
      description: t('services.process.construction.description')
    },
    {
      step: '05',
      title: t('services.process.completion.title'),
      description: t('services.process.completion.description')
    }
  ]

  return (
    <>
      {showPageHeader && (
        <section className="relative pt-32 pb-20 bg-dark-gray overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/images/consulting.jpg"
              alt="Our Services Background"
              fill
              className="object-cover"
              priority
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/60" />
          </div>
          
          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-playfair font-bold text-gold mb-6"
            >
              {t('services.title')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-cream/80 max-w-3xl mx-auto"
            >
              {t('services.description')}
            </motion.p>
          </div>
        </section>
      )}

      {/* Services Grid */}
      <section className="py-20 bg-dark">
        <div className="container mx-auto px-4">
          {language === 'ar' && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12 text-right"
              dir="rtl"
            >
              <span className="text-sm uppercase tracking-[0.3em] text-gold/70 block mb-3">
                حلول متكاملة تلبي احتياجاتك
              </span>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gold mb-4">
                نقدم مجموعة متكاملة من الخدمات
              </h2>
              <p className="text-cream/80 text-lg max-w-3xl ml-auto leading-relaxed">
                نقدم مجموعة متكاملة من الخدمات التي تغطي التصميم والتنفيذ والإشراف وتوفير المواد، مع التزام كامل بالجودة والمعايير العالمية.
              </p>
            </motion.div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Link href={service.href} className="block" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                  <div
                    className={`bg-dark-gray p-8 rounded-lg h-full hover:bg-dark-gray/80 transition-all duration-300 border border-transparent hover:border-gold/30 group-hover:shadow-2xl group-hover:shadow-gold/10 ${
                      language === 'ar' ? 'text-right' : 'text-left'
                    }`}
                  >
                    {/* Service Title */}
                    <h3
                      className={`text-2xl font-playfair font-semibold text-gold mb-4 group-hover:text-gold/90 transition-colors ${
                        language === 'ar' ? 'text-right' : ''
                      }`}
                    >
                      {service.title}
                    </h3>
                    
                    {/* Service Description */}
                    <p className="text-cream/80 mb-6 leading-relaxed group-hover:text-cream/90 transition-colors">
                      {service.description}
                    </p>
                    
                    {/* Features List */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature: any, featureIndex: number) => (
                        <li
                          key={featureIndex}
                          className={`flex items-center gap-2 ${language === 'ar' ? 'flex-row-reverse' : ''}`}
                        >
                          <div className="w-2 h-2 bg-gold rounded-full" />
                          <span className="text-cream/70 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Hover Effect */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-0.5 bg-gold mx-auto"></div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Design Process */}
      <section className="py-20 bg-dark-gray">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gold mb-6">
              {t('services.process.title')}
            </h2>
            <p className="text-xl text-cream/80 max-w-3xl mx-auto">
              {t('services.process.description')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-dark font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="text-xl font-playfair font-semibold text-gold mb-3">
                  {step.title}
                </h3>
                <p className="text-cream/80 leading-relaxed text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gold mb-6">
              {t('about.readyToStart')}
            </h2>
            <p className="text-xl text-cream/80 mb-8 leading-relaxed">
              {t('about.readyToStartDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-gold px-8 py-4 text-lg font-semibold rounded-full inline-block hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                {t('about.getStarted')}
              </motion.a>
              <motion.a
                href="/booking"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-ghost-gold px-8 py-4 text-lg font-semibold rounded-full inline-block hover:bg-gold hover:text-dark transition-all duration-300"
              >
                {t('about.bookConsultation')}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default ServicesContent
