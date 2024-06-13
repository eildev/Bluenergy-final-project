import { Link } from "react-router-dom";
import limitText from "../lib/limitText";
import path from "../lib/path";
// import port from "../lib/port";
import { fadeIn } from "../lib/variants";
import Button from "./Button";
import { motion } from "framer-motion";

const Card = ({ data }) => {
  const {
    id,
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
      <Link to={"/services/" + id}>
        <div className="h-[150px] bg-primary w-full rounded-md flex justify-center items-center mb-5">
          <img
            src={path("services_image", services_details_icon)}
            className="h-[80px] object-cover"
            alt=""
          />
        </div>
        <div>
          <h4 className="text-lg font-bold mb-5 text-white">
            {limitText(services_details_title, 50)}
          </h4>
          <p className="mb-5 text-white">
            {limitText(services_details_description, 150)}
          </p>
          <Button title="Learn More" className="bg-primary text-white" />
        </div>
      </Link>
    </motion.div>
  );
};

export default Card;
