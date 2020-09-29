import React from "react";
import { css } from "@emotion/core";
import Button from "./Button";

const Demo = () => (
  <>
    <Button size={3} round={5}>
      rectangle button
    </Button>
    <Button size={4} color={{ bg: "blue-300" }}>
      round button
    </Button>
    <Button>outline button</Button>
    <Button>link button</Button>
  </>
);

export default Demo;
