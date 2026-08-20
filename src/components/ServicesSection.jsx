import React, { useState } from "react";
import GYM1 from "../assets/gym1.jpg";
import GYM2 from "../assets/gym2.jpg";
import GYM3 from "../assets/gym3.jpg";
import GYM4 from "../assets/gym4.jpg";

import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import { ArrowRight, X, CheckCircle2 } from "lucide-react";

const services = [
  {
    title: "LOSING WEIGHT",
    subtitle: "Click To Join Our Losing Weight Plan",
    description:
      "Achieve sustainable weight loss with custom meal plans, workout routines, and expert guidance.",
    image: GYM1,
    features: [
      "Personalized workout plan",
      "Custom nutrition guidance",
      "Progress tracking",
      "Expert coaching",
    ],
  },
  {
    title: "BUILDING MUSCLE",
    subtitle: "Click To Join Our Building Muscle Plan",
    description:
      "Develop strength and gain lean muscle through professional training plans and nutrition guidance.",
    image: GYM2,
    features: [
      "Muscle building workouts",
      "Strength progression",
      "Nutrition guidance",
      "Workout tracking",
    ],
  },
  {
    title: "TRAINING IN HOME",
    subtitle: "Click To See Our Ultimate Home Plan",
    description:
      "Stay fit without leaving home using our effective and flexible home workout plans.",
    image: GYM3,
    features: [
      "Home-friendly exercises",
      "No gym equipment required",
      "Flexible workout schedule",
      "Video workout guidance",
    ],
  },
  {
    title: "GYM PLAN",
    subtitle: "Click, Start Your Fitness Journey",
    description:
      "Build confidence and improve fitness with our complete gym training programs.",
    image: GYM4,
    features: [
      "Complete gym program",
      "Professional guidance",
      "Strength & cardio training",
      "Progress monitoring",
    ],
  },
];

/* =========================================================
   SERVICE CARD
========================================================= */

const ServiceCard = ({ service, index, onOpen }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [8, -8]),
    {
      stiffness: 200,
      damping: 20,
    }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-8, 8]),
    {
      stiffness: 200,
      damping: 20,
    }
  );

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x =
      (e.clientX - rect.left) / rect.width - 0.5;

    const y =
      (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
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
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        perspective: 1000,
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{
          y: -10,
        }}
        transition={{
          duration: 0.3,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => onOpen(service)}
        className="
          group
          relative
          overflow-hidden
          rounded-3xl
          border
          cursor-pointer
          border-red-500/10
          bg-[#111]
          transition-all
          duration-500
          hover:border-red-500
          hover:shadow-[0_0_40px_rgba(255,0,0,0.25)]
        "
      >
        {/* =========================================
            IMAGE
        ========================================== */}

        <div className="h-[260px] sm:h-[320px] w-full overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900">
          <motion.div
            whileHover={{
              scale: 1.1,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="h-full w-full"
          >
            <img
              src={service.image}
              alt={service.title}
              className="
                h-full
                w-full
                object-cover
                opacity-80
                transition-opacity
                duration-500
                group-hover:opacity-100
              "
            />
          </motion.div>
        </div>

        {/* =========================================
            OVERLAY
        ========================================== */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-black/10
            via-black/50
            to-black
            transition
            duration-500
            group-hover:from-red-500/10
          "
        />

        {/* =========================================
            IMAGE TOP SHINE
        ========================================== */}

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
            absolute
            top-0
            left-0
            h-full
            w-1/3
            bg-gradient-to-r
            from-transparent
            via-white/10
            to-transparent
            skew-x-[-20deg]
            pointer-events-none
          "
        />

        {/* =========================================
            ANIMATED GLOW
        ========================================== */}

        <div className="absolute -bottom-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-red-500/0 blur-3xl transition-all duration-700 group-hover:bg-red-500/40" />

        {/* =========================================
            RED TOP LINE
        ========================================== */}

        <motion.div
          initial={{
            scaleX: 0,
          }}
          whileInView={{
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3 + index * 0.1,
          }}
          className="
            absolute
            top-0
            left-0
            right-0
            h-[2px]
            bg-gradient-to-r
            from-transparent
            via-red-500
            to-transparent
            origin-left
          "
        />

        {/* =========================================
            CONTENT
        ========================================== */}

        <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-5">

          <div>
            {/* Title */}

            <motion.h3
              whileHover={{
                x: 8,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                text-lg
                sm:text-xl
                font-extrabold
                text-red-500
                transition
                duration-300
              "
            >
              {service.title}
            </motion.h3>

            {/* Subtitle */}

            <p className="mt-2 text-[11px] sm:text-xs font-semibold text-gray-200 leading-5">
              {service.subtitle}
            </p>

            {/* Description */}

            <p className="
              mt-3
              sm:mt-4
              text-[11px]
              sm:text-xs
              leading-5
              sm:leading-6
              text-gray-400
              transition
              duration-300
              group-hover:text-gray-300
            ">
              {service.description}
            </p>
          </div>

          {/* =========================================
              LEARN MORE
          ========================================== */}

          <motion.button
            whileHover={{
              x: 5,
            }}
            className="
              mt-6
              flex
              items-center
              gap-2
              text-xs
              sm:text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              group-hover:text-red-500
            "
          >
            Learn More

            <motion.span
              animate={{
                x: [0, 3, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowRight size={16} />
            </motion.span>
          </motion.button>
        </div>

        {/* =========================================
            CORNER ACCENT
        ========================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0,
          }}
          whileHover={{
            opacity: 1,
            scale: 1,
          }}
          className="
            absolute
            top-4
            right-4
            w-2
            h-2
            rounded-full
            bg-red-500
            shadow-[0_0_15px_rgba(239,68,68,0.9)]
          "
        />
      </motion.div>
    </motion.div>
  );
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section
      className="
        relative
        overflow-hidden
        lg:overflow-visible
        py-20
        sm:py-24
        lg:py-50
        text-white
      "
      id="services"
    >

      {/* =====================================================
          GLOW BACKGROUND
      ====================================================== */}

      {/* Original Red Glow - Animated */}

      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -20, 30, 0],
          scale: [1, 1.15, 0.95, 1],
          opacity: [0.2, 0.4, 0.25, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-120px] top-20 h-52 w-52 sm:h-72 sm:w-72 rounded-full bg-red-600 blur-[100px] sm:blur-[120px]"
      />

      {/* Original Orange Glow - Animated */}

      <motion.div
        animate={{
          x: [0, -40, 20, 0],
          y: [0, 20, -20, 0],
          scale: [1, 1.2, 0.9, 1],
          opacity: [0.15, 0.35, 0.2, 0.15],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-120px] bottom-0 h-52 w-52 sm:h-72 sm:w-72 rounded-full bg-orange-500 blur-[100px] sm:blur-[120px] hidden lg:block"
      />

      {/* Extra Ambient Glow */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.12, 0.05],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[400px]
          h-[300px]
          bg-red-600
          blur-[160px]
          rounded-full
          pointer-events-none
        "
      />

      {/* =====================================================
          FLOATING PARTICLES
      ====================================================== */}

      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          opacity: [0.1, 0.7, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[15%]
          top-[20%]
          w-2
          h-2
          rounded-full
          bg-red-500
        "
      />

      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
          opacity: [0.1, 0.6, 0.1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="
          absolute
          right-[20%]
          bottom-[20%]
          w-2
          h-2
          rounded-full
          bg-orange-500
        "
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">

        {/* ==================================================
            HEADING
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
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
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
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
            className="text-3xl sm:text-4xl font-extrabold leading-tight"
          >
            Our <span className="text-red-500">Services</span>
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
              duration: 0.6,
              delay: 0.2,
            }}
            className="mx-auto mt-4 max-w-3xl text-sm sm:text-base text-gray-400 leading-6"
          >
            At This Part You Can Easily Access All Of Our Services.
            Take A Look At Them And Choose Which Ever You Want.
          </motion.p>
        </motion.div>

        {/* ==================================================
            CARDS
        ================================================== */}

        <div className="mt-12 sm:mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">

          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              onOpen={setSelectedService}
            />
          ))}

        </div>
      </div>

      {/* =====================================================
          SERVICE MODAL
      ====================================================== */}

      <AnimatePresence>
        {selectedService && (
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
            onClick={() => setSelectedService(null)}
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
              initial={{
                opacity: 0,
                scale: 0.85,
                y: 40,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.85,
                y: 40,
              }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={(e) => e.stopPropagation()}
              className="
                relative
                w-full
                max-w-2xl
                max-h-[90vh]
                overflow-y-auto
                rounded-3xl
                border
                border-red-500/30
                bg-[#111]
                shadow-[0_0_80px_rgba(239,68,68,0.2)]
              "
            >
              {/* Close Button */}

              <button
                onClick={() => setSelectedService(null)}
                className="
                  absolute
                  top-4
                  right-4
                  z-20
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-black/60
                  border
                  border-white/10
                  text-white
                  transition
                  hover:bg-red-500
                  hover:border-red-500
                "
              >
                <X size={18} />
              </button>

              {/* Image */}

              <div className="h-60 sm:h-80 overflow-hidden">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="
                    h-full
                    w-full
                    object-cover
                  "
                />

                <div className="
                  absolute
                  top-0
                  left-0
                  right-0
                  h-80
                  bg-gradient-to-b
                  from-transparent
                  to-[#111]
                " />
              </div>

              {/* Modal Content */}

              <div className="relative p-6 sm:p-8 -mt-10">

                <p className="text-sm text-red-500 font-semibold">
                  FITMAKER PROGRAM
                </p>

                <h3 className="
                  mt-2
                  text-2xl
                  sm:text-3xl
                  font-extrabold
                  text-white
                ">
                  {selectedService.title}
                </h3>

                <p className="mt-3 text-gray-400 leading-7">
                  {selectedService.description}
                </p>

                {/* Features */}

                <div className="mt-6 space-y-3">

                  {selectedService.features.map(
                    (feature, index) => (
                      <motion.div
                        key={index}
                        initial={{
                          opacity: 0,
                          x: -15,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: 0.2 + index * 0.08,
                        }}
                        className="
                          flex
                          items-center
                          gap-3
                          text-sm
                          text-gray-300
                        "
                      >
                        <CheckCircle2
                          size={17}
                          className="text-red-500 shrink-0"
                        />

                        {feature}
                      </motion.div>
                    )
                  )}

                </div>

                {/* CTA */}

                <motion.button
                  whileHover={{
                    scale: 1.03,
                    boxShadow:
                      "0 10px 30px rgba(239,68,68,0.3)",
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="
                    mt-8
                    w-full
                    rounded-full
                    bg-red-600
                    py-3.5
                    text-sm
                    font-semibold
                    text-white
                    transition
                    hover:bg-red-700
                  "
                >
                  Start This Program
                </motion.button>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServicesSection;