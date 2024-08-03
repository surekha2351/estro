const axios = require('axios');

// Function to register a user
const registerUser = async (username, password) => {
  try {
    // Sending POST request to register endpoint
    const response = await axios.post('http://localhost:8001/api/auth/register', {
      username,
      password
    });
    console.log('User registered successfully:', response.data);
  } catch (error) {
    if (error.response) {
      // The request was made, and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('Error registering user:', error.response.data);
    } else if (error.request) {
      // The request was made, but no response was received
      console.error('No response received:', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error setting up request:', error.message);
    }
  }
};

// Function to login a user
const loginUser = async (username, password) => {
  try {
    // Sending POST request to login endpoint
    const response = await axios.post('http://localhost:8001/api/auth/login', {
      username,
      password
    });
    // Extracting JWT token from response
    const token = response.data.token;
    console.log('JWT Token:', token);
    return token;
  } catch (error) {
    if (error.response) {
      // The request was made, and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('Error logging in:', error.response.data);
    } else if (error.request) {
      // The request was made, but no response was received
      console.error('No response received:', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error setting up request:', error.message);
    }
  }
};

// Example usage
const username = 'surekha';
const password = 'surekha123';

// Register the user
registerUser(username, password).then(() => {
  // Once registration is complete, login to get JWT token
  loginUser(username, password).then((token) => {
    console.log('Received JWT Token:', token);
  });
});
