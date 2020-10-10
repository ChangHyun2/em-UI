import React from 'react'

const Icon = ({ width, height, viewBox = "0 0 16 16", color = "#111", xmlns = "http://www.w3.org/2000/svg", svg, ...others }) =>
    <svg {...others}
        width={width}
        height={height}
        viewBox={viewBox}
        fill={color}
        xmlns={xmlns}
        dangerouslySetInnerHTML={{ __html: svg }}
    />

export default Icon;