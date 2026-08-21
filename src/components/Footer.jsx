import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
  FaDumbbell,
  FaCheck,
  FaChevronUp,
  FaCopy,
  FaPaperPlane,
  FaTimes,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [modal, setModal] = useState(null);

  // --------------------------------------------------
  // Navigation Links
  // --------------------------------------------------

  const companyLinks = [
    { name: "About Us", id: "about" },
    { name: "Our Services", id: "services" },
    { name: "Careers", id: "careers" },
    { name: "Blog", id: "blog" },
    { name: "Testimonial", id: "testimonials" },
    { name: "Contact Us", id: "contact" },
  ];

  const resourceLinks = [
    { name: "Fitness Tools", id: "tools" },
    { name: "Workout Videos", id: "workout" },
    { name: "Nutrition Guides", id: "nutrition" },
    { name: "FAQ", id: "faq" },
    { name: "Success Stories", id: "success" },
    { name: "Membership", id: "plans" },
  ];

  // --------------------------------------------------
  // Social Links
  // --------------------------------------------------

  const socialLinks = [
    {
      icon: FaFacebookF,
      label: "Facebook",
      url: "https://facebook.com",
    },
    {
      icon: FaInstagram,
      label: "Instagram",
      url: "https://instagram.com",
    },
    {
      icon: FaTwitter,
      label: "Twitter",
      url: "https://twitter.com",
    },
    {
      icon: FaYoutube,
      label: "YouTube",
      url: "https://youtube.com",
    },
  ];

  // --------------------------------------------------
  // Smooth Navigation
  // --------------------------------------------------

  const handleNavigation = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // --------------------------------------------------
  // Newsletter
  // --------------------------------------------------

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    setSubscribed(true);
    setEmail("");

    setTimeout(() => {
      setSubscribed(false);
    }, 4000);
  };

  // --------------------------------------------------
  // Copy Email
  // --------------------------------------------------

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("fitmaker@gmail.com");

      setEmailCopied(true);

      setTimeout(() => {
        setEmailCopied(false);
      }, 2000);
    } catch (error) {
      console.log("Could not copy email");
    }
  };

  // --------------------------------------------------
  // Back To Top
  // --------------------------------------------------

  React.useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // --------------------------------------------------
  // Animation Variants
  // --------------------------------------------------

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
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

  const linkVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <>
      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="relative overflow-hidden border-t border-white/10 bg-[#080808] py-20 text-white">

        {/* =====================================================
            BACKGROUND GLOWS
        ====================================================== */}

        <motion.div
          className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-red-600/10 blur-[130px]"
          animate={{
            x: [0, 60, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="pointer-events-none absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-orange-500/10 blur-[130px]"
          animate={{
            x: [0, -50, 0],
            y: [0, -40, 0],
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* =====================================================
            FLOATING PARTICLES
        ====================================================== */}

        {[...Array(12)].map((_, index) => (
          <motion.div
            key={index}
            className="pointer-events-none absolute h-1 w-1 rounded-full bg-red-500/30"
            style={{
              left: `${5 + index * 8}%`,
              top: `${20 + (index % 5) * 15}%`,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.2, 0.7, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + index * 0.4,
              repeat: Infinity,
              delay: index * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="relative z-10 mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 md:grid-cols-2 lg:grid-cols-5"
        >

          {/* =================================================
              BRAND
          ================================================== */}

          <motion.div
            variants={itemVariants}
            className="lg:col-span-2"
          >

            {/* Logo */}

            <motion.button
              onClick={() => handleNavigation("home")}
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="group flex cursor-pointer items-center gap-3"
            >

              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  rotate: 360,
                }}
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-600 shadow-[0_0_25px_rgba(239,68,68,0.3)]"
              >
              </motion.div>

              <div className="text-left">
                <h2 className="text-2xl font-extrabold">
                  Fit<span className="text-red-500">Maker</span>
                </h2>

                <p className="text-[10px] uppercase tracking-[3px] text-gray-500">
                  Transform Your Body
                </p>
              </div>

            </motion.button>

            {/* Description */}

            <p className="mt-6 max-w-md text-sm leading-7 text-gray-400">
              Transform Your Body with FitMaker, Your Trusted Partner in
              Fitness. With Over 5 Years of Experience, We Offer Expert
              Coaching, Tailored Workout Plans, and Comprehensive Nutritional
              Guidance.
            </p>

            {/* =================================================
                NEWSLETTER
            ================================================== */}

            <div className="mt-8 max-w-md">

              <h3 className="mb-3 text-sm font-semibold text-white">
                Get Fitness Tips & Updates
              </h3>

              <form
                onSubmit={handleSubscribe}
                className="relative flex overflow-hidden rounded-xl border border-white/10 bg-white/5 p-1 backdrop-blur-xl"
              >

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600"
                />

                <motion.button
                  type="submit"
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.92,
                  }}
                  className="flex cursor-pointer items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold transition hover:bg-red-700"
                >
                  <FaPaperPlane />
                  <span className="hidden sm:block">
                    Subscribe
                  </span>
                </motion.button>

              </form>

              {/* Success */}

              <AnimatePresence>
                {subscribed && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -10,
                    }}
                    className="mt-3 flex items-center gap-2 text-sm text-green-400"
                  >
                    <FaCheck />
                    Successfully subscribed!
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

            {/* =================================================
                SOCIAL ICONS
            ================================================== */}

            <div className="mt-8 flex gap-3">

              {socialLinks.map((social, index) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    variants={itemVariants}
                    whileHover={{
                      y: -7,
                      scale: 1.12,
                      rotate: 5,
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                    className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-[#111] text-gray-400 transition-all duration-300 hover:border-red-500 hover:bg-red-500 hover:text-white hover:shadow-[0_0_25px_rgba(239,68,68,0.35)]"
                  >
                    <Icon />
                  </motion.a>
                );
              })}

            </div>

          </motion.div>

          {/* =================================================
              COMPANY
          ================================================== */}

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold text-red-500">
              Company
            </h3>

            <motion.ul
              variants={containerVariants}
              className="mt-6 space-y-4"
            >
              {companyLinks.map((item) => (
                <motion.li
                  key={item.name}
                  variants={linkVariants}
                >
                  <button
                    onClick={() => handleNavigation(item.id)}
                    className="group flex cursor-pointer items-center gap-2 text-sm text-gray-400 transition-all duration-300 hover:translate-x-2 hover:text-red-500"
                  >
                    <FaArrowRight className="text-[10px] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />

                    {item.name}
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* =================================================
              RESOURCES
          ================================================== */}

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold text-red-500">
              Resources
            </h3>

            <motion.ul
              variants={containerVariants}
              className="mt-6 space-y-4"
            >
              {resourceLinks.map((item) => (
                <motion.li
                  key={item.name}
                  variants={linkVariants}
                >
                  <button
                    onClick={() => handleNavigation(item.id)}
                    className="group flex cursor-pointer items-center gap-2 text-sm text-gray-400 transition-all duration-300 hover:translate-x-2 hover:text-red-500"
                  >
                    <FaArrowRight className="text-[10px] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />

                    {item.name}
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* =================================================
              CONTACT
          ================================================== */}

          <motion.div variants={itemVariants}>

            <h3 className="text-lg font-bold text-red-500">
              Contact Us
            </h3>

            <ul className="mt-6 space-y-5">

              {/* Location */}

              <motion.li
                whileHover={{
                  x: 6,
                }}
                className="flex items-start gap-3 text-sm text-gray-400"
              >
                <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-500">
                  <FaMapMarkerAlt />
                </span>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Washington+DC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-red-500"
                >
                  USA - Washington DC
                </a>
              </motion.li>

              {/* Phone */}

              <motion.li
                whileHover={{
                  x: 6,
                }}
                className="flex items-center gap-3 text-sm text-gray-400"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-500">
                  <FaPhoneAlt />
                </span>

                <a
                  href="tel:123456789"
                  className="transition hover:text-red-500"
                >
                  123-456-789
                </a>
              </motion.li>

              {/* Email */}

              <motion.li
                whileHover={{
                  x: 6,
                }}
                className="flex items-center gap-3 text-sm text-gray-400"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-500">
                  <FaEnvelope />
                </span>

                <div className="flex min-w-0 items-center gap-2">

                  <a
                    href="mailto:fitmaker@gmail.com"
                    className="break-all transition hover:text-red-500"
                  >
                    fitmaker@gmail.com
                  </a>

                  <motion.button
                    onClick={copyEmail}
                    whileHover={{
                      scale: 1.15,
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                    className="shrink-0 cursor-pointer text-gray-500 transition hover:text-red-500"
                    title="Copy email"
                  >
                    {emailCopied ? (
                      <FaCheck className="text-green-500" />
                    ) : (
                      <FaCopy />
                    )}
                  </motion.button>

                </div>
              </motion.li>

            </ul>

            {/* Copy Feedback */}

            <AnimatePresence>
              {emailCopied && (
                <motion.p
                  initial={{
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  className="mt-3 text-xs text-green-400"
                >
                  Email copied to clipboard
                </motion.p>
              )}
            </AnimatePresence>

          </motion.div>

        </motion.div>

        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}

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
            duration: 0.8,
          }}
          className="relative z-10 mx-auto mt-16 max-w-7xl border-t border-white/10 px-5 pt-8 sm:px-8"
        >

          <div className="flex flex-col items-center justify-between gap-5 text-center text-xs text-gray-500 sm:flex-row sm:text-left">

            <p>
              © {new Date().getFullYear()} FitMaker. All Rights Reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-5">

              <button
                onClick={() => setModal("privacy")}
                className="cursor-pointer transition hover:text-red-500"
              >
                Privacy Policy
              </button>

              <button
                onClick={() => setModal("terms")}
                className="cursor-pointer transition hover:text-red-500"
              >
                Terms & Conditions
              </button>

            </div>

          </div>

          {/* Animated Line */}

          <motion.div
            className="mx-auto mt-6 h-[2px] max-w-xs bg-gradient-to-r from-transparent via-red-500 to-transparent"
            animate={{
              opacity: [0.2, 1, 0.2],
              scaleX: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

        </motion.div>

      </footer>

      {/* =====================================================
          BACK TO TOP
      ====================================================== */}

      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{
              opacity: 0,
              scale: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0,
              y: 20,
            }}
            whileHover={{
              scale: 1.1,
              y: -5,
            }}
            whileTap={{
              scale: 0.9,
            }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-red-500/40 bg-red-600 text-white shadow-[0_0_25px_rgba(239,68,68,0.35)]"
            aria-label="Back to top"
          >
            <FaChevronUp />
          </motion.button>
        )}
      </AnimatePresence>

      {/* =====================================================
          PRIVACY / TERMS MODAL
      ====================================================== */}

      <AnimatePresence>
        {modal && (
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
            onClick={() => setModal(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-5 backdrop-blur-md"
          >

            <motion.div
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.95,
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[80vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-red-500/20 bg-[#111] p-7 shadow-[0_0_60px_rgba(239,68,68,0.15)]"
            >

              {/* Close */}

              <button
                onClick={() => setModal(null)}
                className="absolute right-5 top-5 cursor-pointer text-gray-500 transition hover:text-white"
              >
                <FaTimes />
              </button>

              {/* Modal Title */}

              <h2 className="text-2xl font-bold">
                {modal === "privacy"
                  ? "Privacy Policy"
                  : "Terms & Conditions"}
              </h2>

              <div className="mt-5 space-y-4 text-sm leading-7 text-gray-400">

                {modal === "privacy" ? (
                  <>
                    <p>
                      At FitMaker, we respect your privacy and are
                      committed to protecting your personal information.
                    </p>

                    <p>
                      Information submitted through our forms is used
                      only to provide fitness services, communication,
                      and account-related functionality.
                    </p>

                    <p>
                      We do not sell your personal information to
                      third parties.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      By using FitMaker, you agree to use our platform
                      responsibly and follow our service guidelines.
                    </p>

                    <p>
                      Fitness plans and recommendations are provided
                      for general fitness purposes and should be used
                      responsibly.
                    </p>

                    <p>
                      FitMaker reserves the right to update these
                      terms when necessary.
                    </p>
                  </>
                )}

              </div>

              <button
                onClick={() => setModal(null)}
                className="mt-7 w-full cursor-pointer rounded-xl bg-red-600 py-3 text-sm font-semibold transition hover:bg-red-700"
              >
                Close
              </button>

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Footer;