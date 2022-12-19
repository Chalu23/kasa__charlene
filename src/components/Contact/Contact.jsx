import React from "react";
import "./Contact.css";

const Contact = ({ host }) => {
  // découper host.name en 2 variables name et lastname
  const isHostSplited = host.name.split(" ");
  const [name, lastname] = isHostSplited;
  const { picture } = host;

  return (
    <div className="contact">
      <div className="contact_name">
        {/* fonction trim() supprime à la string les espaces et tab inutiles  */}
        <p className="contact_firstname">{name.trim()}</p>
        <p className="contact_lastname">{lastname.trim()}</p>
      </div>
      <img src={picture} alt="" className="contact_picture" />
    </div>
  );
};

export default Contact;
