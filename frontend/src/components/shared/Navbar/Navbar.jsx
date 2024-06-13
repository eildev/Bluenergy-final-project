import Logo from "./Logo";
import MenuForLargeDevice from "./MenuForLargeDevice";
import MenuForMobileDevice from "./MenuForMobileDevice";
// import SearchBar from "./SearchBar";
import WhiteLogo from "./WhiteLogo";

const Navbar = () => {
  return (
    <div className="bg-primary  sticky top-0 z-20">
      <div className="container mx-auto md:px-10 px-5">
        <nav className="w-full flex justify-between items-center h-[60px]">
          <div className="hidden lg:block">
            <MenuForLargeDevice />
          </div>
          <div className="lg:hidden block">
            <MenuForMobileDevice />
          </div>
          <div className="hidden lg:block">
            <Logo />
          </div>
          <div className="lg:hidden block">
            <WhiteLogo />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
