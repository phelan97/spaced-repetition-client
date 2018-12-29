import React from 'react';
import Link from 'next/link';

const AUTH_TOKEN = "Authorization";

const NavBar = () => {
  function storage() {
    try {
      const authToken = localStorage.getItem(AUTH_TOKEN)
      if (authToken !== null) {
        return authToken;
      }

      return false;
  } catch (e) {
      return false;
  }
  };

  const authToken = storage();
  
  return (
    <div className='nav-container'>
    <ul className="nav-links">
      {authToken ? (
        <React.Fragment>
          <li>
            <Link href='/learn-german'><a>Learn German</a></Link>
          </li>
          <li>
            <Link href='/'>
              <a onClick={() => {
                localStorage.removeItem("Authorization")
              }}>Logout</a>
            </Link>
          </li>
        
        </React.Fragment>
        ) : (
          <React.Fragment>
            <li>
              <Link href='/login'><a>Login</a></Link>
            </li>
            <li>
              <Link href='/signup'><a>Sign up</a></Link>
            </li>
          </React.Fragment>
        )}
    </ul>

    <style jsx>{`
      li {
        display: inline;
        margin-left: 20px;
      }
      ul {
        padding: 0;
        display: flex;
        justify-content: space-between;
      }
      a {
        display: inline-block;
        color: #021647;
        margin: 0 0 0 50px;
        padding-bottom: 18px;
        position: relative;
        text-decoration: none;
        top: 18px;
        font-weight: 700;
        cursor: pointer;
      }
      a:hover {
        border-bottom: 5px solid #5F9267;
      }

    `}</style>
    </div>
  );
};

export default NavBar;