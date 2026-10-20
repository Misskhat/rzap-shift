import locationMerchant from "../../../assets/location-merchant.png";
import beAMerchantBg from "../../../assets/be-a-merchant-bg.png";

const Merchant = () => {
  return (
    <div className="relative my-20 bg-secondary md:p-10 p-5 rounded-xl md:flex items-center justify-around">
      <div className="absolute top-0 left-2 z-0 max-sm:hidden">
        <img src={beAMerchantBg} alt="" />
      </div>
      <div className=" flex flex-col items-center justify-center md:gap-4 gap-2 flex-1 z-20">
        <h3 className="md:text-2xl text-xl max-sm:text-center font-bold text-white">
          Merchant and Customer Satisfaction is Our First Priority
        </h3>
        <p className="text-gray-500 md:w-3/4 max-sm:text-center">
          We offer the lowest delivery charge with the highest value along with
          100% safety of your product. Pathao courier delivers your parcels in
          every corner of Bangladesh right on time.
        </p>
        <div className="flex gap-2 max-sm:flex-col">
          <button
            onClick={() =>
              alert("features not yet applied. Very soon it will be available.")
            }
            className="btn bg-primary font-bold rounded-2xl outline-none max-sm:w-full"
          >
            Become a Merchant
          </button>
          <button
            onClick={() =>
              alert("features not yet applied. Very soon it will be available.")
            }
            className="btn bg-transparent text-primary outline-1 hover:bg-primary hover:text-black rounded-2xl outline-none"
          >
            Earn with ZapShift Courier
          </button>
        </div>
      </div>
      <div className="max-sm:pt-5">
        <img src={locationMerchant} alt="" />
      </div>
    </div>
  );
};

export default Merchant;
