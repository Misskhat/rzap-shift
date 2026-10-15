// import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import amazon from "../../../assets/brands/amazon.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import starPeople from "../../../assets/brands/start_people.png";

const Brands = () => {
  const brands = [amazon, casio, moonstar, , randstad, star, starPeople];

  return (
    <div className="my-20">
      <div className="my-20">
        <h3 className="text-2xl font-bold text-center text-gray-700 mb-15">
          We've helped thousand of sales teams
        </h3>
        <Swiper
          loop={true}
          slidesPerView={5}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          modules={[Autoplay]}
        >
          {brands.map((brand, idx) => (
            <SwiperSlide key={idx}>
              <img src={brand} alt={brand} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Brands;
