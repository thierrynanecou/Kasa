import React, { useEffect, useState } from "react";
import "./logement.scss";
import Carrousel from "../../components/carrousel/carrousel";
import logementsData from "../../data/logements.json";
import Tag from "../../components/tag/tag";
import Rating from "../../components/rating/rating";
import { useNavigate, useParams } from "react-router-dom";
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

const Logement = () => {
  const { id } = useParams();
  const data = logementsData.find((data) => data.id === id);
  const navigate = useNavigate();

  useEffect(() => {
    if (!data) {
      navigate("*");
    }
  }, [data, navigate]);

  return (
    <div>
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
