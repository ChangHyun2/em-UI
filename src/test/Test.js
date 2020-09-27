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
      <RefApp></RefApp>
      <Transition></Transition>
    </>
  );
};

export default Test;
