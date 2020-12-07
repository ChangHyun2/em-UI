import React, { useEffect, useState, useRef } from "react";
import RefApp from "./RefApp";
import Transition from "./Transition";
import ComponentType from "./ComponentType";
import PlaceholderTest from './placeholderSizeBeforeLoading'
import { css } from "@emotion/core";
import colors, { getColor } from "../colors/index";
import BoxGrid from '../components/BoxGrid/BoxGrid'
import Button from '../components/Button/Button'

const sliderContainerSheet = {
  width: '100%',
  display: 'flex'
}

const containerSheet = {
  width: '200px',
  overflow: 'hidden'
}

const slideSheet = {
  width: '100%',
  height: '100%',
}


// const Tooltip = () => {

// }

const Comp = () => {
  return <div title="my tooltip" css={css`
    position:relative;
    border-bottm: 1px dashed #000;
    
    &::before{
      display:block;
      
      content: attr(data-title); /* here's the magic */
      position:absolute;
      
      top:0;
      left:100%;
      
      /* basic styles */
      width:200px;
      padding:10px;
      border-radius:10px;
      background:#000;
      color: #fff;
      text-align:center;
    }
    `}>add Tooltip</div>
}


const Test = () => {
  ComponentType();
  return (
    <>
      <Comp>
        hello
      </Comp>
      <PlaceholderTest />
      <div>
        <p>test button font-size inherit</p>
        <div
          css={css`
          font-size: 10rem;
          display: inline-block;
          `}
        >
          <button
            css={css`
            display: inline-block;
            background-color: #000;
            color: #fff;
            padding: 4em;
            `}
          >
            hello
        </button>
        </div>
      </div>
      <RefApp></RefApp>
      <Transition></Transition>
    </>
  );
};

export default Test;
