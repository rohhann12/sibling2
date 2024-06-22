import React from 'react'
import Home from './components/LandingPage/LandingPage'
import Section2 from './components/LandingPage/section2/section2'
import Faq from './components/LandingPage/FAQ/FAQ'
import ContactUs from './components/LandingPage/contactUs/ContactUs'
import LogosSlider from './components/LandingPage/logo-slider/logo'
import Offer from './components/LandingPage/OfferPage/Offer'
import Testimonial from './components/LandingPage/testimonial/testimonial'
import Footer from './components/LandingPage/footer/footer'
function App() {
  return (
    <>
    <Home/>
    <Section2/>
    <Offer/>
    <Testimonial/>
    <LogosSlider/>
    <Faq/>
    <ContactUs/>
    <Footer/>
    </>
  )
}

export default App