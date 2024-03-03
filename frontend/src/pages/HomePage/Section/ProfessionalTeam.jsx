import Container from "../../../components/dynamic/Container/Container";
import SectionHeader from "../../../components/shared/SectionHeader/SectionHeader";
// import { professionalCardData } from "../../../data/professionalCardData";
import Button from "../../../element/Button";
import { motion } from "framer-motion";
import ProfessionalCard from "../../../element/ProfessionalCard";
import { fadeIn } from "../../../lib/variants";
import { useEffect, useState } from "react";
import port from "../../../lib/port";

const ProfessionalTeam = () => {
  const [managingTeams, setManagingTeams] = useState([]);
  console.log(managingTeams);
  useEffect(() => {
    let url = port("managing-team");
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => setManagingTeams(responseData.allData));
  }, []);
  return (
    <Container>
      <div className="mb-14">
        <SectionHeader
          sectionHeaderContainerClassNames="text-center"
          sectionHeaderHeadingClassNames="mb-4"
          sectionHeaderParagraphClassName="max-w-[500px] mx-auto"
          title="Our Managing Team"
          description="Meet the team that will turn your vision into a reality. Meet the minds behind Eclipse Engineering Limited."
          headerDescription={true}
        />
      </div>

      <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2">
        {managingTeams.map((data) => (
          <ProfessionalCard key={data.id} data={data} />
        ))}
      </div>

      <motion.div
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="w-full mx-auto text-center mt-10"
      >
        <Button title=" view All" className="bg-primary text-white italic" />
      </motion.div>
    </Container>
  );
};

export default ProfessionalTeam;
