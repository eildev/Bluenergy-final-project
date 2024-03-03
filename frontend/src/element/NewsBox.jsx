import ImageBox from "../components/dynamic/ImageBox/ImageBox";

const NewsBox = () => {
  return (
    <div className="flex justify-between items-center gap-5">
      <div>
        <ImageBox className="h-[100px] w-[100px]"></ImageBox>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facilis
          aliquam eligendi facere soluta rerum! Fugit aliquid quo omnis non.
        </p>
      </div>
    </div>
  );
};

export default NewsBox;
