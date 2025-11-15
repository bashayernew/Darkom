'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, Phone, Mail, MapPin, Building2, Sparkles, ShieldCheck, UserCircle2 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
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
  fallbackIcon?: LucideIcon
}

const TeamContent = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  const { t } = useLanguage()

  const teamMembers = [
    {
      name: t('about.teamMembers.huthaifa.name'),
      position: t('about.teamMembers.huthaifa.position'),
      image: '/images/WhatsApp Image 2025-09-17 at 12.04.21_d2976471.jpg',
      description: t('about.teamMembers.huthaifa.description'),
      expertise: t('about.teamMembers.huthaifa.expertise'),
      fullBio: t('about.teamMembers.huthaifa.fullBio'),
      contact: {
        phone: '+965 55770243',
        email: 'huthaifaaltai@darkom.design',
        location: 'Kuwait'
      },
      achievements: t('about.teamMembers.huthaifa.achievements')
    },
    {
      name: t('about.teamMembers.moazam.name'),
      position: t('about.teamMembers.moazam.position'),
      image: '/images/WhatsApp Image 2025-09-17 at 11.58.57_ed422966.jpg',
      description: t('about.teamMembers.moazam.description'),
      expertise: t('about.teamMembers.moazam.expertise'),
      fullBio: t('about.teamMembers.moazam.fullBio'),
      contact: {
        phone: '+96878123168',
        email: 'moazam.ikram@design.design',
        location: 'Gulf Region'
      },
      achievements: t('about.teamMembers.moazam.achievements')
    },
    {
      name: t('about.teamMembers.abdulrazak.name'),
      position: t('about.teamMembers.abdulrazak.position'),
      image: '/images/abdulrazakpic.jpg',
      description: t('about.teamMembers.abdulrazak.description'),
      expertise: t('about.teamMembers.abdulrazak.expertise'),
      fullBio: t('about.teamMembers.abdulrazak.fullBio'),
      contact: {
        phone: '+965 0000 0000',
        email: 'abdulrazak.ahmed@darkom.design',
        location: 'Kuwait'
      },
      achievements: t('about.teamMembers.abdulrazak.achievements')
    },
    {
      name: 'Alaa Bouzan',
      position: 'Head of HR',
      image: '',
      description: 'Bridging talent and culture with strategic leadership and people-first practices.',
      expertise: ['Talent Acquisition', 'Culture Development', 'HR Strategy', 'Employee Relations'],
      fullBio:
        "Aisha Al-Mutairi leads Darkom's human resources strategy, combining more than a decade of experience in talent development, organizational culture, and employee engagement. She partners closely with every department to ensure our teams thrive, bringing empathy, structure, and a clear vision for growth.",
      contact: {
        phone: '+965 6000 1234',
        email: 'alaa.bouzan@darkom.design',
        location: 'Kuwait City'
      },
      achievements: [
        'Implemented talent development programs that increased retention by 30%',
        'Built a company-wide culture roadmap aligning HR initiatives with business goals',
        "Launched Darkom's leadership mentoring cohort for emerging managers"
      ],
      fallbackIcon: UserCircle2
    }
  ]

  const teamHighlights: { title: string; description: string; Icon: LucideIcon }[] = [
    {
      title: t('about.expertise.title'),
      description: t('about.expertise.description'),
      Icon: Building2
    },
    {
      title: t('about.innovation.title'),
      description: t('about.innovation.description'),
      Icon: Sparkles
    },
    {
      title: t('about.reliability.title'),
      description: t('about.reliability.description'),
      Icon: ShieldCheck
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
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
                <div className="relative h-96 overflow-hidden bg-dark flex items-center justify-center">
                  {member.image ? (
                    <>
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center space-y-4 text-gold/80">
                      {member.fallbackIcon ? (
                        <member.fallbackIcon className="w-24 h-24" strokeWidth={1.5} />
                      ) : (
                        <UserCircle2 className="w-24 h-24" strokeWidth={1.5} />
                      )}
                      <span className="text-cream/70 text-sm tracking-[0.35em] uppercase">
                        Team Member
                      </span>
                    </div>
                  )}
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
                    {member.expertise.map((skill: any, skillIndex: number) => (
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
        <div className="container mx-auto px-4 max-w-7xl">
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

          <div className="flex justify-center">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">
              {teamHighlights.map((feature, index) => {
                const Icon = feature.Icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-6 bg-dark rounded-2xl border border-gold/15"
                  >
                    <div className="w-16 h-16 bg-gold/10 border border-gold/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-gold" strokeWidth={1.6} />
                    </div>
                    <h3 className="text-xl font-playfair font-semibold text-gold mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-cream/80 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default TeamContent
