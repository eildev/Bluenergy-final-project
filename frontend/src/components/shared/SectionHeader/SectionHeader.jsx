import cn from "../../../lib/cn";
import { motion } from "framer-motion";
import { fadeIn } from "../../../lib/variants";

const SectionHeader = ({
  sectionHeaderContainerClassNames,
  sectionHeaderHeadingClassNames,
  sectionHeaderSpanClassName,
  sectionHeaderParagraphClassName,
  title,
  description,
  borderBottom,
  headerDescription,
}) => {
  return (
    <div className={cn("my-5", sectionHeaderContainerClassNames)}>
      <motion.h2
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className={cn(
          "md:text-3xl text-xl font-bold text-secondary capitalize font font-karla drop-shadow",
          sectionHeaderHeadingClassNames
        )}
      >
        {title}
      </motion.h2>
      <motion.div
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className={cn(
          borderBottom ? "h-[2px] w-[200px] bg-gray" : "hidden",
          sectionHeaderSpanClassName
        )}
      ></motion.div>

      <motion.p
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className={cn(
          headerDescription ? "" : "hidden",
          sectionHeaderParagraphClassName
        )}
      >
        {description}
      </motion.p>
    </div>
  );
};

export default SectionHeader;
