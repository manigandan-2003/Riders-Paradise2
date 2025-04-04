/*
  Other code remains unchanged
*/

const addBike = async (event) => {
  event.preventDefault();
  // ... get bike data from the form

  try {
    const response = await fetch('http://localhost:4000/v2/bike/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bikeData),
    });
    const data = await response.json();
    // ... handle response
  } catch (error) {
    console.error('Error adding bike:', error);
    // ... handle error
  }
};