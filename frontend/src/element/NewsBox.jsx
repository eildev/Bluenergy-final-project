import ImageBox from "../components/dynamic/ImageBox/ImageBox";
import Image from "./Image";

const NewsBox = ({ image }) => {
  return (
    <div className="flex justify-between items-center gap-5">
      <div>
        <ImageBox className="h-[100px] w-[100px]">
          <Image src={image} />
        </ImageBox>
      </div>
      <div>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facilis
          aliquam eligendi facere soluta rerum! Fugit aliquid quo omnis non.
        </p>
      </div>
    </div>
  );
};

export default NewsBox;
