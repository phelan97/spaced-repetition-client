import React, { Component } from 'react';
import NavBar from './NavBar'
// import './Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <style jsx>{`
          header {
            display: flex;
            justify-content: space-between;
            background-color: rgba(0, 0, 0, 0.25);
            margin-left: 0;
          }
          h1 {
            margin-top: 10px;
          }
        `}</style>
        <h1>Header</h1>
        <NavBar />
      </header>
    );
  }
}

export default Header;