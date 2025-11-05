"use client";
import React from "react";

export default function Button({
  children,
  className = "",
  variant = "default",
  ...props
}) {
  const baseStyle = "px-4 py-2 rounded transition-colors font-medium";
  const variantStyle =
    variant === "outline"
      ? "border bg-white text-gray-900 hover:bg-gray-100"
      : "bg-blue-600 text-white hover:bg-blue-700";

  return (
    <button className={`${baseStyle} ${variantStyle} ${className}`} {...props}>
      {children}
    </button>
  );
}
