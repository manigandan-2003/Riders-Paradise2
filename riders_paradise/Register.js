/*
  Other code remains unchanged
*/

const register = async (event) => {
  event.preventDefault();

  const username = event.target.username.value;
  const password = event.target.password.value;

  try {
    const response = await fetch('http://localhost:4000/v2/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    // ... rest of your code
  } catch (error) {
    console.error('Error during registration:', error);
    // ... handle error
  }
};