import React from 'react';
import Logo from '../assets/sibling.svg';
import './Navbar3.css';
import {useNavigate} from 'react-router-dom'

function Navbar2() {
  const navigate=useNavigate();
  const toHomeScreen = ()=>{
    navigate('/')
  }
  return (
    <div className='main-container'>
      <div className="logo-container ml-[2vh]">
        <img src={Logo} alt="Logo" className="logo cursor-pointer" onClick={toHomeScreen}/>
      </div>
      <div className='buttons cursor-pointer text-black'>
        <a href="#">The Sibling Community</a>
        <a href="#">About</a>
        <a href="#">Newsletter</a>
        <a href="#" className='highlighted'>Join Us</a>
      </div>
    </div>
  );
}

export default Navbar2;
