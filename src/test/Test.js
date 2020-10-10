import React from "react";
import RefApp from "./RefApp";
import Transition from "./Transition";
import ComponentType from "./ComponentType";
import PlaceholderTest from './placeholderSizeBeforeLoading'
import { css } from "@emotion/core";
import colors, { getColor } from "../colors/index";

/*
  default checkbox를 숨기고
  custom checkbox를 span으로 만들어줌.

*/

const Test = () => {
  ComponentType();

  const color = colors;

  console.log(color);
  return (
    <>
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
