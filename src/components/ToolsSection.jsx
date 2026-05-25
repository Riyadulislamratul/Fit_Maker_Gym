import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const tools = [
  {
    title: "CALORIE CALCULATOR",
  },
  {
    title: "BMI CALCULATOR",
  },
  {
    title: "MACRONUTRIENT CALCULATOR",
  },
  {
    title: "SETTING TOOL",
  },
  {
    title: "BODYFAT CALCULATOR",
  },
];

const ToolsSection = () => {
  return (
    <section className="relative overflow-hidden lg:overflow-visible py-24 text-white">
      {/* Glossy Glow */}
      <div className="absolute left-[-120px] top-10 h-80 w-80 rounded-full bg-red-500 blur-[120px]" />
      <div className="absolute right-[-120px] bottom-0 h-80 w-80 rounded-full bg-orange-500/20 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-extrabold">
              Our Fitness <span className="text-red-500">Tools</span>
            </h2>

            <p className="mt-4 text-sm text-gray-400">
              Access A Variety Of Tools To Help You Reach Your Fitness Goals
              More Effectively
            </p>
          </div>

          <div className="flex gap-3">
            <button className="tools-prev flex h-10 w-10 items-center justify-center rounded-full border border-red-500/30 bg-[#111] transition hover:bg-red-500 hover:text-white">
              ←
            </button>

            <button className="tools-next flex h-10 w-10 items-center justify-center rounded-full border border-red-500/30 bg-[#111] transition hover:bg-red-500 hover:text-white">
              →
            </button>
          </div>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".tools-prev",
            nextEl: ".tools-next",
          }}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="mt-14 "
        >
          {tools.map((tool, index) => (
            <SwiperSlide key={index}>
              <div className="py-20">
                <div className="group relative overflow-hidden  rounded-3xl border cursor-pointer border-red-500 bg-[#111] p-6 transition-all duration-500 hover:-translate-y-3 hover:border-red-500 hover:shadow-[0_0_40px_rgba(255,0,0,0.25)]">
                {/* Glow */}
                <div className="absolute -bottom-10 left-1/2 h-28 w-28 -translate-x-1/2 rounded-full bg-red-500 blur-3xl transition-all duration-500 group-hover:bg-red-500" />

                {/* Image */}
                <div className="flex h-32 items-center justify-center rounded-2xl border border-red-500/30 bg-black">
                  <img src="" alt="" className="h-full w-full object-cover" />
                </div>

                <h3 className="mt-5 text-center text-sm font-bold transition group-hover:text-red-500">
                  {tool.title}
                </h3>

                <button className="mt-5 flex items-center gap-2 text-xs text-gray-400 transition group-hover:text-red-400">
                  Learn More →
                </button>
              </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ToolsSection;