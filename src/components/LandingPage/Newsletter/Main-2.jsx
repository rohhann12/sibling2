import './Main-2.css'
import React from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import Footer from './footer/footer'
import Faq from './FAQ/FAQ'
import Logo_slider from './logo-slider/logo'
import Contactus from './contactUs/ContactUs'
function Main() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Contactus/>
    <Logo_slider/>
    <Faq/>
    <Footer/>
    </>
  )
}

export default Main