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
      button {
        display: inline-flex;
        position: relative;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        min-width: 64px;
        height: $mdc-button-height;
        border: none;
        outline: none;
        /* @alternate */
        line-height: inherit;
        user-select: none;
        -webkit-appearance: none;
        overflow: hidden;
        vertical-align: middle;

        font-size: .875rem;
        line-height: 2.25rem;
        font-weight: 500;
        letter-spacing: .08929em;
        text-decoration: none;
        text-transform: uppercase;
        color: white;
        
    will-change: transform,opacity;
    padding: 0 8px;
    display: inline-flex;
    position: relative;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    min-width: 64px;
    height: 36px;
    border: none;
    outline: none;
    line-height: inherit;
    
    user-select: none;
    
    overflow: hidden;
    vertical-align: middle;
    border-radius: 4px;

        background-color: #2E65DC;
        margin: 16px 32px;
        padding: 0 16px;
        box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
        transition: box-shadow .28s cubic-bezier(.4,0,.2,1),-webkit-box-shadow .28s cubic-bezier(.4,0,.2,1);
      }

      button:hover {
        cursor: pointer;
        box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
        outline: none;
        background-color: #3779FF;
        transition: background-color .28s cubic-bezier(.4,0,.2,1),-webkit-box-shadow .28s cubic-bezier(.4,0,.2,1);

      }

      button:active {
        background-color: #4CACE4;
        box-shadow: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);
        transition: box-shadow .28s cubic-bezier(.4,0,.2,1),-webkit-box-shadow .28s cubic-bezier(.4,0,.2,1);
      }

      button:before {
        position: absolute;
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    content: "";
        transform: scale(1);
        background-color: #fff;
        top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    transition: opacity 15ms linear,background-color 15ms linear;
    z-index: 1;
      }

      a {
        text-decoration: none;
      }
   
        `}</style>
    </div>
  );
};

export default ButtonComp;
