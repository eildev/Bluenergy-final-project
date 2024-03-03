const ContactElement = ({ data }) => {
  const { icon, details } = data;
  return (
    <div className="flex items-center gap-3">
      <span className=" rounded border-2 border-primary h-12 w-16 flex justify-center items-center">
        <img src={icon} alt="" />
      </span>
      <p className="text-md">{details}</p>
    </div>
  );
};

export default ContactElement;
