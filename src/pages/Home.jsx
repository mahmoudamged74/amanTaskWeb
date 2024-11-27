import React from 'react'
import Banner from '../components/Banner'
import NavBar from '../components/NavBar'
import SystemSection from '../components/SystemSection'
import Partners from '../components/Partners'
import Features from '../components/Features'
import HowUse from '../components/HowUse'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <Banner />
      <NavBar />
      <div className='px-8 md:px-24 pb-20'>
        <SystemSection />
        <Partners />
        <Features />
        <HowUse />
      </div>
      <Footer />
    </div>
  )
}

export default Home
