import React from 'react';
import Link from 'next/link';
import RegistrationForm from '../src/components/RegistrationForm'

const style = <style jsx>{`
  .signup-container {
    width: 40%;
    padding: 20px;
    background-color: white;
    margin-top: 45px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    width: 80%;
    box-shadow: 1px 1px #ccc;
    border-radius: 2px;
    background-color: white;
  `}
</style>

const Signup = () => {
  return (
    <div className="signup-container">
      <RegistrationForm />
      {style}
    </div>
  );
};

export default Signup;