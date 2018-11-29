import React, { Component } from 'react';

const style = <style jsx>{`
  .background-transition {
    position: relative;
    left: 0;
    bottom: 0;
    background-color: white;
    transform: skewY(3deg);
    height: 500px;
    width: 100%;
  }
  .signup-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    background-color: blue;
    height: 200px;
    width: 100%;
    top: -30px;
    color: white;
    text-align: center;
  }
  .signup-container p {
    margin-bottom: 10px;
  }
  .signup-container button {
    color: white;
    background-color: rgba(0, 0, 0, 0);
    border: 2px solid white;
    font-weight: 600;
    padding: 10px 20px;
  }
  .main-content {
    padding-left: 20vw;
    padding-right: 20vw;
    min-height: 200px;
  }
`}</style>

class LandingPage extends Component {
  render() {
    return (
      <React.Fragment>
        <section>
          <div className="main-content">
            <h1>This is the landing page Component</h1>
          </div>
          <div>
            <p>Content here (set within a div container)</p>
          </div>
          <div className="background-transition"></div>
        </section>
        <section className="signup-block">
          <div className="signup-container">
            <p>Sign up now!</p>
            <button>Sign up</button>
          </div>
        </section>
        {style}
      </React.Fragment>
    );
  }
}

export default LandingPage;