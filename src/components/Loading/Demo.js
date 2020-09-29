import React from "react";
import { css } from "@emotion/core";
import Loading from "./Loading";
import Container from "../Container/Container";

const DemoLoading = () => (
  <>
    <Container justify={"center"}>
      <Loading size={"sm"} color={"red-200"} />
      <Loading size={"md"} />
      <Loading size={"lg"} />
    </Container>
  </>
);

export default DemoLoading;
