import { NavLink } from "react-router-dom";
import "./Error404Page.css";

function Error404Page() {
  return (
    <>
    <div className="page_404">
    <h1 className="title_404">404</h1>
    <span className="description_404">
    Oups&nbsp;, la page que vous demandez n'existe pas.
    </span>
    <NavLink className="link_404" to="/">
    Retourner à la page d'accueil
    </NavLink>
    </div>
    </>
    );
  }
  
  export default Error404Page;
