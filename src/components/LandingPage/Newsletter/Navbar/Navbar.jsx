import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../../../assets/navbar-logo.svg'
import './Navbar1.css'
import '../../../../App.css'
import '../../../../fonts/gilroy/Gilroy-SemiBold.ttf'
import '../../../../fonts/gilroy/Gilroy-Bold.ttf'
import "../../../../fonts/Manrope/static/Manrope-Regular.ttf"
import "../../../../fonts/Montserrat/static/Montserrat-Regular.ttf"
import "../../../../fonts/Montserrat/static/Montserrat-Medium.ttf"
import "../../../../fonts/Montserrat/static/Montserrat-SemiBold.ttf"
function Navbar() {
  const navigate=useNavigate();
  const handleC=()=>{
    navigate('/')
  }
  const contactusprscroll=()=>{
    navigate('/login')
  }
  return (
    <>
    <div className='header-container'>
        <div className='logo5'>
            <img src={Logo} alt="logo" onClick={handleC}  className='cursor-pointer'/>
        </div>
        <div className='button5'>
            <button className='button2' onClick={contactusprscroll}>Institute Login</button>
        </div>
    </div>
    </>
  )
}

export default Navbar