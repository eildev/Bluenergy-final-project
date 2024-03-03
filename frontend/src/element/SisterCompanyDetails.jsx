import Button from "./Button";
import Header from "./Header";

const SisterCompanyDetails = ({ title, companyDetails, detailsExtra }) => {
  return (
    <>
      <Header className="text-3xl lg:mb-10 md:mb-2">{title}</Header>
      <p className="mb-5 lg:leading-8 hidden lg:block">{companyDetails}</p>
      <p className="leading-7 mb-5">{detailsExtra}</p>
      <Button title="Visit Here" className="bg-primary text-white"></Button>
    </>
  );
};

export default SisterCompanyDetails;
