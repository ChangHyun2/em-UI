import React from "react";
import { css } from "@emotion/core";
import { getColor } from "../../colors/index";
import BoxGrid from "../BoxGrid/BoxGrid";
import Grid from "../Grid/Grid";

const DemoBoxGrid = (props) => (
  <BoxGrid color={{ border: "grey-500" }} {...props}>
    {props.children}
  </BoxGrid>
);

const Demo = () => (
  <>
    <DemoBoxGrid>grid</DemoBoxGrid>
    <Grid row>
      <DemoBoxGrid>default</DemoBoxGrid>
      <DemoBoxGrid>default</DemoBoxGrid>
      <DemoBoxGrid>default</DemoBoxGrid>
      <DemoBoxGrid>default</DemoBoxGrid>
    </Grid>
    <Grid row>
      <DemoBoxGrid sm={3}>sm=3</DemoBoxGrid>
      <DemoBoxGrid auto>auto sizing</DemoBoxGrid>
      <DemoBoxGrid sm={3}>sm=3</DemoBoxGrid>
    </Grid>
    <Grid row>
      <DemoBoxGrid md={6}>md=6</DemoBoxGrid>
      <DemoBoxGrid md={6}>md=6</DemoBoxGrid>
    </Grid>
    <Grid row>
      <DemoBoxGrid md={4} lg={8}>
        md=4 lg=8
      </DemoBoxGrid>
      <DemoBoxGrid md={4} lg={8}>
        md=4 lg=8
      </DemoBoxGrid>
      <DemoBoxGrid sm={4}>DemoBoxGrid</DemoBoxGrid>
    </Grid>
  </>
);

export default Demo;
