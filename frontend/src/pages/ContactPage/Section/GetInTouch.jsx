import Container from "../../../components/dynamic/Container/Container";
import Header from "../../../element/Header";
import InputForm from "../../../element/InputForm";
import { contactsData } from "../../../data/contactsData";
import ContactElement from "../../../element/ContactElement";
import { motion } from "framer-motion";
import { fadeIn } from "../../../lib/variants";

const GetInTouch = () => {
  return (
    <Container>
      <div className="grid lg:grid-cols-2 gap-20">
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Header className="text-3xl mb-5 text-secondary">Get In Touch</Header>
          <p className="mb-5">
            We appreciate your interest in Bluenergy. For any inquiries, please
            don`t hesitate to contact us using the following methods.
          </p>
          <div className="grid gap-5">
            {contactsData.map((data) => (
              <ContactElement key={data.id} data={data} />
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <InputForm />
        </motion.div>
      </div>
    </Container>
  );
};

export default GetInTouch;
