import image1 from "../../../assets/img/banner/home-banner-4.jpg";
// import image2 from "../../../assets/img/banner/home-banner-2.jpg";
import image3 from "../../../assets/img/banner/home-banner-3.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/effect-creative";

// import required modules
import { Autoplay, EffectCreative, Navigation } from "swiper/modules";
// import Button from "../../../element/Button";

// import { EffectCreative } from 'swiper/modules';

const Slider = () => {
  return (
    <section className="max-h-[520px] overflow-hidden">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            origin: "left center",
            translate: ["-5%", 0, -200],
            rotate: [0, 100, 0],
          },
          next: {
            origin: "right center",
            translate: ["5%", 0, -200],
            rotate: [0, -100, 0],
          },
        }}
        navigation={true}
        modules={[Autoplay, Navigation, EffectCreative]}
        className="mySwiper max-h-full overflow-hidden"
      >
        <SwiperSlide>
          <img
            src={image3}
            className="min-h-full w-full object-cover"
            alt="home-banner image"
          />
          <div className="absolute top-1/3 left-1/3 -translate-x-1/3 -translate-y-1/2 z-10">
            <h2 className="text-white text-2xl mb-2">POWERING PROGRESS</h2>
            <h5 className="  lg:text-[60px] md:text-3xl font-inter font-bold text-2xl text-primary mb-5">
              Elevating Life
            </h5>
            <p className="text-white max-w-[500px] mb-2">
              To offer pre-eminent Energy and Resources Management Services to
              rapidly growing economy of Bangladesh.{" "}
            </p>
            <button className="px-7 py-2 font-bold text-sm uppercase font-karla rounded bg-primary text-white">
              Read More
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={image1}
            className="min-h-full w-full object-contain"
            alt="home-banner image"
          />
          <div className="absolute top-1/3 left-1/3 -translate-x-1/3 -translate-y-1/2 z-10">
            <h2 className="text-white text-2xl mb-2">Empowering Progress</h2>
            <h5 className="  lg:text-[60px] md:text-3xl font-inter font-bold text-2xl text-primary mb-5">
              Ensuring Power
            </h5>
            <p className="text-white max-w-[500px] mb-2">
              we redefine power solutions with our Generator Assembly and Supply
              services, embodying reliability, innovation, and sustainability
            </p>
            <button className="px-7 py-2 font-bold text-sm uppercase font-karla rounded bg-primary text-white">
              Read More
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Slider;
