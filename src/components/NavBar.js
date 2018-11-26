import React from 'react';
import Link from 'next/link';

const NavBar = () => {
  return (
    <div>
      <Link href='/'><a>Main</a></Link><br />
      <Link href='/login'><a>Login</a></Link><br />
      <Link href='/signup'><a>Signup</a></Link><br />
      <Link href='/learn-german'><a>Learn German</a></Link><br />
    </div>
  );
};

export default NavBar;