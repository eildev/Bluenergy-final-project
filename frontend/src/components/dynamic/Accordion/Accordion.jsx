import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../../lib/variants";

const Accordion = ({ title, description }) => {
  const [accordionActive, setAccordionActive] = useState(false);
  return (
    <motion.div
      variants={fadeIn("down", 0.7)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="w-full border-b border-primary py-5"
    >
      <button
        onClick={() => setAccordionActive(!accordionActive)}
        className="flex justify-between items-center w-full mb-5"
      >
        <span
          className={`text-xl font-bold  ${
            accordionActive ? "text-primary" : ""
          }`}
        >
          {title}
        </span>
        {accordionActive ? (
          <span
            className={`text-xl font-bold  ${
              accordionActive ? "text-primary" : ""
            }`}
          >
            <FaChevronUp />
          </span>
        ) : (
          <span
            className={`text-xl font-bold  ${
              accordionActive ? "text-primary" : ""
            }`}
          >
            <FaChevronDown />
          </span>
        )}
      </button>
      <motion.div
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className={`transition-all duration-300 ease-in-out
      ${accordionActive ? "block mb-5" : "hidden"}
      `}
      >
        <div className="transition-all duration-300 ease-in-out">
          {description}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Accordion;
