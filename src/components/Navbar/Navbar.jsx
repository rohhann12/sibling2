import React, { useState } from 'react';
import Logo from '../assets/Logo.jpg';
import './Navbar.css';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="navbar">
        <a href="">
          <img src={Logo} alt="logo" />
        </a>
        <div className="mobile-btn" onClick={handleMenuToggle}>
          {menuOpen ? <IoMdClose /> : <RxHamburgerMenu />}
        </div>
        <div className={`clickables ${menuOpen ? 'open' : ''}`}>
          <a href="#">Join Us</a>
          <a href="#">About</a>
          <a href="#">Newsletter</a>
          <a href="#" id="space-button">Space By Sibling</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
