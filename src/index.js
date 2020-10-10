import React from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";
import Docs from "./docs/Docs";
import Sizer from './components/Sizer/Sizer'

const GlobalStyles = styled.div`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

ReactDOM.render(
  <GlobalStyles>
    <Sizer size={14}>
      <Docs />
    </Sizer>
  </GlobalStyles>,
  document.getElementById("root")
);
