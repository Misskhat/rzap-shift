import logo from "../../assets/logo.png";

const Logo = () => {
  return (
    <>
      <div className="md:relative">
        <div>
          <img src={logo} alt="logo" className="max-sm:hidden" />
        </div>
      </div>
      <span className="font-bold absolute top-6 lg:top-6 lg:left-8 max-lg:left-22 max-sm:left-15 text-xs md:text-xl text-black">
        RZap-Shift
      </span>
    </>
  );
};

export default Logo;
