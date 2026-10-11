import Navbar from "../pages/Home/Navbar/Navbar";
import Home from "../pages/Home/Home/Home";
import Footer from "../components/shared/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar></Navbar>
      <div className="container mx-auto flex-1">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
