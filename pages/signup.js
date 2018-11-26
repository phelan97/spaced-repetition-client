import React from 'react';
import Link from 'next/link';
import NavBar from '../src/components/NavBar';
import RegistrationForm from '../src/components/RegistrationForm'

const Signup = () => {
  return (
    <div>
    <NavBar />
      <p>This is the Signup Page</p>
      <RegistrationForm />
    </div>
  );
};

export default Signup;