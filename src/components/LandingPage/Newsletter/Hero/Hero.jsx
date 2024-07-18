import React from 'react';
import './Hero.css';
import RightSideImg from '../assets/Herosection/v3.png'

function Hero() {
  const contactusprscroll=()=>{
    document.getElementById('contacT').scrollIntoView( )
  }
  const bentogridpr=()=>{
    document.getElementById('bento').scrollIntoView( )
  }
  return (
    <div className="hero-container">
      <div className="left-side">
        <div className="text-container mt-[30vh]">
          <div className="heading">
            <p>The Newsletter to Target</p>
            <p className="title">All Your <span className="blue-title">Needs</span></p>
          </div>
          <div className="small-text">
            <p>Join our supportive community for monthly tips, expert <br/>advice, and inspiring stories delivered straight to your inbox.</p>
          </div>
          <div className="for-buttons">
            <button className="left-button" onClick={contactusprscroll} >Get Started</button>
            <button className="right-button" onClick={bentogridpr}>Learn More</button>
          </div>
        </div>
      </div>
      <div className="right-side">
        <img src={RightSideImg} alt="Newsletter Preview" />
      </div>
    </div>
  );
}

export default Hero;
