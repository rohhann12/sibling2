import React, { useState } from 'react';
import './Newsletter.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Newsletter() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate('/');
  };
  const [email, setEmail] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: email,
        to_name: 'Newsletter',
      },
    };

    try {
      const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
      console.log(res.data);
      setEmail('');
      alert("Your message has been sent");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className='body1'>
        <h1 className='heading1'>Coming Soon..</h1>
        <h1 className='heading2'>Join the Waitlist</h1>
      </div>
      <div className='heading3'>
        <input
          type="text"
          placeholder='Your email Address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='w-64 h-12 border border-gray-900 rounded-xl p-6'
        />
        <br />
        <div className='container'>
          <button onClick={handleSubmit} className='heading4'>Join Waitlist</button>
          <button onClick={goBack} className='heading4'>Go Back</button>
        </div>
      </div>
    </>
  );
}
