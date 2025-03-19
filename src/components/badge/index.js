import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const Badge = ({
  text,
  variant = "primary",
  size = "medium",
  icon: Icon,
  onClick,
  rounded = false,
  pill = false,
}) => {
  const baseClasses = "inline-flex items-center font-medium";
  
  const variantClasses = {
    primary: "bg-blue-500 text-white",
    secondary: "bg-gray-500 text-white",
    success: "bg-green-500 text-white",
    danger: "bg-red-500 text-white",
    warning: "bg-yellow-500 text-black",
    info: "bg-cyan-500 text-white",
    light: "bg-gray-100 text-black",
    dark: "bg-gray-900 text-white",
  };

  const sizeClasses = {
    small: "text-xs px-2 py-1",
    medium: "text-sm px-3 py-1.5",
    large: "text-lg px-4 py-2",
  };

  return (
    <span
      className={clsx(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        rounded && "rounded-md",
        pill && "rounded-full",
        onClick && "cursor-pointer"
      )}
      onClick={onClick}
    >
      {Icon && <Icon className="w-4 h-4 mr-1" />}
      {text}
    </span>
  );
};

Badge.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  icon: PropTypes.elementType,
  onClick: PropTypes.func,
  rounded: PropTypes.bool,
  pill: PropTypes.bool,
};

export default Badge;
