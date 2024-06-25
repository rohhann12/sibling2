import './ContactUs.css'
import React, { useState } from 'react'
import axios from 'axios'
import Left_img from "../../assets/contact/Group 2043684748.svg"
function ContactUs() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const contactDetails = {
      fullName: fullName,
      email: email,
      message: message
    };
    axios.post('/api/contact', contactDetails)
      .then(response => {
        console.log(response.data);
        alert('Message sent successfully!');
      })
      .catch(error => {
        console.error('There was an error sending the message!', error);
      });
  }

  return (
    <div className="contact-us-container">
      <div className="img-on-left">
        <img src={Left_img} alt="Contact Us" />
      </div>
      <div className="form-on-right">
        <h2 className='heading3 font-bold'>Contact Us</h2>
        <p className='font-semibold'>hqsibling@gmail.com</p>
        <form onSubmit={handleSubmit}>
          <label className='font-bold'>Full Name</label>
          <input 
            type="text" 
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Wahiq Iqbal" 
            required={true}
            
          />
          <label className='font-bold'>Email</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@gmail.com" 
            required 
          />
          <label className='font-bold'>Your Message</label>
          <textarea 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message here!" 
            required 
          />
          <button type="submit" className='font-bold'>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default ContactUs;
