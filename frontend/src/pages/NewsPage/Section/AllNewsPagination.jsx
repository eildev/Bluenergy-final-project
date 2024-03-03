import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Container from "../../../components/dynamic/Container/Container";
import { motion } from "framer-motion";
import { fadeIn } from "../../../lib/variants";

const AllNewsPagination = () => {
  return (
    <Container>
      <motion.div
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="text-center text-xl flex sm:justify-normal items-center sm:w-[300px] w-full mx-auto gap-5 justify-between"
      >
        <span className="flex items-center gap-2 cursor-pointer">
          <FaAngleLeft />
          Prev
        </span>
        <span className=" cursor-pointer">1</span>
        <span className="text-primary cursor-pointer">2</span>
        <span className=" cursor-pointer">3</span>
        <span className="flex items-center gap-2 text-primary cursor-pointer">
          Next
          <FaAngleRight />
        </span>
      </motion.div>
    </Container>
  );
};

export default AllNewsPagination;
