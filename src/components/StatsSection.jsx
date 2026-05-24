import React from "react";

const stats = [
  {
    value: "96%",
    title: "Client Satisfaction",
    desc: "Our Members Love Their Results And Experience",
  },
  {
    value: "+5",
    title: "Years Of Experience",
    desc: "Trust In Our Proven Track Record Of Transforming",
  },
  {
    value: "+800",
    title: "Active Members",
    desc: "Join Our Thriving Fitness Community",
  },
  {
    value: "24/7",
    title: "Support Available",
    desc: "Expert Assistance Whenever You Need It",
  },
];

const StatsSection = () => {
  return (
    <section className="relative py-12 sm:py-16 overflow-hidden lg:overflow-visible text-white">
      {/* Glow Effects */}
      <div className="absolute left-[-100px] top-40 sm:top-50 h-52 w-52 sm:h-72 sm:w-72 rounded-full bg-red-600 blur-[100px] sm:blur-[120px]" />
      <div className="absolute right-[-40px] top-20 sm:top-29 h-32 w-32 sm:size-40 rounded-full bg-orange-500 blur-[100px] sm:blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 md:grid-cols-4 md:gap-8 cursor-pointer">
          {stats.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-white/5 p-5 sm:p-6 transition-all duration-500 hover:-translate-y-2 hover:border-red-500 hover:bg-white/[0.05] hover:shadow-[0_0_35px_rgba(255,0,0,0.15)]"
            >
              {/* Hover Glow */}
              <div className="absolute -bottom-10 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-red-500/0 blur-3xl transition-all duration-500 group-hover:bg-red-500/70" />

              <h2 className="relative text-3xl sm:text-4xl font-extrabold text-red-500 transition-all duration-300 group-hover:scale-110">
                {item.value}
              </h2>

              <p className="relative mt-2 text-sm sm:text-base font-semibold text-white transition duration-300 group-hover:text-red-400">
                {item.title}
              </p>

              <p className="relative mt-3 text-xs sm:text-sm leading-relaxed text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;