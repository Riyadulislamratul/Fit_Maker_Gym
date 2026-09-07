import React, { memo, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dumbbell,
  UserRound,
  Users,
  BookOpen,
  X,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    title: "Personalized Workout Plans",
    desc: "Customized routines that match your fitness level and goals, ensuring you achieve the best results in the most efficient way.",
    icon: Dumbbell,
    details:
      "Get workout programs designed around your current fitness level, goals, schedule, and progress. Your plan evolves as you improve.",
  },
  {
    title: "Expert Coaching",
    desc: "Work with certified trainers who will guide you every step of the way to ensure you're on the right track.",
    icon: UserRound,
    details:
      "Our experienced coaches provide guidance, technique corrections, motivation, and personalized recommendations to help you train safely and effectively.",
  },
  {
    title: "Community Support",
    desc: "Join a vibrant community of fitness enthusiasts where you can share experiences, get motivated, and stay inspired.",
    icon: Users,
    details:
      "Connect with other members, share your achievements, participate in challenges, and stay motivated through a supportive fitness community.",
  },
  {
    title: "Exclusive Resources",
    desc: "Access premium content, including video tutorials, nutrition guides, and members-only discounts on fitness gear.",
    icon: BookOpen,
    details:
      "Unlock premium workout videos, nutrition guides, fitness tips, educational content, and exclusive member benefits.",
  },
];

/* ============================================================
   FEATURE CARD
============================================================ */

const FeatureCard = memo(({ item, index, onSelect }) => {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
        scale: 0.95,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        delay: index * 0.12,
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -8,
      }}
      whileTap={{
        scale: 0.98,
      }}
      onClick={() => onSelect(item)}
      className="
        group
        relative
        cursor-pointer
        overflow-hidden
        rounded-2xl
        border
        border-red-500/20
        bg-[#111]
        p-5
        transition-[transform,border-color,box-shadow]
        duration-500
        ease-[cubic-bezier(0.22,1,0.36,1)]
        hover:border-red-500/50
        hover:shadow-[0_0_35px_rgba(255,0,0,0.25)]
        transform-gpu
      "
    >
      {/* ==================================================
          ANIMATED TOP BORDER
      ================================================== */}

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: index * 0.12 + 0.3,
          duration: 0.6,
          ease: "easeOut",
        }}
        className="
          absolute
          left-0
          top-0
          h-[2px]
          w-full
          origin-left
          bg-gradient-to-r
          from-transparent
          via-red-500
          to-transparent
        "
      />

      {/* ==================================================
          CARD GLOW
      ================================================== */}

      <div
        className="
          absolute
          -bottom-10
          left-1/2
          h-24
          w-24
          -translate-x-1/2
          rounded-full
          bg-red-500/0
          blur-3xl
          transition-[background-color]
          duration-500
          group-hover:bg-red-500/30
          pointer-events-none
        "
      />

      {/* ==================================================
          MOVING SHINE
      ================================================== */}

      <div
        className="
          community-card-shine
          pointer-events-none
          absolute
          left-0
          top-0
          h-full
          w-20
          rotate-12
          bg-gradient-to-r
          from-transparent
          via-white/5
          to-transparent
          blur-md
        "
      />

      {/* ==================================================
          ICON
      ================================================== */}

      <motion.div
        whileHover={{
          rotate: [0, -8, 8, 0],
          scale: 1.1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="
          relative
          mb-4
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          border
          border-red-500/20
          bg-red-500/10
          text-red-500
          transition-[border-color,background-color,color,box-shadow]
          duration-500
          group-hover:border-red-500/50
          group-hover:bg-red-500
          group-hover:text-white
          group-hover:shadow-[0_0_25px_rgba(239,68,68,0.35)]
        "
      >
        <Icon size={21} />
      </motion.div>

      {/* ==================================================
          TITLE
      ================================================== */}

      <h3
        className="
          relative
          text-lg
          font-bold
          text-white
          transition-[color]
          duration-300
          group-hover:text-red-500
        "
      >
        {item.title}
      </h3>

      {/* ==================================================
          DESCRIPTION
      ================================================== */}

      <p
        className="
          relative
          mt-3
          text-sm
          leading-6
          text-gray-400
          transition-[color]
          duration-300
          group-hover:text-gray-300
        "
      >
        {item.desc}
      </p>

      {/* ==================================================
          EXPLORE FEATURE
      ================================================== */}

      <div
        className="
          relative
          mt-5
          flex
          items-center
          gap-2
          text-xs
          font-semibold
          text-red-500
        "
      >
        <span>Explore Feature</span>

        <span className="community-arrow flex">
          <ArrowRight size={15} />
        </span>
      </div>

      {/* ==================================================
          CORNER GLOW
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-12
          -top-12
          h-24
          w-24
          rounded-full
          bg-red-500/0
          blur-3xl
          transition-[background-color]
          duration-700
          group-hover:bg-red-500/20
        "
      />
    </motion.div>
  );
});

FeatureCard.displayName = "FeatureCard";

/* ============================================================
   MODAL
============================================================ */

const FeatureModal = memo(({ feature, onClose }) => {
  if (!feature) return null;

  const Icon = feature.icon;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
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
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 30,
            scale: 0.9,
          }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          onClick={(e) => e.stopPropagation()}
          className="
            relative
            w-full
            max-w-lg
            overflow-hidden
            rounded-3xl
            border
            border-red-500/30
            bg-[#111]
            p-7
            shadow-[0_0_80px_rgba(239,68,68,0.2)]
            transform-gpu
          "
        >
          {/* Modal Glow */}

          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-20
              h-48
              w-48
              rounded-full
              bg-red-500/20
              blur-[80px]
            "
          />

          {/* ==================================================
              CLOSE BUTTON
          ================================================== */}

          <motion.button
            whileHover={{
              rotate: 90,
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.9,
            }}
            onClick={onClose}
            aria-label="Close feature details"
            className="
              absolute
              right-5
              top-5
              flex
              h-9
              w-9
              cursor-pointer
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/5
              text-gray-400
              transition-[border-color,background-color,color]
              duration-300
              hover:border-red-500/40
              hover:bg-red-500
              hover:text-white
            "
          >
            <X size={18} />
          </motion.button>

          {/* ==================================================
              ICON
          ================================================== */}

          <div
            className="
              relative
              mb-5
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-red-500/10
              text-red-500
              shadow-[0_0_25px_rgba(239,68,68,0.15)]
            "
          >
            <Icon size={26} />
          </div>

          {/* ==================================================
              TITLE
          ================================================== */}

          <h3 className="relative text-2xl font-bold">
            {feature.title}
          </h3>

          {/* ==================================================
              DETAILS
          ================================================== */}

          <p className="relative mt-4 leading-7 text-gray-400">
            {feature.details}
          </p>

          {/* ==================================================
              GET STARTED
          ================================================== */}

          <motion.button
            whileHover={{
              scale: 1.03,
              y: -2,
            }}
            whileTap={{
              scale: 0.97,
            }}
            onClick={onClose}
            className="
              relative
              mt-7
              w-full
              cursor-pointer
              rounded-full
              bg-red-600
              py-3
              text-sm
              font-semibold
              text-white
              transition-[background-color,box-shadow]
              duration-300
              hover:bg-red-700
              hover:shadow-[0_0_25px_rgba(239,68,68,0.25)]
            "
          >
            Get Started →
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
});

FeatureModal.displayName = "FeatureModal";

/* ============================================================
   MAIN COMPONENT
============================================================ */

const CommunitySection = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  /* ==========================================================
     BODY SCROLL LOCK
  ========================================================== */

  useEffect(() => {
    if (!selectedFeature) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedFeature]);

  /* ==========================================================
     ESCAPE KEY
  ========================================================== */

  useEffect(() => {
    if (!selectedFeature) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedFeature(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedFeature]);

  return (
    <>
      <section
        className="
          relative
          overflow-hidden
          py-20
          text-white
          lg:overflow-visible
        "
        id="coaching"
      >
        {/* ==================================================
            BACKGROUND GLOW EFFECTS
        ================================================== */}

        <div
          className="
            community-glow-left
            absolute
            left-0
            top-20
            size-37
            rounded-full
            bg-red-500
            blur-[120px]
            lg:-left-20
            lg:-top-17
            lg:size-72
          "
        />

        <div
          className="
            community-glow-right
            absolute
            bottom-49
            right-0
            h-72
            w-72
            rounded-full
            bg-orange-500
            blur-[120px]
            lg:bottom-0
          "
        />

        {/* ==================================================
            FLOATING PARTICLES
        ================================================== */}

        <span
          className="
            community-particle-1
            absolute
            left-[15%]
            top-[30%]
            h-1.5
            w-1.5
            rounded-full
            bg-red-500
            shadow-[0_0_15px_rgba(239,68,68,0.8)]
          "
        />

        <span
          className="
            community-particle-2
            absolute
            right-[20%]
            top-[20%]
            h-2
            w-2
            rounded-full
            bg-orange-500
            shadow-[0_0_15px_rgba(249,115,22,0.8)]
          "
        />

        {/* ==================================================
            MAIN CONTAINER
        ================================================== */}

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          {/* ==================================================
              HEADING
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: -35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-center"
          >
            <motion.h2
              className="text-4xl font-extrabold leading-tight"
              whileHover={{
                scale: 1.02,
              }}
              transition={{
                duration: 0.3,
              }}
            >
              Join Our{" "}
              <span className="relative text-red-500">
                Fitness Community

                {/* Animated underline */}

                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.5,
                    duration: 0.7,
                    ease: "easeOut",
                  }}
                  className="
                    absolute
                    -bottom-1
                    left-0
                    h-[2px]
                    rounded-full
                    bg-red-500
                  "
                />
              </span>
            </motion.h2>

            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.25,
                duration: 0.6,
              }}
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-center
                text-sm
                leading-7
                text-gray-400
              "
            >
              Sign Up Now To Unlock Exclusive Access To Personalized Workout
              Plans, Expert Coaching, And A Supportive Community That Will Help
              You Achieve Your Fitness Goals.
            </motion.p>
          </motion.div>

          {/* ==================================================
              FEATURE CARDS
          ================================================== */}

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {features.map((item, index) => (
              <FeatureCard
                key={item.title}
                item={item}
                index={index}
                onSelect={setSelectedFeature}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          FEATURE DETAILS MODAL
      ====================================================== */}

      <FeatureModal
        feature={selectedFeature}
        onClose={() => setSelectedFeature(null)}
      />

      {/* ======================================================
          PERFORMANCE CSS
      ====================================================== */}

      <style>{`
        /* -----------------------------------------------
           BACKGROUND GLOWS
        ------------------------------------------------ */

        .community-glow-left {
          animation: communityGlowLeft 12s ease-in-out infinite;
          transform: translate3d(0, 0, 0);
          will-change: transform;
        }

        .community-glow-right {
          animation: communityGlowRight 14s ease-in-out infinite;
          transform: translate3d(0, 0, 0);
          will-change: transform;
        }

        @keyframes communityGlowLeft {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          25% {
            transform: translate3d(30px, -20px, 0) scale(1.08);
          }

          50% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          75% {
            transform: translate3d(-30px, 20px, 0) scale(1.08);
          }
        }

        @keyframes communityGlowRight {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          25% {
            transform: translate3d(-30px, 20px, 0) scale(1.1);
          }

          50% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          75% {
            transform: translate3d(30px, -20px, 0) scale(1.1);
          }
        }

        /* -----------------------------------------------
           PARTICLES
        ------------------------------------------------ */

        .community-particle-1 {
          animation: communityParticleOne 4s ease-in-out infinite;
        }

        .community-particle-2 {
          animation: communityParticleTwo 5s ease-in-out 1s infinite;
        }

        @keyframes communityParticleOne {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
            opacity: 0.2;
          }

          50% {
            transform: translate3d(0, -20px, 0);
            opacity: 0.8;
          }
        }

        @keyframes communityParticleTwo {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
            opacity: 0.2;
          }

          50% {
            transform: translate3d(0, 25px, 0);
            opacity: 0.7;
          }
        }

        /* -----------------------------------------------
           CARD SHINE
        ------------------------------------------------ */

        .community-card-shine {
          transform: translate3d(-120%, 0, 0) rotate(12deg);
          animation: communityCardShine 5s ease-in-out 4s infinite;
          will-change: transform;
        }

        @keyframes communityCardShine {
          0% {
            transform: translate3d(-120%, 0, 0) rotate(12deg);
          }

          35%,
          100% {
            transform: translate3d(220%, 0, 0) rotate(12deg);
          }
        }

        /* -----------------------------------------------
           ARROW
        ------------------------------------------------ */

        .community-arrow {
          animation: communityArrow 1.5s ease-in-out infinite;
          will-change: transform;
        }

        @keyframes communityArrow {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(4px, 0, 0);
          }
        }

        /* -----------------------------------------------
           MOBILE PERFORMANCE
        ------------------------------------------------ */

        @media (max-width: 767px) {
          .community-glow-left,
          .community-glow-right {
            filter: blur(80px);
          }

          .community-particle-1,
          .community-particle-2 {
            display: none;
          }
        }

        /* -----------------------------------------------
           REDUCED MOTION
        ------------------------------------------------ */

        @media (prefers-reduced-motion: reduce) {
          .community-glow-left,
          .community-glow-right,
          .community-particle-1,
          .community-particle-2,
          .community-card-shine,
          .community-arrow {
            animation: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default CommunitySection;