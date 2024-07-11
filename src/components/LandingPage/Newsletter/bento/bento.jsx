import React from 'react';
import Img1 from '../assets/bento/image 11.svg';
import Img2 from '../assets/bento/image 13.svg';
import Img3 from '../assets/bento/image 14.svg';
import Img4 from '../assets/bento/people-relaxing-at-home 1.svg';

function Bento() {
  return (
    <>
      <div className='h-[250vh] w-full bg-white text-zinc-900 pt-[10vh] overflow-hidden md:h-[150vh]'>
        <div className='flex flex-col md:mx-auto pb-[5vh] md:max-w-4xl md:grid md:grid-cols-8 md:grid-rows-15 md:gap-5 md:w-auto'>
          <div className='col-span-4 row-span-5 bg-[#EDF8FF] rounded-xl'>
            <img src={Img4} alt="" className='h-[40vh] pl-10 md:h-[20vh] md:pl-[22vh]'/>
            <div className='Text p-10'>
              <h1 className='font-bold text-[4vh]'>Personalized Tips</h1>
              <p className='text-wrap'>Receive tailored advice and practical strategies designed to address your wellbeing and productivity needs.</p>
            </div>
          </div>
          <div className='col-span-4 row-span-10 bg-[#EDF8FF] rounded-3xl'>
            <img src={Img1} alt="" className='h-[60vh]' />
            <div className='p-4'>
              <h1 className='font-bold text-[4vh] '>Read anytime</h1>
              <p className='align-middle'>Sign up on behalf of your school or institution. Access our newsletter directly on your browser for easy and convenient reading.</p>
            </div>
          </div>
          <div className='col-span-4 row-span-5 bg-[#EDF8FF] rounded-3xl'>
            <img src={Img2} alt="" className='h-[15vh] pl-[22vh]' />
            <div className='Text p-10'>
              <h1 className='font-bold text-[4vh]'>Expert-Led Content</h1>
              <p>Includes contributions from experts in mental health, science, and sociology, complemented by student stories and anecdotes.</p>
            </div>
          </div>
          <div className='md:col-span-8 md:bg-[#EDF8FF] md:rounded-xl'>
            <img src={Img3} alt="" className=' bg-[#EDF8FF] h-[40vw] w-[100%] align-center  justify-center pl-[1vh] md:h-[22vh] md:pl-[70vh] md:mt-[2vh]' />
            <div className='Text bg-[#EDF8FF] p-4'>
              <h1 className='text-[3vh] font-bold md:font-bold md:text-[4vh]'>Interactive resources for you to cheer-up</h1>
              <p>Engage with quizzes, exercises, and worksheets designed to support your mental wellness journey. These resources help you manage your mental health with practical activities for growth and resilience. Whether enhancing mindfulness, reducing stress, or improving emotional regulation, our tools provide hands-on strategies for your daily routine.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bento;
