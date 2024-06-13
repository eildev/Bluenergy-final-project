import { useEffect, useState } from "react";
import Container from "../../../components/dynamic/Container/Container";
import SisterConcernCard from "../../../components/dynamic/SisterConcernCard/SisterConcernCard";
import SectionHeader from "../../../components/shared/SectionHeader/SectionHeader";
// import { sisterConcernCardData } from "../../../data/sisterConcernCardData";
import port from "../../../lib/port";

const OurSisterConcern = () => {
  const [sisters, setSisters] = useState([]);
  useEffect(() => {
    let url = port("partners/details");
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => setSisters(responseData.allData));
  }, []);
  return (
    <Container>
      <div>
        <SectionHeader
          sectionHeaderContainerClassNames="text-center mb-10"
          sectionHeaderHeadingClassNames="mb-4"
          sectionHeaderParagraphClassName="max-w-[500px] mx-auto"
          title="Our Sister Concerns"
          description="We have sisters concerns focusing in the operation of food business and software business."
          headerDescription={true}
        />
      </div>

      <div className="grid  lg:grid-cols-3 md:grid-cols-2 gap-10">
        {sisters.map((data) => (
          <SisterConcernCard key={data.id} data={data} />
        ))}
      </div>
    </Container>
  );
};

export default OurSisterConcern;
