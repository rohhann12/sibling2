import './testimonial.css';
import React from 'react';
import Props from './prop';
import Heading from "../../assets/heading2.svg"
import Img from "../../assets/testomonials/Image.svg"

function Testimonial() {
  return (
    <>
      <div>
      <p className='heading-top-left1'>INSIGHTS FROM OUR VALUABLE CLIENT</p>
        <p className='heading-top-left'>TESTIMONIAL</p>
        <p className='heading-center'>Experience it for yourself</p>
        <img src={Heading} alt="" className='heading' />
      </div>
      <div className='testimonial-container'>
        <div className='testimonial-container-slide'>
          <div className='testimonial-grid'>
            {Array.from({ length: 3 }, (_, i) => (
              <>
                <Props key={i} message="I can't say enough good things about Sibling's newsletter. It's packed with insightful articles and tips that have helped me navigate the ups and downs of college life. The focus on mental wellness is something we all need, and Sibling delivers it perfectly." name="Anonymous" occupation="College Junior" image={Img} />
                <Props key={i+1} message="Sibling has been a real game-changer for me. Content they put up  is not only informative but also incredibly supportive. I used to struggle with managing my stress, especially around exam time. Now, thanks to their practical tips and positive messages, I feel more in control of my emotions. It's comforting to know there's a platform dedicated to helping us teens navigate mental health." name="Anonymous" occupation="10th Grade Student" image={Img}/>
                <Props key={i+2} message="Discovering Sibling has been one of the best things for my mental well-being. Their content is always so relatable and packed with useful advice. The stories and tips they share have helped me better understand and manage my anxiety. It feels like having a supportive friend who always knows the right thing to say." name="Anonymous" occupation="12th Grade Student" image={Img}/>
                <Props key={i+3} message="I can't say enough good things about Sibling's newsletter. It's packed with insightful articles and tips that have helped me navigate the ups and downs of college life. The focus on mental wellness is something we all need, and Sibling delivers it perfectly." name="Anonymous" occupation="College Junior" image={Img} />
                <Props key={i+4} message="Sibling has been a real game-changer for me. Content they put up  is not only informative but also incredibly supportive. I used to struggle with managing my stress, especially around exam time. Now, thanks to their practical tips and positive messages, I feel more in control of my emotions. It's comforting to know there's a platform dedicated to helping us teens navigate mental health." name="Anonymous" occupation="10th Grade Student" image={Img}/>
                <Props key={i+5} message="Discovering Sibling has been one of the best things for my mental well-being. Their content is always so relatable and packed with useful advice. The stories and tips they share have helped me better understand and manage my anxiety. It feels like having a supportive friend who always knows the right thing to say." name="Anonymous" occupation="12th Grade Student" image={Img}/>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
