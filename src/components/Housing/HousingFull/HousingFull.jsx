import "./HousingFull.scss";
import Carrousel from "../../Carrousel/Carrousel";
import Rating from "../../Rating/Rating";
import Collapse from "../../Collapse/Collapse";

const HousingFull = ({ housing }) => {
  const { title, description, location, host, tags, rating, equipments } =
    housing;
  return (
    <div className="housing-full">
      <Carrousel housing={housing} />
      <div className="housing-full__header-container">
        <div className="housing-full__header">
          <div className="housing-full__header__title">
            <h2>{title}</h2>
            <p>{location}</p>
          </div>
          <div className="housing-full__header__tags">
            {tags.map((tag) => (
              <p key={tag}>{tag}</p>
            ))}
          </div>
        </div>
        <div className="housing-full__characteristics">
          <div className="housing-full__characteristics__host">
            <p>{host.name}</p>
            <img src={host.picture} alt={host.name} />
          </div>
          <div className="housing-full__characteristics__rating">
            <Rating rating={rating} />
          </div>
        </div>
      </div>
      <div className="housing-full__overview">
        <Collapse title="Description" content={description} />
        <Collapse title="Équipements" content={equipments} />
      </div>
    </div>
  );
};
export default HousingFull;
