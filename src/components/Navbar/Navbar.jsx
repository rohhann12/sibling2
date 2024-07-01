import React, { useState } from 'react';
import Logo from '../assets/Logo.jpg';
import './Navbar.css';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useNavigate,Link } from 'react-router-dom';
import '../../App.css';
import '../../fonts/gilroy/Gilroy-Bold.ttf';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Navigating to /newsletter");
    navigate('/newsletter'); 
  };
  const forSpace = () => {
    console.log("Navigating to /space");
    navigate('/space'); 
  };
  
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <a href="/">
        <img src={Logo} alt="logo" className="ml-[-15px]" />
      </a>
      <div className="mobile-btn" onClick={handleMenuToggle}>
        {menuOpen ? <IoMdClose /> : <RxHamburgerMenu />}
      </div>
      <div className={`clickables ${menuOpen ? 'open' : ''}`}>
        <a href="https://www.instagram.com/hqsibling">Join Us</a>
        <a onClick={handleClick} >Newsletter</a>
        <a onClick={forSpace} id="space-button">Space By Sibling</a>
      </div>
    </div>
  );
}

export default Navbar;
