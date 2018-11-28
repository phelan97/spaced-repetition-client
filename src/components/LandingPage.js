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
    position: relative;
    background-color: blue;
    height: 200px;
    width: 100%;
    top: -30px;
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
            <p>This is the landing page Component</p>
          </div>
          <div>
            <p>Content here (set within a div container)</p>
          </div>
          <div className="background-transition"></div>
        </section>
        <section className="signup-block">
          <p>Sign up stuff</p>
        </section>
        {style}
      </React.Fragment>
    );
  }
}

export default LandingPage;