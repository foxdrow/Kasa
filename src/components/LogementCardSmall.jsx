const LogementCardSmall = ({ logement }) => {
  return (
    <div className="logement-card_small">
      <div class="logement-card_small_img" style={{ backgroundImage: `url(${logement.cover})` }} />

      <p className="logement_card_small_title">{logement.title}</p>
    </div>
  );
};
export default LogementCardSmall;
