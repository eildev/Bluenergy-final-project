import { BsGlobe } from "react-icons/bs";

const Language = () => {
  return (
    <div className="flex items-center">
      <span className="bg-[#1FBEF9] text-[#fff] text-2xl px-3 h-9 flex justify-center items-center rounded-tl rounded-bl">
        <BsGlobe />
      </span>
      <select className="border-2 rounded-tr rounded-br focus:border-[#1FBEF9] focus:outline-none border-[#1FBEF9]  px-3 h-9 flex justify-center items-center outline-none">
        <option value="EN">EN</option>
        <option value="BN">BN</option>
        <option value="BN">SN</option>
        <option value="BN">JN</option>
        <option value="BN">CN</option>
      </select>
    </div>
  );
};

export default Language;
