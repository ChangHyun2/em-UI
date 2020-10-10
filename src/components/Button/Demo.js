import React, { useState } from "react";
import getColor from '../../colors/index'
import { css } from "@emotion/core";
import Button from "./Button";


const ColorChangeBtn = ({ onClick, children, ...otherProps }) => {
  const [color, setColor] = useState(0);
  const colors = ['blue-600', 'red-600', 'yellow-600', 'orange-600', 'cyan-600', 'amber-600', 'brown-600', 'green-600', 'teal-600', 'purple-600', 'pink-600', 'lime-600', 'indigo-600']

  const changeColor = () => {
    setColor(color + 1)
    if (color === colors.length) {
      setColor(0)
    }
  }

  const onClickHandler = () => {
    changeColor()
    onClick && onClick()
    if (otherProps.inverted) {
    }
  }

  return <Button onClick={onClickHandler} color={{ bg: colors[color] }} {...otherProps}>{children}</Button>
}

const Demo = () => <>
  <p>you can check other colors </p>
  <div >
    <ColorChangeBtn>default button</ColorChangeBtn>
    <ColorChangeBtn size={3} round={5}>
      button
    </ColorChangeBtn>
    <ColorChangeBtn size={10} round={0.5}>
      button
    </ColorChangeBtn>
    <ColorChangeBtn color={{ bg: 'black' }}>
      button black
    </ColorChangeBtn>
    <ColorChangeBtn inverted color={{ bg: 'black' }}>
      button black
    </ColorChangeBtn>
    <ColorChangeBtn size={4} color={{ bg: "blue-300" }}>
      button
    </ColorChangeBtn>
    <ColorChangeBtn disabled >disabled </ColorChangeBtn>
    <ColorChangeBtn>click to change color</ColorChangeBtn>
    <ColorChangeBtn href="www.naver.com" > href link button </ColorChangeBtn>
    <ColorChangeBtn stretch > click to change color</ColorChangeBtn>
  </div>
</>
  ;

export default Demo;
