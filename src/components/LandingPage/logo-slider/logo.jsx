import './logo.css';
import React from 'react';
import Ashoka from "../../assets/logos/Client Logos-20240621T181825Z-001/Client Logos/Ashoka BW.png"
import Christ  from "../../assets/logos/Client Logos-20240621T181825Z-001/Client Logos/Chrsit BW.png"
import Flame from "../../assets/logos/Client Logos-20240621T181825Z-001/Client Logos/Flame BW.png"
import Ahd from "../../assets/logos/Client Logos-20240621T181825Z-001/Client Logos/ahemdabad BW.png"
import Jinal from "../../assets/logos/Client Logos-20240621T181825Z-001/Client Logos/Jindal BW.png"
import Krea from "../../assets/logos/Client Logos-20240621T181825Z-001/Client Logos/Krea BW.png"
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
