import Banner from "../../components/dynamic/Banner/Banner";
import image from "../../assets/img/banner/bannerimg.png";
import SisterCompany from "./Section/SisterCompany";
import SisterCompanyServices from "./Section/SisterCompanyServices";
import SisterCompany2 from "./Section/SisterCompany2";
import {
  consultingServicesData,
  itServicesData,
  restaurantServicesData,
} from "../../data/companyServicesData";

const SisterConcernPage = () => {
  return (
    <>
      <Banner
        bannerImage={image}
        bannerText=" Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Provident, nisi.  Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Provident, nisi."
        bannerTitle="Sister Concern"
      />
      <SisterCompany
        title="It Company Name"
        companyDetails="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
        accusantium eveniet accusamus numquam temporibus modi qui vel suscipit
        obcaecati harum. Deleniti repellendus tempore incidunt beatae minus
        minima. Totam molestias aliquid at, nisi officiis reiciendis! Blanditiis
        deserunt facilis repudiandae dignissimos ad magnam veritatis ratione
        autem aliquid, suscipit, quaerat dicta similique officia? Excepturi
        assumenda voluptatum distinctio, vel tempore quidem blanditiis
        necessitatibus ad! Sequi quas enim nobis facilis optio hic vel vitae
        sit. Unde, magni reiciendis necessitatibus est ullam nesciunt quibusdam
        aperiam, saepe sed voluptate asperiores corrupti. Laborum eius, error
        quidem dolore sed asperiores accusamus ratione consectetur repellat esse
        explicabo consequatur sapiente consequuntur."
        detailsExtra="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
        accusantium eveniet accusamus numquam temporibus modi qui vel suscipit
        obcaecati harum. Deleniti repellendus tempore incidunt beatae minus
        minima. Totam molestias aliquid"
      />
      <SisterCompanyServices
        companyServicesData={itServicesData}
        direction="left"
      />
      <SisterCompany2
        title="Another Company Name"
        companyDetails="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
        accusantium eveniet accusamus numquam temporibus modi qui vel suscipit
        obcaecati harum. Deleniti repellendus tempore incidunt beatae minus
        minima. Totam molestias aliquid at, nisi officiis reiciendis! Blanditiis
        deserunt facilis repudiandae dignissimos ad magnam veritatis ratione
        autem aliquid, suscipit, quaerat dicta similique officia? Excepturi
        assumenda voluptatum distinctio, vel tempore quidem blanditiis
        necessitatibus ad! Sequi quas enim nobis facilis optio hic vel vitae
        sit. Unde, magni reiciendis necessitatibus est ullam nesciunt quibusdam
        aperiam, saepe sed voluptate asperiores corrupti. Laborum eius, error
        quidem dolore sed asperiores accusamus ratione consectetur repellat esse
        explicabo consequatur sapiente consequuntur."
        detailsExtra="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
        accusantium eveniet accusamus numquam temporibus modi qui vel suscipit
        obcaecati harum. Deleniti repellendus tempore incidunt beatae minus
        minima. Totam molestias aliquid"
      />
      <SisterCompanyServices
        companyServicesData={consultingServicesData}
        direction="right"
      />
      <SisterCompany
        title="Another Company Name"
        companyDetails="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
        accusantium eveniet accusamus numquam temporibus modi qui vel suscipit
        obcaecati harum. Deleniti repellendus tempore incidunt beatae minus
        minima. Totam molestias aliquid at, nisi officiis reiciendis! Blanditiis
        deserunt facilis repudiandae dignissimos ad magnam veritatis ratione
        autem aliquid, suscipit, quaerat dicta similique officia? Excepturi
        assumenda voluptatum distinctio, vel tempore quidem blanditiis
        necessitatibus ad! Sequi quas enim nobis facilis optio hic vel vitae
        sit. Unde, magni reiciendis necessitatibus est ullam nesciunt quibusdam
        aperiam, saepe sed voluptate asperiores corrupti. Laborum eius, error
        quidem dolore sed asperiores accusamus ratione consectetur repellat esse
        explicabo consequatur sapiente consequuntur."
        detailsExtra="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
        accusantium eveniet accusamus numquam temporibus modi qui vel suscipit
        obcaecati harum. Deleniti repellendus tempore incidunt beatae minus
        minima. Totam molestias aliquid"
      />
      <SisterCompanyServices
        companyServicesData={restaurantServicesData}
        direction="left"
      />
    </>
  );
};

export default SisterConcernPage;
