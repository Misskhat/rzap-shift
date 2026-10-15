import React from "react";
import bookingIcon from "../../../assets/bookingIcon.png";
import HowItWorkCard from "./HowItWorkCard";

const HowItWorks = () => {
  const works = [
    {
      img: bookingIcon,
      heading: "Booking Pick & Drop",
      description:
        "Schedule a pickup from your doorstep at your convenience. We handle the first mile to the last mile, ensuring your package gets safely from your hands to its final destination without you ever leaving the house.",
    },
    {
      img: bookingIcon,
      heading: "Cash On Delivery",
      description:
        "Build trust with your customers by offering flexible payment options. We collect cash payments securely right at the moment of delivery and ensure quick, hassle-free settlement directly to your account.",
    },
    {
      img: bookingIcon,
      heading: "Delivery Hub",
      description:
        "Maximize fulfillment efficiency through our centralized sorting stations. Strategically located hubs allow us to batch, route, and accelerate your shipments for lightning-fast regional processing.",
    },
    {
      img: bookingIcon,
      heading: "Booking SME & Corporate",
      description:
        "Scale your business logistics with dedicated bulk uploading tools, volume-based discounted pricing, and an intuitive dashboard designed to streamline operations for commercial and high-volume shippers.",
    },
  ];

  return (
    <div className=" my-10">
      <h3 className="text-secondary text-2xl font-bold">How It Works</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 my-5">
        {works.map((work, idx) => (
          <HowItWorkCard key={idx} work={work}></HowItWorkCard>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
