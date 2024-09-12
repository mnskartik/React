import React, { useState, useEffect } from 'react';


export default function ImpactSection() {
  const [donations, setDonations] = useState(0);
  const [medicine, setMedicine] = useState(0);
  const [prescriptions, setPrescriptions] = useState(0);

  useEffect(() => {
    const updateValues = () => {
      setDonations(prev => prev + 1000);
      setMedicine(prev => prev + 500);
      setPrescriptions(prev => prev + 10);
    };

  
    const interval = setInterval(updateValues, 5000);

    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="impact" className="impact">
      <h2>Our Impact</h2>
      <div className="impact-visuals">
        
        <p>Donations shipped through our platform: ${donations}</p>
        <p>$ of medicine redistributed to partners: ${medicine}</p>
        <p>Prescriptions donated to help people in need: {prescriptions}</p>
      </div>
      <a href="#impact-report" className="btn btn-primary">See Full Impact Report</a>
    </section>
  );
}
