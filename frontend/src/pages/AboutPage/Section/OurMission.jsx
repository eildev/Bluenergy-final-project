import { FaCheck } from "react-icons/fa6";
import Container from "../../../components/dynamic/Container/Container";
import SmallHero from "../../../components/dynamic/SmallHero/SmallHero";
import Statistic from "../../../element/Statistic";
import { motion } from "framer-motion";
import { fadeIn } from "../../../lib/variants";

const OurMission = () => {
  return (
    <Container>
      <div className="flex lg:justify-between lg:flex-row flex-col items-center  lg:gap-40 gap-10">
        <div className="lg:w-1/2 w-full">
          <motion.h2
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="text-primary font-bold text-xl mb-5 flex items-center gap-5"
          >
            <span className="bg-primary text-white p-3 text-xl rounded-full ">
              <FaCheck />
            </span>
            Qualified IT Experts
          </motion.h2>
          <Statistic />
        </div>
        <SmallHero
          title="Our Mission"
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Provident, nisi."
        />
      </div>
    </Container>
  );
};

export default OurMission;
