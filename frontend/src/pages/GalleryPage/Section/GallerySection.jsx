import Container from "../../../components/dynamic/Container/Container";
import ImageBox from "../../../components/dynamic/ImageBox/ImageBox";
import Button from "../../../element/Button";
import Image from "../../../element/Image";
import path from "../../../lib/path";

const GallerySection = ({ gallery }) => {
  return (
    <Container>
      <div className="grid grid-cols-2 md:grid-cols-3  gap-2 md:gap-3">
        {gallery.map((data) => (
          <div key={data.id} className="">
            <ImageBox
              className="w-full lg:h-[400px] md:h-[300px]"
              direction="right"
            >
              <Image
                className="w-full lg:h-[400px] md:h-[300px]"
                src={path("gallery", data.gallery_image)}
                alt="gallery Images"
              ></Image>
            </ImageBox>
          </div>
        ))}
      </div>

      <div className="mt-5 text-center sm:hidden">
        <Button title="View all" className="bg-primary text-white"></Button>
      </div>
    </Container>
  );
};

export default GallerySection;
