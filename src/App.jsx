import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import StatsSection from './components/StatsSection'
import ServicesSection from './components/ServicesSection'
import PlansSection from './components/PlansSection'
import CommunitySection from './components/CommunitySection'
import AuthSection from './components/AuthSection'
import FaqSection from './components/FaqSection'

const App = () => {
  return (
    <div className='bg-[#0f0f0f]'>
      <Header />
      <Hero  />
      <StatsSection />
      <ServicesSection  id="services" />
      <PlansSection  id="plans" />
      <CommunitySection  id="coaching" />
      <AuthSection  id="auth" />
      <FaqSection  id="faq" />
      <Footer />
    </div>
  )
}

export default App