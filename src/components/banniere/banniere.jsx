import React from 'react';
import './banniere.scss';


const Banniere = ({img,desc}) => {
    return (
        <div>
        <section className="banniere">
      <div className="banniere-content">
        <img src={img} alt="banniere-kasa" className="banniere-img" />
        <h1 className="banniere-title">{desc}</h1>
      </div>
      </section>
        </div>
    )
}

export default Banniere