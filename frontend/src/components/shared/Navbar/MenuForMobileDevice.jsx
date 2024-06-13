import Hamburger from "hamburger-react";
import MenuItem from "./MenuItem";
// import SearchBar from "./SearchBar";
import { useEffect, useRef, useState } from "react";

const MenuForMobileDevice = () => {
  const [isOpen, setOpen] = useState(false);
  const menuRef = useRef(null);
  // Function to handle clicks outside the menu
  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  // Add a click event listener to the document body
  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);

    // Clean up the event listener when the component is unmounted
    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);
  return (
    <div ref={menuRef}>
      <Hamburger color="#fff" toggled={isOpen} toggle={setOpen} />
      <ul
        className={`absolute bottom-[-170px] left-3 bg-primary px-5 w-[200px] rounded-xl transition-all py-2 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <MenuItem />
      </ul>
    </div>
  );
};

export default MenuForMobileDevice;
