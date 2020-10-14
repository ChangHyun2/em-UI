import React, { useState, useRef } from "react";
import { css } from "@emotion/core";
import Button from "../Button/Button";
import Container from "../Container/Container";
import Modal from "./Modal";
import zIndex from '../../variables/zIndex'

const Demo = () => {
  // BackdropComponent,
  // BackdropProps,
  // hideBackdrop,
  // onBackdropClick,
  // onClose,
  // open,
  // color = "grey-50",
  // myStyle,

  const CustomBackdrop = ({ open, onClose, ...otherProps }) =>
    open ? (
      <div
        css={css`
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #003;
          z-index:${zIndex.backdrop}
        `}
        onClick={onClose}
        {...otherProps}
      >
        custom Backdrop
      </div>
    ) : null;

  const [showDefault, setShowDefault] = useState(false);
  const openDefault = () => setShowDefault(true);
  const closeDefault = () => setShowDefault(false);

  const [showCustom, setShowCustom] = useState(false);
  const openCustom = () => setShowCustom(true);
  const closeCustom = () => setShowCustom(false);

  const inputRef = useRef(null);
  const modalContent = (
    <div
      css={css`
        width: 400px;
        color: #333;
      `}
    >
      <input ref={inputRef} type="text" />
      <h1>modal Demo</h1>
      <p
        css={css`
          color: #777;
        `}
      >
        Any interpolations or arguments that are functions in styled are called
        with props, this allows you to change the styles of a component based on
        the props.
      </p>
    </div>
  );

  const defaultModal = (
    <Modal
      onClose={closeDefault}
      color="grey-100"
      open={showDefault}
      focusRef={inputRef}
      BackdropProps={{ color: "grey-900" }}
    >
      {modalContent}
    </Modal>
  );

  const customModal = (
    <Modal
      onClose={closeCustom}
      color="grey-100"
      duration={false}
      open={showCustom}
      focusRef={inputRef}
      BackdropComponent={CustomBackdrop}
      BackdropProps={{ color: "grey-900" }}
    >
      {modalContent}
    </Modal>
  );

  return (
    <>
      <Container justify={"center"}>
        <Button onClick={openDefault}>show modal - default backdrop</Button>
      </Container>
      <Container justify={"center"}>
        <Button onClick={openCustom}>show modal - custom backdrop</Button>
      </Container>
      {defaultModal}
      {customModal}
    </>
  );
};

export default Demo;
