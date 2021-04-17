import React from "react";
import "../components/Display.css";

const Display = (props) => {
  return (
    <div className="display">
      <label>{props.screen_value}</label>
    </div>
  );
};

export default Display;
