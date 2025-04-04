import React, { useState } from 'react';

const AddBike = () => {
  // ... state variables for bike data ...

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/v2/bikes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ /* bike data */ }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Bike added successfully:', data);
      // Handle successful add, e.g., redirect
    } catch (error) {
      console.error('Adding bike failed:', error);
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* ... form fields for bike data ... */}
      <button type="submit">Add Bike</button>
    </form>
  );
};

export default AddBike;