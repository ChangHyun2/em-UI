import React from "react";
import { css } from "@emotion/core";
import Loading from "./Loading";
import Container from "../Container/Container";
import Grid from '../Grid/Grid'

const DemoLoading = () => (
  <>
    <Container justify={"center"} align={'center'}>
      <Grid xs={4} sm={3} md={2}>
        <Loading size={"sm"} color={"red-200"} />
      </Grid >
      <Grid xs={4} sm={3} md={2}>
        <Loading size={"md"} />
      </Grid>
      <Grid xs={4} sm={3} md={2}>
        <Loading size={"lg"} />
      </Grid>
    </Container>
  </>
);

export default DemoLoading;
