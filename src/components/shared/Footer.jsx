import { NavLink } from "react-router";
import { FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

import Logo from "./Logo";
const Footer = () => {
  return (
    <footer className="flex flex-col gap-4  bg-[#0B0B0B] text-white footer-center p-5">
      <aside>
        <div className="flex items-end mb-2">
          <Logo />
          <p className="font-bold -mx-4.5">RZap-Shift</p>
        </div>
        <p className="text-mist-400">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages <br /> to business shipments — we
          deliver on time, every time.
        </p>
      </aside>
      <div className="border-t-2 border-mist-500 border-b-2 border-dashed w-full flex gap-3 justify-center items-center py-2 text-mist-400">
        <NavLink to={"/services"}>Services</NavLink>
        <NavLink to={"/coverage"}>Coverage</NavLink>
        <NavLink to={"/aboutUs"}>About Us</NavLink>
        <NavLink to={"/pricing"}>Pricing</NavLink>
        <NavLink to={"/be-a-rider"}>Be a Rider</NavLink>
      </div>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a className="rounded-full bg-blue-600 p-1">
            <FaLinkedinIn className="text-xl" />
          </a>
          <a className="rounded-full bg-white text-black p-1">
            <RiTwitterXLine className="text-xl" />
          </a>
          <a className="rounded-full bg-blue-500 p-1">
            <FaFacebookF className="text-xl" />
          </a>
          <a className="rounded-full bg-red-600 text-white p-1">
            <IoLogoYoutube className="text-xl" />
          </a>
        </div>
      </nav>
      <p className="text-mist-300">
        Copyright © {new Date().getFullYear()} - RZap Shift all right reserved
      </p>
    </footer>
  );
};

export default Footer;
