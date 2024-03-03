import Banner from "../../components/dynamic/Banner/Banner";
import image from "../../assets/img/banner/bannerimg.png";
import BenefitsWithOurService from "./Section/BenefitsWithOurService";
import AboutOurBestService from "./Section/AboutOurBestService";
import OurAllServices from "./Section/OurAllServices";
import FrequentlyAskedQuestions from "./Section/FrequentlyAskedQuestions";
const ServicesPage = () => {
  return (
    <>
      <Banner
        bannerImage={image}
        bannerText=" Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Provident, nisi.  Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Provident, nisi."
        bannerTitle="Our Services"
      />
      <BenefitsWithOurService />
      <AboutOurBestService />
      <OurAllServices />
      <div className="hidden sm:block">
        <FrequentlyAskedQuestions />
      </div>
    </>
  );
};

export default ServicesPage;
