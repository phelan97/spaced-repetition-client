import React from 'react';
import Link from 'next/link';
import LoginForm from '../src/components/LoginForm'

const LoginPage = () => {
  return (
    <div>
      <p>This is the login Page</p>
      <LoginForm />
    </div>
  );
};

export default LoginPage;