import React from "react";
import BoxGrid from "../BoxGrid/BoxGrid";
import { getColor } from "../../colors/index";
import { css } from "@emotion/core";

const Card = ({ round = 3, children, ...others }) => {
    return <BoxGrid css={css`
        box-shadow: 0 0 5px #ddd;
    `} round={round} {...others}>{children}</BoxGrid>
}

export default Card;
