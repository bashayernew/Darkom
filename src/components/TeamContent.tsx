'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, Phone, Mail, MapPin } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

type TeamMember = {
  name: string
  position: string
  image: string
  description: string
  expertise: string[]
  fullBio: string
  contact: {
    phone: string
    email: string
    location: string
  }
  achievements: string[]
}

const TeamContent = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  const { t } = useLanguage()

  const teamMembers = [
    {
      name: t('about.teamMembers.ahmed.name'),
      position: t('about.teamMembers.ahmed.position'),
      image: '/images/team1.jpg',
      description: t('about.teamMembers.ahmed.description'),
      expertise: t('about.teamMembers.ahmed.expertise'),
      fullBio: t('about.teamMembers.ahmed.fullBio'),
      contact: {
        phone: '+965 5044 3637',
        email: 'ahmed@darkom.com',
        location: 'Kuwait City, Kuwait'
      },
      achievements: t('about.teamMembers.ahmed.achievements')
    },
    {
      name: t('about.teamMembers.sarah.name'),
      position: t('about.teamMembers.sarah.position'),
      image: '/images/team2.jpg',
      description: t('about.teamMembers.sarah.description'),
      expertise: t('about.teamMembers.sarah.expertise'),
      fullBio: t('about.teamMembers.sarah.fullBio'),
      contact: {
        phone: '+965 5044 3638',
        email: 'sarah@darkom.com',
        location: 'Kuwait City, Kuwait'
      },
      achievements: t('about.teamMembers.sarah.achievements')
    },
    {
      name: t('about.teamMembers.mohammed.name'),
      position: t('about.teamMembers.mohammed.position'),
      image: '/images/team3.jpg',
      description: t('about.teamMembers.mohammed.description'),
      expertise: t('about.teamMembers.mohammed.expertise'),
      fullBio: t('about.teamMembers.mohammed.fullBio'),
      contact: {
        phone: '+965 5044 3639',
        email: 'mohammed@darkom.com',
        location: 'Kuwait City, Kuwait'
      },
      achievements: t('about.teamMembers.mohammed.achievements')
    },
    {
      name: t('about.teamMembers.fatima.name'),
      position: t('about.teamMembers.fatima.position'),
      image: '/images/team4.jpg',
      description: t('about.teamMembers.fatima.description'),
      expertise: t('about.teamMembers.fatima.expertise'),
      fullBio: t('about.teamMembers.fatima.fullBio'),
      contact: {
        phone: '+965 5044 3640',
        email: 'fatima@darkom.com',
        location: 'Kuwait City, Kuwait'
      },
      achievements: t('about.teamMembers.fatima.achievements')
    }
  ]

  const openProfile = (member: TeamMember) => {
    setSelectedMember(member)
  }

  const closeProfile = () => {
    setSelectedMember(null)
  }

  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-20 bg-dark-gray overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/team-main.jpg"
            alt="Our Team Background"
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
            {t('about.meetTeam')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-cream/80 max-w-3xl mx-auto"
          >
            {t('about.meetTeamDesc')}
          </motion.p>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-20 bg-dark">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-dark-gray rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-gold/10 transition-all duration-300 cursor-pointer group"
                onClick={() => openProfile(member)}
              >
                {/* Image Container - Full height, no cropping */}
                <div className="relative h-96 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                  
                  {/* Click indicator */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                      <span className="text-dark text-sm font-bold">+</span>
                    </div>
                  </div>
                </div>
                
                {/* Member Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-playfair font-bold text-cream mb-2 group-hover:text-gold transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-gold font-semibold mb-3">
                    {member.position}
                  </p>
                  <p className="text-cream/80 mb-4 leading-relaxed">
                    {member.description}
                  </p>
                  
                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-gold/20 text-gold text-sm rounded-full border border-gold/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  {/* Click to view more indicator */}
                  <div className="mt-4 text-center">
                    <p className="text-gold/70 text-sm font-medium">Click to view full profile</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Profile Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={closeProfile}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-dark-gray rounded-lg max-w-3xl w-full max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative">
                <button
                  onClick={closeProfile}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-gold rounded-full flex items-center justify-center hover:bg-gold/80 transition-colors"
                >
                  <X className="w-5 h-5 text-dark" />
                </button>
                
                {/* Hero Image */}
                <div className="relative h-80">
                  <Image
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h2 className="text-4xl font-playfair font-bold text-cream mb-2">
                      {selectedMember.name}
                    </h2>
                    <p className="text-gold text-xl font-semibold">
                      {selectedMember.position}
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Full Bio */}
                <div className="mb-8">
                  <h3 className="text-2xl font-playfair font-bold text-gold mb-4">{t('about.about')}</h3>
                  <p className="text-cream/90 leading-relaxed text-lg">
                    {selectedMember.fullBio}
                  </p>
                </div>

                {/* Expertise */}
                <div className="mb-8">
                  <h3 className="text-2xl font-playfair font-bold text-gold mb-4">{t('about.areasOfExpertise')}</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedMember.expertise.map((skill, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gold rounded-full" />
                        <span className="text-cream/80 text-lg">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-8">
                  <h3 className="text-2xl font-playfair font-bold text-gold mb-4">{t('about.keyAchievements')}</h3>
                  <ul className="space-y-3">
                    {selectedMember.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                        <span className="text-cream/80 text-lg">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact Information */}
                <div className="mb-8">
                  <h3 className="text-2xl font-playfair font-bold text-gold mb-4">{t('about.contactInformation')}</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                      <span className="text-cream/80">{selectedMember.contact.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                      <span className="text-cream/80">{selectedMember.contact.email}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-gold flex-shrink-0" />
                      <span className="text-cream/80">{selectedMember.contact.location}</span>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="text-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={closeProfile}
                    className="btn btn-gold px-8 py-3 text-lg font-semibold rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Close Profile
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Why Choose Our Team */}
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
              {t('about.whyChooseTeam')}
            </h2>
            <p className="text-xl text-cream/80 max-w-3xl mx-auto">
              {t('about.whyChooseTeamDesc')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: t('about.expertise.title'),
                description: t('about.expertise.description'),
                icon: '🏗️'
              },
              {
                title: t('about.innovation.title'),
                description: t('about.innovation.description'),
                icon: '💡'
              },
              {
                title: t('about.reliability.title'),
                description: t('about.reliability.description'),
                icon: '✅'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-playfair font-semibold text-gold mb-3">
                  {feature.title}
                </h3>
                <p className="text-cream/80 leading-relaxed">
                  {feature.description}
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
              {t('about.readyToWork')}
            </h2>
            <p className="text-xl text-cream/80 mb-8 leading-relaxed">
              {t('about.readyToWorkDesc')}
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-gold px-8 py-4 text-lg font-semibold rounded-full inline-block hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              {t('about.getStartedToday')}
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default TeamContent
