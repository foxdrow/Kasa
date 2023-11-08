import { useParams } from "react-router-dom";
import Housing from "../components/Housing/Housing";
import housings from "../assets/data/housings.json";
const Housings = (props) => {
  const { id } = useParams();
  const housingId = housings.map((housing) => housing.id);
  if (!housingId.includes(id)) {
    window.location.href = "/404";
  } else {
    return (
      <div>
        <h1>Housings</h1>
        {id}
        {housings.map((housing) => {
          if (housing.id === id) {
            return <Housing housing={housing} />;
          }
          return null;
        })}
      </div>
    );
  }
};
export default Housings;
