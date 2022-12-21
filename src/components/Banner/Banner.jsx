import React from "react";
import "./Banner.css";

const Banner = ({ image, text }) => {
  return (
    <div className="banner">
    <img src={image} alt="banner" className="banner_img" />
    <div className="banner_overlay"></div>
    {text ? <h1 className="banner_text">{text}</h1> : null}
    </div>
    );
  };
  
  export default Banner;
