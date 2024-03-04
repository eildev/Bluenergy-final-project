import path from "../lib/path";
// import port from "../lib/port";
import { fadeIn } from "../lib/variants";
import Button from "./Button";
import { motion } from "framer-motion";

const Card = ({ data }) => {
  const {
    services_details_icon,
    services_details_title,
    services_details_description,
    direction,
  } = data;
  return (
    <motion.div
      variants={fadeIn(direction, 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="border-2 border-primary p-7 rounded-md"
    >
      <div className="h-[150px] bg-primary w-full rounded-md flex justify-center items-center mb-5">
        <span className="text-white">
          <img
            src={path("services_image", services_details_icon)}
            className="h-[80px]"
            alt=""
          />
        </span>
      </div>
      <div>
        <h4 className="text-lg font-bold mb-5 text-white">
          {services_details_title}
        </h4>
        <p className="mb-5 text-white">{services_details_description}</p>
        <Button title="Learn More" className="bg-primary text-white" />
      </div>
    </motion.div>
  );
};

export default Card;
