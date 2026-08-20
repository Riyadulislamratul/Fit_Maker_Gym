import React, { useRef } from "react";
import Card from "./Card";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const heroRef = useRef(null);

  // ==========================================
  // MOUSE PARALLAX
  // ==========================================

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
  });

  const springY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
  });

  const imageX = useTransform(springX, [-1, 1], [-10, 10]);
  const imageY = useTransform(springY, [-1, 1], [-10, 10]);

  const glowX = useTransform(springX, [-1, 1], [-20, 20]);
  const glowY = useTransform(springY, [-1, 1], [-20, 20]);

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;

    const rect = heroRef.current.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    mouseX.set(x * 2 - 1);
    mouseY.set(y * 2 - 1);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // ==========================================
  // TEXT ANIMATION
  // ==========================================

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden lg:overflow-visible text-white pt-24 lg:pt-30 pb-16 lg:pb-20"
      id="home"
    >
      {/* =========================================================
          BACKGROUND EFFECTS
      ========================================================== */}

      {/* Original Orange Glow - Animated */}
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -20, 30, 0],
          scale: [1, 1.15, 0.95, 1],
          opacity: [0.35, 0.55, 0.4, 0.35],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-0 sm:left-10 w-[220px] sm:w-[300px] h-[220px] sm:h-[300px] bg-orange-500 blur-[120px] rounded-full"
      />

      {/* Original Red Glow - Animated */}
      <motion.div
        animate={{
          x: [0, -40, 20, 0],
          y: [0, 20, -30, 0],
          scale: [1, 1.12, 0.92, 1],
          opacity: [0.35, 0.55, 0.4, 0.35],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 right-0 sm:right-10 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-red-600 blur-[140px] rounded-full"
      />

      {/* Extra Background Glow Layer */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[350px]
          sm:w-[500px]
          h-[350px]
          sm:h-[500px]
          bg-red-700
          blur-[180px]
          rounded-full
          pointer-events-none
        "
      />

      {/* =========================================================
          ANIMATED BACKGROUND LIGHTS
      ========================================================== */}

      {/* Orange Light */}
      <motion.div
        animate={{
          x: [0, 100, 40, 0],
          y: [0, 50, -20, 0],
          opacity: [0.15, 0.4, 0.2, 0.15],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-[15%]
          left-[35%]
          w-24
          h-24
          bg-orange-500
          rounded-full
          blur-[60px]
          pointer-events-none
        "
      />

      {/* Red Light */}
      <motion.div
        animate={{
          x: [0, -100, -40, 0],
          y: [0, -50, 30, 0],
          opacity: [0.1, 0.35, 0.15, 0.1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-[30%]
          right-[30%]
          w-28
          h-28
          bg-red-500
          rounded-full
          blur-[70px]
          pointer-events-none
        "
      />

      {/* =========================================================
          FLOATING PARTICLES
      ========================================================== */}

      <motion.div
        animate={{
          y: [0, -40, 0],
          x: [0, 20, 0],
          opacity: [0.2, 0.8, 0.2],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-[22%]
          left-[45%]
          w-2
          h-2
          bg-orange-400
          rounded-full
          blur-[1px]
          pointer-events-none
        "
      />

      <motion.div
        animate={{
          y: [0, 35, 0],
          x: [0, -25, 0],
          opacity: [0.1, 0.7, 0.1],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="
          absolute
          top-[40%]
          right-[18%]
          w-3
          h-3
          bg-red-500
          rounded-full
          blur-[2px]
          pointer-events-none
        "
      />

      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 30, 0],
          opacity: [0.1, 0.6, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="
          absolute
          bottom-[20%]
          left-[20%]
          w-2
          h-2
          bg-orange-500
          rounded-full
          pointer-events-none
        "
      />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-16 lg:py-20 grid lg:grid-cols-2 gap-14 lg:gap-10 items-center">

        {/* =====================================================
            LEFT CONTENT
        ====================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Achive Your
          </motion.h1>

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-red-500 mt-3 uppercase italic leading-tight"
          >
            Fitness Goals
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold mt-4"
          >
            With FitMaker
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 mt-6 lg:mt-8 leading-7 lg:leading-8 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base"
          >
            Join the Fitmaker community and transform your fitness
            journey with expert coaches and personalized programs.
          </motion.p>

          {/* Buttons */}

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 sm:gap-5 mt-8 lg:mt-10"
          >
            {/* Start Journey */}

            <motion.button
              whileHover={{
                scale: 1.05,
                y: -3,
                boxShadow: "0 12px 30px rgba(239,68,68,0.35)",
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="
                group
                w-full
                sm:w-auto
                px-8
                py-4
                rounded-full
                bg-red-600
                hover:bg-red-700
                transition
                cursor-pointer
                duration-300
                flex
                items-center
                justify-center
                gap-2
              "
            >
              Start Your Journey

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
                <ArrowRight size={17} />
              </motion.span>
            </motion.button>

            {/* Explore Programs */}

            <motion.button
              whileHover={{
                scale: 1.05,
                y: -3,
                boxShadow: "0 10px 25px rgba(249,115,22,0.15)",
              }}
              whileTap={{
                scale: 0.96,
              }}
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
                cursor-pointer
                duration-300
                flex
                items-center
                justify-center
                gap-2
              "
            >
              Explore Programs

              <motion.span
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <ArrowRight size={17} />
              </motion.span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* =====================================================
            RIGHT IMAGE SECTION
        ====================================================== */}

        <motion.div
          style={{
            x: imageX,
            y: imageY,
          }}
          initial={{
            opacity: 0,
            x: 80,
            scale: 0.85,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative flex justify-center items-center"
        >

          {/* ==================================================
              Small Glows
          ================================================== */}

          {/* Original Small Orange Glow - Animated */}

          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.35, 0.7, 0.35],
              x: [0, 10, -5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 left-5 sm:-left-3 w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] bg-orange-500 blur-[20px] rounded-full"
          />

          {/* Original Small Red Glow - Animated */}

          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.3, 0.65, 0.3],
              x: [0, -15, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute -bottom-4 sm:-bottom-6 right-0 sm:-right-10 w-[100px] sm:w-[150px] h-[100px] sm:h-[150px] bg-red-600 blur-[40px] rounded-full"
          />

          {/* ==================================================
              Main Glow
          ================================================== */}

          <motion.div
            animate={{
              scale: [1, 1.1, 0.95, 1],
              opacity: [0.25, 0.45, 0.3, 0.25],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              x: glowX,
              y: glowY,
            }}
            className="absolute w-[260px] sm:w-[380px] lg:w-[450px] h-[260px] sm:h-[380px] lg:h-[450px] bg-red-600 blur-[120px] rounded-full"
          />

          {/* ==================================================
              Additional Rotating Ring
          ================================================== */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              w-[300px]
              sm:w-[400px]
              lg:w-[520px]
              h-[300px]
              sm:h-[400px]
              lg:h-[520px]
              rounded-full
              border
              border-red-500/20
              pointer-events-none
            "
          >
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="
                absolute
                top-0
                left-1/2
                -translate-x-1/2
                w-2
                h-2
                rounded-full
                bg-red-500
                shadow-[0_0_15px_rgba(239,68,68,0.9)]
              "
            />
          </motion.div>

          {/* ==================================================
              Main Circle
          ================================================== */}

          <motion.div
            animate={{
              boxShadow: [
                "0 0 25px rgba(239,68,68,0.1)",
                "0 0 55px rgba(239,68,68,0.3)",
                "0 0 25px rgba(239,68,68,0.1)",
              ],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-[280px] sm:w-[380px] lg:w-[500px] h-[280px] sm:h-[380px] lg:h-[500px] rounded-full border border-red-500 bg-white/5 backdrop-blur-xl overflow-hidden flex items-end justify-center"
          >
            {/* Inner Ring */}

            <motion.div
              animate={{
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
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

            <motion.img
              src="/gym.png"
              alt="gym"
              animate={{
                y: [0, -7, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 h-full w-[240px] sm:w-[330px] lg:w-[430px] object-cover"
            />
          </motion.div>

          {/* ==================================================
              Floating Cards
          ================================================== */}

          {/* Top Left */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: {
                duration: 0.6,
                delay: 0.8,
              },
              x: {
                duration: 0.6,
                delay: 0.8,
              },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              },
            }}
            whileHover={{
              scale: 1.08,
            }}
            className="absolute top-2 sm:top-10 lg:top-16 left-0 sm:-left-2 lg:left-0 scale-75 sm:scale-90 lg:scale-100"
          >
            <Card number="+80" title="Coaches" />
          </motion.div>

          {/* Top Right */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -8, 0],
            }}
            transition={{
              opacity: {
                duration: 0.6,
                delay: 1,
              },
              x: {
                duration: 0.6,
                delay: 1,
              },
              y: {
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              },
            }}
            whileHover={{
              scale: 1.08,
            }}
            className="absolute top-0 sm:top-5 lg:top-10 right-0 sm:-right-2 lg:right-0 scale-75 sm:scale-90 lg:scale-100"
          >
            <Card number="+1300" title="Positive Reviews" />
          </motion.div>

          {/* Bottom Left */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -9, 0],
            }}
            transition={{
              opacity: {
                duration: 0.6,
                delay: 1.2,
              },
              x: {
                duration: 0.6,
                delay: 1.2,
              },
              y: {
                duration: 4.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              },
            }}
            whileHover={{
              scale: 1.08,
            }}
            className="absolute bottom-2 sm:bottom-8 lg:bottom-10 left-2 sm:left-4 lg:left-5 scale-75 sm:scale-90 lg:scale-100"
          >
            <Card number="+1000" title="Workout Videos" />
          </motion.div>

          {/* Bottom Right */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -11, 0],
            }}
            transition={{
              opacity: {
                duration: 0.6,
                delay: 1.4,
              },
              x: {
                duration: 0.6,
                delay: 1.4,
              },
              y: {
                duration: 4.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2.5,
              },
            }}
            whileHover={{
              scale: 1.08,
            }}
            className="absolute bottom-0 sm:bottom-3 lg:bottom-5 right-0 sm:-right-2 lg:right-0 scale-75 sm:scale-90 lg:scale-100"
          >
            <Card number="+1500" title="Trainers" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;