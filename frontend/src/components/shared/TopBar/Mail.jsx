import { BsEnvelope } from "react-icons/bs";

const Mail = () => {
  return (
    <div className="flex gap-2">
      <div>
        <span className="text-2xl text-primary cursor-pointer">
          <BsEnvelope />
        </span>
      </div>
      <div>
        <p className="text-primary">info@bluenergyltd.com</p>
      </div>
    </div>
  );
};

export default Mail;
