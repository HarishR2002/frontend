import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { addCustomer } from '../api'; // Import the API function
import './AddCustomerPage.css';

const AddCustomerPage = () => {
  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    phone: '',
    status: 'Active',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addCustomer(customer); // Call the addCustomer function
      navigate('/customers'); // Redirect to the customer list page
    } catch (error) {
      console.error('Failed to add customer:', error); // Handle error (e.g., show a message)
    }
  };

  return (
    <div className="add-customer-container">
      <Sidebar />
      <div className="main-content">
        <h1>Add Customer</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={customer.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={customer.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={customer.phone}
            onChange={handleChange}
            required
          />
          <select name="status" value={customer.status} onChange={handleChange}>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <button type="submit">Add Customer</button>
        </form>
      </div>
    </div>
  );
};

export default AddCustomerPage;
