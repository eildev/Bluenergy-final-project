import Container from "../../../components/dynamic/Container/Container";
import SectionHeader from "../../../components/shared/SectionHeader/SectionHeader";
// import { cardData } from "../../../data/cardData";
import Button from "../../../element/Button";
import Card from "../../../element/Card";
import Header from "../../../element/Header";
import { motion } from "framer-motion";
import { fadeIn } from "../../../lib/variants";
import { useEffect, useState } from "react";
import port from "../../../lib/port";

const OurAllServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    let url = port("services/details");
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => setServices(responseData.allData.slice(0, 9)));
  }, []);
  return (
    <Container bgColor="bg-secondary">
      <SectionHeader
        sectionHeaderContainerClassNames="text-center mb-10 "
        sectionHeaderHeadingClassNames="text-white"
        sectionHeaderParagraphClassName="text-white"
        title="Our all Services"
        description="At Bluenergy, we redefine power solutions with our Generator Assembly and Supply services, 
        embodying reliability, innovation, and sustainability"
        headerDescription={true}
      />

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
        {services.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>

      <div className="flex sm:justify-between justify-center items-center mt-10">
        <Header
          className="text-md font-bold capitalize hidden sm:block "
          direction="right"
        >
          our more services
        </Header>
        <motion.p
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="hidden lg:block text-white"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </motion.p>

        <Button
          title="View All"
          className="bg-primary text-white"
          direction="left"
          time="0.5"
        />
      </div>
    </Container>
  );
};

export default OurAllServices;
