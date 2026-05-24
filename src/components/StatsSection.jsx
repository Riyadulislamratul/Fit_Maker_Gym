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
    <section className="relative  py-16 text-white">
      {/* Glow Effects */}
      <div className="absolute left-[-100px] top-50 h-72 w-72 rounded-full bg-red-600 blur-[120px]" />
      <div className="absolute right-[-40px] top-29 size-40 rounded-full bg-orange-500 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 cursor-pointer">
          {stats.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-white/5  p-5 transition-all duration-500 hover:-translate-y-2 hover:border-red-500 hover:bg-white/[0.05] hover:shadow-[0_0_35px_rgba(255,0,0,0.15)]"
            >
              {/* Hover Glow */}
              <div className="absolute -bottom-10 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-red-500/0 blur-3xl transition-all duration-500 group-hover:bg-red-500" />

              <h2 className="relative text-4xl font-extrabold text-red-500 transition-all duration-300 group-hover:scale-110">
                {item.value}
              </h2>

              <p className="relative mt-2 text-sm font-semibold text-white transition duration-300 group-hover:text-red-400">
                {item.title}
              </p>

              <p className="relative mt-3 text-xs leading-relaxed text-gray-400">
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