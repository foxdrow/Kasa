import HousingCard from "./HousingCard";
import HousingFull from "./HousingFull";
const Housing = (props) => {
  const { type = "card" } = props;
  return (
    <>
      {type === "card" ? (
        <HousingCard {...props} />
      ) : (
        <HousingFull {...props} />
      )}
    </>
  );
};
export default Housing;
