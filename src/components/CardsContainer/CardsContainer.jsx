import "../CardsContainer/CardsContainer.css";
import Records from "../../datas/records.json";
import { Link } from "react-router-dom";
function CardsContainer() {
  return (
    <div className="cards_container">
      {/* generation des cards */}
      {Records.map((record) => {
      // destructuring de record
        const { cover, title, id } = record;
        return (
          <div className="card" key={id}>
            <div className="card_image">
              <Link to={"products/" + id} className="card_link">
                <div className="card_overlay">
                  <img className="card_vignette" src={cover} alt={title} />
                </div>
                <div className="card_title">
                  <h2>{title}</h2>
                </div>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CardsContainer;
