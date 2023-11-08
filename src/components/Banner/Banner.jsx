import "./Banner.scss";
const Banner = ({ description = "", image }) => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${image})` }}>
      <p>{description}</p>
    </div>
  );
};
export default Banner;
