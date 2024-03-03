import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import "./styles.modules.css";

const AccordionExample = () => {
  return (
    <Accordion transition transitionTimeout={250}>
      <AccordionItem header="Our services details" initialEntered>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </AccordionItem>

      <AccordionItem header="Service catalog">
        Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel erat
        quis sodales. Nam ex enim, eleifend venenatis lectus vitae, accumsan
        auctor mi.
      </AccordionItem>

      <AccordionItem header="Service catalog">
        Suspendisse massa risus, pretium id interdum in, dictum sit amet ante.
        Fusce vulputate purus sed tempus feugiat.
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionExample;
