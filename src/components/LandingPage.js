import React, { Component } from 'react';
import myImg from './static/wide_heroSmall.svg';
import ButtonComp from './Button';

const style = <style jsx>{`
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

class LandingPage extends Component {
  render() {
    return (
      <React.Fragment>
                {style}
      <div className='hero'>
        <div className="heroImg">
          <img src={myImg} />
        </div>
        
        <div className='heroWords'>
          <h1>Relax - learning German just got easy</h1>
          <h2>Spaced repetition software to learn German</h2>

          <ButtonComp buttonText={'Sign Up!'} buttonLink={'/signup'} />
        </div>

        <div className='informational'>
          <h2>At your own pace</h2>
          <h2>As quick as you want</h2>
          <h2>Programs prebuilt for you</h2>

          <h1>Start learning German, today!</h1>
          <ButtonComp buttonText={'Sign Up!'} buttonLink={'/signup'} />

        
        </div>

      </div>
              {style}
      </React.Fragment>
    );
  }
}

export default LandingPage;


// import React, { Component } from 'react';

// const style = <style jsx>{`
//   .background-transition {
//     position: relative;
//     left: 0;
//     bottom: 0;
//     background-color: white;
//     transform: skewY(3deg);
//     height: 500px;
//     width: 100%;
//   }
//   .signup-block {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     position: relative;
//     background-color: blue;
//     height: 200px;
//     width: 100%;
//     top: -30px;
//     color: white;
//     text-align: center;
//   }
//   .signup-container p {
//     margin-bottom: 10px;
//   }
//   .signup-container button {
//     color: white;
//     background-color: rgba(0, 0, 0, 0);
//     border: 2px solid white;
//     font-weight: 600;
//     padding: 10px 20px;
//   }
//   .main-content {
//     padding-left: 20vw;
//     padding-right: 20vw;
//     min-height: 200px;
//   }
// `}</style>

// class LandingPage extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <section>
//           <div className="main-content">
//             <h1>This is the landing page Component</h1>
//           </div>
//           <div>
//             <p>Content here (set within a div container)</p>
//           </div>
//           <div className="background-transition"></div>
//         </section>
//         <section className="signup-block">
//           <div className="signup-container">
//             <p>Sign up now!</p>
//             <button>Sign up</button>
//           </div>
//         </section>
//         {style}
//       </React.Fragment>
//     );
//   }
// }

// export default LandingPage;