import React from "react";
import { css } from "@emotion/core";


const Sizer = ({ size, children, ...others }) => {
  const sizerStyle = css`
    font-size: ${size}px;
  `;

  return <div css={sizerStyle} {...others}>
    {children}
  </div>
}



export default Sizer;
