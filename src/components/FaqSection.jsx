import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What Is FitMaker And How Can It Help Me Reach My Fitness Goals?",
    answer:
      "FitMaker is an online fitness platform that offers personalized workout plans, expert coaching, and comprehensive nutritional guidance.",
  },
  {
    question: "How Do I Get Started With A Workout Plan On FitMaker?",
    answer:
      "Simply sign up, choose your fitness goal, and our trainers will recommend a suitable plan for you.",
  },
  {
    question: "What Is Included In The Custom Plan?",
    answer:
      "The custom plan includes personalized workouts, nutrition coaching, trainer support, and progress tracking.",
  },
  {
    question: "Can I Change My Plan After Signing Up?",
    answer:
      "Yes, you can upgrade or switch your plan anytime from your account settings.",
  },
  {
    question: "What Kind Of Support Can I Expect From My Trainer?",
    answer:
      "You'll receive guidance, weekly check-ins, progress reviews, and motivational support from expert trainers.",
  },
];

const FaqSection = () => {
  const [active, setActive] = useState(null);
  const [allOpen, setAllOpen] = useState(false);

  const toggleFaq = (index) => {
    setActive(active === index ? null : index);
    setAllOpen(false);
  };

  const toggleAll = () => {
    setAllOpen(!allOpen);
    setActive(null);
  };

  return (
    <section className="relative py-24 text-white">
      {/* ==================================================
          BACKGROUND GLOWS
      ================================================== */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute left-1/2 top-0
          h-72 w-72
          -translate-x-1/2
          rounded-full
          bg-red-500
          blur-[120px]
        "
      />

      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute -left-32 bottom-0
          h-64 w-64
          rounded-full
          bg-orange-500/10
          blur-[110px]
        "
      />

      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute -right-32 top-1/3
          h-64 w-64
          rounded-full
          bg-red-500/10
          blur-[110px]
        "
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">

        {/* ==================================================
            HEADER
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: -40,
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
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.15,
              duration: 0.5,
              type: "spring",
            }}
            className="
              mx-auto mb-5
              flex h-12 w-12
              items-center justify-center
              rounded-full
              border border-red-500/30
              bg-red-500/10
            "
          >
            <span className="text-xl font-bold text-red-500">?</span>
          </motion.div>

          <h2 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">
            Frequently Asked{" "}
            <span className="text-red-500">Questions</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400">
            Find answers to the most common questions about FitMaker,
            our programs, trainers, memberships, and fitness services.
          </p>
        </motion.div>

        {/* ==================================================
            CONTROLS
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
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
            duration: 0.5,
          }}
          className="mt-8 flex justify-center"
        >
          <button
            onClick={toggleAll}
            className="
              group
              flex items-center gap-2
              rounded-full
              border border-red-500/30
              bg-[#111]
              px-5 py-2.5
              text-sm
              text-gray-300
              transition-all duration-300
              hover:border-red-500
              hover:bg-red-500/10
              hover:text-white
              hover:shadow-[0_0_25px_rgba(239,68,68,0.15)]
              active:scale-95
              cursor-pointer
            "
          >
            <span>
              {allOpen ? "Collapse All" : "Expand All"}
            </span>

            <motion.span
              animate={{
                rotate: allOpen ? 180 : 0,
              }}
              transition={{
                duration: 0.3,
              }}
            >
              <ChevronDown size={16} />
            </motion.span>
          </button>
        </motion.div>

        {/* ==================================================
            FAQ LIST
        ================================================== */}

        <div className="mt-12 space-y-4 sm:mt-14 sm:space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = allOpen || active === index;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40,
                  scale: 0.97,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -3,
                }}
                className="group"
              >
                <motion.div
                  animate={{
                    borderColor: isOpen
                      ? "rgba(239,68,68,0.8)"
                      : "rgba(249,115,22,0.35)",

                    boxShadow: isOpen
                      ? "0 0 35px rgba(239,68,68,0.15)"
                      : "0 0 0 rgba(0,0,0,0)",
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                  className="
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    bg-[#111]
                  "
                >
                  {/* Card Glow */}

                  <motion.div
                    animate={{
                      opacity: isOpen ? 1 : 0,
                      scale: isOpen ? 1.2 : 0.8,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                    className="
                      pointer-events-none
                      absolute
                      -right-16
                      -top-16
                      h-32
                      w-32
                      rounded-full
                      bg-red-500/20
                      blur-3xl
                    "
                  />

                  {/* ==================================================
                      QUESTION
                  ================================================== */}

                  <button
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="
                      relative
                      flex
                      w-full
                      items-center
                      justify-between
                      gap-4
                      px-5
                      py-5
                      text-left
                      sm:px-6
                      sm:py-6
                      cursor-pointer
                    "
                  >
                    {/* Question */}

                    <span
                      className={`
                        text-sm
                        font-semibold
                        leading-6
                        transition-colors
                        duration-300
                        sm:text-base
                        ${
                          isOpen
                            ? "text-red-500"
                            : "text-white group-hover:text-red-400"
                        }
                      `}
                    >
                      {faq.question}
                    </span>

                    {/* Icon */}

                    <motion.span
                      animate={{
                        rotate: isOpen ? 180 : 0,
                        backgroundColor: isOpen
                          ? "rgba(239,68,68,0.15)"
                          : "rgba(249,115,22,0.05)",
                        borderColor: isOpen
                          ? "rgba(239,68,68,0.7)"
                          : "rgba(249,115,22,0.4)",
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                      "
                    >
                      <AnimatePresence mode="wait">
                        {isOpen ? (
                          <motion.span
                            key="minus"
                            initial={{
                              opacity: 0,
                              rotate: -90,
                              scale: 0.5,
                            }}
                            animate={{
                              opacity: 1,
                              rotate: 0,
                              scale: 1,
                            }}
                            exit={{
                              opacity: 0,
                              rotate: 90,
                              scale: 0.5,
                            }}
                          >
                            <Minus
                              size={17}
                              className="text-red-500"
                            />
                          </motion.span>
                        ) : (
                          <motion.span
                            key="plus"
                            initial={{
                              opacity: 0,
                              rotate: 90,
                              scale: 0.5,
                            }}
                            animate={{
                              opacity: 1,
                              rotate: 0,
                              scale: 1,
                            }}
                            exit={{
                              opacity: 0,
                              rotate: -90,
                              scale: 0.5,
                            }}
                          >
                            <Plus
                              size={17}
                              className="text-orange-400"
                            />
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.span>
                  </button>

                  {/* ==================================================
                      ANSWER
                  ================================================== */}

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.4,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="relative border-t border-red-500/30 px-5 py-5 sm:px-6 sm:py-6">
                          <motion.p
                            initial={{
                              opacity: 0,
                              y: -10,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                            }}
                            transition={{
                              delay: 0.1,
                              duration: 0.3,
                            }}
                            className="
                              text-sm
                              leading-7
                              text-gray-400
                            "
                          >
                            {faq.answer}
                          </motion.p>

                          {/* Bottom Accent */}

                          <motion.div
                            initial={{
                              width: 0,
                            }}
                            animate={{
                              width: "100%",
                            }}
                            transition={{
                              delay: 0.1,
                              duration: 0.6,
                              ease: "easeOut",
                            }}
                            className="
                              absolute
                              bottom-0
                              left-0
                              h-[2px]
                              bg-gradient-to-r
                              from-transparent
                              via-red-500
                              to-transparent
                            "
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* ==================================================
            BOTTOM CTA
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
            delay: 0.2,
            duration: 0.6,
          }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-500">
            Still have questions?
          </p>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(239,68,68,0.25)",
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              mt-4
              rounded-full
              bg-red-600
              px-7
              py-3
              text-sm
              font-semibold
              text-white
              transition-colors
              hover:bg-red-700
              cursor-pointer
            "
          >
            Contact Our Team →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;