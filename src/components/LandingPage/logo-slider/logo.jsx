import './logo.css';
import React from 'react';
import Ashoka from "../../assets/logos/Ashoka BW.svg";
import Christ from "../../assets/logos/Chrsit BW.svg";
import Flame from "../../assets/logos/Flame BW.svg";
import Ahd from "../../assets/logos/ahemdabad BW.svg";
import Jindal from "../../assets/logos/Jindal BW.svg";
import Krea from "../../assets/logos/Krea BW.svg";

function Logo() {
  const logos = [
    Ashoka, Christ, Flame, Ahd, Jindal, Krea
  ];

  return (
    <>
     <div >
     <p className='top-left'>TRUSTED BY THE STUDENTS AT</p>
      <div className='slider'>
        <div className='slide-track'>
          {logos.map((logo, index) => (
            <div className='slide' key={index}>
              <img src={logo} alt="Logo" />
            </div>
          ))}
          {logos.map((logo, index) => (
            <div className='slide' key={index + logos.length}>
              <img src={logo} alt="Logo" />
            </div>
          ))}
        </div>
      </div>
     </div>
    </>
  );
}

export default Logo;
