import { fadeIn } from "../../../lib/variants";
import ImageBox from "../ImageBox/ImageBox";
import { motion } from "framer-motion";
import image2 from "../../../assets/img/about/about-2.jpg";
import image3 from "../../../assets/img/about/about-3.jpg";
import path from "../../../lib/path";

const Hero = ({ data }) => {
  const { title, description, image } = data;
  return (
    <div className="grid lg:grid-cols-2 items-center flex-col md:flex-row gap-10">
      <div>
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="lg:text-5xl md:text-3xl text-2xl font-bold text-secondary capitalize font font-karla drop-shadow mb-7"
        >
          {title}
        </motion.h2>
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="text-[#2D2C2C] leading-8"
        >
          {description}
        </motion.p>
        {/* <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="text-[#2D2C2C] leading-8"
        >
          {description2}
        </motion.p> */}
      </div>
      <div className="grid md:grid-cols-2 grid-col-1 gap-5">
        <ImageBox
          className="h-[380px] w-full col-span-2 rounded sm:hidden block"
          direction="down"
        >
          <img
            className="h-full w-full object-cover"
            src={path("about", image)}
            alt="Home page picture"
          />
        </ImageBox>
        <ImageBox className=" h-[180px] w-full  rounded" direction="down">
          <img
            className="h-full w-full object-cover"
            src={path("about", image)}
            alt="Home page picture"
          />
        </ImageBox>
        <ImageBox
          className="h-[380px] w-full row-span-2 rounded hidden sm:block"
          direction="down"
        >
          <img
            className="h-full w-full object-cover"
            src={image3}
            alt="Home page picture"
          />
        </ImageBox>
        <ImageBox className=" h-[180px] w-full rounded" direction="down">
          <img
            className="h-full w-full object-cover"
            src={image2}
            alt="Home page picture"
          />
        </ImageBox>
      </div>
    </div>
  );
};

export default Hero;
