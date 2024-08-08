import React, { useState } from 'react';
import LogoSlider from './Logo2';
import './final.css';
import Navbar from './Navbar/Navbar2';
import Header from './assets/newsletter.svg';
import VideoT from '../LandingPage/Newsletter/assets/contactus/newsletter site png.png';
import { HashLink } from 'react-router-hash-link';

const UniversityLogin = () => {
  const [selectedUniversity, setSelectedUniversity] = useState('');
  const [password, setPassword] = useState('');

  const handleSelectChange = (event) => {
    setSelectedUniversity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const universities = ["Ashoka", "Christ", "Flame", "Ahd", "Jindal", "Krea"];
    if (universities.includes(selectedUniversity) && password === selectedUniversity) {
      window.location.href = "https://www.hqsibling.in/";
    } else {
      alert("Invalid password or university.");
    }
  };

  return (
    <>
      <div className='nav-custom1 hidden md:block'>
        <Navbar />
      </div>
      <div className='login-main-custom1 w-full  h-screen md:h-[90.5vh] flex flex-col md:flex-row'>
        <div className='side-left-custom1 w-full md:w-1/2 flex flex-col items-center justify-center'>
          <HashLink to="/newsletter" className='md:overflow-visible'>
            <img src={Header} alt="" className='w-full h-[13vh]  md:overflow-visible' />
          </HashLink>
          <div className='logos-carousel-custom1 mb-4 w-full flex justify-center align-middle'>
            <LogoSlider selectedUniversity={selectedUniversity} />
          </div>
          <form className='field1-custom1 w-full max-w-sm' onSubmit={handleSubmit}>
            <div className='mb-4'>
              <p className='text-black custom1 flex font-bold mb-3'>Select Institute</p>
              <select className='form-select-custom1 w-full rounded text-black custom1' onChange={handleSelectChange} value={selectedUniversity}>
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
              <p className='text-black custom1 flex font-bold mb-3'>Enter Password</p>
              <input 
                type='password' 
                className='form-input-custom1 w-full p-2 rounded text-black' 
                placeholder='Enter Password' 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='mb-4'>
              <button type='submit' className='button-custom1 w-full  rounded'>Let's Read</button>
            </div>
          </form>
          <div className='text-center custom1 text-black mt-4'>
            <p>or</p>
            <HashLink to="/newsletter#contacT" className='underline'>Get your School/Institute on board</HashLink>
          </div>
        </div>
        <div className='side-right-custom1 hidden md:flex w-1/2 items-center justify-center'>
          <img src={VideoT} alt='Illustration' className='w-1/2 h-[10vh]' />
        </div>
      </div>
    </>
  );
};

export default UniversityLogin;
