import React from "react";
import "./index.css";

function Input({ title, error, errorColor, ...props }) {
  return (
    <div className="uiInputWrapper">
      <span>{title}</span>
      <input
        {...props}
        style={{
          borderColor: error && `${errorColor}`,
        }}
      />
      <p>{error}</p>
    </div>
  );
}

export default Input;
