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
      
        <div className="collapse-title" onClick={toggleCollapse}>
          <h2>{title}</h2>
          <img
            src={vector}
            className={ isOpen ? "arrow-icon arrow-up" : "arrow-icon"}
            alt="vector haut"
          />
        </div>
        
          
        <div className={isOpen &&  ("collapse-description showdescription") }> 
            {isOpen ?( typeof(content)=="object"?content.map((data) =>(<li>{data}</li>)):content):""} 
            </div>
          
        
      
    </div>
  );
};

export default Collapse;
