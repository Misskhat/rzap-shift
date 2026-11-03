import authImage from "../assets/authImage.png";
import { Link, Outlet } from "react-router";
import Logo from "../components/shared/Logo";

const AuthLayout = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="px-2 my-2">
        <Link to={"/"}>
          <nav className="flex items-center">
            <Logo />
            <p className="font-bold -ml-3 mt-3 text-xl">RZap-Shift</p>
          </nav>
        </Link>
      </div>
      <h2 className="text-4xl font-bold text-center">
        Hi, Welcome to <span className="text-xl text-primary">RZap Shift</span>{" "}
        Solution.
      </h2>
      <div className="flex justify-center my-20 gap-5">
        <div className="flex-1 border-2">
          <Outlet />
        </div>
        <div className="flex-1 border-2">
          <img src={authImage} alt="authImage" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
