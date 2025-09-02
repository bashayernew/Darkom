'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Users, Video, Calendar, Clock, X, CheckCircle, Phone, Mail, MapPin, ChevronLeft, ChevronRight } from 'lucide-react'
import { sanitizeInput, validateEmail, validatePhone } from '@/lib/utils'
import { useLanguage } from '@/contexts/LanguageContext'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  serviceType: string
}

const BookingModal = ({ isOpen, onClose, serviceType }: BookingModalProps) => {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    date: '',
    time: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: sanitizeInput(value) }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  // Calendar helper functions
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()
    
    const days = []
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day))
    }
    
    return days
  }

  const isDateAvailable = (date: Date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return date >= today
  }

  const handleDateSelect = (date: Date) => {
    if (isDateAvailable(date)) {
      setSelectedDate(date)
      setFormData(prev => ({ ...prev, date: date.toISOString().split('T')[0] }))
      setSelectedTime('') // Reset time when date changes
      if (errors.date) {
        setErrors(prev => ({ ...prev, date: '' }))
      }
    }
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
    setFormData(prev => ({ ...prev, time }))
    if (errors.time) {
      setErrors(prev => ({ ...prev, time: '' }))
    }
  }

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentMonth(prev => {
      const newMonth = new Date(prev)
      if (direction === 'prev') {
        newMonth.setMonth(prev.getMonth() - 1)
      } else {
        newMonth.setMonth(prev.getMonth() + 1)
      }
      return newMonth
    })
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = t('booking.nameRequired')
    }

    if (!formData.email.trim()) {
      newErrors.email = t('booking.emailRequired')
    } else if (!validateEmail(formData.email)) {
      newErrors.email = t('booking.emailInvalid')
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t('booking.phoneRequired')
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = t('booking.phoneInvalid')
    }

    if (!formData.date) {
      newErrors.date = t('booking.dateRequired')
    }

    if (!formData.time) {
      newErrors.time = t('booking.timeRequired')
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
      // Simulate API call - placeholder for email submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setSubmitSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        date: '',
        time: ''
      })
      setSelectedDate(null)
      setSelectedTime('')
      setErrors({})
      
      // Close modal after 2 seconds
      setTimeout(() => {
        onClose()
        setSubmitSuccess(false)
      }, 2000)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-dark-gray rounded-2xl p-8 max-w-2xl w-full border border-gold/20 max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-playfair font-semibold text-gold">
              {t('booking.bookConsultation')}
            </h3>
            <button
              onClick={onClose}
              className="text-gold/60 hover:text-gold transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {submitSuccess ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-8"
            >
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gold mb-2">{t('booking.bookingConfirmed')}</h4>
              <p className="text-cream/80">
                {t('booking.bookingConfirmedDesc')}
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Calendar Section */}
              <div>
                <label className="block text-cream font-medium mb-3">
                  <Calendar className="inline w-5 h-5 mr-2" />
                  {t('booking.selectDate')} *
                </label>
                <div className="bg-dark rounded-lg p-4 border border-gray-700">
                  {/* Calendar Header */}
                  <div className="flex items-center justify-between mb-4">
                    <button
                      type="button"
                      onClick={() => navigateMonth('prev')}
                      className="p-2 hover:bg-gold/10 rounded-lg transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5 text-gold" />
                    </button>
                    <h4 className="text-lg font-semibold text-gold">
                      {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </h4>
                    <button
                      type="button"
                      onClick={() => navigateMonth('next')}
                      className="p-2 hover:bg-gold/10 rounded-lg transition-colors"
                    >
                      <ChevronRight className="w-5 h-5 text-gold" />
                    </button>
                  </div>
                  
                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                      <div key={day} className="text-center text-sm text-cream/60 py-2">
                        {day}
                      </div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-7 gap-1">
                    {getDaysInMonth(currentMonth).map((day, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => day && handleDateSelect(day)}
                        disabled={!day || !isDateAvailable(day)}
                        className={`p-2 text-sm rounded-lg transition-colors ${
                          !day
                            ? 'invisible'
                            : !isDateAvailable(day)
                            ? 'text-gray-500 cursor-not-allowed'
                            : selectedDate && day.toDateString() === selectedDate.toDateString()
                            ? 'bg-gold text-dark font-semibold'
                            : 'text-cream hover:bg-gold/20'
                        }`}
                      >
                        {day?.getDate()}
                      </button>
                    ))}
                  </div>
                </div>
                {errors.date && (
                  <p className="text-red-400 text-sm mt-1">{errors.date}</p>
                )}
              </div>

              {/* Time Slots Section */}
              {selectedDate && (
                <div>
                  <label className="block text-cream font-medium mb-3">
                    <Clock className="inline w-5 h-5 mr-2" />
                    {t('booking.selectTime')} *
                  </label>
                  <div className="space-y-3">
                    {Object.entries(t('booking.timeSlots')).map(([period, times]) => (
                      <div key={period}>
                        <h5 className="text-gold font-medium mb-2 capitalize">
                          {t(`booking.${period}`)}
                        </h5>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {(times as string[]).map((time) => (
                            <button
                              key={time}
                              type="button"
                              onClick={() => handleTimeSelect(time)}
                              className={`p-3 text-sm rounded-lg border transition-colors ${
                                selectedTime === time
                                  ? 'bg-gold text-dark border-gold font-semibold'
                                  : 'bg-dark text-cream border-gray-700 hover:border-gold/50'
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  {errors.time && (
                    <p className="text-red-400 text-sm mt-1">{errors.time}</p>
                  )}
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-cream font-medium mb-2">
                  {t('booking.fullName')} *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-dark border rounded-lg text-cream placeholder-cream/50 focus:outline-none focus:ring-2 focus:ring-gold transition-colors ${
                    errors.name ? 'border-red-500' : 'border-gray-700'
                  }`}
                  placeholder={t('booking.placeholderFullName')}
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-cream font-medium mb-2">
                  {t('booking.emailAddress')} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-dark border rounded-lg text-cream placeholder-cream/50 focus:outline-none focus:ring-2 focus:ring-gold transition-colors ${
                    errors.email ? 'border-red-500' : 'border-gray-700'
                  }`}
                  placeholder={t('booking.placeholderEmail')}
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-cream font-medium mb-2">
                  {t('booking.phoneNumber')} *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-dark border rounded-lg text-cream placeholder-cream/50 focus:outline-none focus:ring-2 focus:ring-gold transition-colors ${
                    errors.phone ? 'border-red-500' : 'border-gray-700'
                  }`}
                  placeholder={t('booking.placeholderPhone')}
                />
                {errors.phone && (
                  <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-cream font-medium mb-2">
                  {t('booking.additionalDetails')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg text-cream placeholder-cream/50 focus:outline-none focus:ring-2 focus:ring-gold transition-colors resize-none"
                  placeholder={t('booking.placeholderMessage')}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn btn-gold py-3 text-lg font-semibold rounded-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-dark border-t-transparent rounded-full animate-spin mr-2" />
                    {t('booking.booking')}
                  </>
                ) : (
                  <>
                    <Calendar className="w-5 h-5 mr-2" />
                    {t('booking.requestBooking')}
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

const BookingCards = () => {
  const { t } = useLanguage()
  const [flippedCard, setFlippedCard] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('')

  const consultationServices = [
    {
      id: 1,
      title: t('booking.inPerson'),
      description: t('booking.inPersonDesc'),
      icon: <Users className="w-8 h-8 text-gold" />,
      features: t('booking.inPersonFeatures'),
      benefits: t('booking.inPersonBenefits').map((benefit, index) => ({
        icon: [<Calendar className="w-6 h-6 text-gold" />, <Clock className="w-6 h-6 text-gold" />, <CheckCircle className="w-6 h-6 text-gold" />, <MapPin className="w-6 h-6 text-gold" />][index],
        text: benefit.text
      }))
    },
    {
      id: 2,
      title: t('booking.onlineMeeting'),
      description: t('booking.onlineMeetingDesc'),
      icon: <Video className="w-8 h-8 text-gold" />,
      features: t('booking.onlineFeatures'),
      benefits: t('booking.onlineBenefits').map((benefit, index) => ({
        icon: [<Video className="w-6 h-6 text-gold" />, <Clock className="w-6 h-6 text-gold" />, <Users className="w-6 h-6 text-gold" />, <CheckCircle className="w-6 h-6 text-gold" />][index],
        text: benefit.text
      }))
    }
  ]

  const handleBookNow = (serviceTitle: string) => {
    setSelectedService(serviceTitle)
    setIsModalOpen(true)
  }

  return (
    <>
      <section className="py-16 bg-dark-gray">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gold mb-6">
              {t('booking.title')}
            </h2>
            <p className="text-xl text-cream/80 max-w-2xl mx-auto">
              {t('booking.description')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {consultationServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative h-96 perspective-1000"
                onMouseEnter={() => setFlippedCard(service.id)}
                onMouseLeave={() => setFlippedCard(null)}
                onTouchStart={() => setFlippedCard(flippedCard === service.id ? null : service.id)}
              >
                {/* Card Front */}
                <motion.div
                  className="absolute inset-0 w-full h-full bg-dark rounded-2xl border border-gold/20 p-8 cursor-pointer"
                  animate={{ 
                    rotateY: flippedCard === service.id ? 180 : 0,
                  }}
                  transition={{ duration: 0.6 }}
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="flex flex-col items-center text-center h-full justify-center">
                    <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-playfair font-semibold text-gold mb-4">
                      {service.title}
                    </h3>
                    <p className="text-cream/80 text-sm leading-relaxed">
                      {t('booking.hoverText')}
                    </p>
                  </div>
                </motion.div>

                {/* Card Back */}
                <motion.div
                  className="absolute inset-0 w-full h-full bg-gold/10 rounded-2xl border border-gold p-8 cursor-pointer"
                  animate={{ 
                    rotateY: flippedCard === service.id ? 0 : -180,
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
                      <div className="space-y-2 mb-4">
                        {service.features.map((feature, idx) => (
                          <p key={idx} className="text-xs text-gold/80">• {feature}</p>
                        ))}
                      </div>
                    </div>
                    <button
                      onClick={() => handleBookNow(service.title)}
                      className="w-full btn btn-cta py-3 text-lg font-semibold rounded-lg"
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      {t('booking.requestBooking')}
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceType={selectedService}
      />
    </>
  )
}

export default BookingCards
