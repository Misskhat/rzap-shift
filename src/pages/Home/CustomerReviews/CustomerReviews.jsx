import { use } from "react";
import customerTop from "../../../assets/customer-top.png";
import TestimonialCard from "./TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

const reviewsPromise = fetch("/reviews.json").then((res) => res.json());

const CustomerReviews = () => {
  const reviews = use(reviewsPromise);
  console.log(reviews);
  return (
    <div className="my-20">
      <div className="flex items-center justify-center py-6">
        <img src={customerTop} alt="customer-section-img" className="w-60" />
      </div>
      <div className="text-center py-6">
        <h3 className="text-2xl font-bold text-secondary">
          What our customers are sayings
        </h3>
        <p className="py-3 text-gray-500">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce <br /> pain, and strengthen your
          body with ease!
        </p>
      </div>
      <div className="max-sm:hidden">
        <Swiper
          loop={true}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 30,
            stretch: "50%",
            depth: 200,
            modifier: 1,
            scale: 0.75,
            slideShadows: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <TestimonialCard review={review}></TestimonialCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="md:hidden">
        <Swiper
          loop={true}
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          modules={[Autoplay]}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <TestimonialCard review={review}></TestimonialCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CustomerReviews;
