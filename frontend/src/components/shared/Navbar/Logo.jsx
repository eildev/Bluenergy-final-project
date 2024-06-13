import logoImage from "../../../assets/img/logo/logo.png";
// import logoImage from "../../../assets/img/logo/logo.png";
import cn from "../../../lib/cn";

const Logo = ({ className }) => {
  return (
    <div className="">
      <img
        className={cn("max-w-[120px] h-[45px] object-contain", className)}
        src={logoImage}
        alt="logo Image"
      />
    </div>
  );
};

export default Logo;
