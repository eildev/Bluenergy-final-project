import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  return (
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
  );
};

export default SearchBar;
