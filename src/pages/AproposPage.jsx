import "./AproposPage.css";
import Collapse from "../../src/components/Collapse/Collapse";
import bannerAbout from "../../src/assets/img/aboutbannerDesktop.png";
import Banner from "../components/Banner/Banner";

function AproposPage({ data }) {
  return (
    <div className="about_page">
    <Banner className="about_banner" image={bannerAbout} />
    <div className="about_dropdowns">
    {data.map((item) => (
      <Collapse
      titre={item.title}
      key={item.id}
      description={item.content}
      ></Collapse>
      ))}
      </div>
      </div>
      );
    }
    
    export default AproposPage;
