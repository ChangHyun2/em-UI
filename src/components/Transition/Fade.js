import React, { useState } from "react";
import { Transition } from "react-transition-group";

const defaultStyle = (duration) => ({
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
});

const transitionStyles = {
  // inProp에 의해 토글링됨
  // inProp이 true일 경우, "enter" stage가 시작됨
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const Fade = ({ inProp, children, duration, ...others }) => (
  <Transition in={inProp} timeout={duration} {...others}>
    {(state) => (
      <div
        style={{
          ...defaultStyle(duration),
          ...transitionStyles[state],
        }}
      >
        {children}
      </div>
    )}
  </Transition>
);

export default Fade;
