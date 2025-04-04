/* ... other code ... */
const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:4000/v2/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    // ... rest of your code ...
  } catch (error) {
    // ... error handling ...
  }
};
/* ... other code ... */