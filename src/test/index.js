import React from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";
import Test from "./Test";

const GlobalStyles = styled.div`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

ReactDOM.render(
  <GlobalStyles>
    <Test />
  </GlobalStyles>,
  document.getElementById("root")
);
