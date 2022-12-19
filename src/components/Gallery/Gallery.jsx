import React from "react";
import { useState } from "react";
import arrowLeft from "../../assets/img/arrowLeft.svg";
import arrowRight from "../../assets/img/arrowRight.svg";
import "./Gallery.css";

function Gallery({ pictures }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = pictures.length;
  // fonctions pour changer de slide avec les flèches
  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  };
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  };
  // si pas de slide, on affiche un message
  if (!pictures || length === 0) {
    return <div className="gallery_displayNoImage">Image non disponible</div>;
  }
  return (
    <>
      {pictures.map(
        (picture, index) =>
          currentSlide === index && (
            <div key={picture} className="gallery_image">
              <span className="gallery_count">
                {index + 1}/{length}
              </span>
              <img src={picture} alt="appartement" />
              {length > 1 ? (
                // si il y a plus d'une image, on affiche les boutons, sinon rien
                <>
                  <div className="gallery_arrowLeft" onClick={prevSlide}>
                    <img src={arrowLeft} alt="arrow preview" />
                  </div>
                  <div className="gallery_arrowRight" onClick={nextSlide}>
                    <img src={arrowRight} alt="arrow next" />
                  </div>
                </>
              ) : null}
            </div>
          )
      )}
    </>
  );
}

export default Gallery;
