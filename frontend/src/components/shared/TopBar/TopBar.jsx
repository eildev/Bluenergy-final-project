import Logo from "../Navbar/Logo";
import Mail from "./Mail";
// import ISOCertified from "./ISOCertified";
// import Language from "./Language";
import SocialIcon from "./SocialIcon";

const TopBar = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 h-[80px] items-center">
        <div>
          <Logo />
        </div>
        <div className="flex items-center justify-between text-[#707070] font-karla">
          {/* <ISOCertified /> */}
          <Mail />
          <SocialIcon />

          {/* <Language /> */}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
