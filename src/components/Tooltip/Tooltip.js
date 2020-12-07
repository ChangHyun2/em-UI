import React, { useState, useEffect } from 'react'
import { css } from '@emotion/core'


const Tooltip = React.forwardRef(({ color = 'blue-200', disabled, title, ...others }, ref) => {

    const childProps = {}



    return (
        <>
            { React.cloneElement(children, childProps)}
        </>
    )
})

export default Tooltip;