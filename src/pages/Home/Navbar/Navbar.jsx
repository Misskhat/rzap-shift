import { Link, NavLink } from "react-router";
import Logo from "../../../components/shared/Logo";

const Navbar = () => {
  const list = (
    <>
      <NavLink
        to={"/services"}
        className={({ isActive }) =>
          isActive ? "border-b text-green-500" : ""
        }
      >
        <li className={"hover:bg-base-300 px-4 py-2 font-semibold rounded"}>
          {" "}
          Services
        </li>
      </NavLink>

      <NavLink
        to={"/coverage"}
        className={({ isActive }) =>
          isActive ? "border-b text-green-500" : ""
        }
      >
        <li className={"hover:bg-base-300 px-4 py-2 font-semibold rounded"}>
          {" "}
          Coverage
        </li>
      </NavLink>

      <NavLink
        to={"/aboutUs"}
        className={({ isActive }) =>
          isActive ? "border-b text-green-500" : ""
        }
      >
        <li className={"hover:bg-base-300 px-4 py-2 font-semibold rounded"}>
          {" "}
          About Us
        </li>
      </NavLink>

      <NavLink
        to={"/pricing"}
        className={({ isActive }) =>
          isActive ? "border-b text-green-500" : ""
        }
      >
        <li className={"hover:bg-base-300 px-4 py-2 font-semibold rounded"}>
          {" "}
          Pricing
        </li>
      </NavLink>

      <NavLink
        to={"/be-a-rider"}
        className={({ isActive }) =>
          isActive ? "border-b text-green-500" : ""
        }
      >
        <li className={"hover:bg-base-300 px-4 py-2 font-semibold rounded"}>
          {" "}
          Be a Rider
        </li>
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 mx-auto">
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="flex flex-col gap-1 dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {list}
          </ul>
        </div>
        <Link to={"/"} className="text-xl">
          <div className="relative">
            <Logo />
          </div>
          <span className="font-bold absolute top-6 lg:top-6 lg:left-8 max-lg:left-22 max-sm:left-15 text-xs md:text-xl text-black">
            RZap-Shift
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-2">{list}</ul>
      </div>
      <div className="navbar-end gap-2">
        <button className="btn btn-xs sm:btn-sm md:btn-md ">Sign In</button>
        <button className="btn bg-[#CAEB66] btn-xs sm:btn-sm md:btn-md">
          Be a rider
        </button>
      </div>
    </div>
  );
};

export default Navbar;
