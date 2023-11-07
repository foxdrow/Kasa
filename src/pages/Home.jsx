import Banner from "../components/Banner";
import MainContainer from "../layouts/MainContainer";
import HomeBanner from "../assets/images/home_back.png";
import LogementCard from "../components/LogementCard";
import logements from "../assets/data/logements.json";

const Home = () => {
  return (
    <MainContainer>
      <Banner image={HomeBanner} description="Chez vous, partout et ailleurs" />
      <LogementCard size="small" logement={logements[0]} />
    </MainContainer>
  );
};
export default Home;
