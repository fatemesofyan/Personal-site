import React from "react";

export default function Button({
  children,
  onClick,
  className,
  type = "button",
  variant = "primary", 
  shape = "rounded-full", 
  ...props
}) {
    const baseClasses = "text-neutral text-base px-6 py-2 flex items-center  justify-center transition-transform duration-200";

  const variantClasses = {
    primary: "bg-primary hover:bg-primaryHover",
    secondary: "bg-background-default text-primary border-2 border-solid border-primary dark:bg-background-dark hover:text-primaryHover",
  };

  const shapeClasses = {
    rounded: "rounded-md",
    pill: "rounded-full",
    square: "rounded-none",
  };

  const hoverScale = "hover:scale-105"

  return (
    <button
      type={type}
      onClick={onClick}
           className={`${baseClasses} ${variantClasses[variant]} ${shapeClasses[shape]} ${hoverScale} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
