import Banner from "../components/Banner";
import MainContainer from "../layouts/MainContainer";
import HomeBanner from "../assets/images/home_back.png";
import Housing from "../components/Housing";
import housings from "../assets/data/housings.json";

const Home = () => {
  return (
    <MainContainer>
      <Banner image={HomeBanner} description="Chez vous, partout et ailleurs" />
      <Housing type="card" housing={housings[0]} />
    </MainContainer>
  );
};
export default Home;
