import React, { useState, useEffect, useCallback } from "react";
import { css } from "@emotion/core";
import Card from "./Card";
import Button from "../Button/Button";
import Loading from '../Loading/Loading'

const myStyle = css`
color: #333;
  border: 1px solid #ddd;
`
const Demo = () => {

    const [data, setData] = useState(false);
    const [toggle, setToggle] = useState(false);

    const handleClick = useCallback(() => {
        setToggle(!toggle);
        setData(false);
    })

    useEffect(() => {
        clearTimeout(Demo.timer);
        Demo.timer = setTimeout(() => setData(true), 1000)
    }, [toggle])

    Demo.count++;
    console.log('rerender', Demo.count)

    return <>
        <Card>
            <Loading />
            {data ? <h2>card component</h2> : <Loading />}
        </Card>
        <Button onClick={handleClick}>Reload Card</Button>
    </>
}

export default Demo;

Demo.count = 0;