import { FaPlay } from "react-icons/fa6";

const PlayButton = () => {
  return (
    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-[#FFFBFB] p-4 bg-body bg-opacity-10 rounded-full text-white cursor-pointer text-xl">
      <FaPlay />
    </span>
  );
};

export default PlayButton;
