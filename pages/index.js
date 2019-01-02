import React, { Component } from 'react';
import LandingPage from '../src/components/LandingPage';
import Link from 'next/link';
import Fonts from '../src/components/Fonts'

class Main extends Component {
  componentDidMount () {
    Fonts()
    // console.log("Warning: Text content did not match... is a bug in NextJS that we can't get rid of")
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