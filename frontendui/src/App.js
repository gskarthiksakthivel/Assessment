import React from 'react';
import AccountForm from './components/AccountForm';
import CustomerList from './components/CustomerList';

const App = () => {
  return (
    <div>
      <h1>Account Management</h1>
      <AccountForm />
      <CustomerList />
    </div>
  );
};

export default App;
