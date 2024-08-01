import React, { useEffect, useState } from 'react';
import './logo-logim.css'; // Make sure to use the updated CSS file
import Ashoka from "../assets/logos/Ashoka BW.svg";
import Christ from "../assets/logos/Chrsit BW.svg";
import Flame from "../assets/logos/Flame BW.svg";
import Ahd from "../assets/logos/ahemdabad BW.svg";
import Jindal from "../assets/logos/Jindal BW.svg";
import Krea from "../assets/logos/Krea BW.svg";

const logos = {
  Ashoka: Ashoka,
  Christ: Christ,
  Flame: Flame,
  Ahd: Ahd,
  Jindal: Jindal,
  Krea: Krea,
};

const LogoSlider = ({ selectedUniversity }) => {
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (selectedUniversity) {
      setIsRunning(false);
    } else {
      setIsRunning(true);
    }
  }, [selectedUniversity]);

  return (
    <div className="login-logo-slider-custom">
      {selectedUniversity ? (
        <img src={logos[selectedUniversity]} alt={`${selectedUniversity} Logo`} className="login-selected-logo-custom" />
      ) : (
        <div className={isRunning ? 'login-slider-custom login-running-custom' : 'login-slider-custom'}>
          <div className="login-slide-track-custom">
            {[...Object.keys(logos), ...Object.keys(logos)].map((key, index) => (
              <div className="login-slide-custom" key={index}>
                <img src={logos[key]} alt={`${key} Logo`} className="login-logo-custom" />
              </div>
            ))}
            {[...Object.keys(logos), ...Object.keys(logos)].map((key, index) => (
              <div className="login-slide-custom" key={index}>
                <img src={logos[key]} alt={`${key} Logo`} className="login-logo-custom" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LogoSlider;
