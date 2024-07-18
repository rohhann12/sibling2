import './Main-2.css'
import React from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import Footer from './footer/footer'
import Faq from './FAQ/FAQ'
import Contact from './contactUs/contact'
import Logo_slider from './logo-slider/logo'
import Explore from './explore/explore'
import Bento from './bento/bento'
import Sec2 from './Section2-Newsletter/sec2'
function Main() {
  return (
    <>
    <div className='home2'>
    <Navbar/>
    <Hero/>
    <Sec2/>
    <Bento/>
    <Explore/>
    <Contact/>
    <Logo_slider/>
    <Faq/>
    <Footer/>
    </div>
    </>
  )
}

export default Main