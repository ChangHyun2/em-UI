import React from "react";
import { css } from "@emotion/core";
import _style from "./Container.style";

const Container = React.forwardRef(function Container(props, ref) {
  const {
    tag = "div",
    justify,
    spacing,
    align,
    direction,
    wrap,
    myStyle,
    size,
    ...otherProps
  } = props;

  const Tag = tag;

  const style = css`
    justify-content: ${justify};
    align-items: ${align};
    flex-direction: ${direction};
    ${wrap && `flex-wrap: wrap;`}
    ${size && `font-size: ${size}px;`}

    ${spacing && `
    margin-left:-${spacing}px;
    margin-right:-${spacing}px;
    &>div{
      margin-left: ${spacing}px;
      margin-right: ${spacing}px;
    }`}
  `;

  const styles = [_style, style];
  myStyle && styles.push(myStyle);

  return <Tag css={styles} ref={ref} {...otherProps}></Tag>;
});

export default Container;
