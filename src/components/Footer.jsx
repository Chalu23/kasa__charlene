import React from "react";

import logoFooter from "../assets/img/logofooter.png";

const Footer = () => {
  const Year = new Date().getFullYear();//methode renvoie l'annee de la date spécifiee en foncion de l'heure local 
  return (
    <footer className="footer">
      <img src={logoFooter} alt="" className="footer__logo" />
      <p className="footer__text">
        &copy;
        {Year} Kasa. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;