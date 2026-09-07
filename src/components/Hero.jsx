import React, { useRef } from "react";
import Card from "./Card";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Hero = () => {
  const heroRef = useRef(null);
  const rectRef = useRef(null);

  /* =========================================================
     LIGHTWEIGHT MOUSE PARALLAX

     Motion values do NOT cause React re-renders.
  ========================================================= */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 70,
    damping: 24,
    mass: 0.6,
  });

  const springY = useSpring(mouseY, {
    stiffness: 70,
    damping: 24,
    mass: 0.6,
  });

  const imageX = useTransform(springX, [-1, 1], [-8, 8]);
  const imageY = useTransform(springY, [-1, 1], [-8, 8]);

  const glowX = useTransform(springX, [-1, 1], [-15, 15]);
  const glowY = useTransform(springY, [-1, 1], [-15, 15]);

  const handleMouseEnter = () => {
    if (!heroRef.current) return;

    rectRef.current =
      heroRef.current.getBoundingClientRect();
  };

  const handleMouseMove = (e) => {
    // Don't run parallax on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    if (!rectRef.current) {
      handleMouseEnter();
    }

    const rect = rectRef.current;

    if (!rect) return;

    const x =
      (e.clientX - rect.left) / rect.width;

    const y =
      (e.clientY - rect.top) / rect.height;

    mouseX.set(
      Math.max(-1, Math.min(1, x * 2 - 1))
    );

    mouseY.set(
      Math.max(-1, Math.min(1, y * 2 - 1))
    );
  };

  const handleMouseLeave = () => {
    rectRef.current = null;

    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={heroRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      id="home"
      className="
        relative
        overflow-hidden
        lg:overflow-visible
        text-white

        pt-24
        lg:pt-30

        pb-14
        lg:pb-20
      "
    >
      {/* =====================================================
          BACKGROUND EFFECTS
          CSS animations instead of Framer Motion
      ===================================================== */}

      <div
        className="
          absolute
          inset-0
          overflow-hidden
          pointer-events-none
          -z-10
        "
      >
        <div className="hero-glow hero-glow-orange" />
        <div className="hero-glow hero-glow-red" />
        <div className="hero-glow hero-glow-center" />

        <div className="hero-light hero-light-orange" />
        <div className="hero-light hero-light-red" />
      </div>

      {/* =====================================================
          LIGHTWEIGHT PARTICLES
      ===================================================== */}

      <span className="hero-particle hero-particle-1" />
      <span className="hero-particle hero-particle-2" />
      <span className="hero-particle hero-particle-3" />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          max-w-7xl
          mx-auto

          px-4
          sm:px-6
          lg:px-10

          py-8
          sm:py-14
          lg:py-20

          grid
          lg:grid-cols-2

          gap-12
          lg:gap-10

          items-center
        "
      >
        {/* ===================================================
            LEFT CONTENT
        =================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left"
        >
          <motion.h1
            variants={itemVariants}
            className="
              text-4xl
              sm:text-5xl
              lg:text-6xl

              font-bold
              leading-tight
            "
          >
            Achive Your
          </motion.h1>

          <motion.h1
            variants={itemVariants}
            className="
              text-5xl
              sm:text-6xl
              lg:text-7xl

              font-extrabold
              text-red-500

              mt-2
              sm:mt-3

              uppercase
              italic
              leading-tight
            "
          >
            Fitness Goals
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="
              text-2xl
              sm:text-3xl
              lg:text-4xl

              font-semibold

              mt-3
              sm:mt-4
            "
          >
            With FitMaker
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="
              text-gray-400

              mt-5
              lg:mt-7

              leading-7
              max-w-xl

              mx-auto
              lg:mx-0

              text-sm
              sm:text-base
            "
          >
            Join the Fitmaker community and transform
            your fitness journey with expert coaches
            and personalized programs.
          </motion.p>

          {/* =================================================
              BUTTONS
          ================================================= */}

          <motion.div
            variants={itemVariants}
            className="
              flex
              flex-col
              sm:flex-row

              items-center
              lg:items-start

              justify-center
              lg:justify-start

              gap-3
              sm:gap-4

              mt-7
              lg:mt-9
            "
          >
            {/* Start Journey */}

            <button
              type="button"
              className="
                hero-primary-button

                group

                w-full
                sm:w-auto

                px-8
                py-4

                rounded-full

                bg-red-600
                hover:bg-red-700

                transition
                duration-200

                flex
                items-center
                justify-center
                gap-2

                cursor-pointer

                active:scale-[0.97]
              "
            >
              Start Your Journey

              <ArrowRight
                size={17}
                className="
                  transition-transform
                  duration-200

                  group-hover:translate-x-1
                "
              />
            </button>

            {/* Explore Programs */}

            <button
              type="button"
              className="
                group

                w-full
                sm:w-auto

                px-8
                py-4

                rounded-full

                border
                border-orange-500

                hover:bg-orange-500/10

                transition
                duration-200

                flex
                items-center
                justify-center
                gap-2

                cursor-pointer

                active:scale-[0.97]
              "
            >
              Explore Programs

              <ArrowRight
                size={17}
                className="
                  transition-transform
                  duration-200

                  group-hover:translate-x-1
                "
              />
            </button>
          </motion.div>
        </motion.div>

        {/* ===================================================
            RIGHT IMAGE SECTION
        =================================================== */}

        <motion.div
          style={{
            x: imageX,
            y: imageY,
          }}
          initial={{
            opacity: 0,
            x: 50,
            scale: 0.94,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative

            flex
            justify-center
            items-center

            min-w-0
          "
        >
          {/* =================================================
              SMALL GLOWS
          ================================================= */}

          <div
            className="
              hero-small-glow
              hero-small-glow-orange
            "
          />

          <div
            className="
              hero-small-glow
              hero-small-glow-red
            "
          />

          {/* =================================================
              MAIN GLOW
          ================================================= */}

          <motion.div
            style={{
              x: glowX,
              y: glowY,
            }}
            className="
              absolute

              w-[260px]
              sm:w-[360px]
              lg:w-[430px]

              h-[260px]
              sm:h-[360px]
              lg:h-[430px]

              bg-red-600/25

              blur-[90px]

              rounded-full

              pointer-events-none

              hero-main-glow
            "
          />

          {/* =================================================
              ROTATING RING
          ================================================= */}

          <div
            className="
              hero-ring

              absolute

              w-[290px]
              sm:w-[390px]
              lg:w-[500px]

              h-[290px]
              sm:h-[390px]
              lg:h-[500px]

              rounded-full

              border
              border-red-500/20

              pointer-events-none
            "
          >
            <span className="hero-ring-dot" />
          </div>

          {/* =================================================
              MAIN CIRCLE
          ================================================= */}

          <div
            className="
              hero-main-circle

              relative

              w-[280px]
              sm:w-[370px]
              lg:w-[490px]

              h-[280px]
              sm:h-[370px]
              lg:h-[490px]

              rounded-full

              border
              border-red-500

              bg-white/[0.04]

              overflow-hidden

              flex
              items-end
              justify-center
            "
          >
            {/* Inner Ring */}

            <div
              className="
                absolute
                inset-3

                rounded-full

                border
                border-white/10

                pointer-events-none
              "
            />

            {/* Trainer Image */}

            <img
              src="/gym.png"
              alt="Fitness trainer"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="
                hero-trainer-image

                relative
                z-10

                h-full

                w-[240px]
                sm:w-[320px]
                lg:w-[420px]

                object-cover

                select-none
                pointer-events-none
              "
            />
          </div>

          {/* =================================================
              FLOATING CARDS
          ================================================= */}

          <div
            className="
              hero-card
              hero-card-1

              absolute

              top-2
              sm:top-10
              lg:top-16

              left-0
              sm:-left-2
              lg:left-0

              scale-75
              sm:scale-90
              lg:scale-100
            "
          >
            <Card
              number="+80"
              title="Coaches"
            />
          </div>

          <div
            className="
              hero-card
              hero-card-2

              absolute

              top-0
              sm:top-5
              lg:top-10

              right-0
              sm:-right-2
              lg:right-0

              scale-75
              sm:scale-90
              lg:scale-100
            "
          >
            <Card
              number="+1300"
              title="Positive Reviews"
            />
          </div>

          <div
            className="
              hero-card
              hero-card-3

              absolute

              bottom-2
              sm:bottom-8
              lg:bottom-10

              left-2
              sm:left-4
              lg:left-5

              scale-75
              sm:scale-90
              lg:scale-100
            "
          >
            <Card
              number="+1000"
              title="Workout Videos"
            />
          </div>

          <div
            className="
              hero-card
              hero-card-4

              absolute

              bottom-0
              sm:bottom-3
              lg:bottom-5

              right-0
              sm:-right-2
              lg:right-0

              scale-75
              sm:scale-90
              lg:scale-100
            "
          >
            <Card
              number="+1500"
              title="Trainers"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;