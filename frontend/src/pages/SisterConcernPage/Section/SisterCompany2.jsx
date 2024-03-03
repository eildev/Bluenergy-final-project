import ImageBox from "../../../components/dynamic/ImageBox/ImageBox";
import Container from "../../../components/dynamic/Container/Container";
import SisterCompanyDetails from "../../../element/SisterCompanyDetails";
import { motion } from "framer-motion";
import { fadeIn } from "../../../lib/variants";

const SisterCompany2 = ({ title, companyDetails, detailsExtra }) => {
  return (
    <Container>
      <div className="grid md:grid-cols-2 gap-10">
        <motion.div
          variants={fadeIn("right", 0.3)}
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
        <div className="lg:pl-20">
          <ImageBox
            className="lg:h-[500px] md:h-[300px] w-full rounded-lg"
            direction="left"
          />
        </div>
      </div>
    </Container>
  );
};

export default SisterCompany2;
