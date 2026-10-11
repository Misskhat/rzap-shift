import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home/Home";
import Services from "../pages/Services/Services";
import Coverage from "../pages/Coverage/Coverage";
import Pricing from "../pages/Pricing/Pricing";
import BeArider from "../pages/BeARider/BeArider";
import AboutUs from "../pages/AboutUs/AboutUs";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "coverage",
        element: <Coverage />,
      },
      {
        path: "aboutUs",
        element: <AboutUs />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      {
        path: "be-a-rider",
        element: <BeArider />,
      },
    ],
  },
]);
