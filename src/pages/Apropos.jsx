import Banner from "../components/Banner";
import aboutData from "../datas/aboutData";
import Collapse from "../components/Collapse";
import imageBanner from "../assets/img/aboutbannerDesktop.png";

const About = () => {
  // Switch to display content in the dropdown by title
  const content = (title) => {
    switch (title) {
      case "Fiability":
        return aboutData.Fiability;
      case "Respect":
        return aboutData.Respect;
      case "Service":
        return aboutData.Service;
      case "Sécurity":
        return aboutData.Security;
      default:
        console.log("default");
        break;
    }
  };

  return (
    <main className="main">
      <section className="about">
        <Banner image={imageBanner} />
        <div className="about__dropdowns">
          <Collapse title="Fiabilité" content={content("Fiability")} />
          <Collapse title="Respect" content={content("Respect")} />
          <Collapse title="Service" content={content("Service")} />
          <Collapse title="Sécurité" content={content("Sécurity")} />
        </div>
      </section>
    </main>
  );
};

export default About;