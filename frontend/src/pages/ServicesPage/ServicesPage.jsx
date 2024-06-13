import Banner from "../../components/dynamic/Banner/Banner";
import image from "../../assets/img/banner/services-banner.jpg";
import BenefitsWithOurService from "./Section/BenefitsWithOurService";
import AboutOurBestService from "./Section/AboutOurBestService";
import OurAllServices from "./Section/OurAllServices";
// import FrequentlyAskedQuestions from "./Section/FrequentlyAskedQuestions";
const ServicesPage = () => {
  return (
    <>
      <Banner
        bannerImage={image}
        bannerText="At Bluenergy, we offer supply/trading, engineering consulting, and pioneering solutions in renewable energy and energy efficiency for a sustainable future."
        bannerTitle="Our Services"
      />
      <BenefitsWithOurService />
      <AboutOurBestService />
      <OurAllServices />
      {/* <div className="hidden sm:block">
        <FrequentlyAskedQuestions />
      </div> */}
    </>
  );
};

export default ServicesPage;
