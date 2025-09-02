'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

const WorkShowcase = () => {
  const { t } = useLanguage()
  const workProjects = [
    {
      src: '/images/luxury-garden-landscaping.jpg',
      alt: 'Beautiful luxury garden with water features and pergola',
      title: 'Luxury Landscaping',
      description: 'Symmetrical garden design with water features and outdoor living spaces'
    },
    {
      src: '/images/luxury-building-night.jpg',
      alt: 'Grand illuminated luxury building with reflective pool',
      title: 'Architectural Excellence',
      description: 'Modern luxury building with sophisticated lighting and landscaping'
    },
    {
      src: '/images/traditional-living-room.jpg',
      alt: 'Lavish Middle Eastern living room with rich textures and chandelier',
      title: 'Interior Design',
      description: 'Traditional luxury interior with exquisite craftsmanship and cultural richness'
    }
  ]

  return (
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
            Our Luxury Projects
          </h2>
          <p className="text-xl text-cream/80 max-w-3xl mx-auto">
            Discover the exceptional quality and attention to detail in every project we undertake
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={project.src}
                    alt={project.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                  />
                  {/* Overlay with project info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-gold font-semibold text-xl mb-2">
                      {project.title}
                    </h3>
                    <p className="text-cream/90 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-dark rounded-2xl p-8 border border-gold/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-playfair font-semibold text-gold mb-4">
              {t('about.readyToStart')}
            </h3>
            <p className="text-cream/80 text-lg mb-6">
              {t('about.readyToStartDesc2')}
            </p>
            <a
              href="/booking"
              className="btn btn-gold px-8 py-4 text-lg font-semibold rounded-full hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-block"
            >
              Book Your Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WorkShowcase
