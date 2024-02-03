import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';
import { LinearGradient } from 'react-text-gradients';

const Possibility = () => (
  <div className="urbangpt__possibility section__padding" id="possibility">
    <div className="urbangpt__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="urbangpt__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">
        <LinearGradient gradient={['to left', '#17acff, #ff68f0']}>
          The possibilities are <br /> beyond your imagination
          </LinearGradient>
          </h1>
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;