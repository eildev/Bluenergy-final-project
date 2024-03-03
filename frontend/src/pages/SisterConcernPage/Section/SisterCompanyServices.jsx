import Container from "../../../components/dynamic/Container/Container";
// import { companyServicesData } from "../../../data/companyServicesData";
import Button from "../../../element/Button";
import CompanyServicesElement from "../../../element/CompanyServicesElement";
import Header from "../../../element/Header";

const SisterCompanyServices = ({ companyServicesData, direction }) => {
  return (
    <Container bgColor="bg-secondary">
      <Header className="text-gray text-3xl mb-10" direction="down">
        It Company Services
      </Header>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-20">
        {companyServicesData.map((data) => (
          <CompanyServicesElement key={data.id} data={data} />
        ))}
        <Button
          title="View all"
          className="bg-primary text-white text-xl"
          direction={direction}
        />
      </div>
    </Container>
  );
};

export default SisterCompanyServices;
