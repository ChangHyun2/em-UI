import React from "react";

const ComponentType = () => {
  const componentFunc = () => <div>Hello world</div>;
  const componentElement = <div>hello world</div>;

  console.log(React.isValidElement(componentFunc));
  console.log(React.isValidElement(componentElement));
  console.log(typeof componentFunc, typeof componentElement);

  console.log(String(componentFunc).includes("return React.createElement"));
  console.log(String(componentElement).includes("return React.createElement"));
  console.log(String(componentFunc));
  console.log(String(componentElement));
};

export default ComponentType;
