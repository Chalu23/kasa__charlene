import React from "react";
import "./Host.css";

const Host = ({ host }) => {
  // découper host.name en 2 variables name et lastname
  const isHostSplited = host.name.split(" ");
  const [name, lastname] = isHostSplited;
  const { picture } = host;

  return (
    <div className="host">
      <div className="host_name">
        {/* fonction trim() supprime à la string les espaces et tab inutiles  */}
        <p className="host_firstname">{name.trim()}</p>
        <p className="hot_lastname">{lastname.trim()}</p>
      </div>
      <img src={picture} alt="" className="host_picture" />
    </div>
  );
};

export default Host;
