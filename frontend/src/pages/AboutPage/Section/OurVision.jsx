import Container from "../../../components/dynamic/Container/Container";
import SmallHero from "../../../components/dynamic/SmallHero/SmallHero";
import { motion } from "framer-motion";
import { fadeIn } from "../../../lib/variants";
import vision from "../../../assets/img/missionVission/1_br4pzwXodMpfwvhs-6cJ9A.jpg";

const OurVision = () => {
  return (
    <Container bgColor="bg-primary">
      <div className="grid lg:grid-cols-2 lg:gap-20 gap-10">
        <div className="">
          <motion.h2
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="text-secondary font-bold text-2xl mb-5"
          >
            We Have Been Certified & Trusted By More Than 50+ Clients
          </motion.h2>
          <motion.p
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="text-white"
          >
            Envisioning a world where energy is harnessed responsibly,
            industries thrive sustainably, and innovation knows no bounds,
            Bluenergy aspires to be the catalyst for transformative change.
          </motion.p>
        </div>
        <SmallHero
          title="Our Vision"
          description="Our vision is to redefine the future of engineering, setting new benchmarks in Supply/Trading, Engineering Consulting, Renewable Energy, and Energy Efficiency. "
          className="text-white"
          src={vision}
        />
      </div>
    </Container>
  );
};

export default OurVision;
