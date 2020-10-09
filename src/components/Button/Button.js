import React from "react";
import { getColor, darken, lighten } from "../../colors/index";
import { css } from "@emotion/core";

const Button = React.forwardRef(function Button(props, ref) {
  const {
    tag = 'button',
    size = 2,
    round = 0.3,
    children,
    color,
    disabled,
    stretch,
    inverted,
    myStyle,
    onClick,
    fontSize,
    ...others
  } = props;

  console.log(color)

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

  let Tag = others.href ? 'a' : tag;

  const padding = [size * 0.3, size * 0.5].map((p) => p + "em").join(" ");
  const borderRadius = round + "em";
  const colors = {
    base: getColor(bgColor),
    dark: darken(bgColor, 2),
    light: lighten(bgColor, 2),
    superLight: lighten(bgColor, 4),
    font: getColor(fontColor)
  }

  const _style = css`
    font-size: ${fontSize}px;
    display: inline-block;
    vertical-align: top;
    padding: ${padding};
    border-radius: ${borderRadius};
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    outline: none;
    margin-bottom: 1rem;
    transition: background-color 0.15s ease-in-out, box-shadow 0.25s ease-in-out;
    
  `;

  let style;

  if (disabled) {
    console.log('disabled')
    style = css`
      background-color: #eee;
      cursor: not-allowed;
      color: #999;
      border: 2px solid transparent;
    `
  } else if (inverted) {
    style = css`
      color:${colors.base};
      background-color: #fff;
      border: 1px solid ${colors.base};
      &:hover{
        color:#fff;
        background-color: ${colors.base};
        box-shadow:none;
      }
      transition: background-color 0.6s;
      &:active, &:focus{
        color: #fff;
        background-color: ${colors.light};
        box-shadow:none;
      }
      cursor: pointer;
    `
  } else {
    style = css`
      color: ${colors.font};
      background-color: ${colors.base};
      border: 2px solid transparent;
      &:hover{
        background-color:${colors.dark};
      }
      &:active{
        box-shadow: 0 0 0 3px ${colors.light};
      }
      &:focus{
        box-shadow: 0 0 0 3px ${colors.superLight};
      }
      cursor: pointer;
    `
  }

  let stretchStyle;
  if (stretch) {
    stretchStyle = css`
      width:100%;
    `
  }

  const styles = [_style, style, stretchStyle, myStyle]

  return (
    <Tag css={styles} ref={ref} onClick={onClick} disabled={disabled} {...others}>
      {children}
    </Tag>
  );
});

export default Button;
