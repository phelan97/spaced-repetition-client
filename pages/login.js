import React from 'react';
import Link from 'next/link';
import NavBar from '../src/components/NavBar';
import LoginForm from '../src/components/LoginForm'
const LoginPage = () => {
  return (
    <div>
      <NavBar />
      <p>This is the login Page</p>
      <LoginForm />
    </div>
  );
};

export default LoginPage;