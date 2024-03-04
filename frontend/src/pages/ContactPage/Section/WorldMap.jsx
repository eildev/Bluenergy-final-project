import Container from "../../../components/dynamic/Container/Container";
import map from "../../../assets/img/map/world-map.svg";
import { motion } from "framer-motion";
import { fadeIn } from "../../../lib/variants";

const WorldMap = () => {
  return (
    <Container bgColor="bg-white">
      <motion.div
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="w-full h-full"
      >
        <img src={map} className="object-cover h-full" alt="" />
      </motion.div>
    </Container>
  );
};

export default WorldMap;
