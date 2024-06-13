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
import ServicesDetailsPage from "../pages/ServicesPage/ServicesDetailsPage/ServicesDetailsPage";
import port from "../lib/port";
import NewsDetailsPage from "../pages/NewsPage/NewsDetailsPage/NewsDetailsPage";

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
        path: "/services/:id",
        loader: ({ params }) => fetch(`${port}/services-details/${params.id}`),
        element: <ServicesDetailsPage />,
      },
      {
        path: "/news",
        element: <NewsPage />,
      },
      {
        path: "/news/:id",
        loader: ({ params }) => fetch(`${port}/news/${params.id}`),
        element: <NewsDetailsPage />,
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
