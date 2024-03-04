// import { MdOutlineTask } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeIn } from "../lib/variants";
import path from "../lib/path";

const ActivitiesTask = ({ tasks }) => {
  const { title, icon, experience } = tasks;
  return (
    <div className="relative place-self-center w-[250px] pt-8 pb-5 bg-body text-center border-secondary border rounded">
      <div className="absolute -top-[30px] left-1/2 -translate-x-1/2 h-14 bg-body w-14 rounded-full grid border-secondary border shadow-sm">
        <motion.span
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="place-self-center text-primary  text-2xl"
        >
          <img src={path("overview", icon ?? "")} alt="" />
        </motion.span>
      </div>
      <motion.h3
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="text-3xl text-secondary"
      >
        {experience ?? ""}+
      </motion.h3>
      <motion.p
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
      >
        {title ?? ""}
      </motion.p>
    </div>
  );
};

export default ActivitiesTask;
