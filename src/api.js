const API_URL = 'http://localhost:5000/api/customers'; // Adjust if using a different URL

// Function to add a customer
export const addCustomer = async (customerData) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(customerData),
    });
    
    if (response.ok) {
      const newCustomer = await response.json();
      return newCustomer; // Return the newly created customer
    } else {
      throw new Error('Failed to add customer');
    }
  } catch (error) {
    console.error('Error adding customer:', error);
    throw error; // Rethrow the error for handling in the calling component
  }
};

// Function to fetch all customers
export const fetchCustomers = async () => {
  try {
    const response = await fetch(API_URL);
    if (response.ok) {
      const customers = await response.json();
      return customers; // Return the list of customers
    } else {
      throw new Error('Failed to fetch customers');
    }
  } catch (error) {
    console.error('Error fetching customers:', error);
    throw error; // Rethrow the error for handling in the calling component
  }
};
