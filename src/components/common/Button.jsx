import React from "react";

export default function Button(props) {
  let buttonClasses = `text-white rounded-md py-2 px-4 `;
  props.color === "danger"
    ? (buttonClasses += "bg-red-600 ")
    : (buttonClasses += `bg-green-600 `);
  props.disabled && (buttonClasses += " bg-opacity-30 cursor-none");
  buttonClasses += props.className;
  return (
    <button {...props} className={buttonClasses}>
      {props.children}
    </button>
  );
}
