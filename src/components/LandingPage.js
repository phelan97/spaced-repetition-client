import React, { Component } from 'react';
import myImg from './static/wide_hero.svg';

class LandingPage extends Component {
  render() {
    return (
      <div className='hero'>
        
        <img src={myImg} />
        <h1>Relax - learning German just got easy</h1>
        <h2>Spaced repetition software to learn German</h2>

        <button>Sign Up</button> 

        <h2>At your own pace</h2>
        <h2>As quick as you want</h2>
        <h2>Programs prebuilt for you</h2>

        <h1>Start learning German, today!</h1>
        <button>Sign Up</button>

        <style jsx>{`
          img {
            width: 60vw;
          }

          .hero h1, .hero p, .hero h2 {
            color: #021647;
          }

          .hero h1 {
            font-size: 48px;
            line-height: 55px;
            margin: 0px;
            margin-top: 40px;
          }

          .hero h2 {
            font-size: 32px;
            line-height: 44px;
            margin-bottom: 40px;
          }

          button {
            background-color: #2E65DC;
            font-family: avertaBold;
            color: #F7EDE3 !important;
            font-size: 16px;
            padding: 6px 18px;
            box-shadow: 0px 4px 0 0 #DCD4CC;
            border: 3px solid #2E65DC;
            cursor: pointer;
            display: inline-block;
            text-decoration: none;
          }

  

        `}</style>
      </div>
    );
  }
}

export default LandingPage;