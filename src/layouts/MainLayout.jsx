import Navbar from "../pages/Home/Navbar/Navbar";
import Home from "../pages/Home/Home/Home";
import Footer from "../components/shared/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar></Navbar>
      <div className="container">
        <Home></Home>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
