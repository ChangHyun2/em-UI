import React, { useState } from "react";
import { css } from "@emotion/core";
import Radio from "./Radio";
import Sizer from '../Sizer/Sizer'


const ColorChangeRadio = ({ onClick, start = 0, children, ...otherProps }) => {
    const [color, setColor] = useState(start);
    const colors = ['blue-600', 'red-600', 'yellow-600', 'orange-600', 'cyan-600', 'amber-600', 'brown-600', 'green-600', 'teal-600', 'purple-600', 'pink-600', 'lime-600', 'indigo-600']

    const changeColor = () => {
        setColor(color + 1);
        if (color === colors.length) {
            setColor(0);
        }
    }

    const onClickHandler = () => {
        changeColor()
    }

    return <Radio onClick={onClickHandler} color={colors[color]} {...otherProps}>{children}</Radio>
}

const Demo = () => {

    const RadioGroup = () => {

        const [checked, setChecked] = useState('a');
        const [placeholderChecked, setPlaceholderChecked] = useState('a');

        const handleChange = (e) => {
            setChecked(e.target.value)
        }
        const setPlaceholderChange = (e) => {
            setPlaceholderChecked(e.target.value)
        }

        return <Sizer size={16} css={css`
            & label{
                margin-right: 0.5em;
            }
        `}>
            <>
                <Radio size={3} value="a" checked={checked === 'a'} onChange={handleChange} />
                <Radio size={2} start={1} value="b" checked={checked === 'b'} onChange={handleChange} />
                <Radio start={2} value="c" checked={checked === 'c'} onChange={handleChange} />
                <ColorChangeRadio start={3} value="d" checked={checked === 'd'} onChange={handleChange} />
                <ColorChangeRadio start={4} value="e" checked={checked === 'e'} onChange={handleChange} />
                <ColorChangeRadio start={5} value="f" checked={checked === 'f'} onChange={handleChange} />
            </>
            <>
                <Radio size={3} value="a" checked={placeholderChecked === 'a'} onChange={setPlaceholderChange} >Radio</Radio>
                <Radio size={2} start={1} value="b" checked={placeholderChecked === 'b'} onChange={setPlaceholderChange} >Radio</Radio>
                <Radio start={2} value="c" checked={placeholderChecked === 'c'} onChange={setPlaceholderChange} >Radio</Radio>
                <ColorChangeRadio start={3} value="d" checked={placeholderChecked === 'd'} onChange={setPlaceholderChange} >Radio</ColorChangeRadio>
                <ColorChangeRadio start={4} value="e" checked={placeholderChecked === 'e'} onChange={setPlaceholderChange} >Radio</ColorChangeRadio>
                <ColorChangeRadio start={5} value="f" checked={placeholderChecked === 'f'} onChange={setPlaceholderChange} >Radio</ColorChangeRadio>
            </>
        </Sizer>
    }

    return <>
        <p>you can check other colors </p>
        <RadioGroup />
    </>
};

export default Demo;
