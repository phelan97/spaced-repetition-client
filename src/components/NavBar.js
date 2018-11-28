import React from 'react';
import Link from 'next/link';

const AUTH_TOKEN = "Authorization";

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
      //console.log(e.message);
      return false;
  }
  };

  const authToken = storage();
  
  /* <li><Link href='/'><a>Main</a></Link></li> */
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
        font-weight: 600;
      }
      ul {
        padding: 0;
        display: flex;
        justify-content: space-between;
        margin-right: 20vh;
      }
      a {
        font-size: 1.1rem;
        text-decoration: none;
        color: black;
      }
      a:hover {
        border-bottom: 2px solid #5F9267;
      }
    `}</style>
    </div>
  );

  
};



export default NavBar;