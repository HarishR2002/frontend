import React from 'react';
import Sidebar from '../components/Sidebar';
import './DashboardPage.css';

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <h1>Dashboard</h1>
        <p>Welcome to the CRM dashboard! Use the sidebar to navigate through the application.</p>

        <div className="dashboard-widgets">
          <div className="widget">
            <h2>Total Customers</h2>
            <p>150</p>
          </div>
          <div className="widget">
            <h2>New Feedbacks</h2>
            <p>25</p>
          </div>
          <div className="widget">
            <h2>Pending Queries</h2>
            <p>10</p>
          </div>
          <div className="widget">
            <h2>Reports</h2>
            <p>Generate monthly or annual reports.</p>
          </div>
        </div>

        <div className="dashboard-activity">
          <h2>Recent Activity</h2>
          <ul>
            <li>Customer John Doe submitted a query.</li>
            <li>Customer Jane Smith gave feedback.</li>
            <li>Sales report for September generated.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
