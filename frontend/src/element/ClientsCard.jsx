import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
// import image1 from "../assets/img/user/user2.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../lib/variants";
import path from "../lib/path";
import limitText from "../lib/limitText";

const ClientsCard = ({ data }) => {
  const { name, image, designation, message } = data;
  return (
    <motion.div
      variants={fadeIn("down", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="lg:ml-24 sm:ml-14 ml-14"
    >
      <div className="bg-secondary lg:w-[350px] sm:w-[250px] w-[250px] rounded-md relative">
        <div className="absolute top-1/2 lg:-left-[50px] -left-[35px] -translate-y-1/2 lg:w-[100px] lg:h-[100px] w-[70px] h-[70px] rounded-md overflow-hidden">
          <img
            src={path("testimonial", image)}
            // src={image1}
            className="h-full w-full object-cover"
            alt=""
          />
        </div>

        <div className="py-5 pr-5 pl-16">
          <p className="text-white text-xs leading-4 relative text-justify">
            <span className="text-white absolute top-0 -left-4">
              <FaQuoteLeft />
            </span>
            {limitText(message, 350)}
            <p className="text-white text-right">
              <FaQuoteRight />
            </p>
          </p>

          <h3 className="text-primary font-semibold text-xl mt-1">
            {name ?? ""}
            <span className="text-[9px] ml-1 text-white">
              {designation ?? ""}
            </span>
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

export default ClientsCard;
