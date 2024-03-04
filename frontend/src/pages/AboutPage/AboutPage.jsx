import Banner from "../../components/dynamic/Banner/Banner";

import bannerImage from "../../assets/img/banner/about-banner.jpg";
import Container from "../../components/dynamic/Container/Container";
import Hero from "../../components/dynamic/Hero/Hero";

import OurVision from "./Section/OurVision";
import OurMission from "./Section/OurMission";
import CompanyHistory from "./Section/CompanyHistory";
import Achievement from "./Section/Achievement";
import { useEffect, useState } from "react";
import port from "../../lib/port";

const AboutPage = () => {
  const [aboutData, setAboutData] = useState([]);
  // console.log(aboutData);
  useEffect(() => {
    let url = port("about/data");
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => setAboutData(responseData.allData.slice(0, 1)));
  }, []);
  return (
    <div>
      <Banner
        bannerTitle="About Us"
        bannerImage={bannerImage}
        bannerText="Assure customers of the quality and reliability of your parts and service"
      />
      <Container>
        {aboutData.map((data) => (
          <Hero key={data.id} data={data} />
        ))}
        {/* <Hero
          title="About our company"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt quam expedita nulla totam, sit odit magni sequi hic quasi, vero rerum dicta esse. Neque, dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nobis, architecto cupiditate delectus eum sunt, tempora voluptas illo molestias perferendis accusantium? !"
          description2="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt quam expedita nulla totam, sit odit magni sequi hic quasi, vero rerum dicta esse. Neque, dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nobis, architecto cupiditate delectus eum sunt, tempora voluptas illo molestias perferendis accusantium? !"
        /> */}
      </Container>
      <OurVision />
      <OurMission />
      <CompanyHistory />
      <Achievement />
    </div>
  );
};

export default AboutPage;
