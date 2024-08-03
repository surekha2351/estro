// src/components/Dashboard.js

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // Added loading state
  const [error, setError] = useState(''); // Added error state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Verify URL and ensure CORS is handled correctly
        const response = await axios.get('http://localhost:8001/api/analytics/data', { // Full URL if backend runs on a different port
          headers: {
            Authorization: `Bearer ${localStorage.getItem('jwtToken')}`
          }
        });
        setData(response.data);
      } catch (err) {
        console.error('Error fetching data:', err); // Added console error for debugging
        setError('Failed to fetch data');
        navigate('/login'); // Redirect to login on error
      } finally {
        setLoading(false); // Ensure loading state is updated
      }
    };

    fetchData();
  }, [navigate]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Dashboard</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Dashboard;
