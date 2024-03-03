import SectionHeader from "../../shared/SectionHeader/SectionHeader";
import Tasks from "../../../element/Tasks";
import { tasksData } from "../../../data/tasksData";

const OurAbilities = () => {
  return (
    <div>
      <div>
        <SectionHeader
          sectionHeaderContainerClassNames="mb-10"
          sectionHeaderHeadingClassNames="mb-4"
          sectionHeaderParagraphClassName="max-w-[400px]"
          title="Our Abilities"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the "
          headerDescription={true}
        />
      </div>

      <div className="grid gap-5">
        {tasksData.map((data) => (
          <Tasks data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default OurAbilities;
