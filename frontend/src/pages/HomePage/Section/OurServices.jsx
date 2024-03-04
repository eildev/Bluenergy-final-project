import Container from "../../../components/dynamic/Container/Container";
import ServicesCard from "../../../components/dynamic/ServiceCard/ServicesCard";
import SectionHeader from "../../../components/shared/SectionHeader/SectionHeader";
// import { servicesCardData } from "../../../data/servicesCardData";
import Button from "../../../element/Button";
import { motion } from "framer-motion";
import { fadeIn } from "../../../lib/variants";
import { useEffect, useState } from "react";
import port from "../../../lib/port";

const OurServices = () => {
  const [services, setServices] = useState([]);
  console.log(services);
  useEffect(() => {
    let url = port("services/details");
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => setServices(responseData.allData.slice(0, 6)));
  }, []);
  return (
    <Container>
      <div className="flex justify-between items-center mb-10">
        <SectionHeader
          title="Our Services"
          description="Every project, from the smallest detail to the grandest design, receives our unwavering commitment to quality, timeliness, and exceeding expectations."
          sectionHeaderHeadingClassNames="mb-4 md:text-start text-center"
          sectionHeaderParagraphClassName="max-w-[500px] md:text-start text-center"
          headerDescription={true}
        />
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="hidden sm:block"
        >
          <Button title="more" className="text-body bg-primary" />
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-10 gap-5">
        {services.map((data) => (
          <ServicesCard key={data.id} data={data} />
        ))}
      </div>
    </Container>
  );
};

export default OurServices;
