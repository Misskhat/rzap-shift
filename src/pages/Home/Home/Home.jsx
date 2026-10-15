import React from "react";
import Banner from "../Banner/Banner";
import HowItWorks from "../HowItWorks/HowItWorks";
import OurServices from "../OurServices/OurServices";
import Brands from "../Brands/Brands";
import KeyBenefits from "../KeyBenefits/KeyBenefits";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <OurServices></OurServices>
      <Brands></Brands>
      <KeyBenefits></KeyBenefits>
    </div>
  );
};

export default Home;
