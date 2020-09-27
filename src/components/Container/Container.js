import React from "react";
import { css } from "@emotion/core";
import _style from "./Container.style";

const Container = React.forwardRef(function Container(props, ref) {
  const {
    tag = "div",
    justify,
    spacing,
    alignItems,
    direction,
    wrap,
    myStyle,
    ...otherProps
  } = props;

  const Tag = tag;

  const style = css`
    justify-content: ${justify};
    align-items: ${alignItems};
    flex-direction: ${direction};
    ${wrap && `flex-wrap: "wrap"`};

    & > div {
      padding: ${spacing}px;
    }
  `;

  const styles = [_style, style];
  myStyle && styles.unshift(myStyle);

  return <Tag css={styles} ref={ref} {...otherProps}></Tag>;
});

export default Container;
