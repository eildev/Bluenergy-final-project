import Container from "../../../components/dynamic/Container/Container";
import Header from "../../../element/Header";
import ImageBoxWithPlayButton from "../../../element/ImageBoxWithPlayButton";
import Statistic from "../../../element/Statistic";
import { motion } from "framer-motion";
import { fadeIn } from "../../../lib/variants";

const AboutOurBestService = () => {
  return (
    <Container bgColor="bg-secondary my-10">
      <div className="flex lg:justify-between flex-col lg:flex-row gap-5 items-center  lg:gap-10">
        <div className="lg:w-[50%] w-full">
          <Header className="pb-10 mb-5 border-b border-primary">
            About Our Best Services
          </Header>

          <motion.p
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="leading-8 pb-10 mb-5 border-b border-primary"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ut
            eligendi quaerat laborum aperiam, et esse amet at pariatur doloribus
            quas maiores libero assumenda illum? Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Sed, repudiandae! Ullam, repellat
            ducimus. Optio, eaque?
          </motion.p>
          <Statistic />
        </div>
        <div className="lg:w-[50%] w-full">
          <ImageBoxWithPlayButton className="rounded-md h-[500px] w-full" />
        </div>
      </div>
    </Container>
  );
};

export default AboutOurBestService;
