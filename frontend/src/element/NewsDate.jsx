import { FaCalendarCheck, FaComment, FaUser } from "react-icons/fa";

const NewsDate = () => {
  return (
    <div className="flex justify-between items-center gap-3 my-3">
      <p className="flex justify-between items-center gap-2 text-xs">
        <span className="text-primary text-md">
          <FaUser />
        </span>{" "}
        By Admin
      </p>
      <p className="flex justify-between items-center gap-2 text-xs">
        <span className="text-primary text-md">
          <FaCalendarCheck />
        </span>{" "}
        5 Nov 2023
      </p>
      <p className="flex justify-between items-center gap-2 text-xs">
        <span className="text-primary text-md">
          <FaComment />
        </span>{" "}
        Comments
      </p>
    </div>
  );
};

export default NewsDate;
