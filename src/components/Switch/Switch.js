import React from "react";
import { css } from "@emotion/core";
import { getColor, darken } from '../../colors/index'


const Switch = React.forwardRef(({ size = 1, color = 'blue-200', disabled, ...others }, ref) => {


    console.log('controlled')

    const ballDiameter = size * 20;

    const trackSizeDiff = Math.floor(ballDiameter * 0.2);
    const trackHeight = ballDiameter - trackSizeDiff;
    const trackWidth = 1.5 * ballDiameter;
    const [hue, contrast] = color.split('-');
    const ballColor = color;
    const unCheckedColor = `grey-200`;

    const ballStyle = css`
        display:inline-block;
        position:absolute;
        top:0;
        left:0;
        z-index:1;
        width:${ballDiameter}px;
        height:${ballDiameter}px;
        border-radius:50%;
        transition: 0.2s;
        box-shadow: 0 0 1px #555;
    `;

    const trackStyle = css`
        line-height: 0.1;
        position:absolute;
        top:0;
        margin-top: ${trackSizeDiff / 2}px;
        width: ${trackWidth}px;
        height: ${trackHeight}px;
        border-radius: ${ballDiameter / 2}px;
        display:inline-block;
        transform:translateX(${trackSizeDiff}px);                               
    `;

    const togglerStyle = css`
        visibility:none;
        height:0px;
        width:0px;
        opacity:0;

        /* 
            track style (~span)
            ball style (+span)
        */ 

        &~span {
            background-color: ${darken(unCheckedColor, 3)};
        }
        &+span{
            background-color: ${disabled ? getColor('grey-400') : getColor(unCheckedColor)};
        }

        &:checked~span{
            background-color: ${contrast < 300 ? '#fff' : getColor(`${hue}-100`)};
            box-shadow: 0 0 1px #555;
        }
        &:checked+span{
            background-color: ${getColor(ballColor)};
            transform:translateX(${trackWidth - ballDiameter + 2 * trackSizeDiff}px);
        }
    `;

    return (
        <>
            <label css={css`
            display:inline-block;
            position:relative;
            width: ${trackWidth + 2 * trackSizeDiff}px;
            height: ${ballDiameter}px;
            &:hover{
            cursor:pointer;
            }`
            }>
                <input type="checkbox" css={togglerStyle} disabled={disabled} ref={ref} {...others} />
                <span css={ballStyle} />
                <span css={trackStyle} />
            </label >
        </>
    )
})

export default Switch;