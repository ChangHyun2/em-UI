import { css, keyframes } from "@emotion/core";

const rotate = keyframes`
0% {
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
}
100% {
  -webkit-transform: rotate(360deg);
  transform: rotate(360deg);
}
`;

const _style = {
  wrapper: css`
    margin: 2rem;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${rotate} 1.2s linear infinite;
  `,
  circle: css`
    stroke-linecap: round;
    animation-timing-function: cubic-bezier(0.09, 0.85, 0.72, 0.91);
  `,
};

export default _style;
