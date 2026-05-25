import React, { useState } from "react";

const faqs = [
  {
    question: "What Is FitMaker And How Can It Help Me Reach My Fitness Goals?",
    answer:
      "FitMaker is an online fitness platform that offers personalized workout plans, expert coaching, and comprehensive nutritional guidance.",
  },
  {
    question: "How Do I Get Started With A Workout Plan On FitMaker?",
    answer:
      "Simply sign up, choose your fitness goal, and our trainers will recommend a suitable plan for you.",
  },
  {
    question: "What Is Included In The Custom Plan?",
    answer:
      "The custom plan includes personalized workouts, nutrition coaching, trainer support, and progress tracking.",
  },
  {
    question: "Can I Change My Plan After Signing Up?",
    answer:
      "Yes, you can upgrade or switch your plan anytime from your account settings.",
  },
  {
    question: "What Kind Of Support Can I Expect From My Trainer?",
    answer:
      "You’ll receive guidance, weekly check-ins, progress reviews, and motivational support from expert trainers.",
  },
];

const FaqSection = () => {
  // null means everything closed initially
  const [active, setActive] = useState(null);

  const toggleFaq = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden lg:overflow-visible py-24 text-white">
      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-red-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <h2 className="text-center text-4xl font-extrabold">
          FAQ
        </h2>

        <div className="mt-14 space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-2xl border bg-[#111] transition-all duration-500 ${
                active === index
                  ? "border-red-500 shadow-[0_0_25px_rgba(255,0,0,0.15)]"
                  : "border-orange-500/50"
              }`}
            >
              {/* Question */}
              <button
                onClick={() => toggleFaq(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left transition duration-300 hover:bg-red-500/10 cursor-pointer"
              >
                <span className="text-sm font-semibold md:text-base">
                  {faq.question}
                </span>

                {/* Icon */}
                <span
                  className={`flex h-8 w-8  justify-center rounded-full border border-orange-500/40 text-xl text-orange-400 transition-all duration-300 ${
                    active === index
                      ? "rotate-180 border-red-500 text-red-500"
                      : ""
                  }`}
                >
                  {active === index ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  active === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="border-t border-red-500 px-6 py-5 text-sm leading-7 text-gray-400">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;