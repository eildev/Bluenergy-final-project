import Hamburger from "hamburger-react";
import MenuItem from "./MenuItem";
import SearchBar from "./SearchBar";
import { useState } from "react";

const MenuForMobileDevice = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <Hamburger color="#fff" toggled={isOpen} toggle={setOpen} />
      <ul
        className={`absolute bottom-[-220px] left-2 bg-primary px-5 w-[200px] rounded-xl transition-all py-2 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <MenuItem searchBar={SearchBar} />
      </ul>
    </div>
  );
};

export default MenuForMobileDevice;
