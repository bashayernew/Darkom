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
    <section className="bg-dark">
      <div className="relative w-full h-[90vh] min-h-[600px] overflow-hidden">
        {!videoError ? (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            onLoadedData={handleVideoLoad}
            onError={handleVideoError}
            preload="auto"
          >
            <source src="/images/try%20it.mp4" type="video/mp4" />
          </video>
        ) : null}

        {(!isVideoLoaded || videoError) && (
          <Image
            src="/images/bg-cont.jpg"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
        )}
      </div>

      {/* Text content below video */}
      <div className="container mx-auto px-4 py-16 text-center max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="heading-xl text-cream mb-6"
        >
          {t('hero.title')}
          <span className="block text-gold">{t('hero.titleHighlight')}</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-gold mb-8 max-w-3xl mx-auto"
        >
          {t('hero.subtitle')}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center"
        >
          <Link
            href="/contact"
            className="btn btn-cta px-10 py-4 text-lg font-semibold rounded-full"
          >
            {t('hero.cta')}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
