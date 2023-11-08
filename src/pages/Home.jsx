import Banner from "../components/Banner/Banner";
import MainContainer from "../layouts/MainContainer";
import HomeBanner from "../assets/images/home_back.png";
import Housing from "../components/Housing/Housing";
import housings from "../assets/data/housings.json";

const Home = () => {
  return (
    <MainContainer className="home">
      <Banner image={HomeBanner} description="Chez vous, partout et ailleurs" />
      <section className="home-housings">
        {housings.map((housing) => (
          <Housing housing={housing} />
        ))}
      </section>
    </MainContainer>
  );
};
export default Home;
