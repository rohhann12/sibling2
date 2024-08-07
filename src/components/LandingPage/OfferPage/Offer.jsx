import React from 'react';
import { useNavigate } from 'react-router-dom';
import Heading from "../../assets/offer/heading.svg";
import Newsletter from "../../assets/offer/newsletter.svg";
import Right_img from "../../assets/offer/space_by.svg";
import './Offer.css';
import '../../../App.css';
import '../../../fonts/gilroy/Gilroy-SemiBold.ttf';
import '../../../fonts/gilroy/Gilroy-Bold.ttf';
import "../../../fonts/Manrope/static/Manrope-Regular.ttf";
import "../../../fonts/Montserrat/static/Montserrat-Regular.ttf";
import "../../../fonts/Montserrat/static/Montserrat-Medium.ttf";
import "../../../fonts/Montserrat/static/Montserrat-SemiBold.ttf";
import { HashLink } from 'react-router-hash-link';

function Offer() {
  const navigate = useNavigate();

const handleClick1 = () => {
  console.log("Navigating to /newsletter");
  navigate('/newsletter'); 
};
const forSpace1 = () => {
  console.log("Navigating to /space");
  navigate('/space'); 
};

  return (
    <div className='offer-container'>
      <div className='header'>
        <p className='sub-header'>WHAT WE OFFER</p>
        <img src={Heading} alt="Heading" className='heading' />
      </div>
      <div className='offers'>
        <div className='offer-item'>
          <img src={Newsletter} alt="Newsletter" className='offer-image' />
          <p className='offer-title'>newsletter</p>
          <p className='offer-description'>
            Start your journey to your better mental health and wellness with us. Each issue is packed
            with valuable resources and insights designed to help you build resilience, manage stress, 
            and maintain overall well-being.
          </p>
          <HashLink className='offer-button' to="/newsletter#hero1" >Subscribe now</HashLink>
        </div>
        <div className='offer-item'>
          <img src={Right_img} alt="Space by Sibling" className='offer-image' />
          <p className='offer-title1'>
            space by <span className='text-blue'>sibling</span>
          </p>
          <p className='offer-description1'>
            Become a part of a supportive community where you can write and read about your experience 
            related to mental health and wellness. Share your experiences, insights, and learn from others 
            to foster well-being.
          </p>
          <button className='offer-button' onClick={forSpace1}>Explore now</button>
        </div>
      </div>
    </div>
  );
}

export default Offer;
