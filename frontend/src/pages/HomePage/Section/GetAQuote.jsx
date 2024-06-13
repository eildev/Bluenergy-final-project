import Container from "../../../components/dynamic/Container/Container";
import OurAbilities from "../../../components/dynamic/OurAbilities/OurAbilities";
import Quote from "../../../components/dynamic/Quote/Quote";
import { motion } from "framer-motion";
import { fadeIn } from "../../../lib/variants";

const GetAQuote = () => {
  return (
    <Container bgColor="bg-white">
      <div className="grid md:gap-20 md:grid-cols-2 gap-5">
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Quote />
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <OurAbilities />
        </motion.div>
      </div>
    </Container>
  );
};

export default GetAQuote;
