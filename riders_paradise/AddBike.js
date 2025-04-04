import React, { useState } from 'react';

function AddBike() {
  const [bikeData, setBikeData] = useState({});

  const handleChange = (e) => {
    setBikeData({ ...bikeData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/v2/bike/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bikeData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Bike added:', data);
    } catch (error) {
      console.error('Adding bike failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Add bike form fields here */}
      <button type="submit">Add Bike</button>
    </form>
  );
}

export default AddBike;