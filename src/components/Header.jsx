import React, { useEffect, useState } from "react";
import { Search, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [scrolled, setScrolled] = useState(false);

  // Active section
  const [active, setActive] = useState("home");

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "Membership", id: "plans" },
    { name: "Coaching", id: "coaching" },
    { name: "About Us", id: "about" },
  ];

  // --------------------------------------------------
  // Scroll Detection
  // --------------------------------------------------

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // --------------------------------------------------
  // Detect Active Section
  // --------------------------------------------------

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find(
          (entry) => entry.isIntersecting
        );

        if (visibleSection) {
          setActive(visibleSection.target.id);
        }
      },
      {
        threshold: 0.25,
        rootMargin: "-100px 0px -50% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // --------------------------------------------------
  // Close menus with Escape
  // --------------------------------------------------

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

  // --------------------------------------------------
  // Prevent body scrolling when menu/search is open
  // --------------------------------------------------

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

  // --------------------------------------------------
  // Smooth Scroll
  // --------------------------------------------------

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

  // --------------------------------------------------
  // Search
  // --------------------------------------------------

  const filteredItems = navItems.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      {/* ==================================================
          HEADER
      ================================================== */}

      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`
          fixed top-0 left-0 w-full z-50
          transition-all duration-500
          ${
            scrolled
              ? "bg-black/70 backdrop-blur-2xl shadow-[0_8px_35px_rgba(0,0,0,0.45)]"
              : "bg-white/10 backdrop-blur-2xl"
          }
          border-b border-white/10
        `}
      >
        {/* Background Glow */}

        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: [0, 30, -20, 0],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              -top-32
              left-1/4
              w-[250px]
              h-[180px]
              rounded-full
              bg-red-600
              blur-[100px]
            "
          />

          <motion.div
            animate={{
              x: [0, -30, 20, 0],
              opacity: [0.04, 0.1, 0.04],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              -top-32
              right-1/4
              w-[250px]
              h-[180px]
              rounded-full
              bg-orange-500
              blur-[100px]
            "
          />
        </div>

        {/* ==================================================
            MAIN HEADER
        ================================================== */}

        <div
          className={`
            max-w-7xl mx-auto
            px-4 sm:px-6 lg:px-10
            flex items-center justify-between gap-3
            transition-all duration-500
            ${scrolled ? "py-2.5" : "py-4"}
          `}
        >
          {/* ==================================================
              LOGO
          ================================================== */}

          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("home");
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 cursor-pointer shrink-0"
          >
            {/* Logo Icon */}

            <motion.div
              animate={{
                rotate: [0, 3, -3, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                w-7 h-7
                sm:w-8 sm:h-8
                rounded
                bg-red-600
                shadow-[0_0_15px_rgba(239,68,68,0.35)]
              "
            />

            <div>
              <h1 className="text-white font-bold text-sm sm:text-lg leading-none">
                FitMaker
              </h1>

              <p className="text-gray-400 text-[8px] sm:text-[10px] mt-1">
                Transform Your Body
              </p>
            </div>
          </motion.a>

          {/* ==================================================
              DESKTOP NAV
          ================================================== */}

          <nav className="hidden lg:flex items-center gap-8 text-sm">
            {navItems.map((item) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(item.id);
                }}
                whileTap={{ scale: 0.95 }}
                className={`
                  relative
                  pb-1
                  transition-colors
                  duration-300
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
              </motion.a>
            ))}
          </nav>

          {/* ==================================================
              RIGHT SIDE
          ================================================== */}

          <div className="flex items-center gap-2 sm:gap-3">

            {/* Desktop Search */}

            <motion.button
              whileHover={{
                scale: 1.08,
                rotate: 5,
              }}
              whileTap={{
                scale: 0.9,
              }}
              onClick={() => setSearchOpen(true)}
              className="
                hidden md:flex
                w-10 h-10
                rounded-full
                bg-orange-500
                border border-white/10
                backdrop-blur-xl
                items-center
                justify-center
                text-white
                cursor-pointer
                shadow-[0_0_20px_rgba(249,115,22,0.25)]
              "
            >
              <Search size={18} />
            </motion.button>

            {/* Mobile Search */}

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setSearchOpen(true)}
              className="
                md:hidden
                flex
                w-9 h-9
                rounded-full
                bg-orange-500
                text-white
                items-center
                justify-center
              "
            >
              <Search size={15} />
            </motion.button>

            {/* Desktop Buttons */}

            <div className="hidden md:flex items-center gap-3">

              <motion.a
                href="#auth"
                whileHover={{
                  y: -2,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                  px-5 py-2
                  rounded-full
                  border border-red-500
                  text-white
                  hover:bg-red-500/20
                  transition
                  cursor-pointer
                  text-sm
                "
              >
                Login
              </motion.a>

              <motion.a
                href="#auth"
                whileHover={{
                  y: -2,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                  px-5 py-2
                  rounded-full
                  bg-red-600
                  text-white
                  hover:bg-red-700
                  transition
                  cursor-pointer
                  text-sm
                  shadow-[0_0_20px_rgba(239,68,68,0.15)]
                "
              >
                Sign Up
              </motion.a>

            </div>

            {/* Mobile Menu */}

            <motion.button
              whileTap={{ scale: 0.85 }}
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-white cursor-pointer"
            >
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <X size={26} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Menu size={26} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* ==================================================
            MOBILE MENU
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
                bg-black/60
                backdrop-blur-2xl
                border-t border-white/10
              "
            >
              <div className="px-5 pb-6 pt-5">

                {/* Mobile Navigation */}

                <nav className="flex flex-col gap-2">

                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(item.id);
                      }}
                      initial={{
                        opacity: 0,
                        x: -20,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.06,
                        duration: 0.3,
                      }}
                      whileTap={{
                        scale: 0.97,
                      }}
                      className={`
                        flex items-center justify-between
                        px-4 py-3
                        rounded-xl
                        transition-all
                        duration-300
                        ${
                          active === item.id
                            ? "bg-red-600/15 text-white border border-red-500/20"
                            : "text-gray-300 hover:text-white hover:bg-white/5"
                        }
                      `}
                    >
                      <span>{item.name}</span>

                      {active === item.id && (
                        <motion.span
                          layoutId="mobileActive"
                          className="w-2 h-2 rounded-full bg-red-500"
                        />
                      )}
                    </motion.a>
                  ))}

                </nav>

                {/* Mobile Buttons */}

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
                  className="flex flex-col gap-3 mt-6"
                >
                  <motion.a
                    href="#auth"
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setMenuOpen(false)}
                    className="
                      w-full
                      py-3
                      rounded-full
                      border border-red-500
                      text-white
                      hover:bg-red-500/20
                      transition
                      text-center
                    "
                  >
                    Login
                  </motion.a>

                  <motion.a
                    href="#auth"
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setMenuOpen(false)}
                    className="
                      w-full
                      py-3
                      rounded-full
                      bg-red-600
                      text-white
                      hover:bg-red-700
                      transition
                      text-center
                    "
                  >
                    Sign Up
                  </motion.a>
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-[100]
              bg-black/80
              backdrop-blur-xl
              flex
              items-start
              justify-center
              pt-24
              px-4
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
                  gap-3
                  bg-white/10
                  border border-white/10
                  backdrop-blur-2xl
                  rounded-2xl
                  px-5
                  py-4
                  shadow-[0_20px_60px_rgba(0,0,0,0.5)]
                "
              >
                <Search
                  size={22}
                  className="text-orange-500 shrink-0"
                />

                <input
                  autoFocus
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Search FitMaker..."
                  className="
                    flex-1
                    bg-transparent
                    outline-none
                    text-white
                    placeholder:text-gray-500
                  "
                />

                <button
                  onClick={() => {
                    setSearchOpen(false);
                    setSearchValue("");
                  }}
                  className="
                    text-gray-400
                    hover:text-white
                    transition
                    cursor-pointer
                  "
                >
                  <X size={20} />
                </button>
              </div>

              {/* Search Results */}

              <div className="mt-3 overflow-hidden rounded-2xl border border-white/10 bg-black/70 backdrop-blur-2xl">

                {searchValue.length === 0 ? (
                  <div className="p-5">
                    <p className="text-gray-500 text-sm mb-3">
                      Quick Navigation
                    </p>

                    {navItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleNavigation(item.id)}
                        className="
                          w-full
                          flex
                          items-center
                          justify-between
                          px-4
                          py-3
                          rounded-xl
                          text-gray-300
                          hover:text-white
                          hover:bg-white/5
                          transition
                          cursor-pointer
                        "
                      >
                        <span>{item.name}</span>

                        <ArrowRight
                          size={16}
                          className="text-gray-500"
                        />
                      </button>
                    ))}
                  </div>
                ) : filteredItems.length > 0 ? (
                  <div className="p-3">
                    {filteredItems.map((item) => (
                      <motion.button
                        key={item.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        onClick={() => handleNavigation(item.id)}
                        className="
                          w-full
                          flex
                          items-center
                          justify-between
                          px-4
                          py-3
                          rounded-xl
                          text-gray-300
                          hover:text-white
                          hover:bg-red-500/10
                          transition
                          cursor-pointer
                        "
                      >
                        <span>{item.name}</span>

                        <ArrowRight
                          size={16}
                          className="text-red-500"
                        />
                      </motion.button>
                    ))}
                  </div>
                ) : (
                  <div className="p-6 text-center">
                    <p className="text-gray-400 text-sm">
                      No results found
                    </p>
                  </div>
                )}
              </div>

              {/* Search Hint */}

              <p className="text-gray-500 text-xs text-center mt-4">
                Press <span className="text-gray-300">ESC</span> to close
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;