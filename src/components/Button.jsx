import React from "react";
import clsx from "clsx"; // For conditional class merging

const Button = ({ variant = "filled", children, className, ...props }) => {
  return (
    <button
      className={clsx(
        "px-4 py-2 rounded-lg font-medium transition-all duration-300",
        variant === "filled"
          ? "bg-purple-600 text-white hover:bg-purple-700"
          : "border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
