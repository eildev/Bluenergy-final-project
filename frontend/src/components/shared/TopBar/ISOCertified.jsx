import { BsCheck2Square } from "react-icons/bs";

const ISOCertified = () => {
  return (
    <div className="flex items-center gap-2 ">
      <span className="text-4xl font-bold text-[#1FBEF9]">
        <BsCheck2Square />
      </span>
      <h4 className="grid uppercase text-sm font-semibold">
        iso certified <span>9001:2015</span>
      </h4>
    </div>
  );
};

export default ISOCertified;
