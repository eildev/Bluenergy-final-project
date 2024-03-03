import { useEffect } from "react";
import port from "./port";

const Request = ({ setData }) => {
  useEffect(() => {
    let url = port("overview/data");
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => setData(responseData.allData));
  }, []);
  return <div></div>;
};

export default Request;
