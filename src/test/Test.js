import React from "react";
import RefApp from "./RefApp";
import Transition from "./Transition";
import ComponentType from "./ComponentType";
import { css } from "@emotion/core";
import colors, { getColor } from "../colors/index";

/*
  default checkbox를 숨기고
  custom checkbox를 span으로 만들어줌.

*/

const Sizer = ({ size, children, ...others }) =>
  <div {...others} css={css`
  font-size: ${size}px;
`}>{children}</div>

const CheckBox = ({ disabled, color = 'blue-600', size = 1, ...otherProps }) => {

  const length = size + 'em';
  const hueColor = getColor(color);

  const hidedInput = <input type="checkbox" css={css`
    opacity:0;
    width:${length};
    height:${length};
    position:absolute;
    top:0;
    left:0;
    cursor:pointer;
    &:checked + span svg{
      transition:all 0.15s ease-in-out;
      transform:scale(1);
      box-shadow: 0 0 3px ${hueColor};
    }
  `} {...otherProps} />

  const svg = <svg width={length} height={length} viewBox="0 0 16 16" class="bi bi-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z" />
  </svg>

  const indicator = <span css={css`
    display:flex;
    justify-content:center;
    align-items:center;
    width:${length};
    height:${length};
    border : 0.1em solid ${hueColor};
    border-radius: 0.25em;
    & > svg{
      display:block;
      transform:scale(0);
    }
  `}>
    {svg}
  </span>

  return <label css={css`
    display:inline-flex;
    align-items:center;
    position:relative;
    user-select:none;
    cursor:pointer;    
  `}>
    {hidedInput}
    {indicator}
    <span>checkbox</span>
  </label>
}


const Test = () => {
  ComponentType();

  const color = colors;

  console.log(color);
  return (
    <>
      <Sizer size={20}>
        <CheckBox size={3} color="red-600" />
        <CheckBox color="orange-600" />
        <CheckBox color="yellow-600" />
        <CheckBox color="green-600" />
        <CheckBox />
        <CheckBox color="purple-600" />
      </Sizer>
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
