import React from "react";
import { css } from "@emotion/core";
import { getColor, lighten } from "../../colors/index";

const SVGIcon = ({ width, height, viewBox, color = "#111", xmlns = "http://www.w3.org/2000/svg", svg, ...others }) =>
  <svg {...others}
    width={width}
    height={height}
    viewBox={viewBox}
    fill={color}
    xmlns={xmlns}
    dangerouslySetInnerHTML={{ __html: svg }}
  />

/*

props
- value

*/

const Radio = ({ disabled, color = 'blue-400', size = 1, children, ...otherProps }) => {
  const length = size + 'em';
  const innerLength = size * 0.45 + 'em';
  const rgbColor = getColor(color);

  const svg = <SVGIcon
    width={innerLength}
    height={innerLength}
    css={css`
            transition: all 0.15s ease-in-out;
        `}
    viewBox="0 0 16 16"
    svg={`<circle cx="8" cy="8" r="8"/>`}
  />


  const hidedInput = <input type="radio" css={css`
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
      border : 0.05em solid ${rgbColor};
      border-radius: 100%;
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
          box-shadow: inset 0 0 0 1px ${rgbColor}
        }
    `}>
    {hidedInput}
    {indicator}
    <span>{children}</span>
  </label>

}

export default Radio