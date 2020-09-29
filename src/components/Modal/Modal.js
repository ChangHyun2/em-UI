import React, { useRef, useEffect } from "react";
import Backdrop from "../Backdrop/Backdrop";
import { css } from "@emotion/core";
import { getColor } from "../../colors/index";
import Fade from "../Transition/Fade";

// 구현할 내용
// - children focus
// - 커스텀 백드랍 렌더링
// -

// props
// - BackdropComponent : custom 백드랍 렌더링
// - BackdropProps : 백드랍에 전달할 props
// - hideBackdrop : 백드랍 렌더링 x
// - onBackdropClick
// - onClose : 클로즈할 시 발생시킬 이벤트
// - open
// - fromLeft
// - fromRight
// - fromTop
// - duration={ fade , transform}

const Modal = React.forwardRef(function (props, ref) {
  const {
    BackdropComponent, //ok
    BackdropProps,
    hideBackdrop,
    onBackdropClick,
    onClose,
    focusRef,
    children,
    duration = 200,
    open = false,
    color = "grey-50",
    tag = "div",
    myStyle,
    ...otherProps
  } = props;

  const Tag = tag;

  const closeModalOnEscape = (e) => {
    if (e.keyCode === 27) {
      onClose();
    }
  };

  const keyUpHandler = (e) => {
    console.log(e);
  };

  let BackdropWithProps = (
    <Backdrop open={open} onClick={onClose} {...BackdropProps} />
  );

  if (BackdropComponent) {
    if (React.isValidElement(<BackdropComponent />)) {
      console.log(<BackdropComponent />);
      BackdropWithProps = (
        <BackdropComponent open={open} onClick={onClose} {...BackdropProps} />
      );
    } else {
      console.error(
        "your backdrop component is not function component. Use function component to pass props "
      );
    }
  }

  const contentStyles = [
    css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 5px;
      padding: 1.5rem;
      background-color: ${getColor(color)};
      color: #fff;
    `,
  ];
  myStyle && contentStyles.unshift(myStyle);

  const ModalComponent = () => {
    useEffect(() => {
      focusRef && focusRef.current.focus();
      document.addEventListener("keydown", closeModalOnEscape);
      return () => {
        document.removeEventListener("keydown", closeModalOnEscape);
      };
    }, []);

    return (
      <Tag ref={ref} {...otherProps} onKeyUp={keyUpHandler}>
        {hideBackdrop ? null : BackdropWithProps}
        <div css={contentStyles}>{children}</div>
      </Tag>
    );
  };

  return duration ? (
    <Fade inProp={open} duration={duration}>
      <ModalComponent />
    </Fade>
  ) : open ? (
    <ModalComponent />
  ) : null;
});

export default Modal;
