import React, { useState, useEffect } from "react";
import { css } from "@emotion/core";
import { getColor, lighten, darken } from "../../colors/index";

const Slider = ({ min = 0, max = 100, value, radius, color = 'blue-600', step = 10, disabled, ...otherProps }) => {

    const [thumbPos, setThumbPos] = useState(value)

    useEffect(() => {

    }, [])

    const thumbRadius = height * 2;
    const trackLength = max - min

    const getThumbPos = (value) => Math.floor(value / trackLength)


    const thumbStyle = css`
        display:block;
        position:absolute;
        left:${thumbPos * 100}%;
        height: ${thumbRadius}px;
        width: ${thumbRadius}px;
        border-radius: 50%;
        background-color: ${getColor(color)};
        cursor:pointer;
        `

    return <div css={thumbStyle} handler={} value={value}></div>
}

export default Slider