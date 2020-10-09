import React from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";
import Docs from "./docs/Docs";

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
    <Docs />
  </GlobalStyles>,
  document.getElementById("root")
);
