import { useEffect, useState } from "react";
import Container from "../../../components/dynamic/Container/Container";
import SectionHeader from "../../../components/shared/SectionHeader/SectionHeader";
// import { whyChooseUsData } from "../../../data/WhyChooseUsData";
import WhyChooseUsServices from "../../../element/WhyChooseUsServices";
import port from "../../../lib/port";

const WhyChooseUs = () => {
  // const [whyChooseUs, setWhyChooseUs] = useState([]);
  // // const path = path("frontend/uploads/about/");
  // console.log(whyChooseUs);
  // useEffect(() => {
  //   let url = port("why-choose-us");
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((responseData) => setWhyChooseUs(responseData.allData));
  // }, []);
  const [whyChooseUsDetails, setWhyChooseUsDetails] = useState([]);
  console.log(whyChooseUsDetails);
  useEffect(() => {
    let url = port("why-choose-us/details");
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => setWhyChooseUsDetails(responseData.allData));
  }, []);
  return (
    <Container>
      {/* {whyChooseUs.map((data) => (
        <SectionHeader
          key={data.id}
          data={data}
          borderBottom={true}
          headerDescription={true}
          sectionHeaderContainerClassNames={"text-center mb-10"}
          sectionHeaderSpanClassName={"mx-auto my-3 w-[150px]"}
          sectionHeaderParagraphClassName={"mx-auto my-3 max-w-[560px]"}
        />
      ))} */}

      <SectionHeader
        borderBottom={true}
        headerDescription={true}
        title={"Why Choose Us"}
        description="Turning Visions into Reality Seamless Integration of Supplier, Power Plant, Solar Solutions, and More."
        sectionHeaderContainerClassNames={"text-center mb-10"}
        sectionHeaderSpanClassName={"mx-auto my-3 w-[150px]"}
        sectionHeaderParagraphClassName={"mx-auto my-3 max-w-[560px]"}
      />
      <div className="grid gap-5 lg:grid-cols-3 sm:grid-cols-2">
        {whyChooseUsDetails.map((whyChooseUs) => (
          <WhyChooseUsServices key={whyChooseUs.id} whyChooseUs={whyChooseUs} />
        ))}
      </div>
    </Container>
  );
};

export default WhyChooseUs;
