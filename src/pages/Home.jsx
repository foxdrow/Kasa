import Banner from "../components/Banner";
import MainContainer from "../layouts/MainContainer";
import HomeBanner from "../assets/images/home_back.png";
const Home = () => {
  return (
    <MainContainer>
      <Banner image={HomeBanner} description="Chez vous, partout et ailleurs" />
      <h1>Home</h1>
    </MainContainer>
  );
};
export default Home;
