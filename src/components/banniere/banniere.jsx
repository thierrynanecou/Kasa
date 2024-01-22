import React from 'react';
import './banniere.scss';


const Banniere = ({img,desc}) => {
    return (
        
        <section className="banniere">
      <div className="banniere-content">
        <img src={img} alt="banniere-kasa" className="banniere-img" />
        <h1 className="banniere-title">{desc}</h1>
      </div>
      </section>
       
    )
}

export default Banniere