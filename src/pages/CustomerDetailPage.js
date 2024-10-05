import React from 'react';
import { Card, Container, Button } from 'react-bootstrap';
import './CustomerDetailPage.css';

const CustomerDetailPage = () => {
  // Replace with actual customer data
  const customer = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
    address: '123 Main St, Anytown, USA',
    purchaseHistory: [
      { id: 1, item: 'Fabric A', amount: '$100' },
      { id: 2, item: 'Fabric B', amount: '$150' },
    ],
  };

  return (
    <Container className="customer-detail-container">
      <Card className="customer-detail-card">
        <Card.Body>
          <h3>{customer.name}</h3>
          <p>Email: {customer.email}</p>
          <p>Phone: {customer.phone}</p>
          <p>Address: {customer.address}</p>
          <h5>Purchase History:</h5>
          <ul>
            {customer.purchaseHistory.map((purchase) => (
              <li key={purchase.id}>
                {purchase.item} - {purchase.amount}
              </li>
            ))}
          </ul>
          <Button variant="primary" className="mt-3">
            Send Offer
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CustomerDetailPage;
