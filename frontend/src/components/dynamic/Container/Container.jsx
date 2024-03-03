import cn from "../../../lib/cn";

const Container = ({ children, bgColor }) => {
  return (
    <div className={cn(bgColor, "lg:py-24 py-10")}>
      <div className="container mx-auto md:px-10 px-5">{children}</div>
    </div>
  );
};

export default Container;
