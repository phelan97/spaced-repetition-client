import React, { Component } from 'react';
import NavBar from './NavBar'

class Header extends Component {
  render() {
    return (
      <div>
        <p>This is the Header</p>
        <NavBar />
      </div>
    );
  }
}

export default Header;