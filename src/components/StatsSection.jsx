import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    value: "96%",
    number: 96,
    suffix: "%",
    title: "Client Satisfaction",
    desc: "Our Members Love Their Results And Experience",
  },
  {
    value: "+5",
    number: 5,
    prefix: "+",
    title: "Years Of Experience",
    desc: "Trust In Our Proven Track Record Of Transforming",
  },
  {
    value: "+800",
    number: 800,
    prefix: "+",
    title: "Active Members",
    desc: "Join Our Thriving Fitness Community",
  },
  {
    value: "24/7",
    number: 24,
    suffix: "/7",
    title: "Support Available",
    desc: "Expert Assistance Whenever You Need It",
  },
];

/* ==========================================
   ANIMATED NUMBER COMPONENT
========================================== */

const AnimatedNumber = ({ number, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0);

  const ref = React.useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;

    const duration = 1800;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth ease-out animation
      const easedProgress =
        1 - Math.pow(1 - progress, 4);

      const currentValue = Math.floor(
        easedProgress * number
      );

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(number);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, number]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

/* ==========================================
   MAIN COMPONENT
========================================== */

const StatsSection = () => {
  return (
    <section className="relative py-12 sm:py-16 overflow-hidden lg:overflow-visible text-white">

      {/* =====================================================
          BACKGROUND GLOWS
      ====================================================== */}

      {/* Original Red Glow - Animated */}

      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -25, 20, 0],
          scale: [1, 1.15, 0.95, 1],
          opacity: [0.25, 0.45, 0.3, 0.25],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-100px] top-40 sm:top-50 h-52 w-52 sm:h-72 sm:w-72 rounded-full bg-red-600 blur-[100px] sm:blur-[120px]"
      />

      {/* Original Orange Glow - Animated */}

      <motion.div
        animate={{
          x: [0, -35, 20, 0],
          y: [0, 20, -15, 0],
          scale: [1, 1.2, 0.9, 1],
          opacity: [0.2, 0.4, 0.25, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-40px] top-20 sm:top-29 h-32 w-32 sm:size-40 rounded-full bg-orange-500 blur-[100px] sm:blur-[120px]"
      />

      {/* =====================================================
          EXTRA AMBIENT LIGHT
      ====================================================== */}

      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[300px]
          h-[200px]
          sm:w-[500px]
          sm:h-[300px]
          rounded-full
          bg-red-600
          blur-[150px]
          pointer-events-none
        "
      />

      {/* =====================================================
          FLOATING PARTICLES
      ====================================================== */}

      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
          opacity: [0.1, 0.7, 0.1],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[20%]
          top-[20%]
          w-2
          h-2
          rounded-full
          bg-red-500
          pointer-events-none
        "
      />

      <motion.div
        animate={{
          y: [0, 25, 0],
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
          right-[25%]
          bottom-[15%]
          w-2
          h-2
          rounded-full
          bg-orange-500
          pointer-events-none
        "
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 md:grid-cols-4 md:gap-8 cursor-pointer">

          {stats.map((item, index) => (
            <motion.div
              key={index}

              /* ------------------------------------------
                 Scroll Reveal
              ------------------------------------------ */

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
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}

              /* ------------------------------------------
                 Hover
              ------------------------------------------ */

              whileHover={{
                y: -10,
                scale: 1.02,
                transition: {
                  duration: 0.3,
                },
              }}

              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/5
                p-5
                sm:p-6
                transition-all
                duration-500
                hover:border-red-500
                hover:bg-white/[0.05]
                hover:shadow-[0_0_35px_rgba(255,0,0,0.15)]
              "
            >

              {/* =================================================
                  CARD SHINE
              ================================================== */}

              <motion.div
                initial={{
                  x: "-120%",
                }}
                whileHover={{
                  x: "120%",
                }}
                transition={{
                  duration: 0.7,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  inset-0
                  w-1/2
                  bg-gradient-to-r
                  from-transparent
                  via-white/10
                  to-transparent
                  skew-x-[-20deg]
                  pointer-events-none
                "
              />

              {/* =================================================
                  TOP RED ACCENT
              ================================================== */}

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
                  delay: 0.3 + index * 0.12,
                }}
                className="
                  absolute
                  top-0
                  left-0
                  w-full
                  h-[2px]
                  bg-gradient-to-r
                  from-transparent
                  via-red-500
                  to-transparent
                  origin-left
                "
              />

              {/* =================================================
                  HOVER GLOW
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
                  transition-all
                  duration-500
                  group-hover:bg-red-500/70
                "
              />

              {/* =================================================
                  NUMBER
              ================================================== */}

              <motion.h2
                initial={{
                  opacity: 0,
                  scale: 0.7,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.4 + index * 0.12,
                  type: "spring",
                  stiffness: 120,
                }}
                className="
                  relative
                  text-3xl
                  sm:text-4xl
                  font-extrabold
                  text-red-500
                  transition-all
                  duration-300
                  group-hover:scale-110
                  origin-left
                "
              >
                <AnimatedNumber
                  number={item.number}
                  prefix={item.prefix}
                  suffix={item.suffix}
                />
              </motion.h2>

              {/* =================================================
                  TITLE
              ================================================== */}

              <motion.p
                initial={{
                  opacity: 0,
                  x: -15,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.55 + index * 0.12,
                }}
                className="
                  relative
                  mt-2
                  text-sm
                  sm:text-base
                  font-semibold
                  text-white
                  transition
                  duration-300
                  group-hover:text-red-400
                "
              >
                {item.title}
              </motion.p>

              {/* =================================================
                  DESCRIPTION
              ================================================== */}

              <motion.p
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.65 + index * 0.12,
                }}
                className="
                  relative
                  mt-3
                  text-xs
                  sm:text-sm
                  leading-relaxed
                  text-gray-400
                "
              >
                {item.desc}
              </motion.p>

              {/* =================================================
                  BOTTOM DOT
              ================================================== */}

              <motion.div
                initial={{
                  scale: 0,
                  opacity: 0,
                }}
                whileInView={{
                  scale: 1,
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.8 + index * 0.12,
                }}
                className="
                  absolute
                  bottom-4
                  right-4
                  w-1.5
                  h-1.5
                  rounded-full
                  bg-red-500
                  opacity-30
                  group-hover:opacity-100
                  group-hover:shadow-[0_0_10px_rgba(239,68,68,0.9)]
                  transition-all
                  duration-300
                "
              />

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default StatsSection;