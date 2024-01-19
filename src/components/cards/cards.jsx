import React from 'react';
import './cards.scss';
import { Link } from "react-router-dom";
import Logement from '../../data/logements.json';

const Cards = () => {
    return (
        <div className="cards-container">
            {Logement.map((data) => (
                <Link to={`/logement${data.id}`} key={data.id}>
                    <div className='logement'>
                        <img src={data.cover} alt={data.title} />
                        <h2>{data.title}</h2>
                        
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Cards;
