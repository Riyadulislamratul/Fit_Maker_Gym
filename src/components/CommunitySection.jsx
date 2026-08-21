import React, { useEffect, useState } from "react";
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

const CommunitySection = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedFeature) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedFeature]);

  // Close modal with Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedFeature(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <section
        className="relative overflow-hidden py-20 text-white lg:overflow-visible"
        id="coaching"
      >
        {/* ==================================================
            BACKGROUND GLOW EFFECTS
        ================================================== */}

        <motion.div
          animate={{
            x: [0, 30, 0, -30, 0],
            y: [0, -20, 0, 20, 0],
            scale: [1, 1.08, 1, 1.08, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
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

        <motion.div
          animate={{
            x: [0, -30, 0, 30, 0],
            y: [0, 20, 0, -20, 0],
            scale: [1, 1.1, 1, 1.1, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
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

        {/* Small floating particles */}

        <motion.span
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
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

        <motion.span
          animate={{
            y: [0, 25, 0],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="
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
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
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
                  onClick={() => setSelectedFeature(item)}
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
                    transition-all
                    duration-500
                    hover:border-red-500/50
                    hover:shadow-[0_0_35px_rgba(255,0,0,0.25)]
                  "
                >
                  {/* Animated top border */}

                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.12 + 0.3,
                      duration: 0.6,
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

                  {/* Card Glow */}

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
                      transition-all
                      duration-500
                      group-hover:bg-red-500/30
                    "
                  />

                  {/* Moving Glow */}

                  <motion.div
                    animate={{
                      x: ["-120%", "220%"],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      repeatDelay: 4,
                      ease: "easeInOut",
                    }}
                    className="
                      pointer-events-none
                      absolute
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

                  {/* Icon */}

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
                      transition-all
                      duration-500
                      group-hover:border-red-500/50
                      group-hover:bg-red-500
                      group-hover:text-white
                      group-hover:shadow-[0_0_25px_rgba(239,68,68,0.35)]
                    "
                  >
                    <Icon size={21} />
                  </motion.div>

                  {/* Title */}

                  <h3
                    className="
                      relative
                      text-lg
                      font-bold
                      text-white
                      transition
                      duration-300
                      group-hover:text-red-500
                    "
                  >
                    {item.title}
                  </h3>

                  {/* Description */}

                  <p
                    className="
                      relative
                      mt-3
                      text-sm
                      leading-6
                      text-gray-400
                      transition-colors
                      duration-300
                      group-hover:text-gray-300
                    "
                  >
                    {item.desc}
                  </p>

                  {/* Learn More */}

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

                    <motion.span
                      animate={{
                        x: [0, 4, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <ArrowRight size={15} />
                    </motion.span>
                  </div>

                  {/* Corner Glow */}

                  <div
                    className="
                      absolute
                      -right-12
                      -top-12
                      h-24
                      w-24
                      rounded-full
                      bg-red-500/0
                      blur-3xl
                      transition-all
                      duration-700
                      group-hover:bg-red-500/20
                    "
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================================================
          FEATURE DETAILS MODAL
      ================================================== */}

      <AnimatePresence>
        {selectedFeature && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedFeature(null)}
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
              "
            >
              {/* Modal Glow */}

              <div
                className="
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

              {/* Close */}

              <motion.button
                whileHover={{
                  rotate: 90,
                  scale: 1.1,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                onClick={() => setSelectedFeature(null)}
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
                  transition
                  hover:border-red-500/40
                  hover:bg-red-500
                  hover:text-white
                "
              >
                <X size={18} />
              </motion.button>

              {/* Icon */}

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
                {(() => {
                  const Icon = selectedFeature.icon;
                  return <Icon size={26} />;
                })()}
              </div>

              <h3 className="relative text-2xl font-bold">
                {selectedFeature.title}
              </h3>

              <p className="relative mt-4 leading-7 text-gray-400">
                {selectedFeature.details}
              </p>

              <motion.button
                whileHover={{
                  scale: 1.03,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                onClick={() => setSelectedFeature(null)}
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
                  transition
                  hover:bg-red-700
                  hover:shadow-[0_0_25px_rgba(239,68,68,0.25)]
                "
              >
                Get Started →
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CommunitySection;