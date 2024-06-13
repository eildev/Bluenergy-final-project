import { FaStar } from "react-icons/fa6";
import Container from "../../../components/dynamic/Container/Container";
import ImageBoxWithPlayButton from "../../../element/ImageBoxWithPlayButton";
import icon from "../../../assets/icons/main/award.svg";
import { motion } from "framer-motion";
import { fadeIn } from "../../../lib/variants";
import Image from "../../../element/Image";
import achivement from "../../../assets/img/achivement/achivement2.webp";

const Achievement = () => {
  return (
    <Container>
      <div className="flex lg:justify-between lg:flex-row flex-col items-start lg:gap-20 gap-10">
        <div className="lg:w-[45%] lg:px-10 w-full">
          <ImageBoxWithPlayButton className="h-[500px] w-full relative rounded-md">
            <Image src={achivement}></Image>
          </ImageBoxWithPlayButton>
        </div>

        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="lg:w-[55%] lg:px-10 w-full grid"
        >
          <motion.h2
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="text-secondary font-bold text-2xl mb-5"
          >
            We Have Several Achievement In Engineering Sector
          </motion.h2>
          <motion.p
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="lg:mt-10"
          >
            Our team of engineers spearheaded the design and construction of the
            city`s first net-zero energy office building, utilizing innovative
            solar power integration and energy-efficient building materials.
          </motion.p>

          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-secondary rounded-md w-full p-10 flex justify-between sm:flex-row flex-col items-start lg:mt-20 mt-10 gap-3"
          >
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.span
                variants={fadeIn("up", 0.7)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="flex gap-2 items-center text-white text-lg font-bold mb-5"
              >
                <img src={icon} className="h-[30px]" alt="" /> Award
              </motion.span>
              <motion.h4
                variants={fadeIn("up", 0.8)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="text-white font-bold text-xl mb-2"
              >
                Best Company
              </motion.h4>
              <motion.p
                variants={fadeIn("up", 0.9)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className=" text-white"
              >
                This achievement sets a new standard for sustainable
                construction and reduces the building`s environmental impact.
              </motion.p>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.div
                variants={fadeIn("up", 0.7)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="flex gap-3 items-center sm:mb-5 mb-2"
              >
                <span className="flex gap-2 items-center text-[#ECBE26]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
                <span className="text-white">(5020 Reviews)</span>
              </motion.div>
              <motion.h4
                variants={fadeIn("up", 0.8)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="text-white font-bold text-xl mb-2"
              >
                High Rating reviews
              </motion.h4>
              <motion.p
                variants={fadeIn("up", 0.9)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className=" text-white"
              >
                Pioneered Self-Healing Concrete Technology for Enhanced
                Infrastructure Durability.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </Container>
  );
};

export default Achievement;
