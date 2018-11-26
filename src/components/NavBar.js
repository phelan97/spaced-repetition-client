import React from 'react';
import Link from 'next/link';

const NavBar = () => {
  return (
    <React.Fragment>
      <style jsx>{`
      li {
        display: inline;
        margin-left: 20px;
      }
      ul {
        margin-right: 30px;
      }
      a {
        font-size: 1.2rem;
        text-decoration: none;
        color: red;
      }
    `}</style>
      <ul className="nav-links">
        <li><Link href='/'><a>Main</a></Link></li>
        <li><Link href='/login'><a>Login</a></Link></li>
        <li><Link href='/signup'><a>Signup</a></Link></li>
        <li><Link href='/learn-german'><a>Learn German</a></Link></li>
      </ul>
    </React.Fragment>
  );
};

export default NavBar;