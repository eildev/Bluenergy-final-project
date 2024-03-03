import cn from "../lib/cn";
import { motion } from "framer-motion";
import { fadeIn } from "../lib/variants";

const Header = ({ children, className, direction }) => {
  return (
    <motion.h2
      variants={fadeIn(direction, 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className={cn(
        "text-primary font-bold text-2xl my-3 font-karla",
        className
      )}
    >
      {children}
    </motion.h2>
  );
};

export default Header;
