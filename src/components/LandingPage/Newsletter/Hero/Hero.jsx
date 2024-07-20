import React from 'react';
import './Hero.css';
import RightSideImg from '../assets/Herosection/v3.png'

function Hero() {
  const contactusprscroll = () => {
    document.getElementById('contacT').scrollIntoView();
  }
  
  const bentogridpr = () => {
    document.getElementById('bento').scrollIntoView();
  }
  
  return (
    <div className="hero9-container">
      <div className="left9-side">
        <div className="text9-container mt-[30vh]">
          <div className="heading9">
            <p>The Newsletter to Target</p>
            <p className="title9">All Your <span className="blue-title9">Needs</span></p>
          </div>
          <div className="small-text9">
            <p>Join our supportive community for monthly tips, expert <br />advice, and inspiring stories delivered straight to your inbox.</p>
          </div>
          <div className="for-buttons9">
            <button className="left-button9" onClick={contactusprscroll}>Get Started</button>
            <button className="right-button9" onClick={bentogridpr}>Learn More</button>
          </div>
        </div>
      </div>
      <div className="right9-side">
        <img src={RightSideImg} alt="Newsletter Preview" />
      </div>
    </div>
  );
}

export default Hero;
