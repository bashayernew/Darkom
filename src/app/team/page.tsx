'use client'

import Header from '@/components/Header'
import TeamContent from '@/components/TeamContent'
import ServicesContent from '@/components/ServicesContent'
import Footer from '@/components/Footer'

export default function Team() {
  return (
    <main className="min-h-screen">
      <Header />
      <TeamContent />
      <ServicesContent showPageHeader={false} />
      <Footer />
    </main>
  )
}
