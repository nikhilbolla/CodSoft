import React from "react";
import PricingCards from "./PriceCard/PricingCards";

export default function Pricing() {
  const plans = [
    {
      heading: "Starter",
      description: "Best option for personal use & for your next project.",
      price: 29,
      features: [
        "User-friendly interface",
        "Basic tools",
        "Affordable pricing",
        "Unlimited storage",
        "Mobile app access",
        "24/7 email support",
      ],
    },
    {
      heading: "Advanced",
      description: "Ideal for businesses and professionals.",
      price: 69,
      features: [
        "Advanced features",
        "Priority support",
        "Customization options",
        "Collaboration tools",
        "Data analytics",
        "API integration",
      ],
    },
    {
      heading: "Enterprise",
      description: "Tailored solutions for large organizations.",
      price: 149,
      features: [
        "Scalability",
        "Comprehensive support",
        "Dedicated account manager",
        "Enterprise-grade security",
        "Multi-location deployment",
        "SLA guarantees",
      ],
    },
  ];

  return (
    
      <section class="bg-white text-slate-900">
        <div class="py-8 px-10 mx-auto max-w-screen-xl lg:py-16 lg:px-14">
          <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
              Designed for business teams like yours
            </h2>
            <p class="mb-5 font-light text-gray-500 sm:text-xl ">
              Here at Flowbite we focus on markets where technology, innovation,
              and capital can unlock long-term value and drive economic growth.
            </p>
          </div>
          <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            {plans.map((plan) => (
              <PricingCards {...plan} />
            ))}
          </div>
        </div>
      </section>
    
  );
}
