import React from "react";
import { css } from "@emotion/core";

const Sizer = ({ size, children, ...others }) =>
  <div
    css={css`
  font-size: ${size}px;
  `}
    {...others}
  >
    {children}
  </div>;

export default Sizer;
