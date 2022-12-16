import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="error">
      <div className="errorContent">
        <p className="errorNumber">404</p>
        <p className="errorText">
          Oups&nbsp;! La page que vous demandez n'existe pas.
        </p>
      </div>
      <Link to="/" className="errorLink">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default ErrorPage;