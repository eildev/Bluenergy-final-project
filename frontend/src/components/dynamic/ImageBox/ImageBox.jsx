import cn from "../../../lib/cn";
import { motion } from "framer-motion";
import { fadeIn } from "../../../lib/variants";

const ImageBox = ({ className, children, direction }) => {
  return (
    <motion.div
      variants={fadeIn(direction, 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className={cn(
        "h-[200px] w-[300px] rounded bg-gray overflow-hidden",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default ImageBox;
