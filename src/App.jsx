import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Navbar from './Navbar';
import Newsletter from './components/Navbar/Newsletter';
import LandingPage from './components/LandingPage/LandingPage';
import ComingSoon from './components/Navbar/ComingSoon';
// import View from './components/LandingPage/section3/section3'
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/newsletter" exact={false} element={<Newsletter />} />
          <Route path='/space' exact={false}  element={<ComingSoon />} />
          <Route path="*" element={<h1>Route does not exist</h1>} />
        </Routes>
    </BrowserRouter> 
  );
}

export default App;
