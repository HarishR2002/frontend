import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove auth token from local storage to log the user out
    localStorage.removeItem('authToken');
    // Redirect to login page
    navigate('/');
  };

  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/customers">Customer List</Link></li>
        <li><Link to="/add-customer">Add Customer</Link></li>
        <li><Link to="/customers/:id">Customer Details</Link></li> {/* Added Customer Details Page */}
        <li><Link to="/reports">Reports</Link></li>
        {/* Include other necessary pages if they exist */}
      </ul>
      <div className="logout-section">
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
