import React from "react";
import { css } from '@emotion/core'
import Switch from './Switch'

const Demo = () => {

    const [checkState, setCheckState] = React.useState({
        a: true,
        b: true,
        c: true,
        d: false,
        e: true,
        f: true,
    })

    const handleChange = (e) => {
        const { name, checked } = e.target
        console.log({ name, checked })

        setCheckState({
            ...checkState,
            [name]: checked
        })
    }

    return <div css={css`
        display:flex;
        align-items:center;
        & > *{
            margin-right: 1em;
        }
    `}>
        <Switch size={1.5} checked={checkState.a} name={"a"} onChange={handleChange} />
        <Switch size={1} checked={checkState.b} name={"b"} onChange={handleChange} />
        <Switch size={0.5} checked={checkState.c} name={"c"} onChange={handleChange} />
        <Switch size={1} checked={checkState.d} name={"d"} onChange={handleChange} />
        <Switch size={1} checked={checkState.e} name={"e"} color={'blue-100'} onChange={handleChange} />
        <Switch size={1} checked={checkState.f} name={"f"} color={'blue-400'} onChange={handleChange} />
        <Switch size={1} checked={checkState.g} name={"g"} disabled color={'blue-400'} onChange={handleChange} />
    </div>
}

export default Demo