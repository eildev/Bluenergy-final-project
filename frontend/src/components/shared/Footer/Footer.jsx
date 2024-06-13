import { useEffect, useState } from "react";
import FooterElement from "./FooterElement";
import port from "../../../lib/port";

// const services = [
//   {
//     id: 1,
//     title: "operation & Maintenance",
//     time: 0.4,
//   },
//   {
//     id: 2,
//     title: "Renewable Energy",
//     time: 0.5,
//   },
//   {
//     id: 3,
//     title: "Energy Efficiency",
//     time: 0.6,
//   },
//   {
//     id: 4,
//     title: "Logistic Services",
//     time: 0.7,
//   },
//   {
//     id: 5,
//     title: "Engineering Consulting",
//     time: 0.8,
//   },
//   {
//     id: 6,
//     title: "Supply/Trading",
//     time: 0.9,
//   },
// ];

// const contacts = [
//   {
//     id: 1,
//     title: "+7792 - 088277",
//     time: 0.4,
//   },
//   {
//     id: 2,
//     title: "example@example.com",
//     time: 0.5,
//   },
//   {
//     id: 3,
//     title: "New York, USA",
//     time: 0.6,
//   },
// ];

const Footer = () => {
  const [data, setData] = useState([]);
  const [services, setServices] = useState([]);
  useEffect(() => {
    let url = port("footer/data");
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => setData(responseData.footers.slice(0, 1)));
  }, []);

  useEffect(() => {
    let url = port("services/details");
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => setServices(responseData.allData.slice(0, 6)));
  }, []);
  return (
    <footer className=" border-t-4 border-primary ">
      <div className="container mx-auto md:px-10 px-5">
        <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-5 items-start py-[50px]">
          {data.map((element) => (
            <FooterElement
              key={element.id}
              element={element}
              services={services}
            ></FooterElement>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
