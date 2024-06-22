import './testimonial.css';
import React from 'react';
import Props from './prop';

function Testimonial() {
  return (
    <>
      <div>
        <p className='heading-top-left'>TESTIMONIAL</p>
        <p className='heading-center'>Experience it for yourself</p>
        <img src="src/components/assets/heading2.svg" alt="" className='heading' />
      </div>
      <div className='testimonial-container'>
        <div className='testimonial-container-slide'>
          <div className='testimonial-grid'>
            <Props message="I can't say enough good things about Sibling's newsletter. It's packed with insightful articles and tips that have helped me navigate the ups and downs of college life. The focus on mental wellness is something we all need, and Sibling delivers it perfectly." name="Anonymous" occupation="College Junior" image="src/components/assets/testomonials/Image.svg" />
            <Props message="Sibling has been a real game-changer for me. Content they put up  is not only informative but also incredibly supportive. I used to struggle with managing my stress, especially around exam time. Now, thanks to their practical tips and positive messages, I feel more in control of my emotions. It's comforting to know there's a platform dedicated to helping us teens navigate mental health." name="Anonymous" occupation="10th Grade Student" image="src/components/assets/testomonials/Image.svg"/>
            <Props message="Discovering Sibling has been one of the best things for my mental well-being. Their content is always so relatable and packed with useful advice. The stories and tips they share have helped me better understand and manage my anxiety. It feels like having a supportive friend who always knows the right thing to say." name="Anonymous" occupation="12th Grade Student" image="src/components/assets/testomonials/Image.svg"/>
            <Props message="I eagerly await Sibling's newsletter every month. The articles are filled with practical advice on managing stress and improving sleep, which has been a huge help during my high school years. It's like having a personal guide that understands exactly what we're going through and offers real solutions." name="Anonymous" occupation="11th Grade Student" image="src/components/assets/testomonials/Image.svg"/>
            <Props message="The monthly newsletter from Sibling is a treasure trove of information. Each issue is thoughtfully curated with articles that cover various aspects of mental wellness. The expert advice has been invaluable in helping me manage the pressures of college life. I always find something new and helpful in each edition." name="Wahiq Iqbal" occupation="College Senior" image="src/components/assets/testomonials/Image.svg"/>
            <Props message="Sibling has made a significant impact on my life. Their Instagram content is so engaging and helpful. It has taught me a lot about mental health and how to take care of myself. I feel more empowered and confident knowing I have access to such valuable resources." name="Anonymous" occupation="9th Grade Student" image="src/components/assets/testomonials/Image.svg"/>
            <Props message="The monthly newsletter from Sibling is a treasure trove of information. Each issue is thoughtfully curated with articles that cover various aspects of mental wellness. The expert advice has been invaluable in helping me manage the pressures of college life. I always find something new and helpful in each edition." name="Wahiq Iqbal" occupation="College Senior" image="src/components/assets/testomonials/Image.svg"/>
            <Props message="Sibling has made a significant impact on my life. Their Instagram content is so engaging and helpful. It has taught me a lot about mental health and how to take care of myself. I feel more empowered and confident knowing I have access to such valuable resources." name="Anonymous" occupation="9th Grade Student" image="src/components/assets/testomonials/Image.svg"/>
            <Props message="I can't say enough good things about Sibling's newsletter. It's packed with insightful articles and tips that have helped me navigate the ups and downs of college life. The focus on mental wellness is something we all need, and Sibling delivers it perfectly." name="Anonymous" occupation="College Junior" image="src/components/assets/testomonials/Image.svg" />
            <Props message="Sibling has been a real game-changer for me. Content they put up  is not only informative but also incredibly supportive. I used to struggle with managing my stress, especially around exam time. Now, thanks to their practical tips and positive messages, I feel more in control of my emotions. It's comforting to know there's a platform dedicated to helping us teens navigate mental health." name="Anonymous" occupation="10th Grade Student" image="src/components/assets/testomonials/Image.svg"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
