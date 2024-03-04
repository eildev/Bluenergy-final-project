import Container from "../../../components/dynamic/Container/Container";
import SectionHeader from "../../../components/shared/SectionHeader/SectionHeader";
// import { galleryCardData } from "../../../data/galleryCardData";
import Button from "../../../element/Button";
import GalleryCard from "../../../element/GalleryCard";
import { motion } from "framer-motion";
import { fadeIn } from "../../../lib/variants";
import { useEffect, useState } from "react";
import port from "../../../lib/port";

const Gallery = ({ gallery }) => {
  const [category, setCategory] = useState([]);
  // console.log(aboutData);
  useEffect(() => {
    let url = port("category");
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => setCategory(responseData.allData.slice(0, 6)));
  }, []);
  return (
    <Container>
      <div className="mb-5">
        <SectionHeader
          sectionHeaderContainerClassNames="text-center"
          sectionHeaderHeadingClassNames="mb-2"
          sectionHeaderParagraphClassName="max-w-[500px] mx-auto"
          title="Gallery"
          description="Dive into our diverse portfolio and explore how we're powering progress across energy, renewable's, transportation, and beyond."
          headerDescription={true}
          sectionHeaderSpanClassName="w-[100px] mx-auto bg-primary mb-2"
          borderBottom={true}
        />
      </div>

      <motion.div
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="sm:flex sm:justify-center items-center sm:gap-10 mb-10 gap-3 grid grid-cols-2"
      >
        {category.map((data) => (
          <Button
            key={data.id}
            title={data.category_name}
            className="bg-transparent text-primary border border-primary"
          />
        ))}
        <Button title="All" className="bg-transparent  border border-primary" />
      </motion.div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-10  gap-5">
        {gallery.map((data) => (
          <GalleryCard data={data} key={data.id} />
        ))}
      </div>
    </Container>
  );
};

export default Gallery;
