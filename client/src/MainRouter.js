import {React} from 'react';
import {Route,Routes} from 'react-router-dom';
import { CreateTestPage, LandingPage, SolveTest } from './pages';

function MainRouter() {
  return (
    <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/solve" element={<SolveTest />} />
        <Route path="/create" element={<CreateTestPage />} />
    </Routes>
  )
}

export default MainRouter