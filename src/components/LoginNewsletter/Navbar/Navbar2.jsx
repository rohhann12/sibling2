import React from 'react';
import Logo from '../assets/sibling.svg';
import './Navbar3.css';

function Navbar2() {
  return (
    <div className='main-container'>
      <div className="logo-container ml-[2vh]">
        <img src={Logo} alt="Logo" className="logo" />
      </div>
      <div className='buttons cursor-pointer'>
        <a href="#">The Sibling Community</a>
        <a href="#">About</a>
        <a href="#">Newsletter</a>
        <a href="#" className='highlighted'>Join Us</a>
      </div>
    </div>
  );
}

export default Navbar2;
