import common from "./common";
import red from "./red";
import pink from "./pink";
import purple from "./purple";
import deepPurple from "./deepPurple";
import indigo from "./indigo";
import blue from "./blue";
import lightBlue from "./lightBlue";
import cyan from "./cyan";
import teal from "./teal";
import green from "./green";
import lightGreen from "./lightGreen";
import lime from "./lime";
import yellow from "./yellow";
import amber from "./amber";
import orange from "./orange";
import deepOrange from "./deepOrange";
import brown from "./brown";
import grey from "./grey";
import blueGrey from "./blueGrey";

const colors = {
  black: "#000",
  white: "#fff",
  red,
  pink,
  purple,
  deepPurple,
  indigo,
  blue,
  lightBlue,
  cyan,
  teal,
  green,
  lightGreen,
  lime,
  yellow,
  amber,
  orange,
  deepOrange,
  brown,
  grey,
  blueGrey,
};
export default colors;

const validateColorForm = (color) => {
  if (!/[a-z]-A?(5|[1-9]0)0$/.test(color)) {
    throw new Error(
      `${color} is not valid color form. Use a color formed like "hue-contrast". And check contrast is 50 to 900`
    );
  }
};

export const getColor = (_color) => {
  if (_color === "white") return colors.white;
  if (_color === "black") return colors.black;

  validateColorForm(_color);

  let [hue, contrast] = _color.split("-");

  if (!colors[hue]) {
    console.error(`hue ${hue} is not in your pallete`);
    return;
  }

  return colors[hue][contrast];
};

const accentAscendOrder = {
  100: 200,
  200: 400,
  400: 700,
};

const accentDescendOrder = {
  700: 400,
  400: 200,
  200: 100,
};

export const darken = (_color, depth) => {
  if (_color === "black") return "#000";
  if (_color === "white") {
    _color = "grey-50";
  }

  validateColorForm(_color);

  let [hue, contrast] = _color.split("-");

  const huePallete = colors[hue];
  if (!huePallete) {
    throw new Error("hue is not defined in your color pallete");
  }

  if (/^A/.test(contrast)) {
    // if accent
    let contrastValue = +contrast.slice(1);
    while (depth) {
      contrastValue = accentDescendOrder[contrastValue];
      if (contrastValue === 700) {
        `${_color} cannot be darkend more than A700. `;
        return huePallete["A" + contrastValue];
      }
      depth--;
    }
    return huePallete["A" + contrastValue];
  }


  contrast = Number(contrast)
  contrast += (contrast === "50") ? depth * 100 - 50 : depth * 100;

  if (contrast > 900) {
    console.error(
      `${_color} cannot be darkend to ${hue}-${contrast}. max contrast is 900`
    );
    contrast = 900;
  }

  return huePallete[contrast];
};

export const lighten = (_color, depth) => {
  if (_color === "white") return "#fff";
  if (_color === "black") {
    _color = "grey-900";
  }

  validateColorForm(_color);

  let [hue, contrast] = _color.split("-");

  const huePallete = colors[hue];
  if (!huePallete) {
    throw new Error("hue is not defined in your color pallete");
  }

  if (/^A/.test(contrast)) {
    // if accent
    let contrastValue = +contrast.slice(1);
    while (depth) {
      contrastValue = accentAscendOrder[contrastValue];
      if (contrastValue === 100) {
        `${_color} cannot be lightened less than A100. `;
        return huePallete["A" + contrastValue];
      }
      depth--;
    }
    return huePallete["A" + contrastValue];
  }

  contrast = Number(contrast) - depth * 100;

  if (contrast < 50) {
    console.error(
      `${_color} cannot be darkend to ${hue}-${contrast}. min contrast is 50`
    );
    contrast = 50;
  }

  return huePallete[contrast];
};
