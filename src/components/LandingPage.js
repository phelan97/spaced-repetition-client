import React, { Component } from 'react';
import myImg from './static/wide_heroSmall.svg';

class LandingPage extends Component {
  render() {
    return (
      <React.Fragment>
      <div className='hero'>
        <div className="heroImg">
          <img src={myImg} />
        </div>
        
        <div className='heroWords'>
          <h1>Relax - learning German just got easy</h1>
          <h2>Spaced repetition software to learn German</h2>

          <button>Sign Up</button> 
        </div>

        <style jsx>{`
          img {
            width: 35vw;
          }

          .hero h1, .hero p, .hero h2 {
            color: #021647;
          }

          .hero {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto auto auto;
            grid-column-gap: 3vw;
            grid-row-gap: 6vh;

          }

          .heroSpacer {
            flex: 5;
          }

          .heroImg {
            
          }

          .heroWords {
            display: flex;
            flex: 4;
            text-align: center;
            flex-direction: column;
            align-items: center;
            align-self: center;
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
            margin-top: 30px;
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
            width: 120px;
            height: 3rem;
          }

          .informational {
            grid-column: 1 / span 2;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: auto auto auto auto;
          }

          .informational h2:nth-child(1) {
            grid-row: 2;
            grid-column: 1;
            justify-self: center;
            align-self: center;
          }

          .informational h2:nth-child(2) {
            grid-row: 1;
            grid-column: 2;
            justify-self: center;
            align-self: center;
          }

          .informational h2:nth-child(3) {
            grid-row: 2;
            grid-column: 3;
            justify-self: center;
            align-self: center;
          }

          .informational h1 {
            grid-row: 3;
            grid-column: 1/ span 6;
            justify-self: center;
            margin-bottom: 40px;
          }

          .informational button {
            grid-row: 4;
            grid-column: 1 / span 6;
            justify-self: center;
          }

  

        `}</style>

        <div className='informational'>
          <h2>At your own pace</h2>
          <h2>As quick as you want</h2>
          <h2>Programs prebuilt for you</h2>

          <h1>Start learning German, today!</h1>
          <button>Sign Up</button>

        
        </div>
      </div>
      
      </React.Fragment>
    );
  }
}

export default LandingPage;