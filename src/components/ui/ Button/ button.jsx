import React from "react";

export default function Button({ children, onClick, className, type = "button", ...props }) {
  return (
    <button
      type={type}  
      onClick={onClick}
      className={`bg-primary hover:bg-primaryHover text-neutral text-base rounded-full
         px-6 py-2 flex items-center ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
