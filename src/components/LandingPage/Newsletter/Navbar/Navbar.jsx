import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../../../assets/navbar-logo.svg'
import './Navbar1.css'
function Navbar() {
  const navigate=useNavigate();
  const handleC=()=>{
    navigate('/')
  }
  const contactusprscroll=()=>{
    document.getElementById('contacT').scrollIntoView( )
  }
 
  return (
    <>
    <div className='header-container'>
        <div className='logo'>
            <img src={Logo} alt="logo" onClick={handleC}  className='cursor-pointer'/>
        </div>
        <div className='button'>
            <button className='button2' onClick={contactusprscroll}>Get Started</button>
        </div>
    </div>
    </>
  )
}

export default Navbar