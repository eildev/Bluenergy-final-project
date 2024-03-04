import { Link } from "react-router-dom";
import image from "../../assets/icons/404/404.svg";
import Container from "../../components/dynamic/Container/Container";
// import Button from "../../element/Button";

const Error = () => {
  return (
    <Container>
      <Link
        to="/"
        className="px-7 py-2 font-bold text-sm uppercase font-inter rounded bg-secondary text-white"
      >
        Back to main Page
      </Link>
      <div className="flex justify-center items-center">
        <img src={image} alt="404 image" />
      </div>
    </Container>
  );
};

export default Error;
