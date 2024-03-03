import Button from "../../../element/Button";
import { fadeIn } from "../../../lib/variants";
import ImageBox from "../ImageBox/ImageBox";
import { motion } from "framer-motion";

const SmallHero = ({ title, description }) => {
  return (
    <div className="flex justify-between items-center md:gap-10 lg:w-1/2 gap-5 w-full">
      <ImageBox />
      <div>
        <motion.h2
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="text-primary text-xl font-bold mb-5"
        >
          {title}
        </motion.h2>
        <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="mb-5"
        >
          {description}
        </motion.p>
        <Button
          title="Read More"
          className="bg-primary text-white"
          direction="up"
          time="0.5"
        />
      </div>
    </div>
  );
};

export default SmallHero;
