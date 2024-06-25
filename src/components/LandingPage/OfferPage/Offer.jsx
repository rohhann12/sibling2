import React from 'react';
import './Offer.css';
import Heading from "../../assets/offer/heading.svg"
import Newsletter from "../../assets/offer/newsletter.svg"
import Right_img from "../../assets/offer/space_by.svg"

function Offer() {
  return (
    <>
      <div className='offer-container'>
        <div className='header'>
          <p className='sub-header'>WHAT WE OFFER</p>
          <img src={Heading} alt="" className='heading' />
        </div>
        <div className='offers'>
          <div className='offer-item'>
            <img src={Newsletter} alt="" className='offer-image' />
            <p className='offer-title'>
              newsletter - but it's actually useful
            </p>
            <p className='offer-description'>
              Start your journey to your better mental health and wellness with us. Each issue is packed
              with valuable resources and insights designed to help you build resilience, manage stress, 
              and maintain overall well-being.
            </p>
            <button className='offer-button'>Subscribe now</button>
          </div>
          <div className='offer-item'>
            <img src={Right_img} alt="" className='offer-image' />
            <p className='offer-title'>
              space by <span className='text-blue'>sibling</span>
            </p>
            <p className='offer-description'>
              Become a part of a supportive community where you can write and read about your experience 
              related to mental health and wellness. Share your experiences, insights, and learn from others 
              to foster well-being.
            </p>
            <button className='offer-button'>Explore now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Offer;
