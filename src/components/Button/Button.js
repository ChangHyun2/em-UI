import React from "react";

const Button = React.forwardRef(function Button(props, ref) {
  const {
    tag = "button",
    children,
    color,
    disabled,
    startIcon,
    endIcon,
    stretch,
    size,
    href,
    round,
    ...others
  } = props;
  const Tag = tag;

  return (
    <Tag ref={ref} {...others}>
      {children}
    </Tag>
  );
});

export default Button;
