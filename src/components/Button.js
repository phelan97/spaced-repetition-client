import React from 'react';
import Link from 'next/link';

const ButtonComp = (props) => {
  return (
    <div className='btnDiv'>
      <Link href={props.buttonLink} >
        <a className="isometric">
          <button type='submit' className="btnttl">{props.buttonText}</button>
        </a>
      </Link>

      <style jsx>{`
      .isometric { 
        color: #90b5ff;
        display: inline-block;
        height: 10px;
        font-size: 25px;
        line-height: 46px;
        background: #90b5ff;
        text-decoration: none;
        box-sizing: border-box; 
        margin: 1em;
      }
      
      .isometric .btnttl{
        display: inline-block;
        width: 120px;
        height: 50px;
        text-align: center;
        border-bottom: solid 4px #90b5ff;
        vertical-align:middle;
      }
      
      .isometric:hover{
          transform: translateY(4px);
          transition: .4s;
      }
      .isometric:hover .btnttl, .isometric:hover .iconback{
          border-bottom: none;
          transition: .8s;
      }

      button{
        position: relative;
        display: inline-block;
        background-color: #2E65DC;
        font-weight: bold;
        padding: 0.25em 0.5em;
        text-decoration: none;
        border-bottom: solid 3px #3779FF;
        border-right: solid 3px #3779FF;
        color: #ffffff;
        font-size: 0.8em;
        transition: .4s;
      }
   
        `}</style>
    </div>
  );
};

export default ButtonComp;
