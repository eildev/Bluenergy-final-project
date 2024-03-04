import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layout/MainLayouts";
import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/AboutPage/AboutPage";
// import SisterConcernPage from "../pages/SisterConcernPage/SisterConcernPage";
import ServicesPage from "../pages/ServicesPage/ServicesPage";
import NewsPage from "../pages/NewsPage/NewsPage";
import GalleryPage from "../pages/GalleryPage/GalleryPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import Error from "../pages/Error/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      // {
      //   path: "/sister-concern",
      //   element: <SisterConcernPage />,
      // },
      {
        path: "/services",
        element: <ServicesPage />,
      },
      {
        path: "/news",
        element: <NewsPage />,
      },
      {
        path: "/gallery",
        element: <GalleryPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);
