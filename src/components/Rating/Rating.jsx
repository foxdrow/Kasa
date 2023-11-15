import "./Rating.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Rating = ({ rating }) => {
  const numberOfStars = parseInt(rating);
  const starsComponents = () => {
    const stars = [];
    for (let i = 0; i < numberOfStars; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          size="lg"
          style={{ color: "#FF6060" }}
        />
      );
    }
    for (let i = 0; i < 5 - numberOfStars; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i + numberOfStars}
          icon={faStar}
          size="lg"
          className="empty"
          style={{ color: "#E3E3E3" }}
        />
      );
    }
    return stars;
  };
  return <div className="rating">{starsComponents()}</div>;
};

export default Rating;
