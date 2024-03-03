import { motion } from "framer-motion";
import SectionHeader from "../components/shared/SectionHeader/SectionHeader";
import cn from "../lib/cn";
import { fadeIn } from "../lib/variants";

const HeroTitle = ({
  title,
  description1,
  description2,
  borderBottom,
  headerDescription,
  sectionHeaderContainerClassNames,
  description1ClassName,
  description2ClassName,
  sectionHeaderHeadingClassNames,
}) => {
  return (
    <div>
      <SectionHeader
        borderBottom={borderBottom}
        headerDescription={headerDescription}
        title={title}
        sectionHeaderContainerClassNames={sectionHeaderContainerClassNames}
        sectionHeaderHeadingClassNames={sectionHeaderHeadingClassNames}
      />
      <motion.p
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className={cn("text-[#2D2C2C] leading-8", description1ClassName)}
      >
        {description1}
      </motion.p>
      <motion.p
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className={cn("text-[#2D2C2C] leading-8", description2ClassName)}
      >
        {description2}
      </motion.p>
    </div>
  );
};

export default HeroTitle;
