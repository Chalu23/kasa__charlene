import { Navigate, useParams } from "react-router-dom";
// components
import Collapse from "../components/Collapse/Collapse";
import Products from "../datas/records.json";
import SlideShow from "../components/SlideShow/SlideShow";
import { Star } from "../components/Star/Star";
import Tags from "../components/Tags/Tags";
import Host from "../components/Host/Host";
// css
import "./ProductPage.css";


function ProductPage() {
  const { id } = useParams();// on recupere les données 
  const product = Products.find((product) => product.id === id);
  console.log("product",product) // si id est mauvais on retourne sur la page erreur 
  if (!product) {
    return <Navigate to="/404" />;
  }

  const {equipments,description,rating,pictures,tags,host,title,location, } = product;

  const stars = [1, 2, 3, 4, 5].map((n) => (
    <Star key={n} selected={n <= Number(rating)} />
    // on compare n à la note et la note de distribution au nombre 
  ));
  const equipementsLogement = equipments.map((equipment, index) => {
    return <li key={index}>{equipment}</li>;
  });

  return (
    <>
      <div className="product_page">
        <SlideShow pictures={pictures} />
        <div className="product_content">
          <div className="product_informations">
            <h1 className="product_title">{title}</h1>
            <p className="product_location">{location}</p>
            <div className="product_tags">
              {tags.map((tag, index) => (
                <Tags key={index} getTag={tag} />
              ))}
            </div>
          </div>
          <div className="product_starshost">
            <Host host={host} />
            <div className="product_stars">{stars}</div>
          </div>
        </div>
        <div className="product_equipments">
          <Collapse
            className="description"
            titre="Description"
            description={description}
          />
          <Collapse
            className="equipment"
            titre="Équipements"
            description={equipementsLogement}
            // key={equipementsLogement}
          />
        </div>
      </div>
    </>
  );
}

export default ProductPage;
