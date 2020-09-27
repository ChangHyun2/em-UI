import React from "react";
import { css } from "@emotion/core";
import { getColor } from "../../colors/index";
import Grid from "./Grid";

const boxStyle = css`
  padding: 0.5em;
  background-color: ${getColor("grey-50")};
  border: 1px solid ${getColor("grey-300")};
`;

const BoxGrid = (props) => (
  <Grid myStyle={boxStyle} {...props}>
    {props.children}
  </Grid>
);

const Demo = () => (
  <>
    <BoxGrid>grid</BoxGrid>
    <BoxGrid row>
      <BoxGrid>default</BoxGrid>
      <BoxGrid>default</BoxGrid>
      <BoxGrid>default</BoxGrid>
      <BoxGrid>default</BoxGrid>
    </BoxGrid>
    <BoxGrid row>
      <BoxGrid sm={3}>sm=3</BoxGrid>
      <BoxGrid auto>auto sizing</BoxGrid>
      <BoxGrid sm={3}>sm=3</BoxGrid>
    </BoxGrid>
    <BoxGrid row>
      <BoxGrid md={6}>md=6</BoxGrid>
      <BoxGrid md={6}>md=6</BoxGrid>
    </BoxGrid>
    <BoxGrid row>
      <BoxGrid md={4} lg={8}>
        md=4 lg=8
      </BoxGrid>
      <BoxGrid md={4} lg={8}>
        md=4 lg=8
      </BoxGrid>
      <BoxGrid sm={4}>BoxGrid</BoxGrid>
    </BoxGrid>
  </>
);

export default Demo;
