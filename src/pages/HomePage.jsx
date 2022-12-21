import CardsContainer from "../components/CardsContainer/CardsContainer";
import "./HomePage.css";
import Banner from ".././components/Banner/Banner";
import bannerHome from "../assets/img/banner.png";


function HomePage() {
  const slogan = "Chez vous, partout et ailleurs";
  return (
    <main className="homepage">
    <Banner image={bannerHome} text={slogan} />
    <CardsContainer />
    </main>
    );
  }

export default HomePage;
