import React, { useState } from 'react';
import axios from 'axios';

const AccountForm = () => {
  const [customerId, setCustomerId] = useState('');
  const [initialCredit, setInitialCredit] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/accounts', {
        customerId: parseInt(customerId),
        initialCredit: parseFloat(initialCredit)
      });
      alert('Account created successfully: ' + JSON.stringify(response.data));
    } catch (error) {
      console.error('Error creating account:', error);
      alert('Error creating account.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Customer ID:</label>
        <input
          type="number"
          value={customerId}
          onChange={(e) => setCustomerId(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Initial Credit:</label>
        <input
          type="number"
          value={initialCredit}
          onChange={(e) => setInitialCredit(e.target.value)}
          required
        />
      </div>
      <button type="submit">Create Account</button>
    </form>
  );
};

export default AccountForm;
