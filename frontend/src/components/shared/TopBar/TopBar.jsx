import Mail from "./Mail";
import SocialIcon from "./SocialIcon";

const TopBar = () => {
  return (
    <div className="container mx-auto md:px-10 px-5">
      <div className="flex justify-between h-[40px] items-center">
        <div>
          <Mail />
        </div>
        <div className="flex items-center justify-between text-[#707070] font-karla">
          <SocialIcon />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
