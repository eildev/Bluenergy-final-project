import image1 from "../../../assets/img/banner/home-banner-4.jpg";
// import image2 from "../../../assets/img/banner/home-banner-2.jpg";
import image3 from "../../../assets/img/banner/home-banner-3.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/effect-creative";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
// import Button from "../../../element/Button";

// import { EffectCreative } from 'swiper/modules';

const Slider = () => {
  return (
    <section className="lg:max-h-[500px] min-h-screen overflow-hidden relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper lg:h-full min-h-screen overflow-hidden relative"
        style={{
          "--swiper-navigation-color": "#82e17c",
          // "--swiper-navigation-top-offset": "30%",
        }}
      >
        <SwiperSlide>
          <div className="relative md:min-h-full min-h-screen w-full">
            <img
              src={image3}
              className="lg:min-h-full min-h-screen w-full object-cover"
              alt="home-banner image"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-[#000] opacity-50 z-10"></div>
            <div className="absolute lg:top-1/3 top-1/2 left-1/3 -translate-x-1/3 lg:-translate-y-1/3 -translate-y-1/2 z-10 text-white">
              <h2 className="text-2xl mb-2">POWERING PROGRESS</h2>
              <h5 className="lg:text-[60px] md:text-3xl font-inter font-bold text-2xl text-primary lg:mb-5 mb-2">
                Energy & Resource
              </h5>
              <p className="text-white lg:max-w-[500px] w-full mb-2">
                Provide efficient utilization of Energy and Resources Management
                Services to rapidly growing economy of Bangladesh.{" "}
              </p>
              <button className="px-7 py-2 font-bold text-sm uppercase font-karla rounded bg-primary text-white">
                Read More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative md:min-h-full min-h-screen w-full">
            <img
              src={image1}
              className="lg:min-h-full min-h-screen w-full object-cover"
              alt="home-banner image"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-[#000] opacity-50 z-10"></div>
            <div className="absolute lg:top-1/3 top-1/2 left-1/3  -translate-x-1/3 lg:-translate-y-1/3 -translate-y-1/2 z-10 text-white">
              <h2 className="text-2xl mb-2">Empowering Progress</h2>
              <h5 className="lg:text-[60px] md:text-3xl font-inter font-bold text-2xl text-primary lg:mb-5 mb-2">
                Innovation in Power
              </h5>
              <p className="text-white lg:max-w-[500px] w-full mb-2">
                Redefining Power solutions with our Innovative Energy and Supply
                services, embodying reliability, and sustainability
              </p>
              <button className="px-7 py-2 font-bold text-sm uppercase font-karla rounded bg-primary text-white">
                Read More
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Slider;
