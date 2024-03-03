import Container from "../../../components/dynamic/Container/Container";
import ImageBox from "../../../components/dynamic/ImageBox/ImageBox";
import SisterCompanyDetails from "../../../element/SisterCompanyDetails";
import { motion } from "framer-motion";
import { fadeIn } from "../../../lib/variants";

const SisterCompany = ({ title, companyDetails, detailsExtra }) => {
  return (
    <Container>
      <div className="grid md:grid-cols-2 gap-10">
        <div className="lg:pr-20">
          <ImageBox
            className="lg:h-[500px] md:h-[300px] w-full rounded-lg"
            direction="right"
          />
        </div>
        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className=""
        >
          <SisterCompanyDetails
            title={title}
            companyDetails={companyDetails}
            detailsExtra={detailsExtra}
          />
        </motion.div>
      </div>
    </Container>
  );
};

export default SisterCompany;
