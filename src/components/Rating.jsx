import React from "react";

// style
import redstar from "../assets/img/redStar.svg";
import greystar from "../assets/img/greyStar.svg";

const Rating = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {/* Il y a une boucle pour afficher l'etoile par le proprietaire  */}
      {stars.map((star) =>
        rating >= star ? (
          <img
            key={star.toString()}
            className="rating__icon"
            src={redstar}
            alt=""
          />
        ) : (
          <img
            key={star.toString()}
            className="rating__icon"
            src={greystar}
            alt=""
          />
        )
      )}
    </div>
  );
};

export default Rating;