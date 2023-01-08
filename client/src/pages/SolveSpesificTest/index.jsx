import React from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../Layout'
import MainContainer from '../Layout/MainContainer'

function SolveSpesificTest() {

    const {accessToken} = useParams();
    console.log(accessToken);

  return (
    <MainContainer>
        <Header />
        <div>SolveTestPage</div>
    </MainContainer>
  )
}

export default SolveSpesificTest