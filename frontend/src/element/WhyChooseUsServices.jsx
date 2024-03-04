import { motion } from "framer-motion";
import { fadeIn } from "../lib/variants";
import path from "../lib/path";
const WhyChooseUsServices = ({ whyChooseUs }) => {
  const { icon, title, description } = whyChooseUs;

  const truncatedDescription =
    description.length > 150 ? `${description.slice(0, 150)}...` : description;
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
          {truncatedDescription}
        </motion.p>
      </div>
    </div>
  );
};

export default WhyChooseUsServices;
