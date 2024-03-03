import cn from "../lib/cn";
import { motion } from "framer-motion";
import { fadeIn } from "../lib/variants";

const Button = ({ title, className, direction, time, href }) => {
  return (
    <motion.a
      href={href}
      variants={fadeIn(direction, time)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className={cn(
        "px-7 py-2 font-bold text-sm uppercase font-karla rounded",
        className
      )}
    >
      {title}
    </motion.a>
  );
};

export default Button;
