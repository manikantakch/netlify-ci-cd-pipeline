import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const Input = ({
  type = "text",
  placeholder = "",
  value,
  onChange,
  disabled = false,
  readOnly = false,
  size = "md",
  fullWidth = false,
  error = false,
  className = "",
  ...props
}) => {
  const baseClasses =
    "border rounded-md focus:outline-none transition duration-200";

  const sizeClasses = {
    sm: "p-2 text-sm",
    md: "p-3 text-base",
    lg: "p-4 text-lg",
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      readOnly={readOnly}
      className={clsx(
        baseClasses,
        sizeClasses[size],
        fullWidth && "w-full",
        error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500",
        disabled && "bg-gray-100 cursor-not-allowed",
        className
      )}
      {...props}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  fullWidth: PropTypes.bool,
  error: PropTypes.bool,
  className: PropTypes.string,
};

export default Input;
