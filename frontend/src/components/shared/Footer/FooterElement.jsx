import { fadeIn } from "../../../lib/variants";
import Logo from "../Navbar/Logo";
import { motion } from "framer-motion";
import FooterHeading from "./FooterHeading";
import { BsFillPlayFill } from "react-icons/bs";
import SocialIcon from "../TopBar/SocialIcon";
// import { useState } from "react";
// import axios from "axios";
// import port from "../../../lib/port";

const FooterElement = ({ element, services }) => {
  const { fullAddress, location, link, phone, email, website } = element;

  // const [data, setData] = useState("");

  // const handleClick = async () => {
  //   try {
  //     const response = await axios.post(port("subscribe"), {
  //       data,
  //     });
  //     console.log("Email subscription successful:", response.data);
  //     // Do something with the response if needed
  //   } catch (error) {
  //     console.error("Error subscribing to email:", error);
  //     // Handle errors if necessary
  //   }
  // };
  return (
    <>
      <div>
        <Logo />
        <motion.p
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="text-[#707070] "
        >
          Bluenergy Solutions Limited (BSL) has been established to offer a
          sustainable energy and resources solutions to Government, the private
          sector and export oriented foreign companies operating in Bangladesh.
        </motion.p>
      </div>
      <div>
        <div className="mb-5">
          <FooterHeading heading={"Our Services"} />
        </div>
        <ul className="grid gap-2">
          {services.map((service) => (
            <motion.li
              variants={fadeIn("down", service.time)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              key={service.id}
              className="flex items-center gap-1"
            >
              <span className="text-primary text-xl">
                <BsFillPlayFill />
              </span>{" "}
              {service.services_details_title}
            </motion.li>
          ))}
        </ul>
      </div>
      <div>
        <div className="mb-5">
          <FooterHeading heading={"Contact Us"} />
        </div>
        <ul className="grid gap-2">
          <motion.li
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex items-center gap-1"
          >
            <span className="text-primary text-xl">
              <BsFillPlayFill />
            </span>{" "}
            {fullAddress}
          </motion.li>
          <motion.li
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex items-center gap-1"
          >
            <span className="text-primary text-xl">
              <BsFillPlayFill />
            </span>{" "}
            {email}
          </motion.li>
          <motion.li
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex items-center gap-1"
          >
            <span className="text-primary text-xl">
              <BsFillPlayFill />
            </span>{" "}
            {phone}
          </motion.li>
          <motion.li
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex items-center gap-1"
          >
            <span className="text-primary text-xl">
              <BsFillPlayFill />
            </span>{" "}
            {location}
          </motion.li>
        </ul>
        <div className="mt-5">
          <SocialIcon link={link} website={website} />
        </div>
      </div>
      <div>
        <div className="mb-5">
          <FooterHeading heading={"Get in Touch"} />
        </div>
        <div className="grid w-[200px] gap-3">
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="border-2 border-primary px-2 py-1 rounded-md"
          >
            <input
              type="email"
              placeholder="E-mail"
              className="border-none outline-none bg-transparent "
              name="email"
              // onChange={(e) => setData(e.target.value)}
            />
          </motion.div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            <button
              // onClick={handleClick}
              className="px-12 py-2 rounded-md uppercase text-white text-semibold bg-primary"
            >
              Subscribe
            </button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default FooterElement;
