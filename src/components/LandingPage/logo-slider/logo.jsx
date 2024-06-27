import './logo.css';
import React from 'react';
import Ashoka from "../../../../public/logos/Ashoka BW.svg";
import Christ from "../../../../public/logos/Chrsit BW.svg";
import Flame from "../../../../public/logos/Flame BW.svg";
import Ahd from "../../../../public/logos/ahemdabad BW.svg";
import Jinal from "../../../../public/logos/Jindal BW.svg";
import Krea from "../../../../public/logos/Krea BW.svg";

function Logo() {
  return (
    <>
      <p className='top-left'>TRUSTED BY THE STUDENTS AT</p>
      <div className='logos'>
        <div className='logos-slide'>
          <img src={Ashoka} alt="Ashoka" />
          <img src={Christ} alt="Christ" />
          <img src={Flame} alt="Flame" />
          <img src={Ahd} alt="Ahmedabad" />
          <img src={Jinal} alt="Jindal" />
          <img src={Krea} alt="Krea" />
          <img src={Ashoka} alt="Ashoka" />
          <img src={Christ} alt="Christ" />
          <img src={Flame} alt="Flame" />
          <img src={Ahd} alt="Ahmedabad" />
          <img src={Jinal} alt="Jindal" />
          <img src={Krea} alt="Krea" />
        </div>
      </div>
    </>
  );
}

export default Logo;
