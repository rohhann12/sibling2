
import React from 'react';
import Ashoka from "../../../../components/assets/logos/Ashoka BW.svg";
import Christ from "../../../../components/assets/logos/Chrsit BW.svg";
import Flame from "../../../../components/assets/logos/Flame BW.svg";
import Ahd from "../../../../components/assets/logos/ahemdabad BW.svg";
import Jindal from "../../../../components/assets/logos/Jindal BW.svg";
import Krea from "../../../../components/assets/logos/Krea BW.svg";

function Logo() {
  const logos = [
    Ashoka, Christ, Flame, Ahd, Jindal, Krea
  ];

  return (
    <>
     <div >
     <p className='top-left pt-5 pl-0'>TRUSTED BY THE STUDENTS AT</p>
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
