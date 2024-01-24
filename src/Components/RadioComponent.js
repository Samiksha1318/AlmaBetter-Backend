import React from "react";
import "../Css/RadioComponent.css";

// This radio component is what chooses the movie and time slot.
const RadioComponent = ({ text, changeSelection, data }) => {
  // Modifying the user's selected data.
  const handleChecked = (value) => {
    changeSelection(value);
  };

  return (
    <div
      name={text}
      className={`form-check-label ${data === text ? "active" : "inactive"}`}
      onClick={() => {
        handleChecked(text);
      }}>
      <span className={"text"}>{text}</span>
    </div>
  );
};

export default RadioComponent;
