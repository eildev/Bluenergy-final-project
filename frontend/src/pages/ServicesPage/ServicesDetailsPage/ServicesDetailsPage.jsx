import Banner from "../../../components/dynamic/Banner/Banner";
import image from "../../../assets/img/banner/services-banner.jpg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import port from "../../../lib/port";
import Container from "../../../components/dynamic/Container/Container";
import Service from "./Service";

const ServicesDetailsPage = () => {
  const { id } = useParams();
  //   console.log(id);
  const [service, setService] = useState({});
  useEffect(() => {
    const url = port(`services-details/${id}`);
    fetch(url)
      .then((response) => response.json())
      .then((data) => setService(data.allData));
  }, [id]);

  //   console.log(service);

  return (
    <>
      <Banner
        bannerImage={image}
        bannerText="At Bluenergy, we offer supply/trading, engineering consulting, and pioneering solutions in renewable energy and energy efficiency for a sustainable future."
        bannerTitle="Services Details"
      />
      <Container>
        <Service service={service} />
      </Container>
    </>
  );
};

export default ServicesDetailsPage;
