import React from "react";
import { css } from "@emotion/core";
import { getColor } from "../../colors/index";



const Avatar = ({ length, src, alt, color = 'black', children, radius = '100%', ...others }) => {
    let avatar;

    if (src) {
        const imgStyle = {
            wrapper: css`
            ${length && `width: ${length}px; height: ${length}px; `}
            `,
            img: css` 
            ${length && 'width: 100%; height: 100%;'}
            border-radius: ${radius};
            `
        }

        avatar = (
            <div css={imgStyle.wrapper}>
                <img css={imgStyle.img} src={src} alt={alt} />
            </div>
        );
        return avatar;
    }

    const iconStyle = css`
    display: flex;
    align-items: center;
    justify-content: center;
    ${length && `width: ${length}px; height: ${length}px;`}
    border-radius: ${radius};
    background-color: ${getColor(color)};
    color: #fff;
    font-weight: bold;
    user-select:none;
    `;

    avatar = (
        <div css={iconStyle} {...others}>
            {children}
        </div>
    );
    return avatar
}

export default Avatar;
