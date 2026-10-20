import liveTracing from "../../../assets/live-tracking.png";
import safeDelevery from "../../../assets/safe-delivery.png";

const KeyBenefits = () => {
  const keyBenefits = [
    {
      img: liveTracing,
      heading: "Live Parcel Tracking",
      description:
        "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    },
    {
      img: safeDelevery,
      heading: "100% Safe Delivery",
      description:
        "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    },
    {
      img: safeDelevery,
      heading: "24/7 Call Center Support",
      description:
        "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    },
  ];
  return (
    <div className="my-20 border-b-2 border-t-2 border-dashed border-gray-500">
      <div className="my-20 flex flex-col gap-10">
        {keyBenefits.map((benefit, idx) => (
          <div
            key={idx}
            className="flex max-sm:flex-col items-center justify-center gap-10 bg-gray-100 p-8 rounded-2xl"
          >
            <div className="md:border-r-2 border-dashed border-gray-500 pr-10 w-40">
              <img src={benefit.img} alt={benefit.img} />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold">{benefit.heading}</h3>
              <p className="leading-relaxed">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyBenefits;
