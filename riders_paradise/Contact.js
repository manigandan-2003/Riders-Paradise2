/* ... other code ... */
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:4000/v2/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    // ... rest of your code ...
  } catch (error) {
    // ... error handling ...
  }
};
/* ... other code ... */