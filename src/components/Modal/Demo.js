import React, { useState, useRef } from "react";
import { css } from "@emotion/core";

import Modal from "./Modal";

const Demo = () => {
  // BackdropComponent,
  // BackdropProps,
  // hideBackdrop,
  // onBackdropClick,
  // onClose,
  // open,
  // color = "grey-50",
  // myStyle,

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const inputRef = useRef(null);
  return (
    <>
      <button onClick={handleOpen}>show modal - default backdrop</button>
      <Modal
        onClose={handleClose}
        color="orange-100"
        open={open}
        focusRef={inputRef}
        BackdropProps={{ color: "blue-100" }}
      >
        <div
          css={css`
            width: 400px;
          `}
        >
          <input ref={inputRef} type="text" />
          <h1>modal Demo</h1>
          <p>
            Any interpolations or arguments that are functions in styled are
            called with props, this allows you to change the styles of a
            component based on the props.
          </p>
        </div>
      </Modal>
    </>
  );
};

export default Demo;
