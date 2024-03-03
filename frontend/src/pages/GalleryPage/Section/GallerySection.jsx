import { useEffect, useState } from "react";
import Container from "../../../components/dynamic/Container/Container";
import ImageBox from "../../../components/dynamic/ImageBox/ImageBox";
import Button from "../../../element/Button";
import port from "../../../lib/port";
import Image from "../../../element/Image";
import path from "../../../lib/path";

const GallerySection = () => {
  const [gallery, setGallery] = useState([]);
  useEffect(() => {
    let url = port("gallery");
    fetch(url)
      .then((response) => response.json())
      .then((data) => setGallery(data.allData));
  }, []);
  return (
    <Container>
      <div className="grid grid-cols-2 md:grid-cols-3  gap-2 md:gap-3">
        {gallery.map((data) => (
          <div key={data.id} className="">
            <Image
              className="w-full lg:h-[400px] md:h-[300px]"
              src={path("gallery", data.gallery_image)}
              alt="gallery Images"
            ></Image>
          </div>
        ))}

        <div>
          <ImageBox
            className="w-full lg:h-[400px] md:h-[300px]"
            direction="left"
          ></ImageBox>
        </div>
        <div>
          <ImageBox
            className="w-full lg:h-[400px] md:h-[300px]"
            direction="right"
          ></ImageBox>
        </div>
        <div className="hidden sm:block">
          <ImageBox
            className="w-full lg:h-[400px] md:h-[300px]"
            direction="up"
          ></ImageBox>
        </div>
        <div className="hidden sm:block">
          <ImageBox
            className="w-full lg:h-[400px] md:h-[300px]"
            direction="left"
          ></ImageBox>
        </div>
        <div className="col-span-2 hidden lg:block">
          <ImageBox
            className="w-full lg:h-[400px] md:h-[300px]"
            direction="right"
          ></ImageBox>
        </div>
      </div>

      <div className="mt-5 text-center sm:hidden">
        <Button title="View all" className="bg-primary text-white"></Button>
      </div>
    </Container>
  );
};

export default GallerySection;
