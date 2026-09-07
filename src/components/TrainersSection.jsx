import React, { memo, useEffect, useState } from "react";

import Trainer1 from "../assets/trainer1.png";
import Trainer2 from "../assets/trainer2.png";
import Trainer3 from "../assets/trainer3.png";
import Trainer4 from "../assets/trainer4.png";

const trainers = [
  {
    name: "Sam Cole",
    role: "Personal Trainer",
    image: Trainer1,
    experience: "5+ Years Experience",
    specialty: "Strength & Conditioning",
    description:
      "Sam specializes in strength training, muscle development, and helping members build long-term fitness habits.",
  },
  {
    name: "Michael Harris",
    role: "Personal Trainer",
    image: Trainer2,
    experience: "7+ Years Experience",
    specialty: "Weight Loss & Fitness",
    description:
      "Michael helps clients achieve sustainable weight loss through structured workouts and personalized fitness plans.",
  },
  {
    name: "John Anderson",
    role: "Personal Trainer",
    image: Trainer3,
    experience: "6+ Years Experience",
    specialty: "Muscle Building",
    description:
      "John focuses on progressive training, muscle building, strength development, and personalized workout programs.",
  },
  {
    name: "Tom Blake",
    role: "Personal Trainer",
    image: Trainer4,
    experience: "8+ Years Experience",
    specialty: "Functional Training",
    description:
      "Tom specializes in functional training and athletic performance to help clients become stronger and more mobile.",
  },
  {
    name: "Sam Cole",
    role: "Personal Trainer",
    image: Trainer1,
    experience: "5+ Years Experience",
    specialty: "Strength & Conditioning",
    description:
      "Sam specializes in strength training, muscle development, and helping members build long-term fitness habits.",
  },
];

/* =========================================================
   TRAINER CARD
========================================================= */

const TrainerCard = memo(
  ({ trainer, index, isVisible, onLearnMore }) => {
    return (
      <div
        className={`
          group
          relative
          overflow-hidden
          rounded-3xl
          border
          border-red-500/20
          bg-[#111]

          transition-all
          duration-700
          ease-out

          hover:-translate-y-3
          hover:border-red-500
          hover:shadow-[0_0_40px_rgba(255,0,0,0.25)]

          ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-12 scale-95"
          }
        `}
        style={{
          transitionDelay: `${index * 120}ms`,
        }}
      >
        {/* ========================================
            CARD GLOW
        ======================================== */}

        <div
          className="
            pointer-events-none
            absolute
            -bottom-16
            left-1/2
            h-32
            w-32
            -translate-x-1/2
            rounded-full
            bg-red-500/0
            blur-3xl

            transition-all
            duration-700

            group-hover:bg-red-500/30
            group-hover:scale-[2]
          "
        />

        {/* Top Glow */}

        <div
          className="
            pointer-events-none
            absolute
            -top-20
            -right-20
            h-40
            w-40
            rounded-full
            bg-orange-500/0
            blur-3xl

            transition-all
            duration-700

            group-hover:bg-orange-500/20
          "
        />

        {/* ========================================
            IMAGE
        ======================================== */}

        <div className="relative overflow-hidden">
          <img
            src={trainer.image}
            alt={trainer.name}
            loading={index < 4 ? "eager" : "lazy"}
            decoding="async"
            className="
              h-[390px]
              w-full
              object-cover

              transition-transform
              duration-700
              ease-out

              group-hover:scale-110
              group-hover:-translate-y-1
              will-change-transform
            "
          />

          {/* Image Overlay */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-[#111]
              via-transparent
              to-transparent

              opacity-60
              transition-opacity
              duration-500

              group-hover:opacity-80
            "
          />

          {/* Floating Trainer Badge */}

          <div
            className="
              absolute
              right-4
              top-4

              rounded-full
              border
              border-white/10
              bg-black/60
              px-3
              py-1

              text-[10px]
              text-gray-300

              backdrop-blur-xl

              opacity-0
              translate-y-[-10px]

              transition-all
              duration-500

              group-hover:opacity-100
              group-hover:translate-y-0
            "
          >
            FITMAKER
          </div>
        </div>

        {/* ========================================
            CONTENT
        ======================================== */}

        <div className="relative z-10 p-5">
          <h3
            className="
              text-xl
              font-bold

              transition-all
              duration-300

              group-hover:text-red-500
              group-hover:translate-x-1
            "
          >
            {trainer.name}
          </h3>

          <p
            className="
              mt-2
              text-sm
              text-gray-400

              transition-colors
              duration-300

              group-hover:text-gray-300
            "
          >
            {trainer.role}
          </p>

          {/* Learn More */}

          <button
            type="button"
            onClick={() => onLearnMore(trainer)}
            className="
              group/button
              mt-5
              cursor-pointer
              text-sm
              text-red-500

              transition-all
              duration-300

              hover:text-red-400
              active:scale-95
            "
          >
            <span className="inline-flex items-center gap-2">
              Learn More

              <span
                className="
                  transition-transform
                  duration-300

                  group-hover/button:translate-x-2
                "
              >
                →
              </span>
            </span>
          </button>
        </div>

        {/* Animated Border Light */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-3xl
            border
            border-transparent

            transition-colors
            duration-700

            group-hover:border-red-500/30
          "
        />
      </div>
    );
  }
);

TrainerCard.displayName = "TrainerCard";

/* =========================================================
   TRAINER MODAL
========================================================= */

const TrainerModal = memo(({ trainer, onClose }) => {
  if (!trainer) return null;

  const handleStartTraining = () => {
    onClose();

    window.setTimeout(() => {
      document
        .getElementById("plans")
        ?.scrollIntoView({
          behavior: "smooth",
        });
    }, 200);
  };

  return (
    <div
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center

        bg-black/80
        px-4
        backdrop-blur-md

        animate-[modalOverlay_.3s_ease-out]
      "
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${trainer.name} trainer information`}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="
          relative
          w-full
          max-w-2xl
          overflow-hidden
          rounded-3xl

          border
          border-red-500/30
          bg-[#111]

          shadow-[0_0_80px_rgba(255,0,0,0.20)]

          animate-[modalEnter_.5s_cubic-bezier(.16,1,.3,1)]
        "
      >
        {/* Modal Glow */}

        <div
          className="
            pointer-events-none
            absolute
            -right-20
            -top-20
            h-52
            w-52
            rounded-full
            bg-red-500/20
            blur-3xl

            animate-pulse
          "
        />

        {/* Close Button */}

        <button
          type="button"
          onClick={onClose}
          aria-label="Close trainer details"
          className="
            absolute
            right-4
            top-4
            z-20

            flex
            h-10
            w-10
            items-center
            justify-center

            cursor-pointer

            rounded-full
            border
            border-white/10
            bg-black/60

            text-white

            backdrop-blur-xl

            transition-all
            duration-300

            hover:bg-red-500
            hover:rotate-90
            hover:scale-110

            active:scale-90
          "
        >
          ×
        </button>

        {/* Modal Content */}

        <div className="grid md:grid-cols-[220px_1fr]">
          {/* ========================================
              MODAL IMAGE
          ======================================== */}

          <div className="relative h-[300px] overflow-hidden md:h-full">
            <img
              src={trainer.image}
              alt={trainer.name}
              loading="eager"
              decoding="async"
              className="
                h-full
                w-full
                object-cover

                transition-transform
                duration-1000

                hover:scale-110
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-t
                from-[#111]
                via-transparent
                to-transparent
              "
            />
          </div>

          {/* ========================================
              INFORMATION
          ======================================== */}

          <div className="relative p-7 sm:p-9">
            <p
              className="
                text-xs
                uppercase
                tracking-[0.25em]
                text-red-500
              "
            >
              FitMaker Trainer
            </p>

            <h2 className="mt-3 text-3xl font-extrabold">
              {trainer.name}
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              {trainer.role}
            </p>

            {/* Stats */}

            <div className="mt-6 grid grid-cols-2 gap-3">
              {/* Experience */}

              <div
                className="
                  rounded-2xl
                  border
                  border-white/5
                  bg-white/[0.03]
                  p-4

                  transition-all
                  duration-300

                  hover:border-red-500/30
                  hover:bg-red-500/5
                "
              >
                <p className="text-xs text-gray-500">
                  Experience
                </p>

                <p className="mt-1 text-sm font-semibold text-white">
                  {trainer.experience}
                </p>
              </div>

              {/* Specialty */}

              <div
                className="
                  rounded-2xl
                  border
                  border-white/5
                  bg-white/[0.03]
                  p-4

                  transition-all
                  duration-300

                  hover:border-red-500/30
                  hover:bg-red-500/5
                "
              >
                <p className="text-xs text-gray-500">
                  Specialty
                </p>

                <p className="mt-1 text-sm font-semibold text-white">
                  {trainer.specialty}
                </p>
              </div>
            </div>

            {/* Description */}

            <p className="mt-6 text-sm leading-7 text-gray-400">
              {trainer.description}
            </p>

            {/* CTA */}

            <button
              type="button"
              onClick={handleStartTraining}
              className="
                group
                mt-7
                w-full
                cursor-pointer
                rounded-full
                bg-red-600
                py-3

                text-sm
                font-bold
                text-white

                transition-all
                duration-500

                hover:bg-red-700
                hover:scale-[1.02]
                hover:shadow-[0_0_30px_rgba(255,0,0,0.3)]

                active:scale-95
              "
            >
              <span className="inline-flex items-center gap-2">
                Start Training

                <span
                  className="
                    transition-transform
                    duration-300

                    group-hover:translate-x-2
                  "
                >
                  →
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

TrainerModal.displayName = "TrainerModal";

/* =========================================================
   MAIN COMPONENT
========================================================= */

const TrainersSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  /* =====================================================
     SECTION REVEAL
  ====================================================== */

  useEffect(() => {
    const section = document.getElementById("coaching");

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  /* =====================================================
     MODAL BODY SCROLL LOCK
  ====================================================== */

  useEffect(() => {
    if (!selectedTrainer) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedTrainer]);

  /* =====================================================
     ESCAPE KEY
  ====================================================== */

  useEffect(() => {
    if (!selectedTrainer) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedTrainer(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedTrainer]);

  const visibleTrainers = showAll
    ? trainers
    : trainers.slice(0, 4);

  const handleLearnMore = (trainer) => {
    setSelectedTrainer(trainer);
  };

  const handleCloseModal = () => {
    setSelectedTrainer(null);
  };

  return (
    <>
      <section
        id="coaching"
        className="
          trainers-section
          relative
          overflow-hidden
          py-24
          text-white

          lg:overflow-visible
        "
      >
        {/* =====================================================
            BACKGROUND GLOW
        ====================================================== */}

        <div
          className="
            pointer-events-none
            absolute

            right-[-100px]
            top-60

            h-72
            w-72

            rounded-full
            bg-orange-500

            blur-[120px]

            animate-[trainerGlow_7s_ease-in-out_infinite]

            lg:right-0
            lg:top-0
          "
        />

        {/* Additional Background Glow */}

        <div
          className="
            pointer-events-none
            absolute
            left-[-120px]
            bottom-20

            h-56
            w-56

            rounded-full
            bg-red-600/20

            blur-[110px]

            animate-[trainerGlowReverse_9s_ease-in-out_infinite]
          "
        />

        {/* Floating Tiny Light */}

        <div
          className="
            trainer-particle
            pointer-events-none
            absolute
            top-32
            right-[20%]

            h-2
            w-2

            rounded-full
            bg-red-500

            shadow-[0_0_20px_rgba(239,68,68,0.9)]

            animate-[particleFloat_4s_ease-in-out_infinite]
          "
        />

        <div
          className="
            trainer-particle
            pointer-events-none
            absolute
            bottom-40
            left-[15%]

            h-1.5
            w-1.5

            rounded-full
            bg-orange-400

            shadow-[0_0_20px_rgba(249,115,22,0.9)]

            animate-[particleFloat_5s_ease-in-out_infinite]
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
            className={`
              flex
              flex-col
              gap-6

              sm:flex-row
              sm:items-end
              sm:justify-between

              transition-all
              duration-1000
              ease-out

              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }
            `}
          >
            <div>
              <h2 className="text-4xl font-extrabold">
                Meet Our{" "}
                <span
                  className="
                    inline-block
                    text-red-500

                    transition-transform
                    duration-500

                    hover:scale-105
                  "
                >
                  Trainers
                </span>
              </h2>

              <p className="mt-4 text-sm text-gray-400">
                At This Part You Can See Few Of The Many Positive Reviews Of
                Our Customers.
              </p>
            </div>

            {/* View All Button */}

            <button
              type="button"
              onClick={() => setShowAll((previous) => !previous)}
              className="
                group
                relative
                cursor-pointer
                overflow-hidden
                rounded-full

                border
                border-red-500/40

                px-6
                py-2

                text-sm

                transition-all
                duration-500

                hover:scale-105
                hover:border-red-500
                hover:bg-red-500
                hover:text-white

                active:scale-95
              "
            >
              {/* Button Shine */}

              <span
                className="
                  pointer-events-none
                  absolute
                  inset-0

                  -translate-x-full

                  bg-gradient-to-r
                  from-transparent
                  via-white/20
                  to-transparent

                  transition-transform
                  duration-700

                  group-hover:translate-x-full
                "
              />

              <span className="relative z-10 flex items-center gap-2">
                {showAll ? "Show Less" : "View All"}

                <span
                  className={`
                    transition-transform
                    duration-500

                    ${showAll ? "rotate-180" : ""}
                  `}
                >
                  ↓
                </span>
              </span>
            </button>
          </div>

          {/* =====================================================
              TRAINER CARDS
          ====================================================== */}

          <div
            className="
              mt-16
              grid
              gap-8

              md:grid-cols-2
              lg:grid-cols-4
            "
          >
            {visibleTrainers.map((trainer, index) => (
              <TrainerCard
                key={`${trainer.name}-${index}`}
                trainer={trainer}
                index={index}
                isVisible={isVisible}
                onLearnMore={handleLearnMore}
              />
            ))}
          </div>

          {/* =====================================================
              SHOW ALL INDICATOR
          ====================================================== */}

          <div
            className={`
              mt-10
              text-center

              transition-all
              duration-500

              ${
                showAll
                  ? "translate-y-0 opacity-100"
                  : "pointer-events-none translate-y-3 opacity-0"
              }
            `}
          >
            <p className="text-xs text-gray-500">
              Showing all {trainers.length} trainers
            </p>
          </div>
        </div>

        {/* =====================================================
            CUSTOM ANIMATIONS
        ====================================================== */}

        <style>
          {`
            /* ===============================================
               BACKGROUND GLOW
            =============================================== */

            @keyframes trainerGlow {
              0% {
                transform: translate3d(0, 0, 0) scale(1);
                opacity: 0.8;
              }

              25% {
                transform: translate3d(-30px, 20px, 0) scale(1.08);
                opacity: 1;
              }

              50% {
                transform: translate3d(-10px, 45px, 0) scale(0.95);
                opacity: 0.7;
              }

              75% {
                transform: translate3d(25px, 20px, 0) scale(1.05);
                opacity: 0.9;
              }

              100% {
                transform: translate3d(0, 0, 0) scale(1);
                opacity: 0.8;
              }
            }

            @keyframes trainerGlowReverse {
              0% {
                transform: translate3d(0, 0, 0) scale(1);
                opacity: 0.5;
              }

              50% {
                transform: translate3d(50px, -30px, 0) scale(1.2);
                opacity: 0.8;
              }

              100% {
                transform: translate3d(0, 0, 0) scale(1);
                opacity: 0.5;
              }
            }

            /* ===============================================
               PARTICLE
            =============================================== */

            @keyframes particleFloat {
              0% {
                transform: translate3d(0, 0, 0);
                opacity: 0.4;
              }

              50% {
                transform: translate3d(10px, -25px, 0);
                opacity: 1;
              }

              100% {
                transform: translate3d(0, 0, 0);
                opacity: 0.4;
              }
            }

            /* ===============================================
               MODAL
            =============================================== */

            @keyframes modalOverlay {
              from {
                opacity: 0;
              }

              to {
                opacity: 1;
              }
            }

            @keyframes modalEnter {
              from {
                opacity: 0;
                transform: translate3d(0, 30px, 0) scale(0.92);
              }

              to {
                opacity: 1;
                transform: translate3d(0, 0, 0) scale(1);
              }
            }

            /* ===============================================
               MOBILE PERFORMANCE
            =============================================== */

            @media (max-width: 768px) {

              /*
                Reduce expensive blur on mobile.
              */

              .trainers-section [class*="blur-"] {
                --tw-blur: blur(45px);
              }

              /*
                Decorative particles are not necessary
                on small screens.
              */

              .trainer-particle {
                display: none;
              }

              /*
                Reduce glow intensity.
              */

              .trainers-section
              [class*="group-hover\\:shadow"] {
                --tw-shadow: none;
              }

              /*
                Prevent unnecessary painting outside
                the visible section.
              */

              .trainers-section {
                contain: paint;
              }
            }

            /* ===============================================
               REDUCED MOTION
            =============================================== */

            @media (prefers-reduced-motion: reduce) {

              .trainers-section *,
              .trainers-section *::before,
              .trainers-section *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
                scroll-behavior: auto !important;
              }
            }
          `}
        </style>
      </section>

      {/* =====================================================
          TRAINER MODAL
      ====================================================== */}

      <TrainerModal
        trainer={selectedTrainer}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default TrainersSection;