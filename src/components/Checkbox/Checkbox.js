import React from "react";
import { css } from "@emotion/core";
import { getColor, lighten } from "../../colors/index";

const SVGIcon = ({ width, height, viewBox, color = "#333", xmlns = "http://www.w3.org/2000/svg", svg, ...others }) =>
    <svg {...others}
        width={width}
        height={height}
        viewBox={viewBox}
        fill={color}
        xmlns={xmlns}
        dangerouslySetInnerHTML={{ __html: svg }}
    />



const CheckBox = ({ disabled, color = 'blue-400', size = 1, ...otherProps }) => {
    const length = size + 'em';
    const hueColor = getColor(color);

    const svg = <SVGIcon
        width={length}
        height={length}
        css={css`
            transition: all 0.15s ease-in-out;
        `}
        viewBox="0 0 16 16"
        svg={`  <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
        `}
    />


    const hidedInput = <input type="checkbox" css={css`
      opacity:0;
      position:absolute;
      top:0;
      left:0;
      cursor:pointer;
      &:checked:checked:checked+span{
          background-color: #fff;
          & svg{
            transform:scale(1);
          } 
      }
    }
    `} {...otherProps} />


    const indicator = <span css={css`
      display:flex;
      justify-content:center;
      align-items:center;
      width:${length};
      height:${length};
      border : 0.1em solid ${hueColor};
      border-radius: 0.25em;
      transition:background-color 0.15s ease-in-out;
      & > svg{
        display:block;
        transform:scale(0);
      }
    `}>
        {svg}
    </span>

    return <label css={css`
        display:inline-flex;
        align-items:center;
        position:relative;
        user-select:none;
        cursor:pointer;    
        &:hover span:first-of-type{
          background-color: ${lighten(color, 4)};
          box-shadow: inset 0 0 0 1px ${hueColor}
        }
    `}>
        {hidedInput}
        {indicator}
        <span>checkbox</span>
    </label>

}

export default CheckBox