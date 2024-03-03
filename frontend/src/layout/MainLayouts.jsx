import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";
import TopBar from "../components/shared/TopBar/TopBar";
import Footer from "../components/shared/Footer/Footer";
import { useEffect, useState } from "react";

const MainLayouts = () => {
  // const location = useLocation();
  // const showTopbar = location.pathname("/");

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    // Simulating some async operation, e.g., fetching data
    const fetchData = async () => {
      // Your async operation goes here
      // For example, you can use a setTimeout to simulate loading for 2 seconds
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    };

    fetchData();
  }, []);

  return (
    <div>
      {isLoading && <div className="pageLoader">Loading...</div>}
      <div className="hidden lg:block">
        <TopBar />
      </div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayouts;
