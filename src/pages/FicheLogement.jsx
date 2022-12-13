import { useParams } from "react-router-dom";
import products from "../datas/data.json";

import Rating from "../components/Rating";
import Host from "../components/Host";
import Slider from "../components/Slider";
import Tags from "../components/Tags";
import Collapse from "../components/Collapse";
// on passe des parametres dans une route et on les recuperes avec useParams
const FicheLogemet = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const { title, location, rating, host, equipments, description, pictures } =
    product;

  return (
    <main className="logement">
      <Slider slides={pictures} />
      <div className="logement__content">
        <div className="logement__informations">
          <h1 className="logement__title">{title}</h1>
          <p className="logement__location">{location}</p>
          <div className="logement__tags">
            {product.tags.map((tag, index) => (
              <Tags key={index} getTag={tag} />
            ))}
          </div>
        </div>
        <div className="logement__rating-and-host">
          <Rating rating={rating} />
          <Host host={host} />
        </div>
      </div>
      <div className="logement__dropdowns">
        <Collapse title="description" content={description} />
        <Collapse title="équipement" content={equipments} />
      </div>
    </main>
  );
};

export default FicheLogemet;