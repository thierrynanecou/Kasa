import React from 'react';
import './accueil.scss';
import Banniere from '../../components/banniere/banniere';
import Cards from '../../components/cards/cards';
import logementsData from '../../data/about.json';
import img from '../../assets/img-accueil.png';

const Accueil = () => {
    
    return (
        <div>
            <Banniere img={img} desc="Chez vous, partout et ailleurs"/>
            <Cards data={logementsData}/>
        </div>
    );
}

export default Accueil;

