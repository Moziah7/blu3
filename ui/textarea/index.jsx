import React from "react";
import "./index.css";

function Textarea({ title, error,errorColor, ...props }) {
  return (
    <div className="uiInputWrapper">
      <span>{title}</span>
      <textarea
        {...props}
        style={{
          borderColor: error  && `${errorColor}`,
        }}
      />
      <p>{error}</p>
    </div>
  );
}

export default Textarea;
