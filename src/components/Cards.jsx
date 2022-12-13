import React from "react";

const Cards = ({ image, title }) => {
  return (
    <div className="card__logement">
      <img src={image} alt="" className="card__logement__img" />
      <div className="card__logement__overlay"></div>
      <h2 className="card__logement__title">{title}</h2>
    </div>
  );
};

export default Cards;