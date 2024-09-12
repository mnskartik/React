import React from 'react';


export default function SuccessStoriesSection() {
  return (
    <section id="success-stories" className="success-stories">
      <h2>Success Stories</h2>
      <div className="success-stories-carousel">
        <div className="story-card">
          <img src="su.png" alt="Success Story 1" className="story-image" />
          <div className="story-content">
            <p>"Telemedicine saved my life. Thank you!" - Beneficiary</p>
          </div>
        </div>
        <div className="story-card">
          <img src="h1.jpeg" alt="Success Story 2" className="story-image" />
          <div className="story-content">
            <p>"We were able to provide immediate care thanks to this service." - Healthcare Worker</p>
          </div>
        </div>
        <div className="story-card">
          <img src="su.png" alt="Success Story 1" className="story-image" />
          <div className="story-content">
            <p>"Telemedicine saved my life. Thank you!" - Beneficiary</p>
          </div>
        </div>
        <div className="story-card">
          <img src="h1.jpeg" alt="Success Story 2" className="story-image" />
          <div className="story-content">
            <p>"We were able to provide immediate care thanks to this service." - Healthcare Worker</p>
          </div>
        </div>
      </div>
      <a href="#read-more-stories" className="btn btn-primary">Read More Stories</a>
    </section>
  );
}
