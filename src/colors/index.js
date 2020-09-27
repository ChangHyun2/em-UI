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

export const getColor = (_color) => {
  if (_color === "white") return "#fff";
  if (_color === "black") return "#000";

  let [name, contrast] = _color.split("-");

  const color = colors[name][contrast];

  if (!color) {
    console.error(`${color} is not valid color`);
  }

  return colors[name][contrast];
};

// export const darken = (color, amount) => {
//   if (color === "white") return "#fff";
//   if (color === "black") return "#000";

//   const [name, contrast] = color.split("-");
//   let darkenContrast = +contrast + amount;

//   if (darkenContrast > 100) {
//     console.error(color, amount, "max contrast is 100");
//     darkenContrast = 100;
//   }

//   return globalColor[name][darkenContrast + ""];
// };

// export const lighten = (color, amount) => {
//   const [name, contrast] = color.split("-");
//   let lightenContrast = +contrast - amount;

//   if (lightenContrast < 10) {
//     console.error(color, lightenContrast, "min contrast is 10");
//     lightenContrast = 10;
//   }

//   return globalColor[name][lightenContrast + ""];
// };
