import React, { useEffect, useState, useRef } from 'react';
import './LandingPage.css';
import vectorImage from '../assets/hero/Black Line.gif'; 
import '../../App.css';
import '../../fonts/gilroy/Gilroy-SemiBold.ttf';
import Navbar from '../Navbar/Navbar';
import Section2 from './section2/section2';
import Section3 from './section3/section3';
import Faq from './FAQ/FAQ';
import ContactUs from './contactUs/ContactUs';
import LogosSlider from './logo-slider/logo';
import Offer from './OfferPage/Offer';
import Testimonial from './testimonial/testimonial';
import Footer from './footer/footer';

function LandingPage() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const words = ["happy", "proud","stronger","confident","inspired"];
  const cursorRef = useRef(null); // Ref for the typing cursor

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
      } else {
        setText(fullText.substring(0, text.length + 1));
      }

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }

      setTypingSpeed(isDeleting ? 30 : 150);
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  function redirect() {
    window.location.href = "https://www.instagram.com/hqsibling";
  }

  // Example of cursor animation using useRef
  useEffect(() => {
    const interval = setInterval(() => {
      cursorRef.current.style.opacity = cursorRef.current.style.opacity === '0' ? '1' : '0';
    }, 500); // Cursor blinking interval

    return () => clearInterval(interval);
  }, []);

  return (
    <>
        <div>
        <Navbar />
        <div className="text-container">
          <h1 className="main-heading">a sibling that makes you</h1>
          <div className="typed-out-container">
            <span className="typed-out">{text}</span>
            <span ref={cursorRef} className="cursor">.</span>
          </div>
          <img src={vectorImage} alt="line" id="line-homepage" />
        </div>
        <div className="button-container">
          <button id="space-button11" onClick={redirect}>Join our community</button>
        </div>
      </div>
      <Section2 />
      <Section3 />
      <Offer />
      <Testimonial />
      <LogosSlider />
      <Faq />
      <ContactUs />
      <Footer />
    </>
  );
}

export default LandingPage;
