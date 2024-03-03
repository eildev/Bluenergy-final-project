import Hero from "../../components/dynamic/Hero/Hero";
import Slider from "../../components/dynamic/Slider/Slider";
import Activities from "./Section/Activities";
import WhyChooseUs from "./Section/WhyChooseUs";
// import MessageFormChairman from "./Section/MessageFormChairman";
import OurServices from "./Section/OurServices";
// import OurSisterConcern from "./Section/OurSisterConcern";
import ProfessionalTeam from "./Section/ProfessionalTeam";
import Gallery from "./Section/Gallery";
import GetAQuote from "./Section/GetAQuote";
import LatestNews from "./Section/LatestNews";
import Clients from "./Section/Clients";
import Container from "../../components/dynamic/Container/Container";
import { useEffect, useState } from "react";
import port from "../../lib/port";
// import path from "../../lib/path";
// import { useEffect, useState } from "react";

const HomePage = () => {
  const [aboutData, setAboutData] = useState([]);
  const [gallery, setGallery] = useState([]);
  // console.log(aboutData);
  useEffect(() => {
    let url = port("about/data");
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => setAboutData(responseData.allData));
  }, []);
  useEffect(() => {
    let url = port("gallery");
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => setGallery(responseData.allData));
  }, []);
  return (
    <>
      <Slider />
      <Container>
        {aboutData.map((data) => (
          <Hero key={data.id} data={data} />
        ))}

        {/* <Hero
          title="About 
          Eclipse Engineering Limited"
          description="Eclipse Engineering Ltd. (EEL) is an independent Trading, engineering & consulting company operating across Bangladesh since 2017 with headquarters in Dhaka. We have maintained our independence by ensuring we have no financial ties with suppliers or installers."
          description2="Our services are tailor made to meet the requirements for every engineering, construction & built in project we take on. Our focus on quality, reliability and innovation has helped us to ensure that our client base has grown steadily since we started and is the reason why our existing customers have continued to use our knowledge and services since the very first time they tried us."
        /> */}
      </Container>
      <div className="block sm:hidden lg:block">
        <Activities />
      </div>
      <WhyChooseUs />
      <div className="hidden lg:hidden sm:block">
        <Activities />
      </div>
      {/* <MessageFormChairman /> */}
      <OurServices />
      {/* <OurSisterConcern /> */}
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
