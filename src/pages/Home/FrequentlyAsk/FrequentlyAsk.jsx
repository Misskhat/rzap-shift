import React from "react";

const FrequentlyAsk = () => {
  return (
    <div className="my-10">
      <div className="py-7 text-center text-secondary">
        <h3 className="text-2xl font-bold">Frequently Asked Question (FAQ)</h3>
        <p className="text-gray-500 py-5">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce <br /> pain, and strengthen your
          body with ease!
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <div className="join join-vertical bg-base-200 outline-2 outline-primary rounded">
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title font-semibold">
              How does this posture corrector work?
            </div>
            <div className="collapse-content text-sm text-gray-500">
              A posture corrector works by providing support and gentle
              alignment to your shoulders, back, and spine, encouraging you to
              maintain proper posture throughout the day. Here’s how it
              typically functions: A posture corrector works by providing
              support and gentle alignment to your shoulders.
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title font-semibold">
              Is it suitable for all ages and body types?
            </div>
            <div className="collapse-content text-sm text-gray-500">
              A posture corrector works by providing support and gentle
              alignment to your shoulders, back, and spine, encouraging you to
              maintain proper posture throughout the day. Here’s how it
              typically functions: A posture corrector works by providing
              support and gentle alignment to your shoulders.
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title font-semibold">
              Does it really help with back pain and posture improvement?
            </div>
            <div className="collapse-content text-sm text-gray-500">
              A posture corrector works by providing support and gentle
              alignment to your shoulders, back, and spine, encouraging you to
              maintain proper posture throughout the day. Here’s how it
              typically functions: A posture corrector works by providing
              support and gentle alignment to your shoulders.
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title font-semibold">
              Does it have smart features like vibration alerts?
            </div>
            <div className="collapse-content text-sm text-gray-500">
              A posture corrector works by providing support and gentle
              alignment to your shoulders, back, and spine, encouraging you to
              maintain proper posture throughout the day. Here’s how it
              typically functions: A posture corrector works by providing
              support and gentle alignment to your shoulders.
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title font-semibold">
              How will I be notified when the product is back in stock?
            </div>
            <div className="collapse-content text-sm text-gray-500">
              A posture corrector works by providing support and gentle
              alignment to your shoulders, back, and spine, encouraging you to
              maintain proper posture throughout the day. Here’s how it
              typically functions: A posture corrector works by providing
              support and gentle alignment to your shoulders.
            </div>
          </div>
        </div>
        <div className="text-center">
          <button
            onClick={() => alert("Email us on: misskhat.hossen@gmail.com")}
            className="btn bg-primary"
          >
            See More FAQ’s
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAsk;
