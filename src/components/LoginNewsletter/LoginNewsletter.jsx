import React, { useState } from 'react';
import LogoSlider from './Logo2'; // Make sure to use the correct component name
import './LoginNewsletter.css'; // Updated CSS file with -custom suffix
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
      <div className='nav-custom hidden md:block'>
        <Navbar />
      </div>
      <div className='login-main-custom w-full h-[82.5vh] flex flex-col md:flex-row'>
        <div className='side-left-custom w-full md:w-1/2 flex flex-col items-center justify-center'>
          <HashLink to="/newsletter" className='overflow-hidden'>
            <img src={Header} alt="" />
          </HashLink>
          <div className='logos-carousel-custom mb-4 w-full flex justify-center align-middle'>
            <LogoSlider selectedUniversity={selectedUniversity} />
          </div>
          <form className='field1-custom w-full max-w-sm' onSubmit={handleSubmit}>
            <div className='mb-4'>
              <p className='text-black-custom flex font-bold mb-3'>Select Institute</p>
              <select className='form-select-custom w-full rounded text-black-custom' onChange={handleSelectChange} value={selectedUniversity}>
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
              <p className='text-black-custom flex font-bold mb-3'>Enter Password</p>
              <input 
                type='password' 
                className='form-input-custom w-full p-2 rounded text-black-custom' 
                placeholder='Enter Password' 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='mb-4'>
              <button type='submit' className='w-full p-2 rounded bg-blue-700 text-white'>Let's Read</button>
            </div>
          </form>
          <div className='text-center-custom text-black-custom mt-4'>
            <p>or</p>
            <HashLink to="/newsletter#contacT" className='underline'>Get your School/Institute on board</HashLink>
          </div>
        </div>
        <div className='side-right-custom hidden md:flex w-1/2 items-center justify-center'>
          <video src={VideoT} alt='Illustration' className='w-3/4 h-auto' autoPlay loop muted playsInline />
        </div>
      </div>
    </>
  );
};

export default UniversityLogin;
