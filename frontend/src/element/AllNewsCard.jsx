import { Link } from "react-router-dom";
import path from "../lib/path";
import { fadeIn } from "../lib/variants";
import Button from "./Button";
import Header from "./Header";
import NewsDate from "./NewsDate";
import { motion } from "framer-motion";

const AllNewsCard = ({ data }) => {
  const { id, title, direction, image } = data;
  return (
    <motion.div
      variants={fadeIn(direction, 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="rounded-md bg-white overflow-hidden"
    >
      <div className="h-[200px] relative ">
        <img
          className="object-cover w-full h-full"
          src={path("news", image)}
          alt=""
        />
      </div>
      <div className="p-5">
        <NewsDate />
        <Header className="text-lg my-4">{title}</Header>
        <Link to={"/news/" + id}>
          <Button
            title="Read more"
            className="bg-primary text-white font-medium"
          />
        </Link>
      </div>
    </motion.div>
  );
};

export default AllNewsCard;
