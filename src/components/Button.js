import React from 'react';
import Link from 'next/link';

const ButtonComp = (props) => {
  return (
    <div>
      <Link href={props.buttonLink}><a><button>{props.buttonText}</button></a></Link>
      

      <style jsx>{`
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
        `}</style>
    </div>
  );
};

export default ButtonComp;
