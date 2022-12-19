import React from "react";
import "./Tags.css";
const Tags = ({ getTag }) => {
  return (
    <div className="tag">
      <p className="tag_text">{getTag}</p>
    </div>
  );
};
export default Tags;
