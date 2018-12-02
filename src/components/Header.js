import React, { Component } from 'react';
import Link from 'next/link';
import NavBar from './NavBar'

class Header extends Component {
  render() {
    return (
      <header>
        <Link href="/"><a className="header-text">Lernen Sie Deutsch! (Learn German)</a></Link>
        <NavBar />
        <style jsx>{`
header {
  display: flex;
  justify-content: space-between;
  padding-top: 2vh;
  padding-bottom: 2vh;
  height: 10vh;
  align-items: center;
}

.header-text {
  color: #5F9267;
  font-size: 1.5rem;
  font-weight: 600;
  text-decoration: none;
  align-self: center;
  padding-top: 19px;
}

`}</style>
      </header>
    );
  }
}

export default Header;