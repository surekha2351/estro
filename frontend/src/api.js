import axios from 'axios';

const API_URL = 'http://localhost:8001/api';

export const registerUser = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, { username, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error registering user');
  }
};

export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, { username, password });
    localStorage.setItem('jwtToken', response.data.token); // Store token
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error logging in');
  }
};

export const fetchData = async () => {
  const token = localStorage.getItem('jwtToken');
  try {
    const response = await axios.get(`${API_URL}/uptime`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error fetching data');
  }
};
