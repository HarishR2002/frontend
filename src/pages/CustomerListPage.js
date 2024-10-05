import React from 'react';
import Sidebar from '../components/Sidebar';
import './CustomerListPage.css';

const CustomerListPage = ({ customers }) => {
  return (
    <div className="customerlist-container">
      <Sidebar />
      <div className="main-content">
        <h1>Customer List</h1>
        <table className="customer-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.phone}</td>
                <td>{customer.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerListPage;
