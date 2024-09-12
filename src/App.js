import React from 'react';
import './App.css'; 
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MedicineImage from './components/MedicineImage';
import ImpactSection from './components/ImpactSection';
import Threesteps from './components/Threesteps';

import SuccessStoriesSection from './components/SuccessStoriesSection';
import Footer from './components/Footer';
import Live from './components/Live';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <MedicineImage/>
      <Live/>
      <ImpactSection />
      <Threesteps />
     
      <SuccessStoriesSection />
      
      
      <Footer />
    </div>
  );
}


export default App;
