import React, { useState } from 'react';
import LogoSlider from './Logo2'; // Make sure to use the correct component name
import './LoginNewsletter.css';
import Navbar from './Navbar/Navbar2';
import Header from './assets/newsletter.svg';
import VideoT from './assets/hero/video.mp4';

const UniversityLogin = () => {
  const [selectedUniversity, setSelectedUniversity] = useState('');

  const handleSelectChange = (event) => {
    setSelectedUniversity(event.target.value);
  };

  return (
    <>
      <div className='nav'>
        <Navbar />
      </div>
      <div className='login-main w-full h-[82.5vh] flex'>
        <div className='side-left w-1/2 flex flex-col items-center justify-center p-8'>
          <img src={Header} alt="" />
          <div className='logos-carousel mb-4 w-[200%] flex justify-center align-middle'>
            <LogoSlider selectedUniversity={selectedUniversity} />
          </div>
          <form className='w-full max-w-sm'>
            <div className='mb-4'>
              <select className='form-select w-full p-2 rounded text-black' onChange={handleSelectChange}>
                <option value="">Select Institute</option>
                <option value="Krea">Krea University</option>
                <option value="Flame">Flame University</option>
                {/* Add other options as needed */}
              </select>
            </div>
            <div className='mb-4'>
              <input type='password' className='form-input w-full p-2 rounded' placeholder='Enter Password' />
            </div>
            <div className='mb-4'>
              <button type='submit' className='w-full p-2 rounded bg-blue-700 text-white'>Let's Read</button>
            </div>
          </form>
          <div className='text-center text-black mt-4'>
            <p>or</p>
            <a href='#' className='underline'>Get your School/Institute on board</a>
          </div>
        </div>
        <div className='side-right w-1/2 flex items-center justify-center'>
          <video src={VideoT} alt='Illustration' className='w-3/4 h-auto' />
        </div>
      </div>
    </>
  );
};

export default UniversityLogin;
