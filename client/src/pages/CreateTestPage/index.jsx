import React from 'react'
import { Footer, Header } from '../Layout'
import MainContainer from '../Layout/MainContainer'
import CreateTestComponent from './components/CreateTestComponent'

function CreateTestPage() {
  return (
    <>
    <MainContainer>
      <Header />
      <CreateTestComponent />
      <Footer />
    </MainContainer>
    </>
  )
}

export default CreateTestPage