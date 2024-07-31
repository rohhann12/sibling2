import React from 'react';
import Logo from '../assets/sibling.svg';
import './Navbar3.css';
import {useNavigate} from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
// import { a } from "@react-email/components";
function Navbar2() {
  const navigate=useNavigate();
  const toHomeScreen = ()=>{
    navigate('/')
  }
  const handleMailTo = () => {
    navigate('/newsletter#contacT');
    
  };
  const handleClick = () => {
    console.log("Navigating to /newsletter");
    navigate('/newsletter'); 
  };
  const forS = () => {
    console.log("Navigating to /space");
    navigate('/space'); 
    
  };
  
  return (
    <div className='main-container'>
      <div className="logo-container ml-[2vh]">
        <img src={Logo} alt="Logo" className="logo cursor-pointer" onClick={toHomeScreen}/>
      </div>
      <div className='buttons cursor-pointer text-black'>
        <a href="https://www.instagram.com/hqsibling">The Sibling Community</a>
        <HashLink to="/#About">About</HashLink>
        <a onClick={handleClick}>Newsletter</a>
        <HashLink to="/newsletter#contacT" className='highlighted'>Join Us</HashLink>
      </div>
    </div>
  );
}

export default Navbar2;
