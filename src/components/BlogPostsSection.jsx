import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Diet from "../assets/diet.jpg";
import GYM1 from "../assets/gym1.jpg";
import GYM2 from "../assets/gym2.jpg";
import GYM3 from "../assets/gym3.jpg";
import GYM4 from "../assets/gym4.jpg";

import "swiper/css";
import "swiper/css/navigation";

const blogs = [
  {
    title: "5 Essential Exercises For Building Muscle",
    category: "Strength Training",
    image: GYM1,
  },
  {
    title: "The Ultimate Guide To A Balanced Diet",
    category: "Nutrition",
    image: Diet,
  },
  {
    title: "The Benefits Of HIIT Training",
    category: "Fitness",
    image: GYM2,
  },
  {
    title: "Home Workouts For Busy People",
    category: "Home Workout",
    image: GYM3,
  },
  {
    title: "How To Always Stay Motivated",
    category: "Motivation",
    image: GYM4,
  },
];

const BlogPostsSection = () => {
  return (
    <section className="relative overflow-hidden lg:overflow-visible py-24 text-white">
      {/* Glow */}
      <div className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-red-500/20 blur-[120px]" />
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-orange-500/20 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-extrabold">
              Fitmaker <span className="text-red-500">Blog Posts</span>
            </h2>

            <p className="mt-4 text-sm text-gray-400">
              Discover Essential Tips To Maximize Your Workout Results And Reach
              Your Fitness Goals Faster.
            </p>
          </div>

          <div className="flex gap-3">
            <button className="blog-prev flex h-10 w-10 items-center justify-center rounded-full border border-red-500/30 bg-[#111] transition hover:bg-red-500 cursor-pointer duration-500">
              ←
            </button>

            <button className="blog-next flex h-10 w-10 items-center justify-center rounded-full border border-red-500/30 bg-[#111] transition hover:bg-red-500 cursor-pointer duration-500">
              →
            </button>
          </div>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".blog-prev",
            nextEl: ".blog-next",
          }}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mt-16"
        >
          {blogs.map((blog, index) => (
            <SwiperSlide key={index}>
              <div className="py-20">
                <div className="group relative overflow-hidden rounded-3xl border cursor-pointer border-red-500/20 bg-[#111] transition-all duration-500 hover:-translate-y-3 hover:border-red-500 hover:shadow-[0_0_40px_rgba(255,0,0,0.25)]">
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-[560px] w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 p-6">
                  <span className="rounded-full bg-red-500/20 px-4 py-1 text-xs text-red-400">
                    {blog.category}
                  </span>

                  <h3 className="mt-4 text-xl font-bold transition group-hover:text-red-500">
                    {blog.title}
                  </h3>

                  <button className="mt-5 text-sm text-gray-300 transition hover:text-red-500">
                    Learn More →
                  </button>
                </div>

                {/* Glow */}
                <div className="absolute -bottom-10 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-red-500/0 blur-3xl transition-all duration-500 group-hover:bg-red-500/30" />
              </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BlogPostsSection;