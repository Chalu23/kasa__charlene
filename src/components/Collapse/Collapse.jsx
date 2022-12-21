import React, { useState } from "react";
import "./Collapse.css";
import arrowCollapse from "../../assets/img/arrowCollapse.svg";

function Collapse({ titre, description }) {
  const [ouvert, setOuvert] = useState(false);
  // initialisation du state à false
  // si au click on a true, on passe à false, sinon on passe à true
  const clickArrow = () => {
    setOuvert(ouvert === true ? false : true);
  };
  
  return (
    <div className="collapse" id={`collapse-${titre}`}>
    <div className="collapse_header">
    <div className="collapse_title">{titre}</div>
    <span
    className={`collapse_arrow ${ouvert}`}
    onClick={clickArrow}
    >
    <img src={arrowCollapse} alt="Ouvrir cette liste déroulante" />
    </span>
    </div>
    {
      /* Si le collapse est à TRUE alors il affichera la description */
      ouvert && <div className="collapse_description">{description}</div>
    }
    </div>
    );
  }
  
  export default Collapse;
