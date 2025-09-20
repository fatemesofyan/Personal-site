import React from "react";

export default function Input({
  type = "text",
  placeholder = "",
  value,
  onChange,
  name,
  className = "",
}) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full px-5 py-4 rounded-full border border-background-muted dark:border-background-mutedDark  bg-background-default
         dark:bg-background-dark text-primaryText-secondaryText-light dark:text-primaryText-secondaryText-dark focus:outline-none ${className}`}
    />
  );
}
