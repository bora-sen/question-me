import React from 'react';
import {Route,Routes} from 'react-router-dom';
import { CreateTestPage, LandingPage, SolveTestPage,SolveSpesificTest,NotFoundPage } from './pages';


function MainRouter() {
  return (
    <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/create" element={<CreateTestPage />} />
        <Route path="/solve/:accessToken" element={<SolveSpesificTest />} />
        <Route path="/solve/" element={<SolveTestPage />} />
        <Route exact path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default MainRouter