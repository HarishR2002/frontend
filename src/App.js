import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import DashboardPage from './pages/DashboardPage';
import CustomerListPage from './pages/CustomerListPage';
import CustomerDetailPage from './pages/CustomerDetailPage'; // Used in a route
import AddCustomerPage from './pages/AddCustomerPage';
import ReportsPage from './pages/ReportsPage'; // Used in a route
import PrivateRoute from './components/PrivateRoute';
import './App.css';

const App = () => {
  const [customers, setCustomers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '555-1234', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '555-5678', status: 'Inactive' },
    // other sample customers...
  ]);

  const addCustomer = (newCustomer) => {
    setCustomers((prevCustomers) => [
      ...prevCustomers,
      { id: prevCustomers.length + 1, ...newCustomer },
    ]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/dashboard" element={<PrivateRoute><DashboardPage /></PrivateRoute>} />
        <Route 
          path="/customers" 
          element={<PrivateRoute><CustomerListPage customers={customers} /></PrivateRoute>} 
        />
        <Route 
          path="/add-customer" 
          element={<PrivateRoute><AddCustomerPage addCustomer={addCustomer} /></PrivateRoute>} 
        />
        <Route 
          path="/customers/:id" 
          element={<PrivateRoute><CustomerDetailPage /></PrivateRoute>} 
        />
        <Route 
          path="/reports" 
          element={<PrivateRoute><ReportsPage /></PrivateRoute>} 
        />
      </Routes>
    </Router>
  );
};

export default App;
