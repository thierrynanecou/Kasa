import React, { useEffect } from 'react';
import './logement.scss';
import Carrousel from '../../components/carrousel/carrousel';
import logementsData from '../../data/logements.json';
import Tag from '../../components/tag/tag';
import Rating from '../../components/rating/rating';
import { useNavigate, useParams } from 'react-router-dom';
import Collapse from '../../components/collapse/collapse';



const Logement = () => {
    
    const {id} = useParams();
    const data = logementsData.find(data => data.id === id);
    const navigate = useNavigate();

    useEffect (()=> {
        if (!data) {
            navigate ("*");
    }
  },[data, navigate]);
    
    return (
        <div>
        <Carrousel pictures = {data.pictures} />

        <div className="details">
                <div className="tag-title">
                    <div className="title">
                        <h1>{data.title}</h1>
                        <h2>{data.location}</h2>
                    </div>

                    <div className="tag-container">
                        {data.tags.map(tag => <Tag key={`${data.id}-${tag}`} tag={tag} />)}
                    </div>
                </div>

                <div className="stars-name">
                    <div className="host-name-picture">
                        <p className="host-name">{data.host.name}</p>
                        <img className="host-picture" src={data.host.picture} alt={data.host.name}/>
                    </div>

                    <div className="rating">
                        <Rating rating={data.rating} className="rating-star" />
                    </div>
                </div>
            </div>
                
                
            <div className="collapse-logement">
                <div className="description-logement">
                    <Collapse
                    collapseTitle={<h2 className="collapse-title">Description</h2>}
                    collapseDescription={<p className="collapse-description">{data.description}</p>} 
                    />
                </div>
                    
                <div className="equipments-logement">
                    <Collapse 
                    collapseTitle={<h2 className="collapse-title">Equipements</h2>}
                    collapseDescription={
                        <ul className="list-equipement">
                            {data.equipments.map((equipments, index) => (
                            <li key={`${index}-${equipments}`} className="equipements">{equipments}</li>
                        ))}
                        </ul>
                        }
                    />
                </div>
            </div>
            



        </div>
    )
}

export default Logement