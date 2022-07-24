import React from "react";
// w-full px-6 py-3 mt-auto font-bold text-white rounded-lg bg-primary font-xl
const Button = ({
  onClick,
  className,
  type = "button",
  children,
  bgColor = "primary",
}) => {
  let bgClassName = "bg-primary";
  switch (bgColor) {
    case "primary":
      bgClassName = "bg-primary";
      break;
    case "secondary":
      bgClassName = "bg-secondary";
      break;
    default:
      break;
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full px-6 py-3 mt-auto font-bold text-white rounded-lg ${bgClassName} font-xl ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
