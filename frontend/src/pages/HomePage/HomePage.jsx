import Hero from "../../components/dynamic/Hero/Hero";
import Slider from "../../components/dynamic/Slider/Slider";
import Activities from "./Section/Activities";
import WhyChooseUs from "./Section/WhyChooseUs";
import OurServices from "./Section/OurServices";
import ProfessionalTeam from "./Section/ProfessionalTeam";
import Gallery from "./Section/Gallery";
import GetAQuote from "./Section/GetAQuote";
import LatestNews from "./Section/LatestNews";
import Clients from "./Section/Clients";
import Container from "../../components/dynamic/Container/Container";
import { useEffect, useState } from "react";
import port from "../../lib/port";

const HomePage = () => {
  const [aboutData, setAboutData] = useState([]);
  const [gallery, setGallery] = useState([]);
  useEffect(() => {
    let url = port("about/data");
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => setAboutData(responseData.allData.slice(0, 1)));
  }, []);
  useEffect(() => {
    let url = port("gallery");
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => setGallery(responseData.allData.slice(0, 6)));
  }, []);
  return (
    <>
      <Slider />
      <Container>
        {aboutData.map((data) => (
          <Hero key={data.id} data={data} />
        ))}
      </Container>
      <div className="block sm:hidden lg:block">
        <Activities />
      </div>
      <WhyChooseUs />
      <div className="hidden lg:hidden sm:block">
        <Activities />
      </div>
      <OurServices />
      <div className="hidden sm:block">
        <ProfessionalTeam />
      </div>
      <Gallery gallery={gallery} />
      <div className="hidden lg:hidden sm:block">
        <LatestNews />
      </div>
      <GetAQuote />
      <div className="block sm:hidden lg:block">
        <LatestNews />
      </div>
      <Clients />
    </>
  );
};

export default HomePage;
