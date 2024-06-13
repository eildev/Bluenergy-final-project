import { BsEnvelope } from "react-icons/bs";

const Mail = () => {
  return (
    <div className="flex items-center gap-2">
      <div>
        <span className="text-md text-primary cursor-pointer">
          <BsEnvelope />
        </span>
      </div>
      <div>
        <p className="text-primary text-md">info@bluenergyltd.com</p>
      </div>
    </div>
  );
};

export default Mail;
