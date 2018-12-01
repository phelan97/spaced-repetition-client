import React, { Component } from 'react';
import LandingPage from '../src/components/LandingPage';
import Link from 'next/link';
import Fonts from '../src/components/Fonts'




class Main extends Component {
  componentDidMount () {
    Fonts()
  }
  
  render() {
    return (
      <div>
        <LandingPage />
      </div>
    );
  }
}

export default Main;