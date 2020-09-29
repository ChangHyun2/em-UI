import React from "react";
import RefApp from "./RefApp";
import Transition from "./Transition";
import ComponentType from "./ComponentType";
import { css } from "@emotion/core";
import colors from "../colors/index";

const Test = () => {
  ComponentType();

  const color = colors;

  console.log(color);
  return (
    <>
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
      <RefApp></RefApp>
      <Transition></Transition>
    </>
  );
};

export default Test;
