import { motion } from "framer-motion";
import { fadeIn } from "../../../lib/variants";
import ImageBox from "../ImageBox/ImageBox";
import Image from "../../../element/Image";
import path from "../../../lib/path";

const ServicesCard = ({ data }) => {
  const {
    services_details_image,
    services_details_icon,
    services_details_title,
    services_details_description,
    direction,
  } = data;
  return (
    <motion.div
      variants={fadeIn(direction, 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="w-full"
    >
      <div className="w-full">
        <ImageBox>
          <Image
            src={path("services_image", services_details_image)}
            alt="service-image"
          />
        </ImageBox>
      </div>
      <div>
        <div className="flex gap-3 mt-4 ">
          <span className="w-[80px] h-[70px] border-2 border-secondary rounded-sm text-primary text-2xl flex justify-center items-center p-3">
            <img
              src={path("services_image", services_details_icon)}
              className="h-[40px] w-[50px]"
              alt=""
            />
          </span>
          <div>
            <h4 className="text-xl font-karla mb-2">
              {services_details_title}
            </h4>
            <p className=" text-xs max-w-[250px]">
              {services_details_description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesCard;
