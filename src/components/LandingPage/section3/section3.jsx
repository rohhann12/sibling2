import React, { useState, useEffect } from 'react';
import './section3.css';

const VerticalCardSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const contentArray = [
    {
      title: "Holistic Development",
      description: "We focus on nurturing all aspects of your well-being, including mental, emotional, and physical health, ensuring you grow into a well-rounded individual."
    },
    {
      title: "Social Relationships",
      description: "Our resources help you build and maintain strong, healthy relationships with peers, enhancing your social skills and fostering a supportive community around you."
    },
    {
      title: "Healthy Familial Bonds",
      description: "We provide guidance on improving communication and understanding within your family, helping to create a nurturing and harmonious home environment."
    },
    {
      title: "Confidence and Self Esteem",
      description: "Through our content and support, we empower you to believe in yourself and boost your self-esteem, enabling you to face challenges with confidence and resilience."
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % contentArray.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [contentArray.length]);

  return (
    <div className="wrapper">
      <div className="outer">
        <div className="titles">
          {contentArray.map((item, index) => (
            <h2
              key={index}
              className={`name ${index === activeIndex ? 'active' : ''}`}
            >
              {item.title}
            </h2>
          ))}
        </div>
        <div className="description">
          <p>{contentArray[activeIndex].description}</p>
        </div>
      </div>
    </div>
  );
};

export default VerticalCardSlider;
