import HeroTitle from "../../../element/HeroTitle";
import Button from "../../../element/Button";
import ImageBox from "../../../components/dynamic/ImageBox/ImageBox";
import { motion } from "framer-motion";
import { fadeIn } from "../../../lib/variants";
import Image from "../../../element/Image";
import chairmanImage from "../../../assets/img/team/chairman.jpg";

const MessageFormChairman = () => {
  return (
    <div className="bg-body md:my-24 my-10">
      <div className="container mx-auto md:px-10 px-5">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="py-10 me-10">
            <HeroTitle
              title="message from The chairman"
              sectionHeaderHeadingClassNames="text-white md:text-primary"
              description1="We have been developing our divisions with immense speed and take great interest in the interests of our employees & consumers and understanding their problems. We have designed EEL to be employee & consumer oriented from the beginning. Our Philosophy clearly expresses our views on sustainability. To us, sustainability means proactively engaging in environmental and social issues and challenges, delivering solutions through innovation. Corporate value is composed of financial and non financial value; non financial value in particular is steadily growing in importance."
            />
            <motion.div
              className="mt-7 hidden lg:block"
              variants={fadeIn("down", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              <Button title="more" className="bg-body text-primary italic" />
            </motion.div>
          </div>
          <div className="lg:min-h-[550px] h-[550px] md:overflow-hidden">
            <ImageBox className="h-full w-full" direction="up">
              <Image src={chairmanImage} alt="Chairman Image" className="" />
            </ImageBox>
            <motion.div
              variants={fadeIn("down", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="mt-7 lg:hidden block text-center"
            >
              <Button title="more" className="bg-primary text-white italic" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageFormChairman;
