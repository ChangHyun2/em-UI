import { css } from "@emotion/core";
import zIndex from '../../variables/zIndex'


const _style = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 1s linear;
  z-index:${zIndex.backdrop}
`;

export default _style;
