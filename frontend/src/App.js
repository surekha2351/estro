import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <center>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
      </Routes>
    </Router>
    </center>
  );
}

function Home() {
  return (
    <center>
    <div>
      <h1>Welcome to the App</h1>
      <p><a href="/login">Login</a></p>
      <p><a href="/register">Register</a></p>
    </div>
    </center>
  );
}

export default App;
