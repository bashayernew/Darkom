'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { cn } from '@/lib/utils'
import LanguageSwitcher from './LanguageSwitcher'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navItems = [
    { href: '/', label: t('navigation.home') },
    { href: '/about', label: t('navigation.about') },
    { href: '/team', label: t('navigation.team') },
    { href: '/services', label: t('navigation.services') },
    { href: '/contact', label: t('navigation.contact') },
  ]

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-dark/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      )}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-50">
            <motion.div
              animate={{ rotateY: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Image
                src="/images/logo-transparent.png"
                alt="Darkom logo"
                width={120}
                height={120}
                className="h-20 w-auto"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation - Better Spaced */}
          <div className="hidden lg:flex items-center justify-center space-x-12 flex-1 max-w-3xl mx-auto">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-cream hover:text-gold transition-colors duration-200 font-medium px-3 py-2 rounded-lg hover:bg-gold/10 text-center whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <button
              onClick={toggleMenu}
              className="lg:hidden relative z-50 p-2 text-cream hover:text-gold transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden absolute top-full left-0 right-0 bg-dark/95 backdrop-blur-md border-t border-gold/20"
            >
              <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className="text-cream hover:text-gold transition-colors duration-200 font-medium py-3 px-4 rounded-lg hover:bg-gold/10 text-center"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="flex justify-center pt-4">
                    <LanguageSwitcher />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Header
