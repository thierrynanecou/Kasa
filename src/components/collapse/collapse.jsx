import React, { useState } from "react";
import "./collapse.scss";
import vector from "../../assets/Vector haut.png";

const Collapse = ({ title, content }) => {
  const [isOpen, setOpen] = useState(false);
  const toggleCollapse = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="collapse-container">
      <div className="collapse-title-container">
        <div className="collapse-title" onClick={toggleCollapse}>
          {title}
          <img
            src={vector}
            className={`arrow-icon ${isOpen ? "arrow-up" : ""}`}
            alt="vector haut"
          />
        </div>
        </div>
          
            {isOpen && <div className="collapse-description">{content}</div>}
          
        
      
    </div>
  );
};

export default Collapse;
