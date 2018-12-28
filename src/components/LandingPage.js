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
  grid-row: 3;
  grid-column: 1 / span 2;
  justify-self: center;
}

.hero h2 {
  font-size: 32px;
  line-height: 44px;
  margin-bottom: 25px;
  margin-top: 12px;
}

.informational {
  grid-column: 1 / span 2;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto auto auto;
  margin-top: 8vh;
}

.informational div:nth-child(1) {
  grid-row: 2;
  grid-column: 1;
  justify-self: center;
  align-self: center;
  text-align: center;
  margin-top: -8vh;
}

.informational div:nth-child(2) {
  grid-row: 1;
  grid-column: 2;
  justify-self: center;
  align-self: center;
  text-align: center;
}

.informational div:nth-child(3) {
  grid-row: 2;
  grid-column: 3;
  justify-self: center;
  align-self: center;
  text-align: center;
  margin-top: -8vh;
}

.informational h1 {
  grid-row: 3;
  grid-column: 1/ span 6;
  justify-self: center;
  margin-bottom: 40px;
}

.btnDiv {
  grid-row: 4;
  grid-column: 1 / span 3;
  justify-self: center;
}

.footer .btnDiv {
  margin-top: 4vh;
}

hr {
  border: none;
  width: 80px;
  height: 8px;
}

.hrOne {
  background: #AFC8B3;
  -webkit-transform: rotate(10deg);
  -ms-transform: rotate(10deg);
  transform: rotate(10deg);
}

.hrTwo {
  background: #99B2F7;
  -webkit-transform: rotate(-5deg);
  -ms-transform: rotate(-5deg);
  transform: rotate(-5deg);
}

.hrThree {
  background: #ECC425;
  -webkit-transform: rotate(5deg);
  -ms-transform: rotate(5deg);
  transform: rotate(5deg);
}

.footer {
  display: flex;
  flex-direction: column;
  grid-row: 3;
  grid-column: 1 / span 2;
  justify-self: center;
  align-items: center;
  margin-top: 5vh;
}

@media only screen and (max-width: 600px) {
  .hero {
    grid-template-columns: 1fr;
  }
  .heroImg {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
}

.heroWords {
  min-width: 250px;
}
.heroImg {
  display:
  min-width: 300px;
}
.heroImgContainer {
  text-align: center;
}
`}</style>

class LandingPage extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="hero">
          <div className="heroImgContainer">
            <img className="heroImg" src={myImg} />
          </div>
          
          <div className='heroWords'>
            <h1>Relax - learning German just got easy</h1>
            <h2>Spaced repetition software to learn German</h2>

            <ButtonComp buttonText={'Sign Up!'} buttonLink={'/signup'} />
          </div>
        </section>

        <section className='informational'>
          <div className='informationalOne'>
            <h2>At your own pace</h2>
            <hr className='hrOne' />
          </div>
          
          <div className='informationalTwo'>
            <h2>As quick as you want</h2>
            <hr className='hrTwo' />
          </div>
          
          <div className='informationalThree'>
            <h2>Prebuilt programs</h2>
            <hr className='hrThree' />
          </div>
        </section>

        <footer className='footer'>
          <h1>Start learning German, today!</h1>
          <ButtonComp buttonText={'Sign Up!'} buttonLink={'/signup'} className='button' />
        </footer>

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