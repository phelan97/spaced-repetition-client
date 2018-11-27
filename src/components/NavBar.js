import React from 'react';
import Link from 'next/link';
import './NavBar.css';

const NavBar = () => {
  return (
    <ul className="nav-links">
      <li><Link href='/'><a>Main</a></Link></li>
      <li><Link href='/login'><a>Login</a></Link></li>
      <li><Link href='/signup'><a>Signup</a></Link></li>
      <li><Link href='/learn-german'><a>Learn German</a></Link></li>
    </ul>
  );
};

export default NavBar;