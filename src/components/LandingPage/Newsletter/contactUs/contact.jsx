import './contact.css';
import React, { useState } from 'react';
import axios from 'axios';
import Left_img from '../assets/contactus/newspaper.svg';

const EmailRestAPI = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [IName, setIName] = useState('');
  const [IEmail, setIEmail] = useState('');
  const [IContact, setIContact] = useState('');
  const [authType, setAuthType] = useState(''); // State for the selected authentication type

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
        auth_type: authType, // Include the selected authentication type in the template params
      },
    };

    try {
      const res = await axios.post('https://api.emailjs.com/api/v1.0/email/send', data);
      console.log(res.data);
      setName('');
      setEmail('');
      setMessage('');
      setIName('');
      setIEmail('');
      setIContact('');
      setAuthType('');
      alert('Your message has been sent');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="outer-container1" id='contacT'>
      <div className="top-heading1">
        <p>Let's Start Reading</p>
        </div>
        <div className='top-heading-below1'>
        <p>Subscribe Your Organization to The Sibling Newsletter</p>
        </div>
      <div className="contact-us-container1">
        <div className="img-on-left1">
          <img src={Left_img} alt="Contact Us" className="map1" />
        </div>
        <div className="form-on-right1">
          <p className="font-semibold heading1-1">
            You can reach us anytime via <span className='blue-email1'>support@hqsibling.in</span>
          </p>
          <form onSubmit={handleSubmit}>
            <label className="font-bold1">Name *</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
            />
            <label className="font-bold1">Email *</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              required
            />
            <label className="font-bold1">Institute Name *</label>
            <input
              type="text"
              value={IName}
              onChange={(e) => setIName(e.target.value)}
              placeholder="Your Institute Name"
              required
            />
            <label className="font-bold1">Institute Authority Name *</label>
            <input
              type="text"
              value={IName}
              onChange={(e) => setIName(e.target.value)}
              placeholder="Name of the contact person"
              required
            />
            <label className="font-bold1">Institute Authority Email *</label>
            <input
              type="email"
              value={IEmail}
              onChange={(e) => setIEmail(e.target.value)}
              placeholder="Email address of the contact person"
              required
            />
            <label className="font-bold1">Institute Authority Contact *</label>
            <input
              type="text"
              value={IContact}
              onChange={(e) => setIContact(e.target.value)}
              placeholder="Contact of the contact person"
              required
            />
            <label className="font-bold1">Institute Authority Designation *</label>
            <select
              value={authType}
              onChange={(e) => setAuthType(e.target.value)}
              required
              className="border rounded-md p-2"
            >
              <option value="">Select...</option>
              <option value="Parent">Parent</option>
              <option value="Teacher">Teacher</option>
              <option value="Student">Student</option>
              <option value="Other">Other</option>
              <option value="Staff">Staff</option>
            </select>
            <br />
            <button type="submit" className="font-bold1">Get me on board!</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailRestAPI;
