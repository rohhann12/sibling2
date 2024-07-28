import React, { useEffect, useState } from 'react';
import './logo.css';
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
    <div className="logo-slider">
      {selectedUniversity ? (
        <img src={logos[selectedUniversity]} alt={`${selectedUniversity} Logo`} className="selected-logo" />
      ) : (
        <div className={isRunning ? 'slider running' : 'slider'}>
          <div className="slide-track">
            {Object.keys(logos).map((key, index) => (
              <div className="slide" key={index}>
                <img src={logos[key]} alt={`${key} Logo`} className="logo" />
              </div>
            ))}
            {Object.keys(logos).map((key, index) => (
              <div className="slide" key={index + Object.keys(logos).length}>
                <img src={logos[key]} alt={`${key} Logo`} className="logo" />
              </div>
            ))}
            {Object.keys(logos).map((key, index) => (
              <div className="slide" key={index + Object.keys(logos).length}>
                <img src={logos[key]} alt={`${key} Logo`} className="logo" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LogoSlider;
