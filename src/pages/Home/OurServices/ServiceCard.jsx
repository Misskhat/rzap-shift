import React from "react";

const ServiceCard = ({ service }) => {
  const { img, heading, description } = service;
  return (
    <div className="bg-white py-12 px-8 text-center rounded-xl flex flex-col gap-2 hover:bg-primary transition-all duration-300 ease-in-out">
      <div className="flex items-center justify-center">
        <img src={img} alt="serviceIcon" className="w-12 h-12" />
      </div>
      <h3 className="text-xl font-bold">{heading}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;
