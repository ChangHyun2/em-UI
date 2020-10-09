import React from "react";
import BoxGrid from "../BoxGrid/BoxGrid";
import { getColor } from "../../colors/index";
import { css } from "@emotion/core";

const Card = ({ round = 3, children, ...others }) => {
    return <BoxGrid round={round} {...others}>{children}</BoxGrid>
}

export default Card;
