import React from "react";

const KeyBenefitCard = ({ benefit }) => {
  const { img, heading, description } = benefit;
  return (
    <div className="flex w-full flex-col items-center gap-6 rounded-[24px] bg-[#fafafa] p-6 sm:flex-row sm:gap-8 sm:p-8 lg:gap-12">
      {/* Person image */}
      <div className="flex shrink-0 items-center justify-center sm:w-[220px]">
        <img
          src={img}
          alt={heading}
          className="h-40 w-40 object-contain sm:h-48 sm:w-48"
        />
      </div>

      {/* Dashed divider */}
      <div className="hidden h-[150px] border-l-2 border-dashed border-[#8baeb2] sm:block" />

      {/* Heading and description */}
      <div className="flex-1 text-center sm:text-left">
        <h2 className="mb-4 text-xl font-bold text-[#003f45] sm:text-2xl">
          {heading}
        </h2>

        <p className="max-w-[850px] text-sm leading-7 text-[#666666] sm:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export default KeyBenefitCard;
