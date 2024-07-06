import React from 'react';
import Img from '../assets/hero/hero.svg';
import './Hero.css';

function Hero() {
  return (
   <>
    <div className='hero-container'>
      <div className='img'>
        <img src={Img} alt="img" />
      </div>
      <div className='text-container'>
        <div className='heading'>
          <p>The Newsletter to Target</p>
          <p className='title'>All Your <span className='blue-title'>Needs</span></p>
        </div>
        <div className='small-text'>
          <p>Join our supportive community for monthly tips, expert advice, and inspiring stories delivered straight to your inbox.</p>
        </div>
      </div>
    </div>
    <div className='for-buttons'>
    <button className='left-button'>Get Started</button>
    <button className='right-button'>Learn More</button>
  </div>
   </>
  );
}

export default Hero;
