import Banner from "../../components/dynamic/Banner/Banner";
import bannerImage from "../../assets/img/banner/bannerimg.png";
import NewsLetter from "./Section/NewsLetter";
import AllNews from "./Section/AllNews";
import AllNewsPagination from "./Section/AllNewsPagination";

const NewsPage = () => {
  return (
    <>
      <Banner
        bannerImage={bannerImage}
        bannerText=" Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Provident, nisi.  Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Provident, nisi."
        bannerTitle="Latest News"
      />
      <NewsLetter />
      <AllNews />
      <AllNewsPagination />
    </>
  );
};

export default NewsPage;
