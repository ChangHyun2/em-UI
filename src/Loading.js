import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { getColor } from "../variables/color";
import { useConstructor, useState } from "../hooks/useConstructor";

// default config
const config = {
  radius: {
    sm: "15",
    md: "25",
    lg: "35",
  },
  strokeWidth: {
    sm: "4",
    md: "6",
    lg: "7",
  },
  strokeDashOffset: {
    sm: 10,
    md: 40,
    lg: 40,
  },
  strokeDashArray: {
    sm: 70,
    md: 150,
    lg: 200,
  },
};

let StyledCircleWrapper;
let StyledCircle;

const makeStyledComponent = (props) => {
  const { tag = "div", size = "md", color = "blue50" } = props;

  const rotate = keyframes`
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  `;

  const circleStyle = `
    stroke-linecap: round;
    stroke: ${getColor(color)};
    stroke-dashoffset: ${config.strokeDashOffset[size]};
    stroke-dasharray: ${config.strokeDashArray[size]};
    stroke-width: ${config.strokeWidth[size]};
    animation-timing-function: cubic-bezier(0.09, 0.85, 0.72, 0.91);
  `;

  const circleWrapperStyle = `
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  StyledCircle = styled.circle`
    ${circleStyle}
  `;
  StyledCircleWrapper = styled(`${tag}`)`
    ${circleWrapperStyle}
    animation: ${rotate} 1.2s linear infinite;
  `;
};

const Loading = (props) => {
  let { classes, size = "md", cx = "50%", cy = "50%" } = props;

  useEffect(() => {
    console.log("rerendering"); // debug rerendering
  });

  useConstructor(makeStyledComponent, props);

  return (
    <StyledCircleWrapper>
      <svg>
        <StyledCircle
          className={classes}
          cx={cx}
          cy={cy}
          r={config.radius[size]}
          fill={"none"}
        />
      </svg>
    </StyledCircleWrapper>
  );
};

export default Loading;
