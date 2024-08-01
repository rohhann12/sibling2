import React, { useState } from 'react';
import LogoSlider from './Logo2'; // Make sure to use the correct component name
import './LoginNewsletter.css';
import Navbar from './Navbar/Navbar2';
import Header from './assets/newsletter.svg';
import VideoT from './assets/hero/video.mp4';
import { HashLink } from 'react-router-hash-link';
const UniversityLogin = () => {
  const [selectedUniversity, setSelectedUniversity] = useState('');
  const [password, setPassword] = useState('');

  const handleSelectChange = (event) => {
    setSelectedUniversity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    const universities = ["Ashoka", "Christ", "Flame", "Ahd", "Jindal", "Krea"];
    if (universities.includes(selectedUniversity) && password === selectedUniversity) {
      window.location.href = "https://www.hqsibling.in/";
    } else {
      alert("Invalid password or university.");
    }
  };

  return (
    <>
      <div className='nav'>
        <Navbar />
      </div>
      <div className='login-main w-full h-[82.5vh] flex'>
        <div className='side-left w-full md:w-1/2 flex flex-col items-center justify-center'>
          <img src={Header} alt="" />
          <div className='logos-carousel mb-4 w-[200%] flex justify-center align-middle'>
            <LogoSlider selectedUniversity={selectedUniversity} />
          </div>
          <form className='w-full max-w-sm' onSubmit={handleSubmit}>
            <div className='mb-4'>
              <p className='text-black flex'>Select Institute</p>
              <select className='form-select w-full p-2 rounded text-black' onChange={handleSelectChange} value={selectedUniversity}>
                <option value="">Select Institute</option>
                <option value="Krea">Krea University</option>
                <option value="Flame">Flame University</option>
                <option value="Ashoka">Ashoka University</option>
                <option value="Christ">Christ University</option>
                <option value="Ahd">Ahmedabad University</option>
                <option value="Jindal">Jindal Global University</option>
              </select>
            </div>
            <div className='mb-4'>
              <p className='text-black flex'>Enter Password</p>
              <input 
                type='password' 
                className='form-input w-full p-2 rounded text-black' 
                placeholder='Enter Password' 
                value={password}
                onChange={(e) => setPassword(e.target.value)}

              />
            </div>
            <div className='mb-4'>
              <button type='submit' className='w-full p-2 rounded bg-blue-700 text-white'>Let's Read</button>
            </div>
          </form>
          <div className='text-center text-black mt-4'>
            <p>or</p>
            <HashLink to="/newsletter#contacT" className='underline'>Get your School/Institute on board</HashLink>
          </div>
        </div>
        <div className='side-right w-1/2 flex items-center justify-center'>
          <video src={VideoT} alt='Illustration' className=' w-0 md:w-3/4 h-auto' autoPlay loop muted playsInline />
        </div>
      </div>
    </>
  );
};

export default UniversityLogin;
