import React from "react";
import { useState } from "react";// useState permet de stocker les données qui sont retournées

//Style
import arrowLeft from "../assets/img/arrowLeft.svg";
import arrowRight from "../assets/img/arrowRight.svg";
// on crée une question cela nous permet de stocker l'objet qui a été retourné
// dans l'API on peut exploiter question assez simplement en appelant 
// setCurent
const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  // pour savoir si il faut mettre un lien on verifie l'affirmation avec +1
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="slider">
      {slides.map((picture, index) => {
        return (
          <div
            key={index}
            className={
              index === current
                ? "slide slider__active-picture"
                : "slide slider__inactive-picture"
            }
          >
            {index === current && (
              <img src={picture} alt="" className="slider__picture" />
            )}
          </div>
        );
      })}
      {/* ici c'est pour obtenir le bouton si il y a d'autres images  */}
      {length > 1 ? (
        <>
          <div className="slider__previous" onClick={prevSlide}>
            <img src={arrowLeft} alt="" className="slider__previous-icon" />
          </div>
          <div className="slider__next" onClick={nextSlide}>
            <img src={arrowRight} alt="" className="slider__next-icon" />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Slider;