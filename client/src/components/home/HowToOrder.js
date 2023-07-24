import React from "react";

function HowToOrder() {
  const steps = [
    {
      number: "01",
      heading: "Order",
      content: "Choose your favorite products, and add them to cart.",
    },
    {
      number: "02",
      heading: "Checkout",
      content:
        "Complete the payment online using Paytm, Phonepe, Google pay or other UPI apps.",
    },
    {
      number: "03",
      heading: "Delivery",
      content:
        "Get your products delivered all around Indore at mentioned Date and time.",
    },
    {
      number: "04",
      heading: "Enjoy",
      content: "Enjoy your scrumptious delicacies and give us a review.",
    },
  ];

  return (
    <div className="flex items-center justify-center w-full how-to-order bg-no-repeat">
      <div className="py-12 sm:py-24 w-11/12 md:w-10/12 lg:w-5/6 xl:w-5/6 2xl:w-4/6 flex flex-col items-center justify-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-inter font-black text-white">
          How To Order
        </h1>
        <div className="flex flex-wrap justify-center mt-4 sm:mt-20 w-full gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/4 relative flex-order"
            >
              <h1 className="font-inter text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-regular text-white">
                {step.number}
              </h1>
              <hr className="w-full self-center my-6" />

              <h3 className="font-inter md:text-xl lg:text-2xl my-4 font-semibold text-white">
                {step.heading}
              </h3>
              <p className="text-sm lg:text-sm font-regular text-white">{step.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HowToOrder;
