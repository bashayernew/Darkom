'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

const IntroGallery = () => {
  const { t } = useLanguage()
  const introImages = [
    {
      src: '/images/intro-majlis-luxury.jpg', // First image: Luxurious Middle Eastern majlis/salon
      alt: 'Luxurious Middle Eastern majlis with ornate wood carvings, crystal chandelier, and plush seating',
      description: 'Traditional Luxury'
    },
    {
      src: '/images/intro-tropical-house.jpg', // Second image: Tropical luxury house at night
      alt: 'Illuminated tropical luxury house with palm trees, water views, and outdoor living spaces',
      description: 'Modern Elegance'
    }
  ]

  return (
    <section className="py-16 bg-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Compelling Hook & Intro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gold mb-6">
              {t('intro.title')}
            </h2>
            <p className="text-xl text-cream/80 max-w-4xl mx-auto leading-relaxed mb-8">
              {t('intro.description')}
            </p>
            <p className="text-lg text-cream/70 max-w-3xl mx-auto leading-relaxed">
              {t('intro.subDescription')}
            </p>
          </motion.div>

          {/* Two-Image Layout with Text */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left: First Image - Traditional Luxury */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                <Image
                  src={introImages[0].src}
                  alt={introImages[0].alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>

            {/* Right: Compelling Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6 flex flex-col justify-center"
            >
              <h3 className="heading-md text-gold text-center lg:text-left">
                {t('intro.whyChoose')}
              </h3>
              <div className="space-y-4 text-cream/80 leading-relaxed text-center lg:text-left">
                <p>
                  {t('intro.whyChooseText1')}
                </p>
                <p>
                  {t('intro.whyChooseText2')}
                </p>
                <p>
                  {t('intro.whyChooseText3')}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Second Row: Text Left, Image Right */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left: More Compelling Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6 flex flex-col justify-center"
            >
              <h3 className="heading-md text-gold text-center lg:text-left">
                {t('intro.ourPromise')}
              </h3>
              <div className="space-y-4 text-cream/80 leading-relaxed text-center lg:text-left">
                <p>
                  {t('intro.promiseText1')}
                </p>
                <p>
                  {t('intro.promiseText2')}
                </p>
                <p>
                  {t('intro.promiseText3')}
                </p>
              </div>
            </motion.div>

            {/* Right: Second Image - Modern Elegance */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                <Image
                  src={introImages[1].src}
                  alt={introImages[1].alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-dark-gray rounded-2xl p-8 border border-gold/20 max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-playfair font-semibold text-gold mb-4">
                {t('intro.whyChoose')}
              </h3>
              <p className="text-cream/80 text-lg mb-6 leading-relaxed">
                {t('intro.whyChooseText1')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/about"
                  className="btn btn-cta px-8 py-4 text-lg font-semibold rounded-full"
                >
                  {t('intro.cta1')}
                </Link>
                <Link
                  href="/team"
                  className="btn btn-ghost-gold px-8 py-4 text-lg font-semibold rounded-full"
                >
                  {t('intro.cta2')}
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default IntroGallery
