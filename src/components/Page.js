import React, { Component } from 'react';
import Header from './Header';
import Meta from './Meta';

// @import url('https://fonts.googleapis.com/css?family=Montserrat');

//This must be HERE, it cannot be inline but it causes an error in the browser. 
const style = <style>{`

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  h1 {
    color: red;
  }

  h2 {
    color: blue;
  }

  body {
    background-color: #f2e9e0;
    font-family: 'Montserrat', sans-serif;
    padding-left: 12vw;
    padding-right: 12vw;
    color: #121C37;
  }
`}</style>

class Page extends Component {
  
  render() {
    return (
      <div>
        <Meta />
        <Header />
        {this.props.children}

        {style}
        
      </div>
    );
  }
}

export default Page;