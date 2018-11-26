import React, { Component } from 'react';
import LandingPage from '../src/components/LandingPage';
import Link from 'next/link';
import NavBar from '../src/components/NavBar';


class Main extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <p>This is a test</p>
        <LandingPage />
      </div>
    );
  }
}

export default Main;