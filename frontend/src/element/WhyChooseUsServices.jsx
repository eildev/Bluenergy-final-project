import { motion } from "framer-motion";
import { fadeIn } from "../lib/variants";
import path from "../lib/path";
import limitText from "../lib/limitText";
const WhyChooseUsServices = ({ whyChooseUs }) => {
  const { icon, title, description } = whyChooseUs;

  return (
    <div className="flex gap-3">
      <motion.span
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="w-[120px] h-[80px] border-2 border-secondary rounded-sm text-primary text-2xl flex justify-center items-center px-3"
      >
        <img
          src={path("why-choose-us", icon)}
          className="h-full w-full object-contain h-"
          alt=""
        />
      </motion.span>
      <div>
        <motion.h4
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="text-xl font-karla mb-2 capitalize"
        >
          {title}
        </motion.h4>
        <motion.p
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className=" text-xs"
        >
          {limitText(description, 150)}
        </motion.p>
      </div>
    </div>
  );
};

export default WhyChooseUsServices;
