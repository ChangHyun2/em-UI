import React from "react";
import { css } from "@emotion/core";
import BoxGrid from "./BoxGrid";
import Button from "../Button/Button";
import Container from "../Container/Container";

const Demo = () => (
  <>
    <Container>
      <BoxGrid
        color={"blue-600"}
        myStyle={css`
          color: white;
        `}
        round={1}
        pad={1}
      >
        round BoxGrid
      </BoxGrid>
      <BoxGrid
        color={"blue-600"}
        myStyle={css`
          color: white;
        `}
        pad={1}
      >
        renctangle BoxGrid
      </BoxGrid>
    </Container>
    <Container>
      <BoxGrid color={"grey-100"} round={2}>
        this is BoxGrid
      </BoxGrid>
      <BoxGrid color={"grey-100"}>
        <h1>this is BoxGrid</h1>
        <p>
          this is BoxGrid this is BoxGrid this is BoxGrid this is BoxGrid this
          is BoxGrid this is BoxGrid this is BoxGrid
        </p>
        <Button>hello</Button>
      </BoxGrid>
    </Container>
  </>
);
export default Demo;
