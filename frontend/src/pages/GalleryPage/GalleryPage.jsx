import Banner from "../../components/dynamic/Banner/Banner";
import image from "../../assets/img/banner/bannerimg.png";
import RecentCompletedWork from "./Section/RecentCompletedWork";
import GallerySection from "./Section/GallerySection";
import { useEffect, useState } from "react";
import port from "../../lib/port";

const GalleryPage = () => {
  const [gallery, setGallery] = useState([]);
  // console.log(gallery);
  useEffect(() => {
    let url = port("gallery");
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => setGallery(responseData.allData));
  }, []);
  return (
    <>
      <Banner
        bannerImage={image}
        bannerText=" Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Provident, nisi.  Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Provident, nisi."
        bannerTitle="Gallery"
      />
      <GallerySection gallery={gallery} />
      <RecentCompletedWork gallery={gallery} />
    </>
  );
};

export default GalleryPage;
