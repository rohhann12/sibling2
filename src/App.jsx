import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Navbar from './Navbar';
import Newsletter from './components/LandingPage/Newsletter/Main-2';
import LandingPage from './components/LandingPage/LandingPage';
import ComingSoon from './components/Navbar/ComingSoon';
// import Pdf from './components/LandingPage/Newsletter/rendering-pdf/pdf'
// import View from './components/LandingPage/section3/section3'
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/newsletter" exact={false} element={<Newsletter />} />
          {/* <Route path="/newsletter/sample" exact={false} element={<Pdf />} /> */}
          <Route path='/space' exact={false}  element={<ComingSoon />} />
          <Route path="*" element={<h1>Route does not exist</h1>} />
        </Routes>
    </BrowserRouter> 
  );
}

export default App;
