import React from "react";
import Grid from "../Grid/Grid";
import { getColor } from "../../colors/index";
import { css } from "@emotion/core";

const boxStyle = ({
  color = {
    bg: "grey-50",
    font: "black",
    border: null,
  },
  round,
  pad,
}) => {
  const {
    bg: bgColor = "grey-50",
    font: fontColor = "black",
    border: borderColor,
  } = color;
  console.log(round, pad);

  return css`
    color: ${getColor(fontColor)};
    background-color: ${getColor(bgColor)};
    ${pad && `padding: ${pad}em;`}
    ${round && `border-radius: ${round * 0.3}em;`}
    ${borderColor && `border: 1px solid ${getColor(borderColor)};`}
  `;
};

const BoxGrid = ({
  color,
  round = false,
  pad = 1.5,
  myStyle,
  children,
  ...otherProps
}) => {
  const styles = [boxStyle({ color, round, pad })];
  myStyle && styles.unshift(myStyle);
  return (
    <Grid css={styles} {...otherProps}>
      {children}
    </Grid>
  );
};

export default BoxGrid;
