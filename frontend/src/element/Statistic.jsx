import cn from "../lib/cn";
import { motion } from "framer-motion";
import { fadeIn } from "../lib/variants";

const Statistic = ({ className }) => {
  return (
    <div className={cn("flex justify-between items-center mt-10", className)}>
      <motion.div
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
      >
        <span className="text-primary font-bold text-3xl">10k++</span>
        <p>Subscriber</p>
      </motion.div>
      <motion.div
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
      >
        <span className="text-primary font-bold text-3xl">50++</span>
        <p>Client</p>
      </motion.div>
      <motion.div
        variants={fadeIn("down", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
      >
        <span className="text-primary font-bold text-3xl">98%</span>
        <p>Success</p>
      </motion.div>
    </div>
  );
};

export default Statistic;
