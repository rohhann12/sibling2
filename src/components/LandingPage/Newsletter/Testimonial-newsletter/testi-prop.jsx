// Testimonial.js
import React from 'react';
import './testi.css'; // Import your CSS for styling
// import Img1 from '../assets/Newsletter/BG.svg'
const Testimonial = ({Img,review,Name,designation}) => {
  return (
    <div className="testimonial">
      <div className="img-container">
        <img src={Img} />
      </div>
      <div className="review-container">
        <p>{review}</p>
        <h4>{Name}</h4>
        <h5>{designation}</h5>
      </div>
    </div>
  );
};

export default Testimonial;
