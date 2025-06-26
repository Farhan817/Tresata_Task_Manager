import React from "react";

const Button = ({
  ref,
  variant = "primary",
  size = "sm",
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-lg font-medium transition-all text-white  duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed bg-primary shadow-lg hover:shadow-xl
  ${size === "sm" ? "h-8 px-3 text-sm" : ""}
  ${size === "md" ? "h-10 px-4 text-sm" : ""}
  ${size === "lg" ? "h-12 px-6 text-base" : ""}
  ${size === "icon" ? "h-10 w-10" : ""}
  ${className || ""}
`}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
