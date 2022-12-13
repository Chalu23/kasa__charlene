import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="error">
      <div className="error__Content">
        <p className="error__Number">404</p>
        <p className="error__Text">
          Oups! La page que vous demandez n'existe pas.
        </p>
      </div>
      <Link to="/" className="error__Link">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default ErrorPage;