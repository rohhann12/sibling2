import React from 'react'
import Logo from '../../../assets/navbar-logo.svg'
import './Navbar.css'
function Navbar() {
  return (
    <>
    <div className='header-container'>
        <div className='logo'>
            <img src={Logo} alt="logo" />
        </div>
        <div className='button'>
            <button className='button2'>Get Started</button>
        </div>
    </div>
    </>
  )
}

export default Navbar