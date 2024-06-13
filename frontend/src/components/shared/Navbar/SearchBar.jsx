import { AiOutlineSearch } from "react-icons/ai";
import route from "../../../lib/route";

const SearchBar = () => {
  return (
    <div className="flex flex-col lg:flex-row  gap-3 items-start lg:items-center">
      <div className="flex items-center border-2 bg-transparent border-[#fff] h-8 rounded-md">
        <span className="h-full px-3 text-xl cursor-pointer flex justify-center items-center text-primary bg-[#fff]">
          <AiOutlineSearch />
        </span>
        <input
          className="bg-transparent placeholder:text-white placeholder:uppercase placeholder:text-sm border-none outline-none text-[#fff] h-full px-2"
          type="search"
          placeholder="Find services"
          style={{ background: "transparent" }}
        />
      </div>
      <div>
        <a
          href={route("admin/login")}
          className="px-7 py-2 font-bold text-sm uppercase font-karla rounded bg-white"
        >
          Login
        </a>
      </div>
    </div>
  );
};

export default SearchBar;
