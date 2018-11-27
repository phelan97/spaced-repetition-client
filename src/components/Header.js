import React, { Component } from 'react';
import NavBar from './NavBar'

const style = <style jsx>{`
header {
  display: flex;
  
  justify-content: space-between;
  padding-top: 2vh;
  padding-bottom: 2vh;
  height: 10vh;
  align-items: center;
}

h1 {
  color: #5F9267;
  font-size: 1.5rem;
  font-weight: 600;
}

`}</style>


class Header extends Component {
  render() {
    return (
      <header>
        <h1>Lernen Sie Deutsch! (Learn German)</h1>
        <NavBar />
        {style}
      </header>
    );
  }
}

export default Header;