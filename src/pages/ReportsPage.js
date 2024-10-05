import React from 'react';
import { Container, Table } from 'react-bootstrap';
import './ReportsPage.css';

const ReportsPage = () => {
  const reports = [
    { id: 1, month: 'January', sales: '$5000', newCustomers: '15' },
    { id: 2, month: 'February', sales: '$7000', newCustomers: '20' },
  ];

  return (
    <Container className="reports-container">
      <h2 className="text-center mb-4">Monthly Reports</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Month</th>
            <th>Sales</th>
            <th>New Customers</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.id}>
              <td>{report.month}</td>
              <td>{report.sales}</td>
              <td>{report.newCustomers}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ReportsPage;
