import { useState } from "react";
import "./Carrousel.scss";
import ArrowRight from "./arrow-right.svg";
import ArrowLeft from "./arrow-left.svg";
const Carrousel = ({ housing }) => {
  const { pictures } = housing;
  const [currentPicture, setCurrentPicture] = useState(0);
  const nextPicture = () => {
    if (currentPicture === pictures.length - 1) {
      setCurrentPicture(0);
    } else {
      setCurrentPicture(currentPicture + 1);
    }
  };
  const previousPicture = () => {
    if (currentPicture === 0) {
      setCurrentPicture(pictures.length - 1);
    } else {
      setCurrentPicture(currentPicture - 1);
    }
  };
  return (
    <div
      className="carrousel"
      style={{ backgroundImage: `url(${pictures[currentPicture]})` }}
    >
      <div className="carrousel__arrow-container">
        <img
          className="carrousel__arrow carrousel__arrow--left"
          src={ArrowLeft}
          alt="arrow left"
          onClick={previousPicture}
        />
        <img
          className="carrousel__arrow carrousel__arrow--right"
          src={ArrowRight}
          alt="arrow right"
          onClick={nextPicture}
        />
      </div>
      <div className="carrousel__counter">
        {currentPicture + 1} / {pictures.length}
      </div>
    </div>
  );
};
export default Carrousel;
