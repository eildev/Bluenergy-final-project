import { useEffect, useState } from "react";
import Container from "../../../components/dynamic/Container/Container";
// import ActivitiesData from "../../../data/ActivitiesData";
import ActivitiesTask from "../../../element/ActivitiesTask";
import port from "../../../lib/port";

const Activities = () => {
  const [activity, SetActivity] = useState([]);
  useEffect(() => {
    let url = port("overview/data");
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => SetActivity(responseData.allData.slice(0, 3)));
  }, []);

  return (
    <Container bgColor="bg-primary">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-14 font-karla">
        {activity.map((tasks) => (
          <ActivitiesTask key={tasks.id} tasks={tasks} />
        ))}
      </div>
    </Container>
  );
};

export default Activities;
