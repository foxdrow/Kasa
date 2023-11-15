import "./HousingFull.scss";
import Carrousel from "../Carrousel/Carrousel";
const HousingFull = ({ housing }) => {
  const { id, title, description, location, host, tags, rating } = housing;
  return (
    <div className="housing-full">
      <Carrousel housing={housing} />
      <div className="housing-full__header">
        <div className="housing-full__header__title">
          <h2>{title}</h2>
          <p>{location}</p>
        </div>
        <div className="housing-full__header__host">
          <p>{host.name}</p>
          <img src={host.picture} alt={host.name} />
        </div>
      </div>
      <div className="housing-full__characteristics">
        <div className="housing-full__characteristics__tags">
          {tags.map((tag) => (
            <p key={tag}>{tag}</p>
          ))}
        </div>
        <div className="housing-full__characteristics__rating">
          <p>{rating}</p>
        </div>
      </div>
    </div>
  );
};
export default HousingFull;
