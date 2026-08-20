import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import StatsSection from './components/StatsSection'
import ServicesSection from './components/ServicesSection'
import PlansSection from './components/PlansSection'
import ToolsSection from './components/ToolsSection'
import TestimonialsSection from './components/TestimonialsSection'
import TrainersSection from './components/TrainersSection'
import CommunitySection from './components/CommunitySection'
import AuthSection from './components/AuthSection'
import FaqSection from './components/FaqSection'
import BlogPostsSection from './components/BlogPostsSection'
import LoadingScreen from './components/LoadingScreen'

const App = () => {
  return (
    <div className='bg-[#0f0f0f]'>
      <LoadingScreen />
      <Header />
      <Hero  />
      <StatsSection />
      <ServicesSection  id="services" />
      <PlansSection  id="plans" />
      {/* <ToolsSection  id="tools" /> */}
      <TestimonialsSection  id="testimonials" />
      <TrainersSection  id="trainers" />
      <BlogPostsSection  id="blog" />
      <CommunitySection  id="coaching" />
      <AuthSection  id="auth" />
      <FaqSection  id="faq" />
      <Footer />
    </div>
  )
}

export default App