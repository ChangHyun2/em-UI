import React, { Component, useState, useEffect, useCallback } from "react";
import { css } from "@emotion/core";
import Card from "./Card";
import Button from "../Button/Button";
import Loading from '../Loading/Loading'
import Avatar from '../Avatar/Avatar'
import Container from '../Container/Container'
import Grid from '../Grid/Grid'

const Demo = () => {

    const [data, setData] = useState(false);
    const [toggle, setToggle] = useState(false);

    const handleClick = useCallback(() => {
        setToggle(!toggle);
        setData(false);
    }, [data])

    useEffect(() => {
        clearTimeout(Demo.timer);
        Demo.timer = setTimeout(() => setData(true), 1000)
    }, [toggle])

    useEffect(() => {

    }, [])

    // Demo.count++;
    // console.log('rerender', Demo.count)
    // hook으로 handleClick 리렌더링 최소화하기 

    const content = <Container direction={'column'} css={css`
        height: 150px;
    `}>
        <h3>Card Component</h3>
        <p>props : inherit BoxGrid</p>
        <Avatar length={50} src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" />
        <Button href="www.naver.com">link</Button>
    </Container>

    const placeholder = <Container direction={'column'} justify={'center'} css={css`
        height: 150px;
    `}>
        <Loading />
    </Container>

    return <>
        <Grid xs={4} >
            <Card >
                {data ? content : placeholder}
                <Button onClick={handleClick}>Reload Card</Button>
            </Card>
        </Grid>
    </>
}

export default Demo;

Demo.count = 0;