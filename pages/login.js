import React from 'react';
import Link from 'next/link';
import LoginForm from '../src/components/LoginForm'

const style = <style jsx>{`
  .login-container {
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

const LoginPage = () => {
  return (
    <div className="login-container">
      <LoginForm />
      {style}
    </div>
  );
};

export default LoginPage;