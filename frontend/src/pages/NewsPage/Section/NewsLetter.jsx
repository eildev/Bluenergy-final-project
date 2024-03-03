import Container from "../../../components/dynamic/Container/Container";
import ImageBox from "../../../components/dynamic/ImageBox/ImageBox";
import Button from "../../../element/Button";
import Header from "../../../element/Header";
import IconStatus from "../../../element/IconStatus";
import { CiShare2 } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import NewsBox from "../../../element/NewsBox";
import { motion } from "framer-motion";
import { fadeIn } from "../../../lib/variants";

const NewsLetter = () => {
  return (
    <Container>
      <div className="grid lg:grid-cols-2 lg:gap-20 gap-10">
        <motion.div
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="lg:pr-20"
        >
          <div className="mb-5">
            <ImageBox className="relative h-[300px] w-full">
              <IconStatus>
                <span className="text-xl cursor-pointer">
                  <CiShare2 />
                </span>
                <span className="text-xl cursor-pointer">
                  <FaRegHeart />
                </span>
              </IconStatus>
            </ImageBox>
          </div>
          <div>
            <p className="uppercase mb-5">November 3, 2023 In Power Plant</p>
            <Header className="mb-5">Head Line Latest News This Week</Header>
            <p className="mb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quibusdam, fuga?
            </p>

            <Button
              title="Read more"
              className="bg-primary text-white font-normal"
            ></Button>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="lg:pr-20 lg:hidden sm:block hidden"
        >
          <div className="mb-5 pt-20 border-t-2 border-primary">
            <ImageBox className="relative h-[300px] w-full">
              <IconStatus>
                <span className="text-xl cursor-pointer">
                  <CiShare2 />
                </span>
                <span className="text-xl cursor-pointer">
                  <FaRegHeart />
                </span>
              </IconStatus>
            </ImageBox>
          </div>
          <div>
            <p className="uppercase mb-5">November 3, 2023 In Power Plant</p>
            <Header className="mb-5">Head Line Latest News This Week</Header>
            <p className="mb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quibusdam, fuga?
            </p>

            <Button
              title="Read more"
              className="bg-primary text-white font-normal"
            ></Button>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="lg:pl-20"
        >
          <div className="bg-white w-full rounded-md shadow-sm p-10">
            <input
              type="search"
              placeholder="Search"
              className="border-2 border-primary rounded-md w-full h-[40px] text-center outline-none placeholder:uppercase"
            />

            <Header className="my-5">News</Header>

            <ul className="my-5 grid gap-4">
              <li className="text-primary">
                <p className="underline flex items-center">
                  <span>
                    <FaArrowRightLong />
                  </span>
                  Lorem ipsum dolor sit amet.
                </p>
              </li>
              <li>
                <p className="underline flex items-center">
                  <span>
                    <FaArrowRightLong />
                  </span>
                  Lorem ipsum dolor sit amet.
                </p>
              </li>
              <li>
                <p className="underline flex items-center">
                  <span>
                    <FaArrowRightLong />
                  </span>
                  Lorem ipsum dolor sit amet.
                </p>
              </li>
              <li>
                <p className="underline flex items-center">
                  <span>
                    <FaArrowRightLong />
                  </span>
                  Lorem ipsum dolor sit amet.
                </p>
              </li>
              <li>
                <p className="underline flex items-center">
                  <span>
                    <FaArrowRightLong />
                  </span>
                  Lorem ipsum dolor sit amet.
                </p>
              </li>
              <li>
                <p className="underline flex items-center">
                  <span>
                    <FaArrowRightLong />
                  </span>
                  Lorem ipsum dolor sit amet.
                </p>
              </li>
              <li>
                <p className="underline flex items-center">
                  <span>
                    <FaArrowRightLong />
                  </span>
                  Lorem ipsum dolor sit amet.
                </p>
              </li>
              <li>
                <p className="underline flex items-center">
                  <span>
                    <FaArrowRightLong />
                  </span>
                  Lorem ipsum dolor sit amet.
                </p>
              </li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="lg:pr-20 sm:hidden lg:block block"
        >
          <div className="mb-5 pt-20 border-t-2 border-primary">
            <ImageBox className="relative h-[300px] w-full">
              <IconStatus>
                <span className="text-xl cursor-pointer">
                  <CiShare2 />
                </span>
                <span className="text-xl cursor-pointer">
                  <FaRegHeart />
                </span>
              </IconStatus>
            </ImageBox>
          </div>
          <div>
            <p className="uppercase mb-5">November 3, 2023 In Power Plant</p>
            <Header className="mb-5">Head Line Latest News This Week</Header>
            <p className="mb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quibusdam, fuga?
            </p>

            <Button
              title="Read more"
              className="bg-primary text-white font-normal"
            ></Button>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="lg:pl-20"
        >
          <div className="bg-secondary w-full rounded-md shadow-sm p-10">
            <Header className="mb-10">Recent Post</Header>
            <div className="grid gap-5">
              <NewsBox />
              <NewsBox />
              <NewsBox />
              <NewsBox />
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

export default NewsLetter;
