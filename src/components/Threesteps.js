import React from 'react';
import Donation from './Donation';
import Matching from './Matching';
import Distribution from './Distribution';


const Threesteps = () => {
  return (
    <div className="three-steps-container">
      <h2 className="steps-heading">How It Works</h2>
      <div className="steps-content">
        <Donation />
        <Matching />
        <Distribution />
      </div>
    </div>
  );
};

export default Threesteps;
