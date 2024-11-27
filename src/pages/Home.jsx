import React from 'react'
import SystemSection from '../components/SystemSection'
import Partners from '../components/Partners'
import Features from '../components/Features'
import HowUse from '../components/HowUse'


function Home() {
  return (
    <div>
      <div className='px-8 md:px-24 pb-20'>
        <SystemSection />
        <Partners />
        <Features />
        <HowUse />
      </div>
    </div>
  )
}

export default Home
