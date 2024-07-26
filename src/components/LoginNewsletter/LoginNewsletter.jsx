import React, { useState } from 'react';
import Logo from './Logo2';
import './LoginNewsletter.css';
import Navbar from './Navbar/Navbar2';
import Photo from './newsletter site png (1).png';
import NewsPhoto from './assets/newsletter.svg'
import {useNavigate} from 'react-router-dom'


const UniversityLogin = () => {
  const [selectedUniversity, setSelectedUniversity] = useState('');
  const [password, setPassword] = useState('');
  const handleUniversityChange = (event) => {
    setSelectedUniversity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedUniversity === "Ashoka" && password === "Ashoka") {
      window.location.href = "https://www.hqsibling.in/";
    } else if (selectedUniversity === "Christ" && password === "Christ") {
      window.location.href = "https://www.hqsibling.in/";
    } else if (selectedUniversity === "Flame" && password === "Flame") {
      window.location.href = "https://www.hqsibling.in/";
    } else if (selectedUniversity === "Ahd" && password === "Ahd") {
      window.location.href = "https://www.hqsibling.in/";
    } else if (selectedUniversity === "Jindal" && password === "Jindal") {
      window.location.href = "https://www.hqsibling.in/";
    } else if (selectedUniversity === "Krea" && password === "Krea") {
      window.location.href = "https://www.hqsibling.in/";
    } else {
      alert("Invalid password or university.");
    }
  };
  const navigate=useNavigate();
  const toHomeScreen = ()=>{
    navigate('/newsletter')
  }
  return (
    <>
      <Navbar />
      <div className='main-container-login w-full flex'>
        <div className='left-side w-1/2 flex flex-col items-center justify-center p-10'>
          <div>
            <img src={NewsPhoto} alt="Newsletter Logo" onClick={toHomeScreen}  className='cursor-pointer'  />
          </div>
          <div className="logos mb-5 w-full max-w-[900px]">
            <Logo selectedUniversity={selectedUniversity} />
          </div>
          <div className="form-container w-full max-w-[500px]">
            <form className='w-full' onSubmit={handleSubmit}>
              <div className="form-group mb-5">
                <label htmlFor="university" className="block mb-2">Select Institute</label>
                <select id="university" onChange={handleUniversityChange} className="w-full p-2 border rounded">
                  <option value="">Select Institute</option>
                  <option value="Ashoka">Ashoka University</option>
                  <option value="Christ">Christ University</option>
                  <option value="Flame">Flame University</option>
                  <option value="Ahd">Ahmedabad University</option>
                  <option value="Jindal">Jindal University</option>
                  <option value="Krea">Krea University</option>
                </select>
              </div>
              <div className="form-group mb-5">
                <label htmlFor="password" className="block mb-2">Password</label>
                <input type="password" 
                id="password" 
                placeholder="Enter Password" 
                className="w-full p-2 border rounded" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded">Let's Read</button>
            </form>
          </div>
        </div>
        <div className='right-side w-1/2 flex items-center justify-center bg-[#37B6FF]'>
          <img src={Photo} alt="Illustration" className="max-w-full h-auto" />
        </div>
      </div>
    </>
  );
};

export default UniversityLogin;
