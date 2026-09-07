import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

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
    link: "https://www.healthline.com/health/fitness/how-to-gain-muscle",
  },
  {
    title: "The Ultimate Guide To A Balanced Diet",
    category: "Nutrition",
    image: Diet,
    link: "https://www.healthline.com/nutrition/tips-for-eating-a-balanced-diet",
  },
  {
    title: "The Benefits Of HIIT Training",
    category: "Fitness",
    image: GYM2,
    link: "https://www.healthline.com/health/everyday-fitness/hiit-at-home",
  },
  {
    title: "Home Workouts For Busy People",
    category: "Home Workout",
    image: GYM3,
    link: "https://www.healthline.com/health/fitness-exercise/at-home-workouts",
  },
  {
    title: "How To Always Stay Motivated",
    category: "Motivation",
    image: GYM4,
    link: "https://www.healthline.com/health/exercise-fitness/how-to-motivate-yourself-to-workout",
  },
];

const BlogPostsSection = () => {
  return (
    <section
      id="blog"
      className="
        relative
        overflow-hidden
        py-24
        text-white
        lg:overflow-visible
      "
    >
      {/* =====================================================
          BACKGROUND GLOWS
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-72
          w-72
          rounded-full
          bg-red-500/20
          blur-[120px]
          animate-[blogGlow1_6s_ease-in-out_infinite]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          h-72
          w-72
          rounded-full
          bg-orange-500/20
          blur-[120px]
          animate-[blogGlow2_7s_ease-in-out_infinite]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-[35%]
          top-[35%]
          h-40
          w-40
          rounded-full
          bg-red-500/10
          blur-[100px]
          animate-[blogGlow3_8s_ease-in-out_infinite]
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div
          className="
            flex
            flex-col
            gap-6
            animate-[blogHeader_0.9s_ease-out]
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          <div>
            <h2
              className="
                text-4xl
                font-extrabold
                transition-[letter-spacing]
                duration-500
                ease-out
                hover:tracking-wide
              "
            >
              Fitmaker{" "}
              <span
                className="
                  inline-block
                  text-red-500
                  transition-transform
                  duration-500
                  ease-out
                  hover:scale-105
                "
              >
                Blog Posts
              </span>
            </h2>

            <p
              className="
                mt-4
                max-w-3xl
                text-sm
                leading-6
                text-gray-400
              "
            >
              Discover Essential Tips To Maximize Your Workout Results And
              Reach Your Fitness Goals Faster.
            </p>
          </div>

          {/* =================================================
              NAVIGATION
          ================================================= */}

          <div className="flex gap-3">

            {/* Previous */}

            <button
              type="button"
              aria-label="Previous blog post"
              className="
                blog-prev
                group
                flex
                h-10
                w-10
                cursor-pointer
                items-center
                justify-center
                rounded-full
                border
                border-red-500/30
                bg-[#111]

                transition-[transform,background-color,border-color]
                duration-500
                ease-out

                hover:scale-110
                hover:border-red-500
                hover:bg-red-500
                active:scale-90
              "
            >
              <span
                className="
                  transition-transform
                  duration-300
                  ease-out
                  group-hover:-translate-x-1
                "
              >
                ←
              </span>
            </button>

            {/* Next */}

            <button
              type="button"
              aria-label="Next blog post"
              className="
                blog-next
                group
                flex
                h-10
                w-10
                cursor-pointer
                items-center
                justify-center
                rounded-full
                border
                border-red-500/30
                bg-[#111]

                transition-[transform,background-color,border-color]
                duration-500
                ease-out

                hover:scale-110
                hover:border-red-500
                hover:bg-red-500
                active:scale-90
              "
            >
              <span
                className="
                  transition-transform
                  duration-300
                  ease-out
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </button>

          </div>
        </div>

        {/* =====================================================
            SWIPER
        ====================================================== */}

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: ".blog-prev",
            nextEl: ".blog-next",
          }}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          speed={900}
          spaceBetween={20}
          grabCursor={true}
          watchSlidesProgress={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mt-16"
        >
          {blogs.map((blog, index) => (
            <SwiperSlide key={blog.title}>

              {/* =================================================
                  SLIDE WRAPPER
              ================================================= */}

              <div className="px-1 py-20">

                {/* =================================================
                    BLOG CARD
                ================================================= */}

                <div
                  className="
                    group
                    relative
                    cursor-pointer
                    overflow-hidden
                    rounded-3xl
                    border
                    border-red-500/20
                    bg-[#111]

                    /* IMPORTANT:
                       Do NOT use transition-all.
                       Only animate what actually changes.
                    */
                    transition-[transform,border-color,box-shadow]
                    duration-700
                    ease-[cubic-bezier(0.22,1,0.36,1)]

                    hover:-translate-y-4
                    hover:border-red-500
                    hover:shadow-[0_0_40px_rgba(255,0,0,0.25)]

                    animate-[blogCardIn_0.8s_ease-out_both]
                  "
                  style={{
                    animationDelay: `${index * 120}ms`,
                  }}
                >

                  {/* =================================================
                      TOP LIGHT LINE
                  ================================================= */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      left-0
                      top-0
                      z-20
                      h-[2px]
                      w-0
                      bg-gradient-to-r
                      from-red-500
                      via-orange-500
                      to-red-500

                      transition-[width]
                      duration-700
                      ease-[cubic-bezier(0.22,1,0.36,1)]

                      group-hover:w-full
                    "
                  />

                  {/* =================================================
                      IMAGE
                  ================================================= */}

                  <div className="relative overflow-hidden">

                    <img
                      src={blog.image}
                      alt={blog.title}
                      loading={index === 0 ? "eager" : "lazy"}
                      decoding="async"
                      className="
                        h-[560px]
                        w-full
                        object-cover

                        transform-gpu
                        will-change-transform

                        transition-transform
                        duration-[1100ms]
                        ease-[cubic-bezier(0.16,1,0.3,1)]

                        group-hover:scale-110
                        group-hover:rotate-[1deg]
                      "
                    />

                    {/* Image darkening */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-black/10

                        transition-opacity
                        duration-700
                        ease-out

                        group-hover:opacity-0
                      "
                    />

                    {/* Image overlay */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black
                        via-black/30
                        to-transparent
                      "
                    />

                    {/* =================================================
                        IMAGE SHINE
                    ================================================= */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        -left-[120%]
                        top-0
                        h-full
                        w-[70%]
                        rotate-12
                        bg-gradient-to-r
                        from-transparent
                        via-white/10
                        to-transparent

                        transition-[left]
                        duration-[1100ms]
                        ease-[cubic-bezier(0.22,1,0.36,1)]

                        group-hover:left-[130%]
                      "
                    />

                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================= */}

                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      right-0
                      z-10
                      p-6
                    "
                  >

                    {/* Category */}

                    <span
                      className="
                        inline-block
                        rounded-full
                        border
                        border-red-500/20
                        bg-red-500/20
                        px-4
                        py-1
                        text-xs
                        text-red-400

                        transition-[transform,background-color,border-color,color]
                        duration-500
                        ease-out

                        group-hover:scale-105
                        group-hover:border-red-500/50
                        group-hover:bg-red-500/30
                        group-hover:text-red-300
                      "
                    >
                      {blog.category}
                    </span>

                    {/* Title */}

                    <h3
                      className="
                        mt-4
                        text-xl
                        font-bold
                        leading-7

                        transition-[transform,color]
                        duration-500
                        ease-out

                        group-hover:translate-x-1
                        group-hover:text-red-500
                      "
                    >
                      {blog.title}
                    </h3>

                    {/* Learn More */}

                    <a
                      href={blog.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Read ${blog.title}`}
                      onClick={(e) => e.stopPropagation()}
                      className="
                        mt-5
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        text-gray-300

                        transition-[color,gap]
                        duration-500
                        ease-out

                        hover:gap-4
                        hover:text-red-500
                      "
                    >
                      <span>Learn More</span>

                      <span
                        className="
                          transition-transform
                          duration-500
                          ease-out

                          group-hover:translate-x-1
                        "
                      >
                        →
                      </span>
                    </a>

                  </div>

                  {/* =================================================
                      BOTTOM GLOW
                  ================================================= */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -bottom-10
                      left-1/2
                      h-24
                      w-24
                      -translate-x-1/2
                      rounded-full
                      bg-red-500/0
                      blur-3xl

                      transition-[transform,background-color]
                      duration-700
                      ease-out

                      group-hover:scale-150
                      group-hover:bg-red-500/40
                    "
                  />

                  {/* =================================================
                      CORNER GLOW
                  ================================================= */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-16
                      -top-16
                      h-32
                      w-32
                      rounded-full
                      bg-orange-500/0
                      blur-3xl

                      transition-[transform,background-color]
                      duration-700
                      ease-out

                      group-hover:scale-150
                      group-hover:bg-orange-500/20
                    "
                  />

                </div>
              </div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      {/* =====================================================
          CUSTOM ANIMATIONS
      ====================================================== */}

      <style>
        {`

          /* ===============================================
             HEADER
          =============================================== */

          @keyframes blogHeader {
            from {
              opacity: 0;
              transform: translate3d(0, -35px, 0);
            }

            to {
              opacity: 1;
              transform: translate3d(0, 0, 0);
            }
          }


          /* ===============================================
             CARD ENTRANCE
          =============================================== */

          @keyframes blogCardIn {
            from {
              opacity: 0;
              transform: translate3d(0, 50px, 0) scale(0.94);
            }

            to {
              opacity: 1;
              transform: translate3d(0, 0, 0) scale(1);
            }
          }


          /* ===============================================
             LEFT RED GLOW
          =============================================== */

          @keyframes blogGlow1 {
            0% {
              transform: translate3d(0, 0, 0) scale(1);
              opacity: 0.5;
            }

            50% {
              transform: translate3d(60px, -40px, 0) scale(1.2);
              opacity: 0.8;
            }

            100% {
              transform: translate3d(0, 0, 0) scale(1);
              opacity: 0.5;
            }
          }


          /* ===============================================
             RIGHT ORANGE GLOW
          =============================================== */

          @keyframes blogGlow2 {
            0% {
              transform: translate3d(0, 0, 0) scale(1);
              opacity: 0.4;
            }

            50% {
              transform: translate3d(-50px, 50px, 0) scale(1.25);
              opacity: 0.7;
            }

            100% {
              transform: translate3d(0, 0, 0) scale(1);
              opacity: 0.4;
            }
          }


          /* ===============================================
             CENTER GLOW
          =============================================== */

          @keyframes blogGlow3 {
            0% {
              transform: translate3d(0, 0, 0);
              opacity: 0.2;
            }

            50% {
              transform: translate3d(80px, -60px, 0);
              opacity: 0.5;
            }

            100% {
              transform: translate3d(0, 0, 0);
              opacity: 0.2;
            }
          }


          /* ===============================================
             MOBILE PERFORMANCE
          =============================================== */

          @media (max-width: 768px) {
            #blog [class*="blur-"] {
              --tw-blur: blur(50px);
            }

            #blog .group:hover {
              box-shadow: 0 0 25px rgba(255, 0, 0, 0.18);
            }
          }


          /* ===============================================
             REDUCED MOTION
          =============================================== */

          @media (prefers-reduced-motion: reduce) {
            *,
            *::before,
            *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
              scroll-behavior: auto !important;
            }
          }

        `}
      </style>
    </section>
  );
};

export default BlogPostsSection;