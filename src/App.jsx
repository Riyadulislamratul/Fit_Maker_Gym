import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import StatsSection from './components/StatsSection'
import ServicesSection from './components/ServicesSection'
import PlansSection from './components/PlansSection'
import CommunitySection from './components/CommunitySection'

const App = () => {
  return (
    <div className='bg-[#0f0f0f]'>
      <Header />
      <Hero />
      <StatsSection />
      <ServicesSection />
      <PlansSection />
      <CommunitySection />
      <Footer />
    </div>
  )
}

export default App