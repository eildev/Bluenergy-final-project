import cn from "../lib/cn";

const Image = ({ src, alt, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={cn("h-full w-full object-cover", className)}
    />
  );
};

export default Image;
