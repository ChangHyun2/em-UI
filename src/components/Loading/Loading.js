import React, { useEffect } from "react";
import { css, jsx } from "@emotion/core";
import { getColor } from "../../colors/index";
import config from "./Loading.config";
import _style from "./Loading.style";

const Loading = React.forwardRef(function (props, ref) {
  const {
    tag = "div",
    size = "md",
    color = "blue-500",
    cx = "50%",
    cy = "50%",
    myStyle,
    ...otherProps
  } = props;

  const Tag = tag;
  const circleStyle = css`
    stroke: ${getColor(color)};
    stroke-width: ${config.strokeWidth[size]};
    stroke-dasharray: ${config.strokeDashArray[size]};
    stroke-dashoffset: ${config.strokeDashOffset[size]};
  `;

  const styles = {
    circle: [_style.circle, circleStyle],
    wrapper: [_style.wrapper],
  };

  if (myStyle) {
    styles.circle.push(myStyle.circle);
    styles.wrapper.push(myStyle.wrapper);
  }

  return (
    <div css={css`
      display:flex;
      justify-content:center;
      align-items:center;
    `}>
      <Tag css={styles.wrapper} ref={ref} {...otherProps} >
        <svg width={config.radius[size] * 2 + +config.strokeWidth[size]} height={config.radius[size] * 2 + +config.strokeWidth[size]}>
          <circle
            css={styles.circle}
            cx={cx}
            cy={cy}
            r={config.radius[size]}
            fill={"none"}
          />
        </svg>
      </Tag>
    </div >
  );
});

export default Loading;
