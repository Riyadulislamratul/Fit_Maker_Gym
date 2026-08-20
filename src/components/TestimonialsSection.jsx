import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

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
    <section className="testimonials-section relative overflow-hidden lg:overflow-visible py-24 text-white">

      {/* =====================================================
          BACKGROUND ANIMATIONS
      ====================================================== */}

      {/* Main Red Glow */}
      <div
        className="
          absolute left-0 top-20
          h-72 w-72
          rounded-full
          bg-red-500/20
          blur-[120px]
          animate-[mainGlow_6s_ease-in-out_infinite]
        "
      />

      {/* Orange Glow */}
      <div
        className="
          absolute right-[-100px] top-1/3
          h-64 w-64
          rounded-full
          bg-orange-500/10
          blur-[120px]
          animate-[orangeGlow_8s_ease-in-out_infinite]
        "
      />

      {/* Bottom Red Glow */}
      <div
        className="
          absolute left-1/3 bottom-[-150px]
          h-80 w-80
          rounded-full
          bg-red-600/10
          blur-[140px]
          animate-[bottomGlow_7s_ease-in-out_infinite]
        "
      />

      {/* Floating Particle 1 */}
      <span
        className="
          absolute left-[12%] top-[30%]
          h-2 w-2
          rounded-full
          bg-red-500
          shadow-[0_0_15px_rgba(255,0,0,0.8)]
          animate-[particle1_5s_ease-in-out_infinite]
        "
      />

      {/* Floating Particle 2 */}
      <span
        className="
          absolute right-[18%] top-[20%]
          h-1.5 w-1.5
          rounded-full
          bg-orange-500
          shadow-[0_0_15px_rgba(255,120,0,0.8)]
          animate-[particle2_6s_ease-in-out_infinite]
        "
      />

      {/* Floating Particle 3 */}
      <span
        className="
          absolute left-[45%] bottom-[15%]
          h-1.5 w-1.5
          rounded-full
          bg-red-400
          shadow-[0_0_15px_rgba(255,0,0,0.8)]
          animate-[particle3_7s_ease-in-out_infinite]
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* =====================================================
            HEADING
        ====================================================== */}

        <div
          className="
            text-center
            animate-[fadeDown_0.9s_ease-out]
          "
        >

          <h2
            className="
              text-4xl font-extrabold
              transition-all duration-500
              hover:tracking-wide
            "
          >
            What Our{" "}
            <span
              className="
                relative
                text-red-500
              "
            >
              Customers Say

              {/* Animated Underline */}
              <span
                className="
                  absolute
                  left-1/2
                  -bottom-2
                  h-[2px]
                  w-0
                  -translate-x-1/2
                  rounded-full
                  bg-red-500
                  shadow-[0_0_10px_rgba(255,0,0,0.8)]
                  animate-[headingLine_3s_ease-in-out_infinite]
                "
              />
            </span>
          </h2>

          <p
            className="
              mt-4
              text-sm
              text-gray-400
              animate-[fadeUp_1s_ease-out]
            "
          >
            At This Part You Can See Few Of The Many Positive Reviews Of Our
            Customers.
          </p>
        </div>

        {/* =====================================================
            SWIPER
        ====================================================== */}

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: ".test-prev",
            nextEl: ".test-next",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          speed={1000}
          spaceBetween={30}
          slidesPerView={1}
          className="mt-16"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>

              <div className="grid items-center gap-10 lg:grid-cols-[250px_1fr_200px]">

                {/* =================================================
                    LEFT IMAGE
                ================================================== */}

                <div
                  className="
                    group relative
                    animate-[fadeLeft_1s_ease-out]
                  "
                >

                  {/* Image Glow */}
                  <div
                    className="
                      absolute
                      -inset-3
                      rounded-[45px]
                      bg-red-500/0
                      blur-2xl
                      transition-all duration-700
                      group-hover:bg-red-500/20
                      group-hover:scale-105
                    "
                  />

                  <div
                    className="
                      relative
                      overflow-hidden
                      rounded-[40px]
                      border border-red-500/20
                      bg-[#111]
                      transition-all duration-700

                      group-hover:-translate-y-3
                      group-hover:border-red-500/70

                      group-hover:shadow-[0_0_45px_rgba(255,0,0,0.25)]
                    "
                  >

                    {/* Image */}
                    <img
                      src={item.img}
                      alt=""
                      className="
                        h-[550px]
                        lg:h-[350px]
                        w-full
                        object-cover

                        transition-all
                        duration-1000

                        group-hover:scale-110
                        group-hover:rotate-1
                      "
                    />

                    {/* Dark Overlay */}
                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/60
                        via-transparent
                        to-transparent

                        opacity-60
                        transition-opacity
                        duration-700

                        group-hover:opacity-30
                      "
                    />

                    {/* Moving Shine */}
                    <div
                      className="
                        absolute
                        -left-[120%]
                        top-0
                        h-full
                        w-[70%]

                        skew-x-[-20deg]

                        bg-gradient-to-r
                        from-transparent
                        via-white/10
                        to-transparent

                        group-hover:left-[150%]

                        transition-all
                        duration-[1200ms]
                      "
                    />

                    {/* Image Corner Glow */}
                    <div
                      className="
                        absolute
                        right-4
                        top-4
                        h-3
                        w-3
                        rounded-full
                        bg-red-500
                        shadow-[0_0_20px_rgba(255,0,0,1)]

                        animate-pulse
                      "
                    />

                  </div>
                </div>

                {/* =================================================
                    REVIEW CARD
                ================================================== */}

                <div
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-3xl
                    border border-red-500/20
                    bg-[#111]
                    p-8

                    transition-all
                    duration-700

                    hover:-translate-y-3
                    hover:border-red-500

                    hover:shadow-[0_0_50px_rgba(255,0,0,0.30)]

                    animate-[fadeUp_1s_ease-out]
                  "
                >

                  {/* Top Glow */}
                  <div
                    className="
                      absolute
                      -right-20
                      -top-20
                      h-40
                      w-40
                      rounded-full
                      bg-red-500/10
                      blur-3xl

                      transition-all
                      duration-1000

                      group-hover:scale-[2]
                      group-hover:bg-red-500/20
                    "
                  />

                  {/* Bottom Glow */}
                  <div
                    className="
                      absolute
                      -bottom-20
                      left-1/2
                      h-40
                      w-40
                      -translate-x-1/2
                      rounded-full
                      bg-red-500/0
                      blur-3xl

                      transition-all
                      duration-700

                      group-hover:bg-red-500/20
                    "
                  />

                  {/* Animated Border */}
                  <div
                    className="
                      absolute
                      left-0
                      top-0
                      h-[2px]
                      w-0
                      bg-gradient-to-r
                      from-transparent
                      via-red-500
                      to-transparent

                      transition-all
                      duration-700

                      group-hover:w-full
                    "
                  />

                  {/* Name */}
                  <h3
                    className="
                      relative
                      text-2xl
                      font-bold

                      transition-all
                      duration-500

                      group-hover:translate-x-2
                      group-hover:text-red-500
                    "
                  >
                    {item.name}
                  </h3>

                  {/* Role */}
                  <p
                    className="
                      relative
                      mt-2
                      text-sm
                      text-red-500

                      transition-all
                      duration-500

                      group-hover:translate-x-2
                    "
                  >
                    {item.role}
                  </p>

                  {/* Text */}
                  <p
                    className="
                      relative
                      mt-6
                      leading-8
                      text-gray-400

                      transition-all
                      duration-500

                      group-hover:text-gray-300
                      group-hover:translate-x-1
                    "
                  >
                    {item.text}
                  </p>

                  {/* Animated Bottom Line */}
                  <div
                    className="
                      relative
                      mt-6
                      h-[2px]
                      w-10
                      overflow-hidden
                      rounded-full
                      bg-red-500/20
                    "
                  >
                    <div
                      className="
                        h-full
                        w-full
                        -translate-x-full
                        bg-red-500

                        transition-transform
                        duration-700

                        group-hover:translate-x-0
                      "
                    />
                  </div>

                </div>

                {/* =================================================
                    RIGHT IMAGES
                ================================================== */}

                <div className="flex gap-4">

                  {[1, 2].map((i) => (
                    <div
                      key={i}
                      className="
                        group
                        relative
                        overflow-hidden
                        rounded-3xl
                        border border-red-500/20
                        bg-[#111]

                        transition-all
                        duration-700

                        hover:-translate-y-3
                        hover:border-red-500/60

                        hover:shadow-[0_0_35px_rgba(255,0,0,0.25)]

                        animate-[float_4s_ease-in-out_infinite]
                      "
                      style={{
                        animationDelay: `${i * 0.4}s`,
                      }}
                    >

                      <img
                        src={i === 1 ? Right1 : Right2}
                        alt=""
                        className="
                          h-[280px]
                          w-[100px]
                          object-cover

                          transition-all
                          duration-1000

                          group-hover:scale-110
                        "
                      />

                      {/* Shine */}
                      <div
                        className="
                          absolute
                          -left-full
                          top-0
                          h-full
                          w-1/2

                          skew-x-[-20deg]

                          bg-gradient-to-r
                          from-transparent
                          via-white/10
                          to-transparent

                          group-hover:left-[150%]

                          transition-all
                          duration-[1000ms]
                        "
                      />

                      {/* Red Overlay */}
                      <div
                        className="
                          absolute
                          inset-0
                          bg-red-500/0

                          transition-all
                          duration-500

                          group-hover:bg-red-500/10
                        "
                      />

                    </div>
                  ))}

                </div>
              </div>

            </SwiperSlide>
          ))}
        </Swiper>

        {/* =====================================================
            NAVIGATION
        ====================================================== */}

        <div className="mt-10 flex justify-center gap-4">

          {/* Previous */}
          <button
            className="
              test-prev
              group

              relative
              flex
              h-12
              w-12
              items-center
              justify-center

              rounded-full
              border border-red-500/30
              bg-[#111]

              transition-all
              duration-500

              hover:bg-red-500
              hover:border-red-500
              hover:scale-110

              active:scale-90

              cursor-pointer

              overflow-hidden
            "
          >

            {/* Button Glow */}
            <span
              className="
                absolute
                inset-0
                rounded-full
                bg-red-500/0
                blur-xl

                transition-all
                duration-500

                group-hover:bg-red-500/60
              "
            />

            <span
              className="
                relative
                z-10
                transition-transform
                duration-300

                group-hover:-translate-x-1
              "
            >
              ←
            </span>
          </button>

          {/* Next */}
          <button
            className="
              test-next
              group

              relative
              flex
              h-12
              w-12
              items-center
              justify-center

              rounded-full
              border border-red-500/30
              bg-[#111]

              transition-all
              duration-500

              hover:bg-red-500
              hover:border-red-500
              hover:scale-110

              active:scale-90

              cursor-pointer

              overflow-hidden
            "
          >

            {/* Button Glow */}
            <span
              className="
                absolute
                inset-0
                rounded-full
                bg-red-500/0
                blur-xl

                transition-all
                duration-500

                group-hover:bg-red-500/60
              "
            />

            <span
              className="
                relative
                z-10

                transition-transform
                duration-300

                group-hover:translate-x-1
              "
            >
              →
            </span>

          </button>

        </div>
      </div>

      {/* =====================================================
          CUSTOM ANIMATIONS
      ====================================================== */}

      <style>
        {`

          /* -----------------------------------
             Heading
          ----------------------------------- */

          @keyframes fadeDown {
            from {
              opacity: 0;
              transform: translateY(-35px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeLeft {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }

            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          /* -----------------------------------
             Heading underline
          ----------------------------------- */

          @keyframes headingLine {

            0% {
              width: 0;
              opacity: 0;
            }

            30% {
              width: 80%;
              opacity: 1;
            }

            70% {
              width: 80%;
              opacity: 1;
            }

            100% {
              width: 0;
              opacity: 0;
            }

          }

          /* -----------------------------------
             Main Glow
          ----------------------------------- */

          @keyframes mainGlow {

            0% {
              transform: translate(0, 0) scale(1);
              opacity: 0.5;
            }

            50% {
              transform: translate(80px, 40px) scale(1.25);
              opacity: 0.9;
            }

            100% {
              transform: translate(0, 0) scale(1);
              opacity: 0.5;
            }

          }

          /* -----------------------------------
             Orange Glow
          ----------------------------------- */

          @keyframes orangeGlow {

            0% {
              transform: translate(0, 0) scale(1);
              opacity: 0.3;
            }

            50% {
              transform: translate(-80px, -50px) scale(1.3);
              opacity: 0.7;
            }

            100% {
              transform: translate(0, 0) scale(1);
              opacity: 0.3;
            }

          }

          /* -----------------------------------
             Bottom Glow
          ----------------------------------- */

          @keyframes bottomGlow {

            0% {
              transform: translateX(0) scale(1);
            }

            50% {
              transform: translateX(100px) scale(1.3);
            }

            100% {
              transform: translateX(0) scale(1);
            }

          }

          /* -----------------------------------
             Floating Particles
          ----------------------------------- */

          @keyframes particle1 {

            0% {
              transform: translate(0, 0);
              opacity: 0.2;
            }

            50% {
              transform: translate(50px, -40px);
              opacity: 1;
            }

            100% {
              transform: translate(0, 0);
              opacity: 0.2;
            }

          }

          @keyframes particle2 {

            0% {
              transform: translate(0, 0);
              opacity: 0.3;
            }

            50% {
              transform: translate(-60px, 50px);
              opacity: 1;
            }

            100% {
              transform: translate(0, 0);
              opacity: 0.3;
            }

          }

          @keyframes particle3 {

            0% {
              transform: translate(0, 0);
              opacity: 0.2;
            }

            50% {
              transform: translate(-40px, -60px);
              opacity: 1;
            }

            100% {
              transform: translate(0, 0);
              opacity: 0.2;
            }

          }

          /* -----------------------------------
             Right Image Float
          ----------------------------------- */

          @keyframes float {

            0% {
              transform: translateY(0) rotate(0deg);
            }

            25% {
              transform: translateY(-6px) rotate(0.5deg);
            }

            50% {
              transform: translateY(-12px) rotate(0deg);
            }

            75% {
              transform: translateY(-6px) rotate(-0.5deg);
            }

            100% {
              transform: translateY(0) rotate(0deg);
            }

          }

          /* -----------------------------------
             Accessibility
          ----------------------------------- */

          @media (prefers-reduced-motion: reduce) {

            *,
            *::before,
            *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }

          }

        `}
      </style>

    </section>
  );
};

export default TestimonialsSection;