import React from 'react'
import { Header } from '../Layout'
import MainContainer from '../Layout/MainContainer'
import CreateTestComponent from './components/CreateTestComponent'

function CreateTestPage() {
  return (
    <>
    <MainContainer>
      <Header />
      <CreateTestComponent />
    </MainContainer>
    </>
  )
}

export default CreateTestPage