import { Link } from "react-router-dom";
import ImageBox from "../components/dynamic/ImageBox/ImageBox";
import path from "../lib/path";
import Image from "./Image";

const NewsBox = ({ data }) => {
  const { id, title, image } = data;
  return (
    <div className="md:flex grid justify-between items-center gap-5">
      <div>
        <ImageBox className="h-[100px] md:w-[100px] w-full ">
          <Image src={path("news", image)} />
        </ImageBox>
      </div>
      <div>
        <Link to={"/news/" + id}>
          <p className="text-white">{title}</p>
        </Link>
      </div>
    </div>
  );
};

export default NewsBox;
