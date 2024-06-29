import React from 'react';
import './section2.css';
import Arrow from '../../assets/Vector.svg';
import '../../../App.css'
import "../../../fonts/Manrope/static/Manrope-Regular.ttf"
import "../../../fonts/Montserrat/static/Montserrat-Regular.ttf"
import "../../../fonts/Montserrat/static/Montserrat-Medium.ttf"
import "../../../fonts/Montserrat/static/Montserrat-SemiBold.ttf"

function Section2() {
  return (
    <div className="section2-container">
      <div className='para2 font-bold'>
        <p>WHAT WE DO</p>
      </div>
      <div className='heading-2'>
        <p className='title'>
          We are here to help you feel <span className='title-blue'>better</span>
        </p>
      </div>
      <div className='image-onLeft'>
        <video src="https://d1jj76g3lut4fe.cloudfront.net/processed/thumb/75dKj8REUeZ9wqr0H4.mp4?Expires=1718819005&Signature=HPBoGEu0ZSivI2V4tkTLdGMmUEmuqyfNqCuLC4L96qEpgvzhB6Lr-YVo~HimkKR50jnDVmCOdJjAEUEO2Ck~5LFCPWmQ8oKRquxb9uDxLyk1IfNW6kk7OV4BjVYc-sfZC~CK6HiSb1qVbtNapqJSPijISOp4uyyJp077hbYH6huF7PbWVNtQ2tCH~9WQfPMIzFhY2pNJhsY-qFSgwsVvEYSk075sjvE1lHKpwvKzDP3UN9Wf5zAiux9K8cGm7w~OdHX3d-zgR9okY4h6A0v5zRwlYGjD-~mqy84VRAGYiNa2XAFdbwOXZdxinB~CL9VM5SkZOBX8h1WYJ7irtfabfw__&Key-Pair-Id=K2YEDJLVZ3XRI#t=0.001" alt="Description of the image" autoPlay={true} loop={true} muted />
      </div>
      <div className='para'>
        <p className='main-para'>
          Caring for your mental health & wellness can be tough, but finding the right support doesn't have to be. Our upcoming newsletter will deliver valuable resources directly to your inbox, offering personalized tips to help you manage stress and anxiety, improve your sleep, and enhance your mindfulness. Relax your mind and start each day feeling like the best version of yourself.
        </p>
      </div>
      <div className='subscribe-section'>
        <a href="#" className='subscribe-text'>
          ACCESS OUR LATEST NEWSLETTER
          <img src={Arrow} alt="Arrow" className='arrow-icon' />
        </a>
      </div>
    </div>
  );
}

export default Section2;
