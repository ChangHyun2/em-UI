import React, { useState } from "react";
import getColor from '../../colors/index'
import { css } from "@emotion/core";
import Checkbox from "./Checkbox";
import Sizer from '../Sizer/Sizer'


const ColorChangeCheckbox = ({ onClick, start = 0, children, ...otherProps }) => {
    const [color, setColor] = useState(start);
    const [count, setCount] = useState(0);
    const colors = ['blue-600', 'red-600', 'yellow-600', 'orange-600', 'cyan-600', 'amber-600', 'brown-600', 'green-600', 'teal-600', 'purple-600', 'pink-600', 'lime-600', 'indigo-600']

    const changeColor = () => {
        if (count === 0) {
            setCount(1);
        }

        if (count === 1) {
            setColor(color + 1);
            if (color === colors.length) {
                setColor(0);
            }
            setCount(0);
        }
    }

    const onClickHandler = () => {
        changeColor()
    }

    return <Checkbox onClick={onClickHandler} color={colors[color]} {...otherProps}>{children}</Checkbox>
}

const Demo = () => <>
    <p>you can check other colors </p>
    <Sizer size={16} css={css`
        & label{
            margin-right: 0.5em;
        }
        `}>
        <ColorChangeCheckbox size={3} />
        <ColorChangeCheckbox size={2} start={1} />
        <ColorChangeCheckbox start={2} />
        <ColorChangeCheckbox start={3} />
        <ColorChangeCheckbox start={4} />
        <ColorChangeCheckbox start={5} />
        <ColorChangeCheckbox />
        <ColorChangeCheckbox size={3} >Checkbox</ColorChangeCheckbox>
        <ColorChangeCheckbox size={2} start={1} >Checkbox</ColorChangeCheckbox>
        <ColorChangeCheckbox start={2} >Checkbox</ColorChangeCheckbox>
        <ColorChangeCheckbox start={3} >Checkbox</ColorChangeCheckbox>
        <ColorChangeCheckbox start={4} >Checkbox</ColorChangeCheckbox>
        <ColorChangeCheckbox start={5} >Checkbox</ColorChangeCheckbox>
        <ColorChangeCheckbox >Checkbox</ColorChangeCheckbox>
    </Sizer>
</>
    ;

export default Demo;
