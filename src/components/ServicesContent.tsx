'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

type ServicesContentProps = {
  showPageHeader?: boolean
}

const CVSubmissionSection = () => {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: ''
  })
  const [cvFile, setCvFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.type !== 'application/pdf') {
        setErrors(prev => ({ ...prev, cvFile: 'Please upload a PDF file' }))
        return
      }
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        setErrors(prev => ({ ...prev, cvFile: 'File size must be less than 5MB' }))
        return
      }
      setCvFile(file)
      setErrors(prev => ({ ...prev, cvFile: '' }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    }
    if (!cvFile) {
      newErrors.cvFile = 'Please upload your CV'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    
    try {
      // Create FormData for file upload
      const formDataToSend = new FormData()
      formDataToSend.append('name', formData.name)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('phone', formData.phone)
      formDataToSend.append('position', formData.position)
      formDataToSend.append('message', formData.message)
      if (cvFile) {
        formDataToSend.append('cv', cvFile)
      }

      // Send to API endpoint
      const response = await fetch('/api/submit-cv', {
        method: 'POST',
        body: formDataToSend
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit CV')
      }

      setSubmitSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        message: ''
      })
      setCvFile(null)
      setErrors({})
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    } catch (error: any) {
      console.error('Error submitting CV:', error)
      setErrors({ submit: error.message || 'Failed to submit CV. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="cv-submission" className="py-20 bg-dark scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gold mb-6">
              {t('services.cvSubmission.title')}
            </h2>
            <p className="text-xl text-cream/80 leading-relaxed">
              {t('services.cvSubmission.description')}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="cv-name" className="block text-sm font-semibold text-cream mb-3">
                  {t('services.cvSubmission.fullName')} *
                </label>
                <input
                  type="text"
                  id="cv-name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-dark-gray border-2 border-gold/30 rounded-xl focus:ring-2 focus:ring-gold focus:border-gold transition-all duration-300 text-cream placeholder-cream/50"
                  placeholder={t('services.cvSubmission.placeholderName')}
                  required
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="cv-email" className="block text-sm font-semibold text-cream mb-3">
                  {t('services.cvSubmission.email')} *
                </label>
                <input
                  type="email"
                  id="cv-email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-dark-gray border-2 border-gold/30 rounded-xl focus:ring-2 focus:ring-gold focus:border-gold transition-all duration-300 text-cream placeholder-cream/50"
                  placeholder={t('services.cvSubmission.placeholderEmail')}
                  required
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="cv-phone" className="block text-sm font-semibold text-cream mb-3">
                  {t('services.cvSubmission.phone')} *
                </label>
                <input
                  type="tel"
                  id="cv-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-dark-gray border-2 border-gold/30 rounded-xl focus:ring-2 focus:ring-gold focus:border-gold transition-all duration-300 text-cream placeholder-cream/50"
                  placeholder={t('services.cvSubmission.placeholderPhone')}
                  required
                />
                {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="cv-position" className="block text-sm font-semibold text-cream mb-3">
                  {t('services.cvSubmission.position')}
                </label>
                <input
                  type="text"
                  id="cv-position"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-dark-gray border-2 border-gold/30 rounded-xl focus:ring-2 focus:ring-gold focus:border-gold transition-all duration-300 text-cream placeholder-cream/50"
                  placeholder={t('services.cvSubmission.placeholderPosition')}
                />
              </div>
            </div>

            <div>
              <label htmlFor="cv-file" className="block text-sm font-semibold text-cream mb-3">
                {t('services.cvSubmission.cvFile')} *
              </label>
              <input
                type="file"
                id="cv-file"
                accept=".pdf"
                onChange={handleFileChange}
                className="w-full px-4 py-4 bg-dark-gray border-2 border-gold/30 rounded-xl focus:ring-2 focus:ring-gold focus:border-gold transition-all duration-300 text-cream file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-gold file:text-dark hover:file:bg-gold/90 file:cursor-pointer"
              />
              {errors.cvFile && <p className="text-red-400 text-sm mt-1">{errors.cvFile}</p>}
              {cvFile && <p className="text-cream/70 text-sm mt-2">Selected: {cvFile.name}</p>}
            </div>

            <div>
              <label htmlFor="cv-message" className="block text-sm font-semibold text-cream mb-3">
                {t('services.cvSubmission.message')}
              </label>
              <textarea
                id="cv-message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className="w-full px-4 py-4 bg-dark-gray border-2 border-gold/30 rounded-xl focus:ring-2 focus:ring-gold focus:border-gold transition-all duration-300 text-cream placeholder-cream/50 resize-none"
                placeholder={t('services.cvSubmission.placeholderMessage')}
              />
            </div>

            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400 text-center"
              >
                {t('services.cvSubmission.success')}
              </motion.div>
            )}

            {errors.submit && (
              <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400 text-center">
                {errors.submit}
              </div>
            )}

            <div className="text-center">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                className="btn btn-gold px-8 py-4 text-lg font-semibold rounded-full inline-block hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? t('services.cvSubmission.submitting') : t('services.cvSubmission.submit')}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

const ServicesContent = ({ showPageHeader = true }: ServicesContentProps) => {
  const { t, language } = useLanguage()

  const services = [
    {
      icon: '/images/icon-design.png',
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

      {/* Ready to Work Section */}
      <section className="py-20 bg-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gold mb-6">
              {t('services.readyToWork.title')}
            </h2>
            <p className="text-xl text-cream/80 mb-8 leading-relaxed">
              {t('services.readyToWork.description')}
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/booking"
                className="btn btn-gold px-8 py-4 text-lg font-semibold rounded-full inline-block hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                {t('services.readyToWork.cta')}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-dark-gray">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`mb-12 ${language === 'ar' ? 'text-right' : 'text-center'}`}
            dir={language === 'ar' ? 'rtl' : 'ltr'}
          >
            <span className="text-sm uppercase tracking-[0.3em] text-gold/70 block mb-3">
              {language === 'ar' ? 'حلول متكاملة تلبي احتياجاتك' : 'Comprehensive Solutions'}
            </span>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gold mb-4">
              {language === 'ar' ? 'خدماتنا الشاملة' : 'Our Services'}
            </h2>
            <p className={`text-cream/80 text-lg max-w-3xl ${language === 'ar' ? 'ml-auto' : 'mx-auto'} leading-relaxed`}>
              {language === 'ar' 
                ? 'نقدم مجموعة متكاملة من الخدمات التي تغطي التصميم والتنفيذ والإشراف وتوفير المواد، مع التزام كامل بالجودة والمعايير العالمية.'
                : 'We offer comprehensive construction and design services that transform your vision into reality. From initial concept to final completion, our expert team ensures every project meets the highest standards of quality and craftsmanship.'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group flex"
              >
                <Link href={service.href} className="block w-full flex" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                  <div
                    className={`bg-dark p-8 rounded-lg w-full flex flex-col hover:bg-dark/80 transition-all duration-300 border border-transparent hover:border-gold/30 group-hover:shadow-2xl group-hover:shadow-gold/10 ${
                      language === 'ar' ? 'text-right' : 'text-left'
                    }`}
                  >
                    {/* Service Icon */}
                    {service.icon && (
                      <div className="mb-4 flex-shrink-0">
                        <Image
                          src={service.icon}
                          alt={service.title}
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                    )}

                    {/* Service Title */}
                    <h3
                      className={`text-2xl font-playfair font-semibold text-gold mb-4 group-hover:text-gold/90 transition-colors flex-shrink-0 ${
                        language === 'ar' ? 'text-right' : ''
                      }`}
                    >
                      {service.title}
                    </h3>
                    
                    {/* Service Description */}
                    <p className="text-cream/80 mb-6 leading-relaxed group-hover:text-cream/90 transition-colors flex-shrink-0">
                      {service.description}
                    </p>
                    
                    {/* Features List */}
                    <ul className="space-y-2 mb-6 flex-grow">
                      {Array.isArray(service.features) && service.features.map((feature: any, featureIndex: number) => (
                        <li
                          key={featureIndex}
                          className={`flex items-center gap-2 ${language === 'ar' ? 'flex-row-reverse' : ''}`}
                        >
                          <div className="w-2 h-2 bg-gold rounded-full flex-shrink-0" />
                          <span className="text-cream/70 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Hover Effect */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0 mt-auto">
                      <div className={`w-8 h-0.5 bg-gold ${language === 'ar' ? 'mr-auto' : 'ml-auto'}`}></div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 bg-dark">
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
      <section className="py-20 bg-dark-gray">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gold mb-6">
              {t('services.readyToStart.title')}
            </h2>
            <p className="text-xl text-cream/80 mb-8 leading-relaxed">
              {t('services.readyToStart.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact?type=quotation"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-gold px-8 py-4 text-lg font-semibold rounded-full inline-block hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                {t('services.readyToStart.getQuotation')}
              </motion.a>
              <motion.a
                href="#cv-submission"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-ghost-gold px-8 py-4 text-lg font-semibold rounded-full inline-block hover:bg-gold hover:text-dark transition-all duration-300"
              >
                {t('services.readyToStart.submitCV')}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CV Submission Section */}
      <CVSubmissionSection />
    </>
  )
}

export default ServicesContent
