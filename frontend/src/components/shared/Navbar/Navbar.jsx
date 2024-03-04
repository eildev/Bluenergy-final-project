import MenuForLargeDevice from "./MenuForLargeDevice";
import MenuForMobileDevice from "./MenuForMobileDevice";
import SearchBar from "./SearchBar";
import WhiteLogo from "./WhiteLogo";

const Navbar = () => {
  return (
    <div className="bg-primary  sticky top-0 z-20">
      <div className="container mx-auto">
        <nav className="w-full flex justify-between items-center h-[60px] px-2 sm:px-3">
          <div className="hidden lg:block">
            <MenuForLargeDevice />
          </div>
          <div className="lg:hidden block">
            <MenuForMobileDevice />
          </div>
          <div className="hidden lg:block">
            <SearchBar />
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
