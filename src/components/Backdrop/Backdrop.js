import React from "react";
import { css } from "@emotion/core";
import _style from "./Backdrop.style";
import Fade from "../Transition/Fade";
import { getColor } from "../../colors/index";

const Backdrop = React.forwardRef(function Backdrop(props, ref) {
  const { open, color, children, myStyle, duration = 0, ...otherProps } = props;

  const style = css`
    background-color: ${color ? getColor(color) : "rgba(0,0,0,0.5)"};
  `;
  const styles = [_style, style];
  myStyle && styles.push(myStyle);

  const body = (
    <div css={styles} ref={ref} {...otherProps}>
      {children}
    </div>
  );

  const backdrop = open ? body : null;

  return duration ? (
    <Fade inProp={open} duration={duration}>
      {backdrop}
    </Fade>
  ) : (
      backdrop
    );
});

export default Backdrop;
