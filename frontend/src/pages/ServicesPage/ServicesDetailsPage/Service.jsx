import ImageBox from "../../../components/dynamic/ImageBox/ImageBox";
import Image from "../../../element/Image";
import SisterCompanyDetails from "../../../element/SisterCompanyDetails";
import path from "../../../lib/path";
import { motion } from "framer-motion";
import { fadeIn } from "../../../lib/variants";

const Service = ({ service }) => {
  if (!service) {
    return null; // or any other fallback behavior you prefer
  }
  const {
    services_details_title,
    services_details_description,
    services_details_image,
  } = service;
  return (
    <div className="grid md:grid-cols-2 gap-10">
      <div className="lg:pr-20">
        <ImageBox
          className="lg:h-[400px] md:h-[300px] w-full rounded-lg"
          direction="right"
        >
          <Image
            src={path("services_image", services_details_image)}
            className="h-full w-full object-cover"
          />
        </ImageBox>
      </div>
      <motion.div
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className=""
      >
        <SisterCompanyDetails
          title={services_details_title}
          companyDetails={services_details_description}
        />
      </motion.div>
    </div>
  );
};

export default Service;
