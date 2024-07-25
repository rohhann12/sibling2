import React from 'react';
import './Hero.css';
import RightSideImg from '../assets/Herosection/v3.png';
import '../../../../App.css'
import '../../../../fonts/gilroy/Gilroy-SemiBold.ttf'
import '../../../../fonts/gilroy/Gilroy-Bold.ttf'
import "../../../../fonts/Manrope/static/Manrope-Regular.ttf"
import "../../../../fonts/Montserrat/static/Montserrat-Regular.ttf"
import "../../../../fonts/Montserrat/static/Montserrat-Medium.ttf"
import "../../../../fonts/Montserrat/static/Montserrat-SemiBold.ttf"
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
        <div className='new md:hidden'>
        <p>The Newsletter to Target</p>
        <p className="title101">All Your <span className="blue-title101">Needs</span></p>
        </div>
        <img src={RightSideImg} alt="Newsletter Preview" className='news-img'/>
        <button className="left-button911" onClick={contactusprscroll}>Get Started</button>
      </div>
    </div>
  );
}

export default Hero;
