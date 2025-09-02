'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { useState } from 'react'

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const switchLanguage = (newLanguage: 'en' | 'ar') => {
    setLanguage(newLanguage)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 text-cream/80 hover:text-gold transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-gold/10"
        aria-label="Switch language"
      >
        <span className="text-sm font-medium">
          {language === 'en' ? 'EN' : 'AR'}
        </span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-dark border border-gold/20 rounded-lg shadow-lg z-50 min-w-[80px]">
          <button
            onClick={() => switchLanguage('en')}
            className={`w-full text-left px-3 py-2 text-sm transition-colors duration-200 first:rounded-t-lg ${
              language === 'en' 
                ? 'text-gold bg-gold/10' 
                : 'text-cream/80 hover:text-gold hover:bg-gold/5'
            }`}
          >
            EN
          </button>
          <button
            onClick={() => switchLanguage('ar')}
            className={`w-full text-left px-3 py-2 text-sm transition-colors duration-200 last:rounded-b-lg ${
              language === 'ar' 
                ? 'text-gold bg-gold/10' 
                : 'text-cream/80 hover:text-gold hover:bg-gold/5'
            }`}
          >
            AR
          </button>
        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher
