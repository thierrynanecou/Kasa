import React from "react";
import "./about.scss";
import Banniere from "../../components/banniere/banniere";
import Collapse from "../../components/collapse/collapse";
import img from '../../assets/img-about.png';
import aboutJson from '../../data/about.json';

const About = () => {
  return (
    <div>
      <Banniere img={img}/>
      
      <section className="collapse">
        {aboutJson.map(({ title, content }, index) => (
          <Collapse
            key={`${index}`}
            title={title}
            content={content}
          />
        ))}
      </section>
    </div>
  );
};

export default About;
