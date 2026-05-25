import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Right1 from "../assets/reviewright1.png";
import Right2 from "../assets/reviewright2.png";
import Left from "../assets/reviewleft.png";
import Left2 from "../assets/reviewleft2.png";

import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Steven Hazzard",
    role: "Our Trainer",
    text: "FitMaker transformed my fitness journey completely. The coaches are amazing and the plans are highly personalized.",
    img: Left,
  },
  {
    name: "Michael Harris",
    role: "Gym Member",
    text: "The workout plans and community support helped me stay motivated and consistent every day.",
    img: Left2,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="relative overflow-hidden py-24 text-white">
      {/* Glow */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-red-500/20 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold">
            What Our <span className="text-red-500">Customers Say</span>
          </h2>

          <p className="mt-4 text-sm text-gray-400">
            At This Part You Can See Few Of The Many Positive Reviews Of Our
            Customers.
          </p>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".test-prev",
            nextEl: ".test-next",
          }}
          spaceBetween={30}
          slidesPerView={1}
          className="mt-16"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="grid items-center gap-10 lg:grid-cols-[250px_1fr_200px]">
                {/* Left Image */}
                <div className="group relative">
                  <div className="absolute inset-0 rounded-full bg-red-500/20 blur-3xl" />

                  <div className="relative overflow-hidden rounded-[40px] border border-red-500/20 bg-[#111]">
                    <img
                      src={item.img}
                      alt=""
                      className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Review Card */}
                <div className="group relative overflow-hidden rounded-3xl border border-red-500/20 bg-[#111] p-8 transition duration-500 hover:border-red-500 hover:shadow-[0_0_40px_rgba(255,0,0,0.25)]">
                  <div className="absolute -bottom-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-red-500/0 blur-3xl transition-all duration-500 group-hover:bg-red-500/20" />

                  <h3 className="text-2xl font-bold">{item.name}</h3>

                  <p className="mt-2 text-sm text-red-500">{item.role}</p>

                  <p className="mt-6 leading-8 text-gray-400">
                    {item.text}
                  </p>
                </div>

                {/* Right Images */}
                <div className="flex gap-4">
                  {[1, 2].map((i) => (
                    <div
                      key={i}
                      className="group relative overflow-hidden rounded-3xl border border-red-500/20 bg-[#111]"
                    >
                      <img
                        src={i === 1 ? Right1 : Right2}
                        alt=""
                        className="h-[280px] w-[100px] object-cover transition duration-500 group-hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation */}
        <div className="mt-10 flex justify-center gap-4 ">
          <button className="test-prev flex h-12 w-12 items-center justify-center rounded-full border border-red-500/30 bg-[#111] transition hover:bg-red-500 cursor-pointer">
            ←
          </button>

          <button className="test-next flex h-12 w-12 items-center justify-center rounded-full border border-red-500/30 bg-[#111] transition hover:bg-red-500 cursor-pointer">
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;