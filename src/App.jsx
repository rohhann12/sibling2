import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Navbar from './Navbar';
import Newsletter from './components/LandingPage/Newsletter/Main-2';
import LandingPage from './components/LandingPage/LandingPage';
import ComingSoon from './components/Navbar/ComingSoon';
import LoginPage from './components/LoginNewsletter/LoginNewsletter'
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/newsletter" exact={false} element={<Newsletter />} />
          <Route path='/space' exact={false}  element={<ComingSoon />} />
          <Route path='/login' exact={false}  element={<LoginPage />} />
          <Route path="*" element={<h1>Route does not exist</h1>} />
        </Routes>
    </BrowserRouter> 
  );
}

export default App;
