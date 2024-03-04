import Container from "../../../components/dynamic/Container/Container";
import Header from "../../../element/Header";
import ImageBoxWithPlayButton from "../../../element/ImageBoxWithPlayButton";
import Statistic from "../../../element/Statistic";
import { motion } from "framer-motion";
import { fadeIn } from "../../../lib/variants";
import Image from "../../../element/Image";
import benefitsImage from "../../../assets/img/services/Benefits.jpg";

const AboutOurBestService = () => {
  return (
    <Container bgColor="bg-secondary my-10">
      <div className="flex lg:justify-between flex-col lg:flex-row gap-5 items-center  lg:gap-10">
        <div className="lg:w-[50%] w-full">
          <Header className="pb-10 mb-5 border-b text-white border-white">
            About Our Best Services
          </Header>

          <motion.p
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="leading-8 pb-10 mb-5 border-b text-white border-white"
          >
            Embrace the future with our cutting-edge renewable energy solutions.
            We are committed to harnessing the power of nature through solar,
            wind, and other sustainable sources. Our team designs and implements
            renewable energy systems that not only reduce environmental impact
            but also contribute to a cleaner and greener planet.
          </motion.p>
          <Statistic />
        </div>
        <div className="lg:w-[50%] w-full">
          <ImageBoxWithPlayButton className="rounded-md h-[500px] w-full">
            <Image src={benefitsImage}></Image>
          </ImageBoxWithPlayButton>
        </div>
      </div>
    </Container>
  );
};

export default AboutOurBestService;
