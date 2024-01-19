import React from "react";
import "./error.scss";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    
      <section className="Error-page">
        <h1 className="Error-page-title">404</h1>
        <h2 className="Error-page-subtitle">
          Oups! La page que vous demandez n'existe pas.
        </h2>
        <Link to="/" className="Error-page-link">Retourner sur la page d'accueil</Link>
        
      </section>
   
  );
};

export default Error;
