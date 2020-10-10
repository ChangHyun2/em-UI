import React, { useState, useEffect } from 'react'
import { css } from '@emotion/core'
import Loading from '../components/Loading/Loading'

const Placeholder = () => {

    const [contentLoaded, setContentLoaded] = useState(false);
    const [placeholderSize, setPlaceholderSize] = useState(0);

    useEffect(() => {

        const placeholder = document.getElementById('placeholder');
        const content = document.getElementById('content')

        placeholder.style.height = content.clientHeight + 'px';
        placeholder.style.width = content.clientWidth + 'px';
        console.log(placeholder.style.width, placeholder.style.height)
        // content.style.visibility = 'hidden';

        setTimeout(() => {
            setContentLoaded(true)
        }, 1000)
    }, [])

    const content = <div css={css`
        // display:none;
    `} id="content">
        <h2>hello world</h2>
        <p>hello world hello world hello world</p>
        <p>hello world hello world hello world</p>
        <p>hello world hello world hello world</p>
        <p>hello world hello world hello world</p>
    </div>

    return <div css={css`
        position:relative;
    `}>
        {content}
        <div css={css`
            position:absolute;
            top:0;
            left:0;
            `} id="placeholder"
        >
            <Loading />
        </div>
    </div>
}

export default Placeholder;