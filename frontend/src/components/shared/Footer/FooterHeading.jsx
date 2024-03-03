import { motion } from "framer-motion";
import { fadeIn } from "../../../lib/variants";
const FooterHeading = ({ heading }) => {
  return (
    <motion.h2
      variants={fadeIn("down", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="text-2xl font-bold text-primary"
    >
      {heading}
    </motion.h2>
  );
};

export default FooterHeading;
