import logo from "../../assets/logo.png";

const Logo = () => {
  return (
    <div>
      <img src={logo} alt="logo" className="max-sm:hidden" />
    </div>
  );
};

export default Logo;
