import MainContainer from "../layouts/MainContainer";
import Banner from "../components/Banner/Banner";
import AboutImage from "../assets/images/About_banner.png";
import Collapse from "../components/Collapse/Collapse";
const About = () => {
  return (
    <MainContainer>
      <Banner image={AboutImage} />
      <Collapse title="Title" content={["content",'test1']}/>
    </MainContainer>
  );
};
export default About;
