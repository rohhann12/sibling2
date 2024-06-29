import React, { useState, useEffect } from 'react';
import './section3.css';
import '../../../App.css'
import '../../../fonts/gilroy/Gilroy-SemiBold.ttf'
import '../../../fonts/gilroy/Gilroy-Bold.ttf'
import "../../../fonts/Manrope/static/Manrope-Regular.ttf"
import "../../../fonts/Montserrat/static/Montserrat-Regular.ttf"
import "../../../fonts/Montserrat/static/Montserrat-Medium.ttf"
import "../../../fonts/Montserrat/static/Montserrat-SemiBold.ttf"
const TextSlider = () => {
  const texts = ['Confidence and Self Esteem', 'Healthy Familial Bonds', 'Social Relationships', 'Holistic Development'];
  const [selectedIndex, setSelectedIndex] = useState(0);

  const word = [
    {
      id: 1,
      term: "Holistic Development",
      message: "We focus on nurturing all aspects of your well-being, including mental, emotional, and physical health, ensuring you grow into a well-rounded individual."
    },
    {
      id: 2,
      term: "Social Relationships",
      message: "Our resources help you build and maintain strong, healthy relationships with peers, enhancing your social skills and fostering a supportive community around you."
    },
    {
      id: 3,
      term: "Healthy Familial Bonds",
      message: "We provide guidance on improving communication and understanding within your family, helping to create a nurturing and harmonious home environment."
    },
    {
      id: 4,
      term: "Confidence and Self Esteem",
      message: "Through our content and support, we empower you to believe in yourself and boost your self-esteem, enabling you to face challenges with confidence and resilience."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex(prevIndex => (prevIndex + 1) % texts.length);
    }, 4000); 

    return () => clearInterval(interval);
  }, [texts.length]);

  const handleWheel = (event) => {
    const newIndex = selectedIndex + (event.deltaY > 0 ? 1 : -1);
    if (newIndex >= 0 && newIndex < texts.length) {
      setSelectedIndex(newIndex);
    }
  };

  const selectedWord = word.find(item => item.term === texts[selectedIndex]);

  if (!selectedWord) {
    return null; 
  }

  return (
   <>
    <p className='heading3'>How can we help</p>
    <div className="text-slider-container" onWheel={handleWheel}>
       
      <div className="slider-container">
        <div className="slider">
          {texts.map((text, index) => (
            <div
              key={index}
              className={`slider-item font-bold ${
                index === selectedIndex ? 'selected' : ''
              }`}
              style={{
                transform: `translateY(${(index - selectedIndex) * 30}px)`,
                fontWeight: index === selectedIndex ? 'bold' : 'bold',
                opacity: index === selectedIndex ? 1 : 0.5,
              }}
            >
              {text}
            </div>
          ))}
        </div>
      </div>
      <div className="message-container">
        <p>{selectedWord.message}</p>
      </div>
    </div>
   </>
  );
};

export default TextSlider;
