import React, { useEffect, useState } from "react";
import { Search, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "Membership", id: "plans" },
    { name: "Coaching", id: "coaching" },
    { name: "About Us", id: "about" },
  ];

  // =====================================================
  // SCROLL DETECTION
  // =====================================================

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // =====================================================
  // ACTIVE SECTION DETECTION
  // =====================================================

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActive(visibleSections[0].target.id);
        }
      },
      {
        threshold: [0.2, 0.4, 0.6],
        rootMargin: "-90px 0px -40% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // =====================================================
  // ESCAPE KEY
  // =====================================================

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setSearchOpen(false);
        setSearchValue("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // =====================================================
  // BODY SCROLL LOCK
  // =====================================================

  useEffect(() => {
    if (menuOpen || searchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, searchOpen]);

  // =====================================================
  // CLOSE MOBILE MENU WHEN SCREEN BECOMES DESKTOP
  // =====================================================

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // =====================================================
  // NAVIGATION
  // =====================================================

  const handleNavigation = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setActive(id);
    setMenuOpen(false);
    setSearchOpen(false);
    setSearchValue("");
  };

  // =====================================================
  // SEARCH
  // =====================================================

  const filteredItems = navItems.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  // =====================================================
  // RENDER
  // =====================================================

  return (
    <>
      {/* ==================================================
          HEADER
      ================================================== */}

      <motion.header
        initial={{
          y: -100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`
          fixed
          top-0
          left-0
          w-full
          z-50
          border-b
          border-white/10
          transition-all
          duration-500

          ${
            scrolled
              ? "bg-black/80 backdrop-blur-2xl shadow-[0_8px_35px_rgba(0,0,0,0.45)]"
              : "bg-black/30 backdrop-blur-xl"
          }
        `}
      >
        {/* ==================================================
            HEADER BACKGROUND GLOW
        ================================================== */}

        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: [0, 30, -20, 0],
              opacity: [0.04, 0.09, 0.04],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              -top-32
              left-[10%]
              sm:left-1/4
              w-[180px]
              sm:w-[250px]
              h-[140px]
              sm:h-[180px]
              rounded-full
              bg-red-600
              blur-[90px]
              sm:blur-[100px]
            "
          />

          <motion.div
            animate={{
              x: [0, -30, 20, 0],
              opacity: [0.03, 0.08, 0.03],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              -top-32
              right-[5%]
              sm:right-1/4
              w-[180px]
              sm:w-[250px]
              h-[140px]
              sm:h-[180px]
              rounded-full
              bg-orange-500
              blur-[90px]
              sm:blur-[100px]
            "
          />
        </div>

        {/* ==================================================
            MAIN HEADER CONTAINER
        ================================================== */}

        <div
          className={`
            mx-auto
            w-full
            max-w-7xl
            px-4
            sm:px-6
            md:px-8
            lg:px-10

            flex
            items-center
            justify-between
            gap-3

            transition-all
            duration-500

            ${scrolled ? "py-2.5" : "py-3 sm:py-4"}
          `}
        >
          {/* ==================================================
              LOGO
          ================================================== */}

          <motion.button
            type="button"
            onClick={() => handleNavigation("home")}
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              flex
              items-center
              gap-2
              cursor-pointer
              shrink-0
              text-left
              outline-none
            "
            aria-label="Go to homepage"
          >
            {/* Logo Icon */}

            <motion.div
              animate={{
                rotate: [0, 3, -3, 0],
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                w-7
                h-7
                sm:w-8
                sm:h-8
                rounded-lg
                bg-red-600
                shadow-[0_0_15px_rgba(239,68,68,0.35)]
                shrink-0
              "
            />

            <div className="min-w-0">
              <h1
                className="
                  text-white
                  font-bold
                  text-sm
                  sm:text-lg
                  leading-none
                  truncate
                "
              >
                FitMaker
              </h1>

              <p
                className="
                  text-gray-400
                  text-[7px]
                  sm:text-[10px]
                  mt-1
                  tracking-wide
                  truncate
                "
              >
                Transform Your Body
              </p>
            </div>
          </motion.button>

          {/* ==================================================
              DESKTOP NAVIGATION
              Visible only >= 1024px
          ================================================== */}

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => handleNavigation(item.id)}
                whileTap={{
                  scale: 0.95,
                }}
                className={`
                  relative
                  pb-1
                  whitespace-nowrap
                  transition-colors
                  duration-300
                  cursor-pointer
                  outline-none

                  ${
                    active === item.id
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }
                `}
              >
                {item.name}

                {/* Active Line */}

                <motion.span
                  className="
                    absolute
                    left-0
                    -bottom-1
                    h-[2px]
                    bg-red-500
                    rounded-full
                  "
                  initial={false}
                  animate={{
                    width: active === item.id ? "100%" : "0%",
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                />
              </motion.button>
            ))}
          </nav>

          {/* ==================================================
              RIGHT SIDE
          ================================================== */}

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* ==================================================
                SEARCH BUTTON
                Available on all screen sizes
            ================================================== */}

            <motion.button
              type="button"
              whileHover={{
                scale: 1.08,
                rotate: 5,
              }}
              whileTap={{
                scale: 0.9,
              }}
              onClick={() => setSearchOpen(true)}
              className="
                flex
                items-center
                justify-center

                w-9
                h-9
                sm:w-10
                sm:h-10

                rounded-full
                bg-orange-500
                border
                border-white/10

                text-white
                cursor-pointer

                shadow-[0_0_20px_rgba(249,115,22,0.25)]

                outline-none
              "
              aria-label="Open search"
            >
              <Search
                size={16}
                className="sm:w-[18px] sm:h-[18px]"
              />
            </motion.button>

            {/* ==================================================
                DESKTOP AUTH BUTTONS
                Visible only >= 1024px
            ================================================== */}

            <div className="hidden lg:flex items-center gap-2 xl:gap-3">
              <motion.button
                type="button"
                onClick={() => handleNavigation("auth")}
                whileHover={{
                  y: -2,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                  px-4
                  xl:px-5
                  py-2

                  rounded-full
                  border
                  border-red-500

                  text-white
                  hover:bg-red-500/20

                  transition
                  duration-300

                  cursor-pointer
                  text-sm
                  whitespace-nowrap
                "
              >
                Login
              </motion.button>

              <motion.button
                type="button"
                onClick={() => handleNavigation("auth")}
                whileHover={{
                  y: -2,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                  px-4
                  xl:px-5
                  py-2

                  rounded-full
                  bg-red-600

                  text-white
                  hover:bg-red-700

                  transition
                  duration-300

                  cursor-pointer
                  text-sm
                  whitespace-nowrap

                  shadow-[0_0_20px_rgba(239,68,68,0.15)]
                "
              >
                Sign Up
              </motion.button>
            </div>

            {/* ==================================================
                MOBILE / TABLET MENU
                Visible below 1024px
            ================================================== */}

            <motion.button
              type="button"
              whileTap={{
                scale: 0.85,
              }}
              onClick={() => setMenuOpen((prev) => !prev)}
              className="
                lg:hidden
                flex
                items-center
                justify-center

                w-9
                h-9
                sm:w-10
                sm:h-10

                rounded-full

                text-white
                cursor-pointer

                hover:bg-white/10

                transition

                outline-none
              "
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.div
                    key="close"
                    initial={{
                      rotate: -90,
                      opacity: 0,
                    }}
                    animate={{
                      rotate: 0,
                      opacity: 1,
                    }}
                    exit={{
                      rotate: 90,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{
                      rotate: 90,
                      opacity: 0,
                    }}
                    animate={{
                      rotate: 0,
                      opacity: 1,
                    }}
                    exit={{
                      rotate: -90,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* ==================================================
            MOBILE / TABLET MENU
        ================================================== */}

        <AnimatePresence>
          {menuOpen && (
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
                duration: 0.35,
                ease: "easeInOut",
              }}
              className="
                lg:hidden
                overflow-hidden

                bg-black/85
                backdrop-blur-2xl

                border-t
                border-white/10
              "
            >
              <div
                className="
                  mx-auto
                  w-full
                  max-w-7xl

                  px-4
                  sm:px-6
                  md:px-8

                  py-5
                  sm:py-6
                "
              >
                {/* Mobile Navigation */}

                <nav className="flex flex-col gap-2">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      type="button"
                      onClick={() => handleNavigation(item.id)}
                      initial={{
                        opacity: 0,
                        x: -25,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.06,
                        duration: 0.3,
                      }}
                      whileHover={{
                        x: 4,
                      }}
                      whileTap={{
                        scale: 0.97,
                      }}
                      className={`
                        w-full
                        flex
                        items-center
                        justify-between

                        px-4
                        py-3.5
                        sm:py-4

                        rounded-xl

                        transition-all
                        duration-300

                        text-left

                        cursor-pointer

                        ${
                          active === item.id
                            ? "bg-red-600/15 text-white border border-red-500/20"
                            : "text-gray-300 hover:text-white hover:bg-white/5"
                        }
                      `}
                    >
                      <span className="text-sm sm:text-base">
                        {item.name}
                      </span>

                      {active === item.id && (
                        <motion.span
                          layoutId="mobileActive"
                          className="
                            w-2
                            h-2
                            rounded-full
                            bg-red-500
                            shadow-[0_0_10px_rgba(239,68,68,0.8)]
                          "
                        />
                      )}
                    </motion.button>
                  ))}
                </nav>

                {/* Mobile Auth Buttons */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.3,
                  }}
                  className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    gap-3
                    mt-6
                  "
                >
                  <motion.button
                    type="button"
                    whileTap={{
                      scale: 0.97,
                    }}
                    onClick={() => handleNavigation("auth")}
                    className="
                      w-full
                      py-3

                      rounded-full
                      border
                      border-red-500

                      text-white

                      hover:bg-red-500/20

                      transition

                      text-sm
                      text-center
                      cursor-pointer
                    "
                  >
                    Login
                  </motion.button>

                  <motion.button
                    type="button"
                    whileTap={{
                      scale: 0.97,
                    }}
                    onClick={() => handleNavigation("auth")}
                    className="
                      w-full
                      py-3

                      rounded-full
                      bg-red-600

                      text-white

                      hover:bg-red-700

                      transition

                      text-sm
                      text-center
                      cursor-pointer
                    "
                  >
                    Sign Up
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* ==================================================
          SEARCH OVERLAY
      ================================================== */}

      <AnimatePresence>
        {searchOpen && (
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
            className="
              fixed
              inset-0
              z-[100]

              bg-black/85
              backdrop-blur-xl

              flex
              items-start
              justify-center

              pt-20
              sm:pt-24
              md:pt-28

              px-3
              sm:px-5
            "
            onClick={() => setSearchOpen(false)}
          >
            <motion.div
              initial={{
                opacity: 0,
                y: -40,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -30,
                scale: 0.95,
              }}
              transition={{
                duration: 0.3,
              }}
              onClick={(e) => e.stopPropagation()}
              className="
                w-full
                max-w-2xl
              "
            >
              {/* Search Box */}

              <div
                className="
                  flex
                  items-center
                  gap-2
                  sm:gap-3

                  bg-white/10
                  border
                  border-white/10

                  backdrop-blur-2xl

                  rounded-xl
                  sm:rounded-2xl

                  px-3
                  sm:px-5

                  py-3
                  sm:py-4

                  shadow-[0_20px_60px_rgba(0,0,0,0.5)]
                "
              >
                <Search
                  size={20}
                  className="
                    text-orange-500
                    shrink-0
                    sm:w-[22px]
                    sm:h-[22px]
                  "
                />

                <input
                  autoFocus
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Search FitMaker..."
                  className="
                    flex-1
                    min-w-0

                    bg-transparent
                    outline-none

                    text-white

                    text-sm
                    sm:text-base

                    placeholder:text-gray-500
                  "
                />

                <motion.button
                  type="button"
                  whileHover={{
                    rotate: 90,
                  }}
                  whileTap={{
                    scale: 0.85,
                  }}
                  onClick={() => {
                    setSearchOpen(false);
                    setSearchValue("");
                  }}
                  className="
                    text-gray-400
                    hover:text-white
                    transition
                    cursor-pointer
                    shrink-0
                  "
                  aria-label="Close search"
                >
                  <X size={20} />
                </motion.button>
              </div>

              {/* Search Results */}

              <div
                className="
                  mt-3

                  max-h-[60vh]
                  sm:max-h-[65vh]

                  overflow-y-auto

                  rounded-xl
                  sm:rounded-2xl

                  border
                  border-white/10

                  bg-black/80
                  backdrop-blur-2xl

                  scrollbar-thin
                "
              >
                {/* No Search */}

                {searchValue.length === 0 ? (
                  <div className="p-3 sm:p-5">
                    <p className="text-gray-500 text-xs sm:text-sm mb-2 sm:mb-3 px-2">
                      Quick Navigation
                    </p>

                    {navItems.map((item, index) => (
                      <motion.button
                        key={item.id}
                        type="button"
                        initial={{
                          opacity: 0,
                          x: -10,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: index * 0.04,
                        }}
                        onClick={() => handleNavigation(item.id)}
                        className="
                          w-full

                          flex
                          items-center
                          justify-between

                          px-3
                          sm:px-4

                          py-3
                          sm:py-3.5

                          rounded-xl

                          text-gray-300

                          hover:text-white
                          hover:bg-white/5

                          transition

                          cursor-pointer
                          text-left
                        "
                      >
                        <span className="text-sm">
                          {item.name}
                        </span>

                        <ArrowRight
                          size={16}
                          className="text-gray-500 shrink-0"
                        />
                      </motion.button>
                    ))}
                  </div>
                ) : filteredItems.length > 0 ? (
                  <div className="p-2 sm:p-3">
                    {filteredItems.map((item, index) => (
                      <motion.button
                        key={item.id}
                        type="button"
                        initial={{
                          opacity: 0,
                          x: -10,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: index * 0.05,
                        }}
                        onClick={() => handleNavigation(item.id)}
                        className="
                          w-full

                          flex
                          items-center
                          justify-between

                          px-3
                          sm:px-4

                          py-3
                          sm:py-3.5

                          rounded-xl

                          text-gray-300

                          hover:text-white
                          hover:bg-red-500/10

                          transition

                          cursor-pointer
                          text-left
                        "
                      >
                        <span className="text-sm">
                          {item.name}
                        </span>

                        <ArrowRight
                          size={16}
                          className="text-red-500 shrink-0"
                        />
                      </motion.button>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 sm:p-10 text-center">
                    <motion.div
                      initial={{
                        scale: 0.8,
                        opacity: 0,
                      }}
                      animate={{
                        scale: 1,
                        opacity: 1,
                      }}
                    >
                      <Search
                        size={28}
                        className="
                          mx-auto
                          text-gray-600
                          mb-3
                        "
                      />

                      <p className="text-gray-400 text-sm">
                        No results found
                      </p>

                      <p className="text-gray-600 text-xs mt-1">
                        Try searching for another section
                      </p>
                    </motion.div>
                  </div>
                )}
              </div>

              {/* Search Hint */}

              <p
                className="
                  text-gray-500
                  text-[10px]
                  sm:text-xs
                  text-center
                  mt-3
                  sm:mt-4
                "
              >
                Press{" "}
                <span className="text-gray-300">
                  ESC
                </span>{" "}
                to close
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;