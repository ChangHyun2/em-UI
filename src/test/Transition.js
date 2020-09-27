import React, { useState } from "react";
import { Transition } from "react-transition-group";

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  // inProp에 의해 토글링됨
  // inProp이 true일 경우, "enter" stage가 시작됨
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const Fade = ({ inProp, children, ...others }) => (
  <Transition in={inProp} {...others}>
    {(state) => (
      <div
        style={{
          ...defaultStyle,
          ...transitionStyles[state],
        }}
      >
        {children}
      </div>
    )}
  </Transition>
);
const Demo = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Fade inProp={show} timeout={500}>
        <div>transiton hello</div>
      </Fade>
      <button onClick={() => setShow(!show)}>click</button>
    </>
  );
};

export default Demo;
