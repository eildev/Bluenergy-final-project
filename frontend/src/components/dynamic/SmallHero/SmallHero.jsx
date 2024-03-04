import Button from "../../../element/Button";
import Image from "../../../element/Image";
import Paragraph from "../../../element/Paragraph";
import cn from "../../../lib/cn";
import { fadeIn } from "../../../lib/variants";
import ImageBox from "../ImageBox/ImageBox";
import { motion } from "framer-motion";

const SmallHero = ({ title, description, className, src }) => {
  return (
    <div className="grid md:grid-cols-2 md:gap-10 gap-5 w-full">
      <ImageBox className="w-[250px]">
        <Image src={src}></Image>
      </ImageBox>
      <div>
        <motion.h2
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="text-secondary text-xl font-bold mb-5"
        >
          {title}
        </motion.h2>
        <Paragraph className={cn(className)}>{description}</Paragraph>
        <Button
          title="Read More"
          className="bg-secondary text-white"
          direction="up"
          time="0.5"
        />
      </div>
    </div>
  );
};

export default SmallHero;
