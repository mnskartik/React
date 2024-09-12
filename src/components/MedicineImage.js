import React from 'react';


export default function MedicineImage() {
  return (
    <div className="medicine-image">
      <img src="pill.png" alt="Pill Icon" className="medicine-image-icon" />
      <h2 className="medicine-image-heading">Why Medicine?</h2>
      <p>
        50 million Americans don't take their prescribed medication because they can't afford it.
        With soaring copays, deductibles, and insurance costs, many people are making impossible choices
        between medications, food, housing, gas to get to work, and more.
      </p>
      <p>
        Because our health is a fundamental part of being human. Without it, we have nothing.
      </p>
      <p>
        Not taking your medications, however, often leads to even worse outcomes - heart attacks, strokes,
        and even higher costs. This is our nation's most critical problem, but it doesn't have to be.
      </p>
      <p>
        That's why we're here. SIRUM provides access so everyone gets the care they deserve.
      </p>
    </div>
  );
}
