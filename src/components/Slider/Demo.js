import React, { useState } from "react";
import { css } from "@emotion/core";
import Slider from "./Slider";

const Demo = () => {
    return <>
        <div>
            <Slider width={200} height={6} />
            <Slider width={200} height={6} />
            <Slider width={200} height={6} />
            <input type={'hidden'} />
        </div>
    </>
}

export default Demo