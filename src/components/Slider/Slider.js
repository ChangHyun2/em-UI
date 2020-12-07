import React, { useState } from "react";
import { css } from "@emotion/core";
import { getColor, lighten, darken } from "../../colors/index";

const Slider = ({ min = 0, max = 100, width, height, color = 'blue-600', value, disabled, step = 10, ...otherProps }) => {

    const thumbRadius = height * 2;

    const trackLength = max - min
    const getThumbPos = (value) => Math.floor(value / trackLength)

    const [thumbPos, setThumbPos] = useState(value)

    const wrapperStyle = css`
        width: ${width > 0 ? 2 * width + 'px' : '100%'};
        height: ${height > 0 ? 2 * height + 'px' : '100%'};
    `

    const trackStyle = css`
        display:inline-block;
        width: 100%;
        height: 25%;
        background-color: ${getColor(color)};        
    `

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
    const progressStyle = css`

    `

    const track = <div css={trackStyle}></div>
    const progress = <div css={progressStyle}></div>
    const thumb = <div css={thumbStyle} handler={} value={value}></div>
    const tooltip = <div></div>

    return <div css={wrapperStyle} min={min} max={max} step={step} value={value}
        role="slider"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        tabIndex={0}
        {...otherProps}>
        <div css={css`
            display:flex;
            position:relative;
            height: 100%;
            align-items:center;
        `}>
            <input type="hidden" name={name} value={value && value.join(",")} />
            {track}
            {progress}
            {thumb}
        </div>
    </div >
}

export default Slider