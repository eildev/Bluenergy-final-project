import { motion } from "framer-motion";
import { fadeIn } from "../lib/variants";
import cn from "../lib/cn";

const Paragraph = ({ className, children }) => {
  return (
    <motion.p
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className={cn("mb-5", className)}
    >
      {children}
    </motion.p>
  );
};

export default Paragraph;
