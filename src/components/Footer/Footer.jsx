import "./Footer.css";
import logoFooter from "../../assets/img/logofooter.png";

function Footer() {
  // récupération de l'année en cours
  const actualYear = new Date().getFullYear();//La getFullYear()méthode renvoie l'année de la date spécifiée en fonction de l'heure locale.
  return (
    <footer>
    <div className="footer_container">
    <div className="footer_logo">
    <img src={logoFooter} alt="Logo Kasa Footer" />
    </div>
    <div className="footer_rights">
    <p>&copy; {actualYear} Kasa. All rights reserved</p>
    </div>
    </div>
    </footer>
    );
  }
  
  export default Footer;
