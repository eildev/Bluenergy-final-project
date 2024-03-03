import path from "../lib/path";
import { fadeIn } from "../lib/variants";
import Button from "./Button";
import Header from "./Header";
import NewsDate from "./NewsDate";
import { motion } from "framer-motion";

const AllNewsCard = ({ data }) => {
  const { title, direction, image } = data;
  return (
    <motion.div
      variants={fadeIn(direction, 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="rounded bg-white"
    >
      <div className="h-[200px] bg-gray rounded relative ">
        <img
          className="object-cover w-full h-full"
          src={path("news", image)}
          alt=""
        />
      </div>
      <div className="p-5">
        <NewsDate />
        <Header className="text-lg my-4">{title}</Header>
        <Button
          title="Read more"
          className="bg-primary text-white font-medium"
        />
      </div>
    </motion.div>
  );
};

export default AllNewsCard;
