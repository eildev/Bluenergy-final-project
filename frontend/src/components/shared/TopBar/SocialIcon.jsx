// import { AiFillFacebook } from "react-icons/ai";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const SocialIcon = ({ link, website }) => {
  return (
    <div className="flex gap-5">
      <a href={link}>
        <span className="text-2xl text-primary cursor-pointer">
          <BsFacebook />
        </span>
      </a>
      <a href={website}>
        <span className="text-2xl text-primary cursor-pointer">
          <BsTwitter />
        </span>
      </a>
      <a href={website}>
        <span className="text-2xl text-primary cursor-pointer">
          <BsInstagram />
        </span>
      </a>
    </div>
  );
};

export default SocialIcon;
