import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Import the CSS

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve stored user data from localStorage
    const storedUserData = JSON.parse(localStorage.getItem('userData'));

    if (!storedUserData) {
      setError('No user found. Please sign up first.');
      return;
    }

    // Check if the input credentials match the stored data
    if (
      formData.email === storedUserData.email &&
      formData.password === storedUserData.password
    ) {
      // Set auth token in localStorage to simulate login
      localStorage.setItem('authToken', 'loggedIn');
      setError('');
      navigate('/dashboard'); // Redirect to dashboard
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p style={{ textAlign: 'center', marginTop: '1rem' }}>
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>
    </div>
  );
};

export default LoginPage;
