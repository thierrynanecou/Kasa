import React from "react";
import "./tag.scss";

const Tag = ({ tag }) => {
  return (
    <div className="tag-container">
      <div className="tag">{tag}</div>
    </div>
  );
};

export default Tag;
