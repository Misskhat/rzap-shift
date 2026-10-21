import React, { useState } from "react";

// data/aboutContent.js
export const aboutContent = {
  story: [
    "We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.",
    "What began as a small local courier service in 2015 has evolved into a nationwide logistics network. We realized early on that the key to delivery wasn't just speed, but transparency. That is why we built our own tracking infrastructure from the ground up, ensuring our customers never have to guess where their package is.",
    "Today, we handle everything from delicate medical supplies to everyday e-commerce purchases. Despite our growth, our core philosophy remains unchanged: treat every package as if it were our own. We are constantly innovating to reduce carbon emissions and improve delivery times for the future.",
  ],
  mission: [
    "Our mission is to bridge the gap between distance and connection. We strive to provide seamless, end-to-end logistics solutions that empower businesses to grow and allow individuals to share moments without worry.",
    "We are committed to leveraging technology to solve complex logistical challenges. By optimizing routes and utilizing AI-driven predictive analytics, we reduce delivery times and operational costs, passing those savings and efficiencies directly to our clients.",
    "Integrity and reliability are the cornerstones of our operations. We don't just deliver boxes; we deliver trust. Our mission is to maintain a 99.9% on-time delivery rate while maintaining the highest standards of safety and care.",
  ],
  success: [
    "Over the last decade, we have successfully delivered over 5 million packages across the country. Our growth isn't just measured in numbers, but in the relationships we've built with local businesses who rely on us daily.",
    "In 2023, we were awarded the 'National Logistics Excellence Award' for our innovative approach to last-mile delivery. We successfully reduced our carbon footprint by 25% through our electric fleet initiative, proving that efficiency and sustainability can go hand in hand.",
    "Our customer satisfaction score (CSAT) currently sits at 4.9 out of 5 stars. We are most proud of our 92% customer retention rate, a testament to our dedicated support team and the reliability of our real-time tracking systems.",
  ],
  team: [
    "Behind every delivery is a team of dedicated professionals. Our logistics specialists, software engineers, and couriers work around the clock to ensure your parcels move seamlessly through our network.",
    "We foster a culture of innovation and accountability. From our headquarters to our regional hubs, every team member is empowered to solve problems and improve processes. We believe that a happy, well-trained workforce is the key to a happy customer.",
    "Our couriers are the face of our company. They are not just drivers; they are brand ambassadors trained in customer service and safety. We invest heavily in their training and well-being to ensure they represent our values on every road trip.",
  ],
};

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("story");
  const tabs = [
    { id: "story", label: "Story" },
    { id: "mission", label: "Mission" },
    { id: "success", label: "Success" },
    { id: "team", label: "Team & Others" },
  ];
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      <div className="mx-auto px-6 py-16">
        {/* Header Section */}
        <header className="mb-12">
          <h1 className="text-5xl font-extrabold text-secondary mb-4 tracking-tight">
            About Us
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </header>

        {/* Divider */}
        <hr className="border-gray-400 mb-8" />

        {/* Navigation Tabs */}
        <nav className="flex flex-wrap gap-8 mb-8 border-b border-transparent">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-lg font-medium pb-2 transition-all duration-200 relative
                ${
                  activeTab === tab.id
                    ? "text-[#0e3b43] border-b-2 border-[#0e3b43]"
                    : "text-gray-400 border-b-2 border-transparent hover:text-gray-600"
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Content Area */}
        <div className="space-y-6 text-gray-600 leading-7 text-[17px] animate-fadeIn">
          {aboutContent[activeTab].map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
