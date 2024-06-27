import './ContactUs.css'
import React, { useState } from 'react'
import axios from 'axios'
import Left_img from "../../assets/contact/Group 2043684748.svg"
const EmailRestAPI = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

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
      }
    };

    // Send the email using EmailJS
    try {
      const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
      console.log(res.data);
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error(error);
    }
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
            value={name}
            onChange={(e) => setName(e.target.value)}
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
export default EmailRestAPI;
