import locationMerchant from "../../../assets/location-merchant.png";
import beAMerchantBg from "../../../assets/be-a-merchant-bg.png";

const Merchant = () => {
  return (
    <div className="relative my-20 bg-secondary p-10 rounded-xl flex items-center justify-around">
      <div className="absolute top-0 left-2 z-0">
        <img src={beAMerchantBg} alt="" />
      </div>
      <div className=" flex flex-col gap-4 flex-1 z-20">
        <h3 className="text-2xl font-bold text-white">
          Merchant and Customer Satisfaction is Our First Priority
        </h3>
        <p className="text-gray-500 w-3/4">
          We offer the lowest delivery charge with the highest value along with
          100% safety of your product. Pathao courier delivers your parcels in
          every corner of Bangladesh right on time.
        </p>
        <div className="space-x-2">
          <button className="btn bg-primary font-bold rounded-2xl outline-none">
            Become a Merchant
          </button>
          <button
            onClick={() =>
              alert("feture not yet applied. Very soon it will be available.")
            }
            className="btn bg-transparent text-primary outline-1 hover:bg-primary hover:text-black rounded-2xl outline-none"
          >
            Earn with ZapShift Courier
          </button>
        </div>
      </div>
      <div className="">
        <img src={locationMerchant} alt="" />
      </div>
    </div>
  );
};

export default Merchant;
