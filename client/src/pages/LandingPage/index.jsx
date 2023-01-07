import React from 'react'
import { Footer, Header } from '../Layout'
import MainContainer from '../Layout/MainContainer'
import Hero from './components/Hero'

function LandingPage() {
  return (
    <>
      <MainContainer>
      <Header />
      <Hero />
      <Footer />
      </MainContainer>
    </>
  )
}

export default LandingPage