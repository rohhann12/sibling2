import './testimonial.css';
import React from 'react';
import Props from './prop';
import Heading from "../../assets/heading2.svg"
import Mahi from '../../assets/testomonials/testi_photo/Mahi_College Junior.svg'
import Varun from '../../assets/testomonials/testi_photo/Varun_12th Grad.svg'
import Niran from '../../assets/testomonials/testi_photo/Nirenjana_12th Grad.svg'
import Mahi_jun from '../../assets/testomonials/testi_photo/Mahi_College Junior.svg'
import Eighth from '../../assets/testomonials/testi_photo/8.svg'
import Seven from '../../assets/testomonials/testi_photo/7.svg'
import Sakshi from '../../assets/testomonials/testi_photo/Sakshi_12 Grad.svg'
import Chirag from '../../assets/testomonials/testi_photo/9.svg'
import Smit from '../../assets/testomonials/testi_photo/Smit_Fresher at Job.svg'
import Deepika from '../../assets/testomonials/testi_photo/Deepika_Parent.svg'
import '../../../App.css'
import '../../../fonts/gilroy/Gilroy-SemiBold.ttf'
import '../../../fonts/gilroy/Gilroy-Bold.ttf'
import "../../../fonts/Manrope/static/Manrope-Regular.ttf"
import "../../../fonts/Montserrat/static/Montserrat-Regular.ttf"
import "../../../fonts/Montserrat/static/Montserrat-Medium.ttf"
import "../../../fonts/Montserrat/static/Montserrat-SemiBold.ttf"
function Testimonial() {
  return (
    <>
      <div>
      <p className='heading-top-left1'>INSIGHTS FROM OUR VALUABLE MEMBERS</p>
        <p className='heading-top-left'>TESTIMONIAL</p>
        <p className='heading-center'>Experience it for yourself</p>
        <img src={Heading} alt="" className='heading' />
      </div>
      <div className='testimonial-container'>
        <div className='testimonial-container-slide'>
          <div className='testimonial-grid'>
            {Array.from({ length: 3 }, (_, i) => (
              <>
                <Props key={i} message="Sibling acts like a lifeline for me. Their content on social media is not only engaging but also
                incredibly supportive. The practical advice and feel-good stories help me stay grounded and
                positive, no matter how tough things get." name="Mahi" occupation="College Junior" image={Mahi} />

              <Props key={i+1} message="Sibling has been a real game-changer for me. Content they put up is not only informative but
              also incredibly supportive. I used to struggle with managing my stress, especially around exam
              time. Now, thanks to their practical tips and positive messages, I feel more in control of my
              emotions. It's comforting to know there's a platform dedicated to helping us teens navigate
              mental health." name="Varun" occupation="12th Grade Student" image={Varun} />

              <Props key={i+2} message="Discovering Sibling has been one of the best things for my mental well-being. Their content is
always so relatable and packed with useful advice. The stories and tips they share have helped
me better understand and manage my anxiety. It feels like having a supportive friend who
always knows the right thing to say." name="Nirenjana" occupation="12th Grade Student" image={Niran} />  

<Props key={i+3} message="I can't say enough good things about Sibling's newsletter. It’s packed with insightful articles and
tips that have helped me navigate the ups and downs of college life. The focus on mental
wellness is something we all need, and Sibling delivers it perfectly." name="Mahi" occupation="College Junior" image={Mahi_jun} /> 

<Props key={i+4} message="The monthly newsletter from Sibling is a treasure trove of information. Each issue is
thoughtfully curated with articles that cover various aspects of mental wellness. The expert
advice has been invaluable in helping me manage the pressures of college life. I always find
something new and helpful in each edition." name="Gourang" occupation="College Senior" image={Eighth} /> 

<Props key={i+5} message="Sibling has made a significant impact on my life. Their Instagram content is so engaging and
helpful. It has taught me a lot about mental health and how to take care of myself. I feel more
empowered and confident knowing I have access to such valuable resources." name="Garvit" occupation="10th Grade Student" image={Seven} /> 

<Props key={i+6} message="I eagerly await Sibling's newsletter every month. The articles are filled with practical advice on
managing stress and improving sleep, which has been a huge help during my high school
years. It’s like having a personal guide that understands exactly what we’re going through and
offers real solutions." name="Sakshi" occupation="12th Grade Student" image={Sakshi} /> 

<Props key={i+7} message="The community that Sibling is building through their social media platforms is fantastic. It's
reassuring to know that I'm not alone in facing mental health and wellness challenges. The
shared experiences and support are invaluable, and it's great to see so many people coming
together to support each other." name="Smit" occupation="Fresher at a job" image={Smit} /> 

<Props key={i+8} message="Being a parent of a teenager can be challenging, but Sibling has been a great resource for
understanding and supporting my child's mental health and wellness. Their articles and social
media posts are insightful and practical, offering valuable advice that we can use at home." name="Deepika" occupation="Parent" image={Deepika} /> 
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
