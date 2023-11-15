import "./HousingCard.scss";
const HousingCard = ({ housing }) => {
  return (
    <div
      className="housing-card"
      id={housing.id}
      data-id={housing.id}
      style={{ backgroundImage: `url(${housing.cover})` }}
      onClick={() => window.location.href = `/housings/${housing.id}`}
    >
      <p className="housing-card_title">{housing.title}</p>
    </div>
  );
};
export default HousingCard;
