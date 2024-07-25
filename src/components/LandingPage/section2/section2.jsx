import React from 'react';
import { useNavigate } from 'react-router-dom';
import './section2.css';
import Arrow from '../../assets/Vector.svg';
import '../../../App.css';
import "../../../fonts/Manrope/static/Manrope-Regular.ttf";
import "../../../fonts/Montserrat/static/Montserrat-Regular.ttf";
import "../../../fonts/Montserrat/static/Montserrat-Medium.ttf";
import "../../../fonts/Montserrat/static/Montserrat-SemiBold.ttf";
import Img from '../section2/20240715_105230000_iOS.png'
function Section2() {
  const navigate = useNavigate();

  const handleClick2 = () => {
    console.log("Navigating to /newsletter");
    navigate('/newsletter'); 
  };

  return (
    <div className="section2-container flex-container" id="About">
      <div className="video-section">
       <img src={Img} alt="" />
      </div>
      <div className="text-section">
        <div className="para2 font-bold">
          <p>WHAT WE DO</p>
        </div>
        <div className="heading-2">
          <p className="title">
            We are here to help you feel <span className="title-blue">better</span>
          </p>
        </div>
        <div className="para">
          <p className="main-para">
            Caring for your mental health & wellness can be tough, but finding the right support doesn't have to be. Our upcoming newsletter will deliver valuable resources directly to your inbox, offering personalized tips to help you manage stress and anxiety, improve your sleep, and enhance your mindfulness. Relax your mind and start each day feeling like the best version of yourself.
          </p>
        </div>
        <div className="subscribe-section">
          <a onClick={handleClick2} className="subscribe-text cursor-pointer">
            ACCESS OUR LATEST NEWSLETTER
            <img src={Arrow} alt="Arrow" className="arrow-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Section2;
