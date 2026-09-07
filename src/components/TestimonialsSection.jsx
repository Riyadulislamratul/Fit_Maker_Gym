import React, { memo } from "react";
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

/* =========================================================
   TESTIMONIAL SLIDE
========================================================= */

const TestimonialSlide = memo(({ item }) => {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-[250px_1fr_200px]">

      {/* =====================================================
          LEFT IMAGE
      ====================================================== */}

      <div className="group relative animate-[fadeLeft_1s_ease-out]">

        {/* Image Glow */}
        <div
          className="
            pointer-events-none
            absolute
            -inset-3
            z-0
            rounded-[45px]
            bg-red-500/0
            blur-xl
            transition-all
            duration-700
            group-hover:scale-105
          "
        />

        {/* =================================================
            FIXED IMAGE FRAME
        ================================================== */}

        <div
          className="
            relative
            z-10
            h-[550px]
            w-full
            lg:h-[350px]
          "
        >

          {/* =================================================
              CLIPPING CONTAINER

              IMPORTANT:
              The image is clipped here.
              The border is NOT part of this element.
          ================================================== */}

          <div
            className="
              absolute
              inset-0
              overflow-hidden
              rounded-[40px]
              bg-[#111]
            "
            style={{
              clipPath: "inset(0 round 40px)",
            }}
          >

            {/* =================================================
                IMAGE

                The image can zoom, but cannot escape the
                rounded clipping container.
            ================================================== */}

            <img
              src={item.img}
              alt={`${item.name} testimonial`}
              loading="lazy"
              decoding="async"
              draggable="false"
              className="
                absolute
                left-0
                top-0
                h-full
                w-full
                max-w-none
                object-cover
                object-center
                select-none
                transition-transform
                duration-1000
                ease-out
                will-change-transform
                group-hover:scale-105
                group-hover:rotate-[0.5deg]
              "
            />

            {/* =================================================
                DARK OVERLAY
            ================================================== */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                z-10
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

            {/* =================================================
                MOVING SHINE
            ================================================== */}

            <div
              className="
                pointer-events-none
                absolute
                -left-[120%]
                top-0
                z-20
                h-full
                w-[70%]
                skew-x-[-20deg]
                bg-gradient-to-r
                from-transparent
                via-white/10
                to-transparent
                transition-[left]
                duration-[1200ms]
                group-hover:left-[150%]
              "
            />

          </div>


          {/* =================================================
              FIXED RED BORDER

              This stays completely fixed while the image
              underneath scales.
          ================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              z-30
              rounded-[40px]
              border
              border-red-500/20
              transition-all
              duration-700
              group-hover:border-red-500/70
            "
          />


          {/* =================================================
              CORNER RED LIGHT
          ================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              right-4
              top-4
              z-40
              h-3
              w-3
              rounded-full
              bg-red-500
              shadow-[0_0_14px_rgba(255,0,0,0.9)]
              animate-pulse
            "
          />

        </div>
      </div>


      {/* =====================================================
          REVIEW CARD
      ====================================================== */}

      <div
        className="
          group
          relative
          overflow-hidden
          rounded-3xl
          border
          border-red-500/20
          bg-[#111]
          p-8
          transition-all
          duration-700
          hover:-translate-y-3
          hover:border-red-500
          hover:shadow-[0_0_40px_rgba(255,0,0,0.25)]
          animate-[fadeUp_1s_ease-out]
        "
      >

        {/* Top Glow */}
        <div
          className="
            pointer-events-none
            absolute
            -right-20
            -top-20
            h-40
            w-40
            rounded-full
            bg-red-500/10
            blur-2xl
            transition-transform
            transition-colors
            duration-1000
            group-hover:scale-[2]
            group-hover:bg-red-500/20
          "
        />

        {/* Bottom Glow */}
        <div
          className="
            pointer-events-none
            absolute
            -bottom-20
            left-1/2
            h-40
            w-40
            -translate-x-1/2
            rounded-full
            bg-red-500/0
            blur-2xl
            transition-colors
            duration-700
            group-hover:bg-red-500/20
          "
        />

        {/* Animated Border */}
        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            h-[2px]
            w-0
            bg-gradient-to-r
            from-transparent
            via-red-500
            to-transparent
            transition-[width]
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
            transition-transform
            duration-500
            group-hover:translate-x-2
          "
        >
          {item.role}
        </p>

        {/* Review */}
        <p
          className="
            relative
            mt-6
            leading-8
            text-gray-400
            transition-all
            duration-500
            group-hover:translate-x-1
            group-hover:text-gray-300
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


      {/* =====================================================
          RIGHT IMAGES
      ====================================================== */}

      <div className="flex gap-4">

        {[Right1, Right2].map((image, index) => (
          <div
            key={image}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-red-500/20
              bg-[#111]
              transition-all
              duration-700
              hover:-translate-y-3
              hover:border-red-500/60
              hover:shadow-[0_0_30px_rgba(255,0,0,0.22)]
              animate-[float_4s_ease-in-out_infinite]
            "
            style={{
              animationDelay: `${(index + 1) * 0.4}s`,
            }}
          >

            <img
              src={image}
              alt=""
              loading="lazy"
              decoding="async"
              draggable="false"
              className="
                block
                h-[280px]
                w-[100px]
                object-cover
                select-none
                transition-transform
                duration-1000
                ease-out
                will-change-transform
                group-hover:scale-110
              "
            />

            {/* Shine */}
            <div
              className="
                pointer-events-none
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
                transition-[left]
                duration-[1000ms]
                group-hover:left-[150%]
              "
            />

            {/* Red Overlay */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-red-500/0
                transition-colors
                duration-500
                group-hover:bg-red-500/10
              "
            />

          </div>
        ))}

      </div>

    </div>
  );
});

TestimonialSlide.displayName = "TestimonialSlide";


/* =========================================================
   MAIN COMPONENT
========================================================= */

const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="
        testimonials-section
        relative
        overflow-hidden
        py-24
        text-white
        lg:overflow-visible
      "
    >

      {/* =====================================================
          BACKGROUND ANIMATIONS
      ====================================================== */}

      {/* Main Red Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-20
          h-72
          w-72
          rounded-full
          bg-red-500/20
          blur-[90px]
          animate-[mainGlow_6s_ease-in-out_infinite]
        "
      />

      {/* Orange Glow */}
      <div
        className="
          pointer-events-none
          absolute
          right-[-100px]
          top-1/3
          h-64
          w-64
          rounded-full
          bg-orange-500/10
          blur-[90px]
          animate-[orangeGlow_8s_ease-in-out_infinite]
        "
      />

      {/* Bottom Red Glow */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-[-150px]
          left-1/3
          h-80
          w-80
          rounded-full
          bg-red-600/10
          blur-[100px]
          animate-[bottomGlow_7s_ease-in-out_infinite]
        "
      />

      {/* Particle 1 */}
      <span
        className="
          pointer-events-none
          absolute
          left-[12%]
          top-[30%]
          h-2
          w-2
          rounded-full
          bg-red-500
          shadow-[0_0_10px_rgba(255,0,0,0.7)]
          animate-[particle1_5s_ease-in-out_infinite]
        "
      />

      {/* Particle 2 */}
      <span
        className="
          pointer-events-none
          absolute
          right-[18%]
          top-[20%]
          h-1.5
          w-1.5
          rounded-full
          bg-orange-500
          shadow-[0_0_10px_rgba(255,120,0,0.7)]
          animate-[particle2_6s_ease-in-out_infinite]
        "
      />

      {/* Particle 3 */}
      <span
        className="
          pointer-events-none
          absolute
          bottom-[15%]
          left-[45%]
          h-1.5
          w-1.5
          rounded-full
          bg-red-400
          shadow-[0_0_10px_rgba(255,0,0,0.7)]
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

        <div className="text-center animate-[fadeDown_0.9s_ease-out]">

          <h2
            className="
              text-4xl
              font-extrabold
              transition-[letter-spacing]
              duration-500
              hover:tracking-wide
            "
          >
            What Our{" "}

            <span className="relative text-red-500">

              Customers Say

              {/* Animated Underline */}
              <span
                className="
                  absolute
                  -bottom-2
                  left-1/2
                  h-[2px]
                  w-0
                  -translate-x-1/2
                  rounded-full
                  bg-red-500
                  shadow-[0_0_8px_rgba(255,0,0,0.7)]
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
          loop
          speed={1000}
          spaceBetween={30}
          slidesPerView={1}
          className="mt-16"
        >

          {testimonials.map((item) => (
            <SwiperSlide key={item.name}>
              <TestimonialSlide item={item} />
            </SwiperSlide>
          ))}

        </Swiper>


        {/* =====================================================
            NAVIGATION
        ====================================================== */}

        <div className="mt-10 flex justify-center gap-4">

          {/* Previous */}
          <button
            type="button"
            aria-label="Previous testimonial"
            className="
              test-prev
              group
              relative
              flex
              h-12
              w-12
              cursor-pointer
              items-center
              justify-center
              overflow-hidden
              rounded-full
              border
              border-red-500/30
              bg-[#111]
              transition-all
              duration-500
              hover:scale-110
              hover:border-red-500
              hover:bg-red-500
              active:scale-90
            "
          >

            <span
              className="
                pointer-events-none
                absolute
                inset-0
                rounded-full
                bg-red-500/0
                blur-lg
                transition-colors
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
            type="button"
            aria-label="Next testimonial"
            className="
              test-next
              group
              relative
              flex
              h-12
              w-12
              cursor-pointer
              items-center
              justify-center
              overflow-hidden
              rounded-full
              border
              border-red-500/30
              bg-[#111]
              transition-all
              duration-500
              hover:scale-110
              hover:border-red-500
              hover:bg-red-500
              active:scale-90
            "
          >

            <span
              className="
                pointer-events-none
                absolute
                inset-0
                rounded-full
                bg-red-500/0
                blur-lg
                transition-colors
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

          /* ===============================================
             ENTRANCE
          =============================================== */

          @keyframes fadeDown {
            from {
              opacity: 0;
              transform: translate3d(0, -35px, 0);
            }

            to {
              opacity: 1;
              transform: translate3d(0, 0, 0);
            }
          }


          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translate3d(0, 40px, 0);
            }

            to {
              opacity: 1;
              transform: translate3d(0, 0, 0);
            }
          }


          @keyframes fadeLeft {
            from {
              opacity: 0;
              transform: translate3d(-50px, 0, 0);
            }

            to {
              opacity: 1;
              transform: translate3d(0, 0, 0);
            }
          }


          /* ===============================================
             HEADING LINE
          =============================================== */

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


          /* ===============================================
             MAIN GLOW
          =============================================== */

          @keyframes mainGlow {

            0% {
              transform: translate3d(0, 0, 0) scale(1);
              opacity: 0.5;
            }

            50% {
              transform: translate3d(80px, 40px, 0) scale(1.25);
              opacity: 0.9;
            }

            100% {
              transform: translate3d(0, 0, 0) scale(1);
              opacity: 0.5;
            }

          }


          /* ===============================================
             ORANGE GLOW
          =============================================== */

          @keyframes orangeGlow {

            0% {
              transform: translate3d(0, 0, 0) scale(1);
              opacity: 0.3;
            }

            50% {
              transform: translate3d(-80px, -50px, 0) scale(1.3);
              opacity: 0.7;
            }

            100% {
              transform: translate3d(0, 0, 0) scale(1);
              opacity: 0.3;
            }

          }


          /* ===============================================
             BOTTOM GLOW
          =============================================== */

          @keyframes bottomGlow {

            0% {
              transform: translate3d(0, 0, 0) scale(1);
            }

            50% {
              transform: translate3d(100px, 0, 0) scale(1.3);
            }

            100% {
              transform: translate3d(0, 0, 0) scale(1);
            }

          }


          /* ===============================================
             PARTICLE 1
          =============================================== */

          @keyframes particle1 {

            0% {
              transform: translate3d(0, 0, 0);
              opacity: 0.2;
            }

            50% {
              transform: translate3d(50px, -40px, 0);
              opacity: 1;
            }

            100% {
              transform: translate3d(0, 0, 0);
              opacity: 0.2;
            }

          }


          /* ===============================================
             PARTICLE 2
          =============================================== */

          @keyframes particle2 {

            0% {
              transform: translate3d(0, 0, 0);
              opacity: 0.3;
            }

            50% {
              transform: translate3d(-60px, 50px, 0);
              opacity: 1;
            }

            100% {
              transform: translate3d(0, 0, 0);
              opacity: 0.3;
            }

          }


          /* ===============================================
             PARTICLE 3
          =============================================== */

          @keyframes particle3 {

            0% {
              transform: translate3d(0, 0, 0);
              opacity: 0.2;
            }

            50% {
              transform: translate3d(-40px, -60px, 0);
              opacity: 1;
            }

            100% {
              transform: translate3d(0, 0, 0);
              opacity: 0.2;
            }

          }


          /* ===============================================
             RIGHT IMAGE FLOAT
          =============================================== */

          @keyframes float {

            0% {
              transform: translate3d(0, 0, 0) rotate(0deg);
            }

            25% {
              transform: translate3d(0, -6px, 0) rotate(0.5deg);
            }

            50% {
              transform: translate3d(0, -12px, 0) rotate(0deg);
            }

            75% {
              transform: translate3d(0, -6px, 0) rotate(-0.5deg);
            }

            100% {
              transform: translate3d(0, 0, 0) rotate(0deg);
            }

          }


          /* ===============================================
             MOBILE OPTIMIZATION
          =============================================== */

          @media (max-width: 768px) {

            .testimonials-section {
              contain: paint;
            }

            .testimonials-section > span {
              display: none;
            }

            .testimonials-section [class*="blur-"] {
              --tw-blur: blur(45px);
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

export default TestimonialsSection;