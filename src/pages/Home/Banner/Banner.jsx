import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../../../assets/banner/banner1.png";
import banner2 from "../../../assets/banner/banner2.png";
import banner3 from "../../../assets/banner/banner3.png";
import { Link } from "react-router";

const Banner = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showArrows={false}
      interval={2500}
      showStatus={false}
    >
      <div className="relative w-full">
        <img src={banner1} />
        <div className=" absolute bottom-24 left-24 flex gap-3">
          <Link className="btn bg-primary rounded-xl outline-1 outline-primary max-sm:hidden">
            Track Your Parcel
          </Link>
          <Link
            to={"/be-a-rider"}
            className="btn rounded-xl bg-white outline-1 outline-primary max-sm:hidden"
          >
            Be A Rider
          </Link>
        </div>
      </div>
      <div className="relative w-full">
        <img src={banner2} />
        <div className=" absolute bottom-24 left-24 flex gap-3">
          <Link className="btn bg-primary rounded-xl outline-1 outline-primary max-sm:hidden">
            Track Your Parcel
          </Link>
          <Link
            to={"/be-a-rider"}
            className="btn rounded-xl bg-white outline-1 outline-primary max-sm:hidden"
          >
            Be A Rider
          </Link>
        </div>
      </div>
      <div className="relative w-full">
        <img src={banner3} />
        <div className=" absolute bottom-32 left-24 flex gap-3">
          <Link className="btn bg-primary rounded-xl outline-1 outline-primary max-sm:hidden">
            Track Your Parcel
          </Link>
          <Link
            to={"/be-a-rider"}
            className="btn rounded-xl bg-white outline-1 outline-primary max-sm:hidden"
          >
            Be A Rider
          </Link>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
