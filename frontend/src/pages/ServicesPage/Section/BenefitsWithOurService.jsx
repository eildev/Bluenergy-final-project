import Accordion from "../../../components/dynamic/Accordion/Accordion";
import Container from "../../../components/dynamic/Container/Container";
import ImageBoxWithPlayButton from "../../../element/ImageBoxWithPlayButton";
import { motion } from "framer-motion";
import { fadeIn } from "../../../lib/variants";
import Image from "../../../element/Image";
import benefitsImage from "../../../assets/img/services/benefits-2.jpg";

const BenefitsWithOurService = () => {
  return (
    <Container>
      <div className="flex lg:justify-between lg:flex-row flex-col-reverse items-center gap-10">
        <div className="lg:w-[40%] w-full">
          <ImageBoxWithPlayButton className="border-[20px] rounded-md h-[500px] w-full border-[#fff]">
            <Image src={benefitsImage}></Image>
          </ImageBoxWithPlayButton>
        </div>
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="lg:w-[60%] w-full lg:px-10"
        >
          <h2 className="font-bold text-primary text-3xl lg:mb-20 mb-10">
            Benefits With Our Service
          </h2>
          <Accordion
            title="Our services details "
            description="At Bluenergy, our services are tailored to meet the diverse needs of our clients, ensuring excellence in every aspect of supply, engineering, and sustainable energy solutions."
          />
          <Accordion
            title="Service catalog"
            description="Discover excellence in supply, engineering, and sustainable energy solutions with Bluenergy."
          />
          <Accordion
            title="Service catalog"
            description="Discover excellence in supply, engineering, and sustainable energy solutions with Bluenergy."
          />
        </motion.div>
      </div>
    </Container>
  );
};

export default BenefitsWithOurService;
