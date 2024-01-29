import React from "react";
import "./logement.scss";
import Carrousel from "../../components/carrousel/carrousel";
import logementsData from "../../data/logements.json";
import Tag from "../../components/tag/tag";
import Rating from "../../components/rating/rating";
import { useParams } from "react-router-dom";
import Collapse from "../../components/collapse/collapse";
import Error from "../../pages/error/error";

const Logement = () => {
  const { id } = useParams();
  const data = logementsData.find((data) => data.id === id);
  
 if (!data) {
   return (<Error />)
 };

 

  return (
    <div className="container-logement">
      <Carrousel images={data.pictures} />

      <div className="details">
        <div className="tag-title">
          <div className="title">
            <h1>{data.title}</h1>
            <h2>{data.location}</h2>
          </div>

          <div className="tag-container">
            {data.tags.map((tag) => (
              <Tag key={`${data.id}-${tag}`} tag={tag} />
            ))}
          </div>
        </div>

        <div className="stars-name">
          <div className="host-name-picture">
            <p className="host-name">{data.host.name}</p>
            <img
              className="host-picture"
              src={data.host.picture}
              alt={data.host.name}
            />
          </div>

          <div className="rating">
            <Rating rating={data.rating} className="rating-star" />
          </div>
        </div>
      </div>

      <div className="collapse-logement">
        <div className="description-logement">
          <Collapse title="Description" content={data.description} />
        </div>

        <div className="equipments-logement">
          <Collapse title="Equipements" content={data.equipments} />
        </div>
      </div>
    </div>
  );
};

export default Logement;
