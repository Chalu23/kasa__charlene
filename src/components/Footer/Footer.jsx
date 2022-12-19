import "./Footer.css";
import logoFooter from "../../assets/img/logoFooter.png";

function Footer() {
  // récupération de l'année en cours
  const actualYear = new Date().getFullYear();
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
