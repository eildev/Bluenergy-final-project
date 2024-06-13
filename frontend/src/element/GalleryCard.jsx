import { motion } from "framer-motion";
import { fadeIn } from "../lib/variants";
import ImageBox from "../components/dynamic/ImageBox/ImageBox";
import Image from "./Image";
import path from "../lib/path";

const GalleryCard = ({ data }) => {
  const { gallery_image, title, direction } = data;
  return (
    <motion.div
      variants={fadeIn(direction, 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="w-full"
    >
      <div className="mb-2">
        <ImageBox className="w-full">
          <Image src={path("gallery", gallery_image)} alt="gallery Image" />
        </ImageBox>
      </div>
      <div>
        <h2 className="font-titillium font-bold text-lg">{title}</h2>
      </div>
    </motion.div>
  );
};

export default GalleryCard;
