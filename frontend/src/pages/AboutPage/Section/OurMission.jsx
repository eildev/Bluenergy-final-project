import { FaCheck } from "react-icons/fa6";
import Container from "../../../components/dynamic/Container/Container";
import SmallHero from "../../../components/dynamic/SmallHero/SmallHero";
import Statistic from "../../../element/Statistic";
import { motion } from "framer-motion";
import { fadeIn } from "../../../lib/variants";
import mission from "../../../assets/img/missionVission/vision-2.jpeg";

const OurMission = () => {
  return (
    <Container>
      <div className="grid md:grid-cols-2 lg:gap-20 gap-10">
        <div className="">
          <motion.h2
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="text-secondary font-bold text-xl mb-5 flex items-center gap-5"
          >
            <span className="bg-secondary text-white p-3 text-xl rounded-full ">
              <FaCheck />
            </span>
            Qualified IT Experts
          </motion.h2>
          <Statistic />
        </div>
        <div className="">
          <SmallHero
            title="Our Mission"
            description="At Bluenergy, we aim to lead globally by providing innovative engineering solutions that empower industries with cutting-edge technologies, promoting sustainability for unparalleled client value."
            src={mission}
          />
        </div>
      </div>
    </Container>
  );
};

export default OurMission;
