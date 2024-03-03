import logoImage from "../../../assets/img/logo/logo.png";
import cn from "../../../lib/cn";

const Logo = ({ className }) => {
  return (
    <div>
      <img
        className={cn("max-w-[120px]", className)}
        src={logoImage}
        alt="logo Image"
      />
    </div>
  );
};

export default Logo;
