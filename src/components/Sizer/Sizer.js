import React from "react";
import { css } from "@emotion/core";

const Sizer = ({ size, children }) => {
  <div
    style={css`
      font-size: ${size}px;
    `}
  >
    {children}
  </div>;
};

export default Sizer;
