import path from "../lib/path";

const Tasks = ({ data }) => {
  const { icon, title, description } = data;
  return (
    <div className="flex gap-3 mt-4 ">
      <span className="w-[80px] h-[70px] p-3 border-2 border-secondary rounded-sm text-secondary text-2xl flex justify-center items-center">
        <img
          src={path("why-choose-us", icon)}
          // src={path(icon)}
          className="object-contain"
          alt=""
        />
      </span>
      <div>
        <h4 className="text-xl font-karla mb-2 text-[#433F3F]">{title}</h4>
        <p className=" text-xs max-w-[250px]">{description}</p>
      </div>
    </div>
  );
};

export default Tasks;
