import React, { useState } from "react";

const monthlyPlans = [
  {
    title: "PRO PLAN",
    price: "99",
    active: false,
    features: [
      "Access To All Of Our Exercise Videos",
      "Progress Tracking",
      "Supportive Online Community",
      "Advanced Personalized Workout Plans",
      "Comprehensive Nutrition Coaching",
      "Access To Advanced Workout Programs",
    ],
  },
  {
    title: "CUSTOM PLAN",
    price: "149",
    active: true,
    features: [
      "Access To All Of Our Exercise Videos",
      "Progress Tracking",
      "Supportive Online Community",
      "Fully Customized Workout And Nutrition Plan",
      "Weekly Check-ins With Your Trainer",
      "Access To All Platform Features",
    ],
  },
  {
    title: "BEGINNER PLAN",
    price: "49",
    active: false,
    features: [
      "Access To All Of Our Exercise Videos",
      "Progress Tracking",
      "Supportive Online Community",
      "Personalized Workout Plans",
      "Basic Nutrition Guidance",
      "Access To Group Fitness Classes",
    ],
  },
];

const annualPlans = [
  {
    title: "PRO YEARLY",
    price: "999",
    active: false,
    features: [
      "Unlimited Exercise Videos",
      "Full Progress Analytics",
      "VIP Community Access",
      "Advanced Personalized Plans",
      "Nutrition Coaching",
      "Premium Workout Programs",
    ],
  },
  {
    title: "ELITE YEARLY",
    price: "1499",
    active: true,
    features: [
      "Everything In Pro",
      "1-on-1 Coaching",
      "Custom Meal Plans",
      "Weekly Trainer Meetings",
      "Priority Support",
      "Exclusive Fitness Merchandise",
    ],
  },
  {
    title: "STARTER YEARLY",
    price: "499",
    active: false,
    features: [
      "Workout Video Access",
      "Progress Tracking",
      "Basic Nutrition Guides",
      "Community Access",
      "Beginner Friendly Programs",
      "Monthly Fitness Reports",
    ],
  },
];

const PlansSection = () => {
  const [billing, setBilling] = useState("monthly");

  const plans = billing === "monthly" ? monthlyPlans : annualPlans;

  return (
    <section className="relative overflow-hidden lg:overflow-visible py-24 text-white">
      {/* Glow Effects */}
      <div className="absolute lg:left-[-100px] lg:bottom-0 h-72 w-72 rounded-full bg-red-500 blur-[120px] bottom-40 left-[-100px]" />
      <div className="absolute right-[-100px] -top-25 h-72 w-72 rounded-full bg-orange-500 blur-[120px] top-58 right-[-100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold">
            Our <span className="text-red-500">Plans</span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm text-gray-400">
            Select The Plan That Suits Your Fitness Goals And Let Our Expert
            Coaches Guide You Every Step Of The Way.
          </p>
        </div>

        {/* Toggle */}
        <div className="mt-8 flex justify-center cursor-pointer">
          <div className="flex rounded-full border border-red-500 bg-[#111] p-1">
            <button
              onClick={() => setBilling("monthly")}
              className={`rounded-full px-8 py-2 text-sm font-semibold transition-all duration-300 ${
                billing === "monthly"
                  ? "bg-red-600 text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setBilling("annually")}
              className={`rounded-full px-8 py-2 text-sm font-semibold transition-all duration-300 ${
                billing === "annually"
                  ? "bg-red-600 text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Annually
            </button>
          </div>
        </div>

        {/* Plans */}
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl border bg-[#111] p-8 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] ${
                plan.active
                  ? "border-red-500 shadow-[0_0_40px_rgba(255,0,0,0.25)] hover:shadow-[0_0_60px_rgba(255,0,0,0.45)]"
                  : "border-orange-500/40 hover:border-orange-500 hover:shadow-[0_0_40px_rgba(255,120,0,0.2)]"
              }`}
            >
              {/* Animated Glow */}
              <div
                className={`absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full blur-3xl transition-all duration-500 ${
                  plan.active
                    ? "bg-red-500/20 group-hover:bg-red-500/40"
                    : "bg-orange-500/10 group-hover:bg-orange-500/30"
                }`}
              />

              <p className="text-center text-sm text-orange-400">
                Package
              </p>

              <h3 className="mt-4 text-center text-3xl font-extrabold transition duration-300 group-hover:text-red-500">
                {plan.title}
              </h3>

              <div className="mt-6 text-center">
                <span className="inline-block text-5xl font-extrabold transition duration-300 group-hover:scale-110">
                  {plan.price}
                </span>

                <span className="ml-1 text-gray-400">
                  $ {billing === "monthly" ? "USDT / Month" : "USDT / Year"}
                </span>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-gray-300 transition duration-300 group-hover:text-gray-100"
                  >
                    <span className="mt-1 h-2 w-2 rounded-full bg-red-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`mt-10 w-full rounded-full py-4 text-sm font-bold transition-all duration-300 hover:scale-105 ${
                  plan.active
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-orange-500 hover:bg-orange-600"
                }`}
              >
                Choose This Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;