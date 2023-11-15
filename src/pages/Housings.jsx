import { useParams } from "react-router-dom";
import Housing from "../components/Housing/Housing";
import housings from "../assets/data/housings.json";
import MainContainer from "../layouts/MainContainer";
const Housings = (props) => {
  const { id } = useParams();
  const housingId = housings.map((housing) => housing.id);
  if (!housingId.includes(id)) {
    window.location.href = "/404";
  } else {
    return (
      <MainContainer className="housings">
        <div>
          {housings.map((housing) => {
            if (housing.id === id) {
              return <Housing type="full" housing={housing} />;
            }
            return null;
          })}
        </div>
      </MainContainer>
    );
  }
};
export default Housings;
