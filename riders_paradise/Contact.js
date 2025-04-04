/*
  Other code remains unchanged
*/

const sendContactForm = async (event) => {
  event.preventDefault();
  // ... get contact form data

  try {
    const response = await fetch('http://localhost:4000/v2/support/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    // ... handle response
  } catch (error) {
    console.error('Error sending contact form:', error);
    // ... handle error
  }
};