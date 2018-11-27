import React, { Component } from 'react';
import NavBar from './NavBar'
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Header</h1>
        <NavBar />
      </header>
    );
  }
}

export default Header;