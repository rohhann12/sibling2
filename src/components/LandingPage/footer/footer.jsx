import './footer.css';
import React from 'react';

function Footer() {
  return (
    <footer className="footer-container w-full bg-white">
      <div className="footer-top">
        <div className="footer-column">
          <h3 className='font-bold'>Space By Sibling</h3>
          <ul>
            <li>How this Works?</li>
            <li>Resources</li>
            <li>Journeys</li>
            <li>Live Articles</li>
            <li>Sign-Up as an Institute</li>
            <li>Contact Team</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className='font-bold' >The Sibling Newsletter</h3>
          <ul>
            <li>How this Works?</li>
            <li>Visit Archives</li>
            <li>Blog</li>
            <li>Podcasts</li>
            <li>Help Centre</li>
            <li>Sibling API</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className='font-bold'>Sibling ™</h3>
          <ul>
            <li>What is Sibling</li>
            <li>Team Sibling</li>
            <li>Reviews</li>
            <li>Why Us</li>
            <li>Our Story</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className='font-bold'>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Certifications</li>
            <li>Documentation</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          Sibling is a mental health support platform fostering community,
          connection, and shared experiences to empower individuals on their
          wellness journey
        </p>
        <div className="footer-social ml-[400px]">
          <a href="#"><img src="src/components/assets/social/facebook.svg" alt="Facebook" /></a>
          <a href="https://x.com/siblinghq"><img src="src/components/assets/social/x twitter.svg" alt="Twitter" /></a>
          <a href="https://www.instagram.com/hqsibling"><img src="src/components/assets/social/instagram.svg" alt="Instagram" /></a>
          <a href="https://www.linkedin.com/company/siblinghq"><img src="src/components/assets/social/linkedin.svg" alt="LinkedIn" /></a>
          <a href="#"><img src="src/components/assets/social/youtube.svg" alt="YouTube" /></a>
        </div>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Cookies</a>
          <a href="#">Website Accessibility</a>
        </div >
        <p className='ml-[350px]'>© 2021 MindBridge Ventures. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
