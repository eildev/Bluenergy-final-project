import cn from "../lib/cn";

const IconStatus = ({ children, className }) => {
  return (
    <div
      className={cn(
        "absolute top-4 right-5 text-white text-xs flex items-center gap-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export default IconStatus;
