import React from "react";

const HowItWorkCard = ({ work }) => {
  const { img, heading, description } = work;

  return (
    <div className="bg-base-200 px-8 py-4 rounded-xl flex flex-col h-full shadow-sm">
      <div>
        <img src={img} alt="icon" className="w-12 h-12 object-contain" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 py-2">{heading}</h3>
      <p className="text-gray-600 text-sm leading-relaxed text-left">
        {description}
      </p>
    </div>
  );
};

export default HowItWorkCard;
