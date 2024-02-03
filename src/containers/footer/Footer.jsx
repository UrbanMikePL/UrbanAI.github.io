import React from 'react';
import urbangptLogo from '../../assets/logo (6).png';
import './footer.css';
import { LinearGradient } from 'react-text-gradients';
const Footer = () => (
  <div className="urbangpt__footer section__padding">
    <div className="urbangpt__footer-heading">
    <h1>
      <LinearGradient gradient={['to left', '#17acff ,#ff68f0']}>Do you want to step in to the future before others</LinearGradient>
      </h1>
    </div>

    <div className="urbangpt__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="urbangpt__footer-links">
      <div className="urbangpt__footer-links_logo">
        <img src={urbangptLogo} alt="gpt3_logo" />
        <p>Koniczynowa 999/21, Działdów <br /> ©All Rights Reserved</p>
      </div>
      <div className="urbangpt__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="urbangpt__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="urbangpt__footer-links_div">
        <h4>Get in touch</h4>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>085-132567</p>
        <p>info@payme.net</p>
      </div>
    </div>

    <div className="urbangpt__footer-copyright">
      <p>©2024 UrbanAI. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;