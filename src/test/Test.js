import React, { useEffect, useState, useRef } from "react";
import RefApp from "./RefApp";
import Transition from "./Transition";
import ComponentType from "./ComponentType";
import PlaceholderTest from './placeholderSizeBeforeLoading'
import { css } from "@emotion/core";
import colors, { getColor } from "../colors/index";
import BoxGrid from '../components/BoxGrid/BoxGrid'
import Button from '../components/Button/Button'

const sliderContainerSheet = {
  width: '100%',
  display: 'flex'
}

const containerSheet = {
  width: '200px',
  overflow: 'hidden'
}

const slideSheet = {
  width: '100%',
  height: '100%',
}

const Slide = ({ src }) => <img src={src} style={slideSheet} />

const SliderContainer = ({ children, forwardRef }) => <div ref={forwardRef} style={sliderContainerSheet}>{children}</div>

const Container = ({ children }) => <div style={containerSheet}>{children}</div>

const Slider = ({ images }) => {
  const TOTAL_SLIDES = images.length;

  const [current, setCurrent] = useState(0)
  const containerRef = useRef(null)

  const toNext = () => setCurrent(current >= TOTAL_SLIDES ? 0 : current + 1)
  const toPrev = () => setCurrent(current === 0 ? TOTAL_SLIDES : current - 1)

  useEffect(() => {
    containerRef.current.style.transition = 'all 0.5s ease-in-out'
    containerRef.current.style.transform = `translateX(-${current}00%)`
  }, [current])

  return (
    <Container>
      {current}
      <SliderContainer forwardRef={containerRef}>
        {images.map(src => <Slide key={Math.random()} src={src} />)}
      </SliderContainer>
      <Button onClick={toPrev}>Prev</Button>
      <Button onClick={toNext}>Next</Button>
    </Container>
  )
}


const Test = () => {
  ComponentType();
  return (
    <>
      <Slider css={css`
        width: 200px;
      `} images={['https://picsum.photos/200/200', 'https://picsum.photos/200/200', 'https://picsum.photos/200/200']} />
      <PlaceholderTest />
      <div>
        <p>test button font-size inherit</p>
        <div
          css={css`
          font-size: 10rem;
          display: inline-block;
          `}
        >
          <button
            css={css`
            display: inline-block;
            background-color: #000;
            color: #fff;
            padding: 4em;
            `}
          >
            hello
        </button>
        </div>
      </div>
      <RefApp></RefApp>
      <Transition></Transition>
    </>
  );
};

export default Test;
