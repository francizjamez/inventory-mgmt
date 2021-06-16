import React from "react";

export default function Button(props) {
  const buttonClasses =
    `bg-green-600 text-white rounded-md py-2 px-4 ` + props.className;
  return (
    <button {...props} className={buttonClasses}>
      {props.children}
    </button>
  );
}
