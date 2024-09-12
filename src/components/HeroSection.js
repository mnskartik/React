import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

export default function HeroSection() {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="hero">
      <Slider {...settings} className="hero-slider">
        <div>
          <img src="h3.jpeg" alt="Healthcare Worker 1" className="hero-image" />
        </div>
        <div>
          <img src="h3.jpeg" alt="Healthcare Worker 2" className="hero-image" />
        </div>
        <div>
          <img src="h4.jpg" alt="Healthcare Worker 3" className="hero-image" />
        </div>
        {/* Add more slides as needed */}
      </Slider>
      <div className="hero-content">
        <h1>Bringing Quality Healthcare to Every Corner of Rural India</h1>
        <p>Support our telemedicine initiative and make a difference in the lives of those who need it most.</p>
        <div className="hero-buttons">
          <a href="#donate" className="btn btn-primary">Donate MedicineNow</a>
          <a href="#donate" className="btn btn-primary">Receive MedicineNow</a>
          <a href="#donate" className="btn btn-primary">Support our team</a>
          
        </div>
      </div>
    </section>
  );
}
