import React from "react";
import RefApp from "./RefApp";
import Transition from "./Transition";
import ComponentType from "./ComponentType";
import { css } from "@emotion/core";
import colors from "../colors/index";

class Module1 {
  constructor() {
    this.state = 1;
  }
  doSomething() {
    console.log(this.state.age);
  }
}

class Module2 {
  constructor() {
    this.instance = new Module1();
    this.instance.doSomething;
  }

  doSomethingWithModule1() {
    this.instance.doSomething();
  }
}

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
