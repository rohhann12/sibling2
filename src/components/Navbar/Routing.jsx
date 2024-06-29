import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Newsletter from './Newsletter';
import LandingPage from '../LandingPage/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/newsletter" exact={false} element={<Newsletter />} />
          <Route path="*" element={<h1>Route does not exist</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
