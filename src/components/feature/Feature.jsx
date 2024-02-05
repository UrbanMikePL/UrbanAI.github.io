import React from 'react';
import './feature.css';

const Feature = ({ title, text }) => (
  <div className="urbangpt__features-container__feature section__padding">
    <div className="urbangpt__features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="urbangpt__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;