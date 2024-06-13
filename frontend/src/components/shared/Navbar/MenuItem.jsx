import { Link } from "react-router-dom";
// import SearchBar from "./SearchBar";
// import route from "../../../lib/route";

// const items = [
//   {
//     id: 1,
//     name: "Home",
//     src: "/",
//   },
//   {
//     id: 2,
//     name: "About",
//     src: "/about",
//   },
//   {
//     id: 3,
//     name: "services",
//     src: "/services",
//   },
//   {
//     id: 4,
//     name: "News",
//     src: "/news",
//   },
//   {
//     id: 5,
//     name: "Gallery",
//     src: "/gallery",
//   },
//   {
//     id: 6,
//     name: "Sister Concern",
//     src: "/sister- Concern",
//   },
//   {
//     id: 7,
//     name: "Contact",
//     src: "/contact",
//   },
// ];

const MenuItem = () => {
  return (
    <>
      {/* <li className="lg:hidden">
        <SearchBar />
      </li> */}
      <li className="text-md uppercase font-semibold text-[#fff]">
        <Link to="/">Home</Link>
      </li>
      <li className="text-md uppercase font-semibold text-[#fff]">
        <Link to="/about">About Us</Link>
      </li>
      <li className="text-md uppercase font-semibold text-[#fff]">
        <Link to="/services">Services</Link>
      </li>
      <li className="text-md uppercase font-semibold text-[#fff]">
        <Link to="/news">News</Link>
      </li>
      <li className="text-md uppercase font-semibold text-[#fff]">
        <Link to="/gallery">Gallery</Link>
      </li>
      <li className="text-md uppercase font-semibold text-[#fff]">
        <Link to="/contact">Contact</Link>
      </li>
      {/* <li className="text-md uppercase font-semibold my-3 lg:hidden">
        <a
          href={route("admin/login")}
          className="px-7 py-2 font-bold text-sm uppercase font-karla rounded bg-white"
        >
          Login
        </a>
      </li> */}
    </>
  );
};

export default MenuItem;
