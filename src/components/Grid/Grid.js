import React from "react";
import { css } from "@emotion/core";
import percent from "../../utils/percent";
import breakpoint from "../../variables/breakpoint";
import _style from "./Grid.style";

const Grid = React.forwardRef(function Grid(props, ref) {
  const {
    tag = "div",
    row,
    auto,
    xs,
    sm,
    md,
    lg,
    xl,
    children,
    myStyle,
    ...otherProps
  } = props;

  const Tag = tag;

  let styles = [_style.base];

  if (auto) {
    styles = [_style.auto];
  } else {
    if (xs | sm | md | lg | xl) {
      // 다른 방법 찾아보기
      const ratio = [xs, sm, md, lg, xl];
      const responsiveStyle = css`
        ${ratio
          .map((ratioCount, i) =>
            ratioCount > 0
              ? `@media (min-width: ${breakpoint[i]}px){
                    width: ${percent(ratioCount)}%;
                    flex: 0 0 auto;
                };`
              : ""
          )
          .join("")}
      `;

      styles = [responsiveStyle, _style.base];
    }

    if (row) {
      const rowStyle = css`
        display: flex;
        width: 100%;
        flex-wrap: ${row === "nowrap" ? "nowrap" : "wrap"};
      `;
      styles.push(rowStyle);
    }
  }

  if (myStyle) {
    styles.unshift(myStyle);
  }

  return (
    <Tag css={styles} ref={ref} {...otherProps}>
      {children}
    </Tag>
  );
});

export default Grid;
