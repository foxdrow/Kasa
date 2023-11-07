import LogementCardSmall from "./LogementCardSmall";
import LogementCardBig from "./LogementCardBig";
const LogementCard = (props) => {
  return (
    <div className="logement_card">
      {props.size === "small" ? (
        <LogementCardSmall {...props} />
      ) : (
        <LogementCardBig {...props} />
      )}
    </div>
  );
};
export default LogementCard;
