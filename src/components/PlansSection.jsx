import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

import {
  ArrowRight,
  Check,
  X,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

/* =========================================================
   MONTHLY PLANS
========================================================= */

const monthlyPlans = [
  {
    title: "PRO PLAN",
    price: "99",
    active: false,
    features: [
      "Access To All Of Our Exercise Videos",
      "Progress Tracking",
      "Supportive Online Community",
      "Advanced Personalized Workout Plans",
      "Comprehensive Nutrition Coaching",
      "Access To Advanced Workout Programs",
    ],
  },
  {
    title: "CUSTOM PLAN",
    price: "149",
    active: true,
    features: [
      "Access To All Of Our Exercise Videos",
      "Progress Tracking",
      "Supportive Online Community",
      "Fully Customized Workout And Nutrition Plan",
      "Weekly Check-ins With Your Trainer",
      "Access To All Platform Features",
    ],
  },
  {
    title: "BEGINNER PLAN",
    price: "49",
    active: false,
    features: [
      "Access To All Of Our Exercise Videos",
      "Progress Tracking",
      "Supportive Online Community",
      "Personalized Workout Plans",
      "Basic Nutrition Guidance",
      "Access To Group Fitness Classes",
    ],
  },
];

/* =========================================================
   ANNUAL PLANS
========================================================= */

const annualPlans = [
  {
    title: "PRO YEARLY",
    price: "999",
    active: false,
    features: [
      "Unlimited Exercise Videos",
      "Full Progress Analytics",
      "VIP Community Access",
      "Advanced Personalized Plans",
      "Nutrition Coaching",
      "Premium Workout Programs",
    ],
  },
  {
    title: "ELITE YEARLY",
    price: "1499",
    active: true,
    features: [
      "Everything In Pro",
      "1-on-1 Coaching",
      "Custom Meal Plans",
      "Weekly Trainer Meetings",
      "Priority Support",
      "Exclusive Fitness Merchandise",
    ],
  },
  {
    title: "STARTER YEARLY",
    price: "499",
    active: false,
    features: [
      "Workout Video Access",
      "Progress Tracking",
      "Basic Nutrition Guides",
      "Community Access",
      "Beginner Friendly Programs",
      "Monthly Fitness Reports",
    ],
  },
];

/* =========================================================
   ANIMATED PRICE
========================================================= */

const AnimatedPrice = ({ price, shouldReduceMotion }) => {
  const [displayPrice, setDisplayPrice] = useState(
    shouldReduceMotion ? Number(price) : 0
  );

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayPrice(Number(price));
      return;
    }

    const target = Number(price);
    const duration = 800;
    const startTime = performance.now();

    let animationFrame;

    const animate = (currentTime) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      // Ease out
      const easeOut = 1 - Math.pow(1 - progress, 4);

      setDisplayPrice(Math.floor(target * easeOut));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setDisplayPrice(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [price, shouldReduceMotion]);

  return <>{displayPrice}</>;
};

/* =========================================================
   PLAN CARD
========================================================= */

const PlanCard = ({
  plan,
  billing,
  index,
  onChoose,
  shouldReduceMotion,
}) => {
  /* =======================================================
     3D TILT VALUES
  ======================================================= */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [6, -6]),
    {
      stiffness: 180,
      damping: 20,
    }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-6, 6]),
    {
      stiffness: 180,
      damping: 20,
    }
  );

  /* =======================================================
     MOUSE MOVE
  ======================================================= */

  const handleMouseMove = (event) => {
    if (shouldReduceMotion) return;

    const rect =
      event.currentTarget.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) /
        rect.width -
      0.5;

    const y =
      (event.clientY - rect.top) /
        rect.height -
      0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  /* =======================================================
     MOUSE LEAVE
  ======================================================= */

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? { opacity: 1 }
          : {
              opacity: 0,
              y: 60,
              scale: 0.94,
            }
      }
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.65,
        delay: shouldReduceMotion
          ? 0
          : index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        perspective: 1000,
      }}
      className="h-full"
    >
      <motion.div
        style={
          shouldReduceMotion
            ? {}
            : {
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }
        }
        whileHover={
          shouldReduceMotion
            ? {}
            : {
                y: -10,
                scale: 1.02,
              }
        }
        transition={{
          duration: 0.3,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`
          group
          relative
          h-full
          overflow-hidden
          rounded-3xl
          border
          bg-[#111]
          p-6
          sm:p-8
          cursor-pointer
          transition-all
          duration-500

          ${
            plan.active
              ? `
                border-red-500
                shadow-[0_0_40px_rgba(255,0,0,0.25)]
                hover:shadow-[0_0_65px_rgba(255,0,0,0.45)]
              `
              : `
                border-orange-500/40
                hover:border-orange-500
                hover:shadow-[0_0_40px_rgba(255,120,0,0.2)]
              `
          }
        `}
      >
        {/* =================================================
            POPULAR BADGE
        ================================================== */}

        {plan.active && (
          <motion.div
            initial={
              shouldReduceMotion
                ? { opacity: 1 }
                : {
                    opacity: 0,
                    y: -15,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.4,
              delay: shouldReduceMotion
                ? 0
                : 0.5 + index * 0.1,
            }}
            className="
              absolute
              right-4
              top-4
              z-20
              flex
              items-center
              gap-1.5
              rounded-full
              border
              border-red-400/30
              bg-red-500/10
              px-3
              py-1
              text-[10px]
              font-bold
              text-red-400
              backdrop-blur-md
            "
          >
            <Sparkles size={11} />
            POPULAR
          </motion.div>
        )}

        {/* =================================================
            TOP GLOW
        ================================================== */}

        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  scale: [1, 1.15, 1],
                  opacity: [0.15, 0.3, 0.15],
                }
          }
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.5,
          }}
          className={`
            absolute
            left-1/2
            top-0
            h-40
            w-40
            -translate-x-1/2
            rounded-full
            blur-3xl

            ${
              plan.active
                ? "bg-red-500/30"
                : "bg-red-500/20"
            }

            transition-all
            duration-500
            group-hover:bg-red-500/40
          `}
        />

        {/* =================================================
            BOTTOM HOVER GLOW
        ================================================== */}

        <div
          className={`
            absolute
            -bottom-20
            left-1/2
            h-44
            w-44
            -translate-x-1/2
            rounded-full
            blur-3xl
            transition-all
            duration-700

            ${
              plan.active
                ? "bg-red-500/10 group-hover:bg-red-500/40"
                : "bg-orange-500/0 group-hover:bg-orange-500/20"
            }
          `}
        />

        {/* =================================================
            CARD SHINE
        ================================================== */}

        {!shouldReduceMotion && (
          <motion.div
            initial={{
              x: "-150%",
            }}
            whileHover={{
              x: "150%",
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              pointer-events-none
              absolute
              inset-y-0
              left-0
              z-10
              w-1/3
              skew-x-[-20deg]
              bg-gradient-to-r
              from-transparent
              via-white/10
              to-transparent
            "
          />
        )}

        {/* =================================================
            PACKAGE
        ================================================== */}

        <p className="relative z-20 text-center text-xs sm:text-sm text-orange-400">
          Package
        </p>

        {/* =================================================
            TITLE
        ================================================== */}

        <motion.h3
          whileHover={
            shouldReduceMotion
              ? {}
              : {
                  scale: 1.04,
                }
          }
          className="
            relative
            z-20
            mt-4
            text-center
            text-2xl
            sm:text-3xl
            font-extrabold
            transition
            duration-300
            group-hover:text-red-500
          "
        >
          {plan.title}
        </motion.h3>

        {/* =================================================
            PRICE
        ================================================== */}

        <div className="relative z-20 mt-6 text-center">
          <motion.span
            key={`${billing}-${plan.price}`}
            initial={
              shouldReduceMotion
                ? { opacity: 1 }
                : {
                    opacity: 0,
                    y: 15,
                    scale: 0.8,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.4,
            }}
            className="
              inline-block
              text-4xl
              sm:text-5xl
              font-extrabold
              transition
              duration-300
              group-hover:scale-110
            "
          >
            <AnimatedPrice
              price={plan.price}
              shouldReduceMotion={
                shouldReduceMotion
              }
            />
          </motion.span>

          <span className="
            ml-1
            block
            sm:inline
            text-xs
            sm:text-sm
            text-gray-400
            mt-2
            sm:mt-0
          ">
            ${" "}
            {billing === "monthly"
              ? "USDT / Month"
              : "USDT / Year"}
          </span>
        </div>

        {/* =================================================
            FEATURES
        ================================================== */}

        <ul className="relative z-20 mt-8 space-y-4">
          {plan.features.map(
            (feature, featureIndex) => (
              <motion.li
                key={featureIndex}
                initial={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : {
                        opacity: 0,
                        x: -15,
                      }
                }
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.35,
                  delay: shouldReduceMotion
                    ? 0
                    : 0.2 +
                      featureIndex * 0.07,
                }}
                className="
                  flex
                  items-start
                  gap-3
                  text-xs
                  sm:text-sm
                  text-gray-300
                "
              >
                <motion.span
                  whileHover={
                    shouldReduceMotion
                      ? {}
                      : {
                          scale: 1.5,
                        }
                  }
                  className="
                    mt-1.5
                    h-2
                    w-2
                    rounded-full
                    bg-red-500
                    shrink-0
                  "
                />

                {feature}
              </motion.li>
            )
          )}
        </ul>

        {/* =================================================
            CHOOSE PLAN BUTTON
        ================================================== */}

        <motion.button
          whileHover={
            shouldReduceMotion
              ? {}
              : {
                  scale: 1.04,
                }
          }
          whileTap={
            shouldReduceMotion
              ? {}
              : {
                  scale: 0.96,
                }
          }
          onClick={() => onChoose(plan)}
          className="
            relative
            z-20
            mt-10
            flex
            w-full
            cursor-pointer
            items-center
            justify-center
            gap-2
            rounded-full
            bg-red-600
            py-3
            sm:py-4
            text-sm
            font-bold
            transition-all
            duration-500
            hover:bg-red-700
            hover:shadow-[0_0_30px_rgba(239,68,68,0.35)]
          "
        >
          Choose This Plan

          <motion.span
            animate={
              shouldReduceMotion
                ? {}
                : {
                    x: [0, 4, 0],
                  }
            }
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowRight size={16} />
          </motion.span>
        </motion.button>

        {/* =================================================
            BOTTOM ACCENT
        ================================================== */}

        <motion.div
          initial={
            shouldReduceMotion
              ? {
                  scaleX: 1,
                }
              : {
                  scaleX: 0,
                }
          }
          animate={{
            scaleX: 1,
          }}
          transition={{
            duration: shouldReduceMotion
              ? 0
              : 0.8,
            delay: shouldReduceMotion
              ? 0
              : 0.3 + index * 0.1,
          }}
          className={`
            absolute
            bottom-0
            left-0
            h-[2px]
            w-full
            origin-left

            ${
              plan.active
                ? "bg-gradient-to-r from-transparent via-red-500 to-transparent"
                : "bg-gradient-to-r from-transparent via-orange-500/60 to-transparent"
            }
          `}
        />
      </motion.div>
    </motion.div>
  );
};

/* =========================================================
   PLAN MODAL
========================================================= */

const PlanModal = ({
  plan,
  billing,
  onClose,
  shouldReduceMotion,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      onClick={onClose}
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        bg-black/80
        backdrop-blur-md
        p-4
      "
    >
      <motion.div
        initial={
          shouldReduceMotion
            ? {
                opacity: 0,
              }
            : {
                opacity: 0,
                scale: 0.85,
                y: 30,
              }
        }
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        exit={
          shouldReduceMotion
            ? {
                opacity: 0,
              }
            : {
                opacity: 0,
                scale: 0.85,
                y: 30,
              }
        }
        transition={{
          duration: shouldReduceMotion
            ? 0
            : 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        onClick={(event) =>
          event.stopPropagation()
        }
        className="
          relative
          w-full
          max-w-md
          overflow-hidden
          rounded-3xl
          border
          border-red-500/30
          bg-[#111]
          p-6
          sm:p-8
          shadow-[0_0_70px_rgba(239,68,68,0.2)]
        "
      >
        {/* Modal Glow */}

        <div className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-40
          w-40
          rounded-full
          bg-red-500/20
          blur-3xl
        " />

        <div className="
          pointer-events-none
          absolute
          -bottom-20
          -left-20
          h-40
          w-40
          rounded-full
          bg-orange-500/10
          blur-3xl
        " />

        {/* =================================================
            CLOSE
        ================================================== */}

        <button
          onClick={onClose}
          aria-label="Close"
          className="
            absolute
            right-4
            top-4
            z-20
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/5
            text-gray-400
            transition
            duration-300
            hover:bg-red-500
            hover:text-white
          "
        >
          <X size={17} />
        </button>

        {/* =================================================
            ICON
        ================================================== */}

        <motion.div
          initial={
            shouldReduceMotion
              ? {}
              : {
                  scale: 0,
                  rotate: -30,
                }
          }
          animate={{
            scale: 1,
            rotate: 0,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
          }}
          className="
            relative
            z-10
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            border
            border-red-500/20
            bg-red-500/10
            text-red-500
          "
        >
          <ShieldCheck size={28} />
        </motion.div>

        {/* =================================================
            TEXT
        ================================================== */}

        <p className="
          relative
          z-10
          mt-6
          text-xs
          font-semibold
          uppercase
          tracking-widest
          text-orange-400
        ">
          Selected Plan
        </p>

        <h3 className="
          relative
          z-10
          mt-2
          text-2xl
          sm:text-3xl
          font-extrabold
        ">
          {plan.title}
        </h3>

        {/* =================================================
            PRICE
        ================================================== */}

        <div className="relative z-10 mt-4">
          <span className="
            text-4xl
            font-extrabold
            text-red-500
          ">
            ${plan.price}
          </span>

          <span className="
            ml-2
            text-sm
            text-gray-400
          ">
            USDT /{" "}
            {billing === "monthly"
              ? "Month"
              : "Year"}
          </span>
        </div>

        <p className="
          relative
          z-10
          mt-4
          text-sm
          leading-6
          text-gray-400
        ">
          You're one step away from starting
          your fitness journey with FitMaker.
        </p>

        {/* =================================================
            FEATURES
        ================================================== */}

        <div className="
          relative
          z-10
          mt-5
          space-y-3
        ">
          {plan.features.map(
            (feature, index) => (
              <motion.div
                key={index}
                initial={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : {
                        opacity: 0,
                        x: -10,
                      }
                }
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.3,
                  delay: shouldReduceMotion
                    ? 0
                    : index * 0.05,
                }}
                className="
                  flex
                  items-start
                  gap-2
                  text-xs
                  text-gray-300
                "
              >
                <Check
                  size={14}
                  className="
                    mt-0.5
                    shrink-0
                    text-red-500
                  "
                />

                {feature}
              </motion.div>
            )
          )}
        </div>

        {/* =================================================
            CONTINUE BUTTON
        ================================================== */}

        <motion.button
          whileHover={
            shouldReduceMotion
              ? {}
              : {
                  scale: 1.03,
                }
          }
          whileTap={
            shouldReduceMotion
              ? {}
              : {
                  scale: 0.97,
                }
          }
          onClick={() => {
            /*
              CONNECT THIS TO YOUR AUTH SYSTEM

              Example:

              navigate("/signup");

              or:

              setAuthModal(true);
            */

            console.log(
              "Selected Plan:",
              plan.title
            );

            console.log(
              "Billing:",
              billing
            );
          }}
          className="
            relative
            z-10
            mt-7
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-full
            bg-red-600
            py-3.5
            text-sm
            font-bold
            transition
            duration-300
            hover:bg-red-700
            hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]
          "
        >
          Continue With This Plan

          <ArrowRight size={16} />
        </motion.button>

        {/* =================================================
            CANCEL
        ================================================== */}

        <button
          onClick={onClose}
          className="
            relative
            z-10
            mt-3
            w-full
            py-2
            text-xs
            text-gray-500
            transition
            duration-300
            hover:text-white
          "
        >
          Maybe Later
        </button>
      </motion.div>
    </motion.div>
  );
};

/* =========================================================
   MAIN PLANS SECTION
========================================================= */

const PlansSection = () => {
  const [billing, setBilling] =
    useState("monthly");

  const [selectedPlan, setSelectedPlan] =
    useState(null);

  const shouldReduceMotion =
    useReducedMotion();

  /* =======================================================
     ESCAPE KEY
  ======================================================= */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedPlan(null);
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  /* =======================================================
     PREVENT BODY SCROLL WHEN MODAL IS OPEN
  ======================================================= */

  useEffect(() => {
    if (selectedPlan) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedPlan]);

  /* =======================================================
     CURRENT PLANS
  ======================================================= */

  const currentPlans =
    billing === "monthly"
      ? monthlyPlans
      : annualPlans;

  return (
    <section
      id="plans"
      className="
        relative
        py-16
        sm:py-20
        lg:py-24
        text-white
      "
    >
      {/* ==================================================
          RED BACKGROUND GLOW
      ================================================== */}

      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: [0, 40, -20, 0],
                y: [0, -30, 20, 0],
                scale: [1, 1.15, 0.95, 1],
                opacity: [0.15, 0.35, 0.2, 0.15],
              }
        }
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-40
          left-[-100px]
          h-56
          w-56
          rounded-full
          bg-red-500
          blur-[120px]

          sm:h-72
          sm:w-72

          lg:bottom-0
        "
      />

      {/* ==================================================
          ORANGE BACKGROUND GLOW
      ================================================== */}

      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: [0, -40, 20, 0],
                y: [0, 25, -20, 0],
                scale: [1, 1.2, 0.9, 1],
                opacity: [0.12, 0.3, 0.15, 0.12],
              }
        }
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[-100px]
          top-58
          h-56
          w-56
          rounded-full
          bg-orange-500
          blur-[120px]

          sm:h-72
          sm:w-72

          lg:-top-25
        "
      />

      {/* ==================================================
          CENTER GLOW
      ================================================== */}

      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                scale: [1, 1.2, 1],
                opacity: [0.03, 0.1, 0.03],
              }
        }
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[300px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-red-600
          blur-[160px]
        "
      />

      {/* ==================================================
          FLOATING PARTICLE 1
      ================================================== */}

      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                y: [0, -35, 0],
                x: [0, 20, 0],
                opacity: [0.1, 0.7, 0.1],
              }
        }
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-[15%]
          top-[25%]
          h-1.5
          w-1.5
          rounded-full
          bg-red-500
        "
      />

      {/* ==================================================
          FLOATING PARTICLE 2
      ================================================== */}

      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                y: [0, 30, 0],
                x: [0, -20, 0],
                opacity: [0.1, 0.6, 0.1],
              }
        }
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          right-[15%]
          bottom-[20%]
          h-2
          w-2
          rounded-full
          bg-orange-500
        "
      />

      {/* ==================================================
          CONTENT
      ================================================== */}

      <div className="
        relative
        z-10
        mx-auto
        max-w-7xl
        px-4
        sm:px-6
      ">
        {/* ==================================================
            HEADING
        ================================================== */}

        <motion.div
          initial={
            shouldReduceMotion
              ? {}
              : {
                  opacity: 0,
                  y: 40,
                }
          }
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
            initial={
              shouldReduceMotion
                ? {}
                : {
                    opacity: 0,
                    scale: 0.9,
                  }
            }
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              text-3xl
              sm:text-4xl
              font-extrabold
            "
          >
            Our{" "}
            <span className="text-red-500">
              Plans
            </span>
          </motion.h2>

          <motion.p
            initial={
              shouldReduceMotion
                ? {}
                : {
                    opacity: 0,
                    y: 15,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="
              mx-auto
              mt-4
              max-w-3xl
              text-xs
              sm:text-sm
              leading-7
              text-gray-400
            "
          >
            Select The Plan That Suits Your
            Fitness Goals And Let Our Expert
            Coaches Guide You Every Step Of The
            Way.
          </motion.p>
        </motion.div>

        {/* ==================================================
            BILLING TOGGLE
        ================================================== */}

        <motion.div
          initial={
            shouldReduceMotion
              ? {}
              : {
                  opacity: 0,
                  scale: 0.9,
                  y: 15,
                }
          }
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: 0.3,
          }}
          className="
            mt-8
            flex
            justify-center
          "
        >
          <div className="
            relative
            flex
            w-full
            rounded-full
            border
            border-red-500
            bg-[#111]
            p-1

            sm:w-auto
          ">
            {/* Sliding Toggle Background */}

            <motion.div
              animate={{
                x:
                  billing === "monthly"
                    ? 0
                    : "100%",
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
              }}
              className="
                absolute
                bottom-1
                left-1
                top-1
                w-[calc(50%-4px)]
                rounded-full
                bg-red-600
                shadow-[0_0_20px_rgba(239,68,68,0.35)]
              "
            />

            {/* Monthly */}

            <button
              onClick={() =>
                setBilling("monthly")
              }
              className={`
                relative
                z-10
                flex-1
                cursor-pointer
                rounded-full
                px-5
                py-2
                text-xs
                sm:flex-none
                sm:px-8
                sm:text-sm
                font-semibold
                transition-all
                duration-300

                ${
                  billing === "monthly"
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }
              `}
            >
              Monthly
            </button>

            {/* Annual */}

            <button
              onClick={() =>
                setBilling("annually")
              }
              className={`
                relative
                z-10
                flex-1
                cursor-pointer
                rounded-full
                px-5
                py-2
                text-xs
                sm:flex-none
                sm:px-8
                sm:text-sm
                font-semibold
                transition-all
                duration-300

                ${
                  billing === "annually"
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }
              `}
            >
              Annually
            </button>
          </div>
        </motion.div>

        {/* ==================================================
            ANNUAL SAVING MESSAGE
        ================================================== */}

        <AnimatePresence mode="wait">
          {billing === "annually" && (
            <motion.div
              initial={
                shouldReduceMotion
                  ? {}
                  : {
                      opacity: 0,
                      y: -10,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={
                shouldReduceMotion
                  ? {}
                  : {
                      opacity: 0,
                      y: -10,
                    }
              }
              className="
                mt-4
                flex
                justify-center
              "
            >
              <div className="
                flex
                items-center
                gap-2
                rounded-full
                border
                border-green-500/20
                bg-green-500/5
                px-4
                py-2
                text-xs
                text-green-400
              ">
                <Sparkles size={13} />

                Save more with our yearly plans
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ==================================================
            PLAN GRID
        ================================================== */}

        <div
          className={`
            mt-14
            grid
            grid-cols-1
            gap-6
            lg:grid-cols-3
            lg:gap-8
          `}
        >
          <AnimatePresence mode="popLayout">
            {currentPlans.map(
              (plan, index) => (
                <motion.div
                  key={`${billing}-${plan.title}`}
                  layout
                  initial={
                    shouldReduceMotion
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                          y: 50,
                          scale: 0.95,
                        }
                  }
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={
                    shouldReduceMotion
                      ? {
                          opacity: 0,
                        }
                      : {
                          opacity: 0,
                          y: -30,
                          scale: 0.95,
                        }
                  }
                  transition={{
                    duration:
                      shouldReduceMotion
                        ? 0
                        : 0.55,
                    delay:
                      shouldReduceMotion
                        ? 0
                        : index * 0.1,
                    ease: [
                      0.22,
                      1,
                      0.36,
                      1,
                    ],
                  }}
                  className="h-full"
                >
                  <PlanCard
                    plan={plan}
                    billing={billing}
                    index={index}
                    onChoose={
                      setSelectedPlan
                    }
                    shouldReduceMotion={
                      shouldReduceMotion
                    }
                  />
                </motion.div>
              )
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ==================================================
          PLAN MODAL
      ================================================== */}

      <AnimatePresence>
        {selectedPlan && (
          <PlanModal
            plan={selectedPlan}
            billing={billing}
            onClose={() =>
              setSelectedPlan(null)
            }
            shouldReduceMotion={
              shouldReduceMotion
            }
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default PlansSection;