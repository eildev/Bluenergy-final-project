import Banner from "../../components/dynamic/Banner/Banner";
import image from "../../assets/img/banner/gallery-banner.jpg";
import RecentCompletedWork from "./Section/RecentCompletedWork";
import GallerySection from "./Section/GallerySection";
import { useEffect, useState } from "react";
import port from "../../lib/port";

const GalleryPage = () => {
  const [gallery, setGallery] = useState([]);
  useEffect(() => {
    let url = port("gallery");
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => setGallery(responseData.allData.slice(0, 9)));
  }, []);
  return (
    <>
      <Banner
        bannerImage={image}
        bannerText="Our research team developed a revolutionary self-healing concrete formula that automatically repairs minor cracks, extending infrastructure lifespan and reducing maintenance costs."
        bannerTitle="Gallery"
      />
      <GallerySection gallery={gallery} />
      <RecentCompletedWork gallery={gallery} />
    </>
  );
};

export default GalleryPage;
