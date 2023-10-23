import React from "react";
import { DatePicker } from "antd";
import "./index.css";

function Datepicker({ title, error,errorColor, ...props }) {
  return (
    <div className="uiInputWrapper">
      <span>{title}</span>
      <DatePicker
        {...props}
        style={{
          borderColor: error && `${errorColor}`,
        }}
      />
      <p>{error}</p>
    </div>
  );
}

export default Datepicker;
