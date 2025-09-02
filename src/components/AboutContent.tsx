'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

const AboutContent = () => {
  const { t } = useLanguage()
  const values = [
    {
      title: t('about.excellenceValue.title'),
      description: t('about.excellenceValue.description'),
      icon: '✨'
    },
    {
      title: t('about.innovationValue.title'),
      description: t('about.innovationValue.description'),
      icon: '🚀'
    },
    {
      title: t('about.integrityValue.title'),
      description: t('about.integrityValue.description'),
      icon: '🤝'
    },
    {
      title: t('about.sustainabilityValue.title'),
      description: t('about.sustainabilityValue.description'),
      icon: '🌱'
    }
  ]

  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-dark-gray">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-playfair font-bold text-gold mb-6"
          >
            {t('about.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-cream/80 max-w-3xl mx-auto"
          >
            {t('about.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Integrated Story & Team Section */}
      <section className="py-16 bg-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Story with Integrated Team Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center mb-20"
            >
              {/* Left: Story Content */}
              <div className="space-y-6 flex flex-col justify-center">
                <h2 className="heading-lg text-gold text-center lg:text-left">
                  {t('about.ourStory')}
                </h2>
                <div className="space-y-4 text-cream/90 leading-relaxed text-lg text-center lg:text-left">
                  <p>
                    {t('about.storyText1')}
                  </p>
                  <p>
                    {t('about.storyText2')}
                  </p>
                  <p>
                    {t('about.storyText3')}
                  </p>
                </div>
              </div>

              {/* Right: Team Image */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                  <Image
                    src="/images/team-construction-worker.jpg"
                    alt="Professional construction worker reviewing blueprints"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-gold font-semibold text-xl mb-2">
                      Expert Team in Action
                    </h3>
                    <p className="text-cream/90 text-sm">
                      Our professionals bring decades of combined experience
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mission & Work Quality Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center mb-20"
            >
              {/* Left: Work Quality Images */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                    <Image
                      src="/images/luxury-garden-landscaping.jpg"
                      alt="Beautiful luxury garden with water features and pergola"
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                    <Image
                      src="/images/luxury-building-night.jpg"
                      alt="Grand illuminated luxury building with reflective pool"
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                  <Image
                    src="/images/traditional-living-room.jpg"
                    alt="Lavish Middle Eastern living room with rich textures and chandelier"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Right: Mission Content */}
              <div className="space-y-6 flex flex-col justify-center">
                <h2 className="heading-lg text-gold text-center lg:text-left">
                  {t('about.ourMission')}
                </h2>
                <div className="space-y-4 text-cream/90 leading-relaxed text-lg text-center lg:text-left">
                  <p>
                    {t('about.missionText1')}
                  </p>
                  <p>
                    {t('about.missionText2')}
                  </p>
                  <p>
                    {t('about.missionText3')}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Team Collaboration Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center mb-20"
            >
              {/* Left: Team Collaboration Content */}
              <div className="space-y-6 flex flex-col justify-center">
                <h2 className="heading-lg text-gold text-center lg:text-left">
                  {t('about.collaborativeExcellence')}
                </h2>
                <div className="space-y-4 text-cream/90 leading-relaxed text-lg text-center lg:text-left">
                  <p>
                    {t('about.collaborativeText1')}
                  </p>
                  <p>
                    {t('about.collaborativeText2')}
                  </p>
                  <p>
                    {t('about.collaborativeText3')}
                  </p>
                </div>
              </div>

              {/* Right: Team Collaboration Image */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                  <Image
                    src="/images/team-construction-site.jpg"
                    alt="Team of professionals working together on construction site"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-gold font-semibold text-xl mb-2">
                      Collaborative Excellence
                    </h3>
                    <p className="text-cream/90 text-sm">
                      Working together to achieve extraordinary results
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Company Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8 mb-20"
            >
              <div className="text-center p-6 bg-dark-gray rounded-2xl border border-gold/20">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏗️</span>
                </div>
                <h3 className="text-xl font-playfair font-semibold text-gold mb-3">
                  {t('about.over10Years')}
                </h3>
                <p className="text-cream/80">
                  {t('about.over10YearsDesc')}
                </p>
              </div>
              <div className="text-center p-6 bg-dark-gray rounded-2xl border border-gold/20">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-xl font-playfair font-semibold text-gold mb-3">
                  {t('about.hundredProjects')}
                </h3>
                <p className="text-cream/80">
                  {t('about.hundredProjectsDesc')}
                </p>
              </div>
              <div className="text-center p-6 bg-dark-gray rounded-2xl border border-gold/20">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="text-xl font-playfair font-semibold text-gold mb-3">
                  {t('about.excellence')}
                </h3>
                <p className="text-cream/80">
                  {t('about.excellenceDesc')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-dark-gray">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gold mb-6">
              {t('about.ourValues')}
            </h2>
            <p className="text-xl text-cream/80 max-w-3xl mx-auto">
              {t('about.valuesDescription')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-dark rounded-2xl border border-gold/20 hover:border-gold/40 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-playfair font-semibold text-gold mb-3">
                  {value.title}
                </h3>
                <p className="text-cream/80 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team CTA */}
      <section className="py-16 bg-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gold mb-6">
              {t('about.meetTeam')}
            </h2>
            <p className="text-xl text-cream/80 mb-8 leading-relaxed">
              {t('about.meetTeamDesc')}
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/team"
                className="btn btn-cta px-8 py-4 text-lg font-semibold rounded-full inline-block"
              >
                {t('about.meetTeamCta')}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default AboutContent
