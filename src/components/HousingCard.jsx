const HousingCard = ({ housing }) => {
  return (
    <div className="housing-card">
      <div class="housing-card_img" style={{ backgroundImage: `url(${housing.cover})` }} />

      <p className="housing-card_title">{housing.title}</p>
    </div>
  );
};
export default HousingCard;
