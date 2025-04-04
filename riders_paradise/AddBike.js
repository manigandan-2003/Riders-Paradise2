/* ... other code ... */
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
    const data = await response.json();
    // ... rest of the code ...
  } catch (error) {
    // ... error handling ...
  }
};
/* ... other code ... */