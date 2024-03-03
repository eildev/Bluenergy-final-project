import Button from "../../../element/Button";
import { motion } from "framer-motion";
import { fadeIn } from "../../../lib/variants";
import path from "../../../lib/path";

const SisterConcernCard = ({ data }) => {
  const { logo, title, description, direction, link } = data;
  return (
    <motion.div
      variants={fadeIn(direction, 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="bg-white border-2 border-primary rounded-sm"
    >
      <div className="mb-2 grid">
        <div className="flex justify-center items-center py-5">
          <img src={path("partner", logo)} className="h-[80px]" alt="" />
        </div>
        <div className="grid gap-1 my-4">
          <div className="relative w-1/2 h-[2px] bg-primary mx-auto"></div>
          <div className="relative w-2/3 h-[2px] bg-primary mx-auto"></div>
          <div className="relative w-1/2 h-[2px] bg-primary mx-auto"></div>
        </div>
      </div>
      <div className="px-5 text-center pb-7">
        <h4 className="text-primary md:text-2xl text-lg font-bold mb-3">
          {title}
        </h4>
        <p className="leading-5 md:leading-6 md:mb-7 mb-4 text-xs md:text-sm">
          {description}
        </p>
        <Button
          href={link}
          title="Visit here"
          className="bg-primary text-body"
        />
      </div>
    </motion.div>
  );
};

export default SisterConcernCard;
