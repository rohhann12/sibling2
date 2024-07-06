import './ContactUs.css';
import React, { useState } from 'react';
import axios from 'axios';
import Left_img from '../assets/contactus/newspaper.svg';

const EmailRestAPI = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const[AuthName,setAuthName]=useState('')
  const[AuthEmail,setAuthEmail]=useState('')
  const [contactNum,setcontactNum]=useState('')
  const [AuthDes,setAuthDes]=useState('')
  const options = [
    "Principal",
    "Teacher",
    "Staff",
    "Student",
    "Other",
];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: 'Viney',
        message: message,
      },
    };

    try {
      const res = await axios.post('https://api.emailjs.com/api/v1.0/email/send', data);
      console.log(res.data);
      setName('');
      setEmail('');
      setMessage('');
      alert('Your message has been sent');
    } catch (error) {
      console.error(error);
    }

  };

  return (
    <div className="contact-us-container">
      <div className="img-on-left">
        <img src={Left_img} alt="Contact Us" className="map" />
      </div>
      <div className="form-on-right">
        <h2 className="heading3 font-bold">Contact Us</h2>
        <p className="font-semibold">Email us at hqsibling@gmail.com</p>
        <form onSubmit={handleSubmit}>
          <label className="font-bold">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Wahiq Iqbal"
            required
          />
          <label className="font-bold">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@gmail.com"
            required
          />
          <label className="font-bold">Institute Authority Name</label>
          <input
            value={AuthName}
            onChange={(e) => setAuthName(e.target.value)}
            placeholder="Enter your message here!"
            required
          />
          <label className="font-bold">Institute Authority Email</label>
          <input
            value={AuthEmail}
            onChange={(e) => setAuthEmail(e.target.value)}
            placeholder="Enter your message here!"
            required
          />
          <label className="font-bold">Institute Authority Contact Number</label>
          <input
            value={contactNum}
            onChange={(e) => setcontactNum(e.target.value)}
            placeholder="Enter your message here!"
            required
          />
          <button type="submit" className="font-bold">Get me on board!</button>
        </form>
      </div>
    </div>
  );
};

export default EmailRestAPI;
