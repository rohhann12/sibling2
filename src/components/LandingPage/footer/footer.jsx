import './footer.css';
import React from 'react';
import Hidden from "../../assets/footer/footer.svg"
import Fb from "../../assets/social/facebook.svg"
import Twitter from "../../assets/social/x twitter.svg"
import Insta from "../../assets/social/instagram.svg"
import LinkedIn from "../../assets/social/linkedin.svg"
import Yt from "../../assets/social/youtube.svg"
function Footer() {
  return (
    <footer className="footer-container w-full bg-white">
      <div className="footer-top">
        <div className="footer-column">
          <h3 className="font-bold">Space By Sibling</h3>
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
          <h3 className="font-bold">The Sibling Newsletter</h3>
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
          <h3 className="font-bold">Sibling</h3>
          <ul>
            <li>What is Sibling</li>
            <li>Team Sibling</li>
            <li>Reviews</li>
            <li>Why Us</li>
            <li>Our Story</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="font-bold">Company</h3>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Certifications</li>
            <li>Documentation</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <img src={Hidden} alt="" className='hide_this' />
        <p className="footer-description">
          Sibling is a mental health support platform fostering community,
          connection, and shared experiences to empower individuals on their
          wellness journey
        </p>
        <div className="footer-social">
          <a href="#"><img src={Fb} alt="Facebook" /></a>
          <a href="https://x.com/siblinghq"><img src={Twitter} alt="Twitter" /></a>
          <a href="https://www.instagram.com/hqsibling"><img src={Insta} alt="Instagram" /></a>
          <a href="https://www.linkedin.com/company/siblinghq"><img src={LinkedIn} alt="LinkedIn" /></a>
          <a href="#"><img src={Yt} alt="YouTube" /></a>
        </div>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Cookies</a>
          <a href="#">Website Accessibility</a>
        </div>
        <p className="footer-copyright">© 2024 MindBridge Ventures. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
