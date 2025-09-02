'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const { t } = useLanguage()

  const handleVideoLoad = () => {
    setIsVideoLoaded(true)
    setVideoError(false)
  }

  const handleVideoError = () => {
    setVideoError(true)
    setIsVideoLoaded(false)
  }

  useEffect(() => {
    // Try to play the video when component mounts
    if (videoRef.current) {
      const video = videoRef.current
      
      // Set video properties for better playback
      video.muted = true
      video.playsInline = true
      video.loop = true
      video.preload = 'auto'
      
      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Video autoplay successful
            setIsVideoLoaded(true)
            setVideoError(false)
          })
          .catch((error) => {
            // Autoplay was prevented, but video is still loaded
            console.log('Video autoplay prevented, but video is loaded')
            setIsVideoLoaded(true)
            setVideoError(false)
          })
      }
      
      // Handle video loading events
      const handleLoadedData = () => {
        setIsVideoLoaded(true)
        setVideoError(false)
      }
      
      const handleError = () => {
        setVideoError(true)
        setIsVideoLoaded(false)
      }
      
      video.addEventListener('loadeddata', handleLoadedData)
      video.addEventListener('error', handleError)
      
      return () => {
        video.removeEventListener('loadeddata', handleLoadedData)
        video.removeEventListener('error', handleError)
      }
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        {!videoError ? (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            onLoadedData={handleVideoLoad}
            onError={handleVideoError}
            preload="auto"
          >
            <source src="/videos/hero-background.mp4" type="video/mp4" />
            {/* Fallback to image if video doesn't load */}
            <Image
              src="/images/bg-cont.jpg"
              alt="Hero background"
              fill
              className="object-cover"
              priority
            />
          </video>
        ) : null}
        
        {/* Fallback Image (shown while video loads or if video fails) */}
        {(!isVideoLoaded || videoError) && (
          <Image
            src="/images/bg-cont.jpg"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="heading-xl text-cream mb-6 text-shadow-xl"
        >
          {t('hero.title')}
          <span className="block text-gold text-shadow-lg">{t('hero.titleHighlight')}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-cream/90 mb-8 max-w-3xl mx-auto text-shadow"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center items-center"
        >
          <Link
            href="/contact"
            className="btn btn-cta px-8 py-4 text-lg font-semibold rounded-full"
          >
            {t('hero.cta')}
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gold rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gold rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
