import React from "react";
import { getColor } from "../../colors/index";
import { css } from "@emotion/core";

const Button = React.forwardRef(function Button(props, ref) {
  const {
    tag = "button",
    size = 2,
    round = 0.3,
    children,
    color,
    disabled,
    startIcon,
    endIcon,
    stretch,
    href,
    myStyle,
    ...others
  } = props;

  const {
    bg: bgColor = "blue-600",
    font: fontColor = "white",
    border: borderColor = null,
  } = color || {
    bg: "blue-600",
    fontColor: "white",
    borderColor: null,
  };
  // grey-50~900
  // A100-200-400-700

  const Tag = tag;

  const padding = [size * 0.3, size * 0.5].map((p) => p + "em").join(" ");
  const borderRadius = round + "em";

  const style = css`
    display: inline-block;
    vertical-align: top;
    padding: ${padding};
    border-radius: ${borderRadius};
    border: 2px solid transparent;
    background-color: ${getColor(bgColor)};
    color: ${getColor(fontColor)};
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    outline: none;
    cursor: pointer;
    margin-bottom: 1rem;
    transition: background-color 0.15s ease-in-out, box-shadow 0.25s ease-in-out;
  `;

  return (
    <Tag css={style} ref={ref} {...others}>
      {children}
    </Tag>
  );
});

export default Button;
