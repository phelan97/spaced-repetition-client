import React from 'react';
import Link from 'next/link';
import './NavBar.css';
const AUTH_TOKEN = 'AUTH_TOKEN';

const NavBar = () => {
  function storage() {
    try {
      // The problem was here
      const authToken = localStorage.getItem(AUTH_TOKEN)
      if (authToken !== null) {
        return authToken;
      }

      return false;
  } catch (e) {
      console.log(e.message);
      return false;
  }
  };

  const authToken = storage();
  
  return (
    <ul className="nav-links">
      <li><Link href='/'><a>Main</a></Link></li>
      <li><Link href='/login'><a>Login</a></Link></li>
      <li><Link href='/signup'><a>Signup</a></Link></li>
      <li><Link href='/learn-german'><a>Learn German</a></Link></li>
      <li>{authToken ? (
          <div
            className=""
            onClick={() => {
              storage() && localStorage.removeItem(AUTH_TOKEN)
            }}
          >
            logout
          </div>
        ) : (
          <Link href='/login'><a>Login</a></Link>
        )}</li>
    </ul>
  );
};

export default NavBar;