import React from "react";

const Button = ({
  full = false,
  onClick,
  className,
  children,
  type = "button",
  bgColor = "primary",
}) => {
  let bgClassName = "bg-primary";
  switch (bgColor) {
    case "primary":
      bgClassName = "bg-primary";
      break;
    case "secondary":
      // eslint-disable-next-line no-unused-vars
      bgClassName = "bg-secondary";
      break;
    default:
      break;
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={`py-3 px-6 rounded-lg  mt-auto ${
        full ? "w-full" : ""
      } ${bgColor} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
