import Header from "../../../element/Header";
import InputForm from "../../../element/InputForm";
import { motion } from "framer-motion";
import { fadeIn } from "../../../lib/variants";

const Quote = () => {
  return (
    <div>
      <div>
        <Header className="mb-5 text-3xl text-secondary">Get In Touch</Header>
        <motion.p
          variants={fadeIn("down", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="mb-10"
        >
          Connect with us for innovative solutions. Get in touch with Bluenergy
          and let`s build a better future together!
        </motion.p>
      </div>
      <InputForm />
    </div>
  );
};

export default Quote;
