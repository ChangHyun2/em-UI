import React from "react";
import { css } from "@emotion/core";
import Demo from "./Demo/Demo";
import Backdrop from "../components/Backdrop/Demo";
import Loading from "../components/Loading/Demo";
import Container from "../components/Container/Demo";
import Grid from "../components/Grid/Demo";
import Modal from "../components/Modal/Demo";

const docs = () => (
  <>
    <Demo title={"Loading"}>
      <Loading />
    </Demo>
    <Demo title={"Backdrop"}>
      <Backdrop />
    </Demo>
    <Demo title={"Container"}>
      <Container />
    </Demo>
    <Demo title={"Grid"}>
      <Grid />
    </Demo>
    <Demo title={"Modal"}>
      <Modal />
    </Demo>
  </>
);

export default docs;
