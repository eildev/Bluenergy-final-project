import SectionHeader from "../../shared/SectionHeader/SectionHeader";
import Tasks from "../../../element/Tasks";
// import { tasksData } from "../../../data/tasksData";
import { useEffect, useState } from "react";
import port from "../../../lib/port";

const OurAbilities = () => {
  const [whyChooseUsDetails, setWhyChooseUsDetails] = useState([]);
  // console.log(whyChooseUsDetails);
  useEffect(() => {
    let url = port("why-choose-us/details");
    fetch(url)
      .then((response) => response.json())
      .then((responseData) =>
        setWhyChooseUsDetails(responseData.allData.slice(0, 3))
      );
  }, []);
  return (
    <div>
      <div>
        <SectionHeader
          sectionHeaderContainerClassNames="mb-10"
          sectionHeaderHeadingClassNames="mb-4"
          sectionHeaderParagraphClassName="max-w-[400px]"
          title="Our Abilities"
          description="Empowering progress in supply, engineering, renewables, and efficiency – that's the essence of Bluenergy."
          headerDescription={true}
        />
      </div>

      <div className="grid gap-5">
        {whyChooseUsDetails.map((data) => (
          <Tasks data={data} key={data.id} />
        ))}
        {/* {tasksData.map((data) => (
          <Tasks data={data} key={data.id} />
        ))} */}
      </div>
    </div>
  );
};

export default OurAbilities;
