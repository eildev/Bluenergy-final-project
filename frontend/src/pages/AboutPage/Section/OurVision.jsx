import Container from "../../../components/dynamic/Container/Container";
import SmallHero from "../../../components/dynamic/SmallHero/SmallHero";
import { motion } from "framer-motion";
import { fadeIn } from "../../../lib/variants";

const OurVision = () => {
  return (
    <Container bgColor="bg-secondary">
      <div className="flex lg:justify-between lg:flex-row flex-col  items-center  lg:gap-40 gap-10">
        <div className="lg:w-1/2 w-full">
          <motion.h2
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="text-primary font-bold text-2xl mb-5"
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
            ipsum iusto vitae eius inventore tempora eaque cumque voluptatibus
            dicta dolores.
          </motion.p>
        </div>
        <SmallHero
          title="Our Vision"
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Provident, nisi."
        />
      </div>
    </Container>
  );
};

export default OurVision;
