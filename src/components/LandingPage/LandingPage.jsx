import React, { useEffect, useState } from 'react';
import './LandingPage.css';
import Navbar from '../Navbar/Navbar';
import vectorImage from '../assets/line.svg'; 
import '../../App.css'
import '../../fonts/gilroy/Gilroy-SemiBold.ttf'
function LandingPage() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const words = ["happy", "proud","stronger","confident","inspired"];
  
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
  
function redirect(){
  location.href = "https://www.instagram.com/hqsibling"
}

  return (
    <>
      <div>
        <Navbar />
        <div className="text-container">
          <h1 className="main-heading">a sibling that makes you</h1>
          <div className="typed-out-container">
            <span className="typed-out">{text}</span>
            <span className="cursor">.</span>
          </div>
        </div>
        <img src={vectorImage} alt="line" id="line-homepage" />
        <button id="space-button1" onClick={redirect}>Join our community</button>
      </div>
    </>
  );
}

export default LandingPage;
