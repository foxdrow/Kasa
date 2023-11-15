import HousingCard from "./HousingCard/HousingCard";
import HousingFull from "./HousingFull/HousingFull";
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
