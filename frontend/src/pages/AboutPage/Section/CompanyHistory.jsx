import Container from "../../../components/dynamic/Container/Container";
import SectionHeader from "../../../components/shared/SectionHeader/SectionHeader";
import { motion } from "framer-motion";
import { fadeIn } from "../../../lib/variants";

const CompanyHistory = () => {
  return (
    <Container bgColor="bg-primary">
      <SectionHeader
        sectionHeaderHeadingClassNames="text-white"
        borderBottom={true}
        title={"Our Company History"}
        sectionHeaderContainerClassNames={"text-center mb-10"}
        sectionHeaderSpanClassName="bg-[#fff] mx-auto my-3 w-[150px] "
      />

      <div className="text-center">
        <motion.p
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className=" text-white"
        >
          Bluenergy Solutions Limited (BSL) has been established to offer
          sustainable energy and resource solutions to the Government, the
          Private Sector, and Export Oriented Foreign Companies operating in
          Bangladesh. The Management Team at BSL is made up of professionals in
          Engineering, Finance, and Business Development, who have been
          delivering integrated energy, oil and gas resource-related efficient
          solutions in Bangladesh, Australia, China, and major economies in the
          Asia Pacific region for the last 35 years.
        </motion.p>

        <br />

        <motion.p
          variants={fadeIn("down", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="text-white"
        >
          During this period, the team behind BSL has built a successful track
          record in delivering an optimum return on investment for new efficient
          energy systems designed to produce efficient power, heating, and
          cooling while reducing the facilities’ energy and carbon emissions
          footprint. Often these solutions included renewable energy systems
          coupled with energy-efficient technologies to produce a minimum carbon
          footprint for both commercial and industrial facilities. We gained and
          continue to refine our knowledge and unique expertise from an
          exclusive focus on delivering energy and resources engineering and
          management projects while working across a wide range of commercial
          technologies, giving BSL unparalleled access and insights on the
          cost/benefits of major manufacturers of power generation and
          energy-related products.
        </motion.p>
      </div>
    </Container>
  );
};

export default CompanyHistory;
