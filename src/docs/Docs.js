import React from "react";
import { css } from "@emotion/core";
import Demo from "./Demo/Demo";
import Backdrop from "../components/Backdrop/Demo";
import Loading from "../components/Loading/Demo";
import Container from "../components/Container/Demo";
import Grid from "../components/Grid/Demo";
import Modal from "../components/Modal/Demo";
import BoxGrid from "../components/BoxGrid/Demo";
import Button from "../components/Button/Demo";
import Checkbox from '../components/Checkbox/Demo'
import Radio from '../components/Radio/Demo'
import Card from '../components/Card/Demo'
import Avatar from '../components/Avatar/Demo'
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
    <Demo title={"BoxGrid"}>
      <BoxGrid />
    </Demo>
    <Demo title={"Button"}>
      <Button />
    </Demo>
    <Demo title={"Checkbox"}>
      <Checkbox />
    </Demo>
    <Demo title={"Radio"}>
      <Radio />
    </Demo>
    <Demo title={"Card"}>
      <Card />
    </Demo>
    <Demo title={"Avatar"}>
      <Avatar />
    </Demo>

  </>
);

export default docs;
