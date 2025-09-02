'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const ProjectsGallery = () => {
  const projects = [
    {
      src: '/images/luxury-kitchen.jpg',
      alt: 'Luxurious classic kitchen with crystal chandelier and marble countertops',
      description: 'Classic Luxury Kitchen'
    },
    {
      src: '/images/elegant-cafe-interior.jpg',
      alt: 'Elegant minimalist cafe with warm lighting and sophisticated design',
      description: 'Sophisticated Cafe Design'
    },
    {
      src: '/images/luxury-outdoor-living.jpg',
      alt: 'Luxurious outdoor living space with pergola, fountain, and tropical landscaping',
      description: 'Outdoor Living Excellence'
    },
    {
      src: '/images/modern-luxury-building.jpg',
      alt: 'Modern luxury building with contemporary architecture and palm tree landscaping',
      description: 'Contemporary Architecture'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section className="py-20 bg-dark-gray">
      <div className="container mx-auto px-4 text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-playfair font-bold text-cream mb-16"
        >
          Introducing outstanding new projects
        </motion.h2>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <Image
                  src={project.src}
                  alt={project.alt}
                  width={300}
                  height={250}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay with Project Description */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-3 mx-auto">
                      <svg className="w-8 h-8 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <h3 className="text-gold font-semibold text-lg mb-1">
                      {project.description}
                    </h3>
                    <p className="text-cream/90 text-sm">
                      Luxury Design Project
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link
            href="/about"
            className="btn btn-gold px-10 py-4 text-lg font-semibold rounded-full hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-block"
          >
            Learn More About Us
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsGallery
