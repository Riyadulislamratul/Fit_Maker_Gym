import React, { useEffect, useMemo, useState } from "react";
import { Search, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { name: "Home", id: "home" },
  { name: "Services", id: "services" },
  { name: "Membership", id: "plans" },
  { name: "Coaching", id: "coaching" },
  { name: "About Us", id: "about" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  /* =========================================================
     SCROLL DETECTION
     Only update React when the actual state changes.
  ========================================================= */

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      requestAnimationFrame(() => {
        const isScrolled = window.scrollY > 30;

        setScrolled((prev) =>
          prev === isScrolled ? prev : isScrolled
        );

        ticking = false;
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================================
     ACTIVE SECTION
  ========================================================= */

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.id)
    ).filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visible.length) {
          const id = visible[0].target.id;

          setActive((prev) =>
            prev === id ? prev : id
          );
        }
      },
      {
        threshold: 0.4,
        rootMargin: "-90px 0px -40% 0px",
      }
    );

    sections.forEach((section) =>
      observer.observe(section)
    );

    return () => observer.disconnect();
  }, []);

  /* =========================================================
     ESCAPE KEY
  ========================================================= */

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key !== "Escape") return;

      setMenuOpen(false);
      setSearchOpen(false);
      setSearchValue("");
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  /* =========================================================
     BODY SCROLL LOCK
  ========================================================= */

  useEffect(() => {
    const shouldLock = menuOpen || searchOpen;

    document.body.style.overflow = shouldLock
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, searchOpen]);

  /* =========================================================
     NAVIGATION
  ========================================================= */

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

  /* =========================================================
     SEARCH
  ========================================================= */

  const filteredItems = useMemo(() => {
    const value = searchValue.trim().toLowerCase();

    if (!value) return NAV_ITEMS;

    return NAV_ITEMS.filter((item) =>
      item.name.toLowerCase().includes(value)
    );
  }, [searchValue]);

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchValue("");
  };

  return (
    <>
      {/* =====================================================
          HEADER
      ===================================================== */}

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.55,
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
          transition-[background-color,box-shadow]
          duration-300

          ${
            scrolled
              ? "bg-black/90 shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
              : "bg-black/50"
          }
        `}
      >
        {/* ===================================================
            LIGHTWEIGHT BACKGROUND GLOW

            CSS animation instead of Framer Motion.
            Much cheaper for continuous animation.
        =================================================== */}

        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="header-glow header-glow-red" />
          <div className="header-glow header-glow-orange" />
        </div>

        {/* ===================================================
            MAIN CONTAINER
        =================================================== */}

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

            transition-[padding]
            duration-300

            ${
              scrolled
                ? "py-2.5"
                : "py-3 sm:py-4"
            }
          `}
        >
          {/* =================================================
              LOGO
          ================================================= */}

          <button
            type="button"
            onClick={() => handleNavigation("home")}
            className="
              group
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

            <div
              className="
                header-logo
                w-7
                h-7
                sm:w-8
                sm:h-8
                rounded-lg
                bg-red-600
                shrink-0
                shadow-[0_0_12px_rgba(239,68,68,0.3)]
                transition-transform
                duration-300
                group-hover:scale-105
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
          </button>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm">
            {NAV_ITEMS.map((item) => {
              const isActive = active === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() =>
                    handleNavigation(item.id)
                  }
                  className={`
                    group
                    relative
                    pb-1
                    whitespace-nowrap
                    cursor-pointer
                    outline-none
                    transition-colors
                    duration-200

                    ${
                      isActive
                        ? "text-white"
                        : "text-gray-300 hover:text-white"
                    }
                  `}
                >
                  {item.name}

                  {/* CSS active line */}

                  <span
                    className={`
                      absolute
                      left-0
                      -bottom-1
                      h-[2px]
                      rounded-full
                      bg-red-500
                      transition-[width]
                      duration-200

                      ${
                        isActive
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }
                    `}
                  />
                </button>
              );
            })}
          </nav>

          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Search */}

            <button
              type="button"
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

                shadow-[0_0_14px_rgba(249,115,22,0.2)]

                transition-transform
                duration-200

                hover:scale-105
                hover:rotate-3
                active:scale-95

                outline-none
              "
              aria-label="Open search"
            >
              <Search
                size={16}
                className="sm:w-[18px] sm:h-[18px]"
              />
            </button>

            {/* =================================================
                DESKTOP AUTH
            ================================================= */}

            <div className="hidden lg:flex items-center gap-2 xl:gap-3">
              <button
                type="button"
                onClick={() =>
                  handleNavigation("auth")
                }
                className="
                  px-4
                  xl:px-5
                  py-2
                  rounded-full

                  border
                  border-red-500

                  text-white
                  text-sm
                  whitespace-nowrap

                  hover:bg-red-500/20

                  transition
                  duration-200

                  cursor-pointer
                  active:scale-95
                "
              >
                Login
              </button>

              <button
                type="button"
                onClick={() =>
                  handleNavigation("auth")
                }
                className="
                  px-4
                  xl:px-5
                  py-2
                  rounded-full

                  bg-red-600
                  text-white
                  text-sm
                  whitespace-nowrap

                  hover:bg-red-700
                  hover:-translate-y-0.5

                  transition
                  duration-200

                  cursor-pointer
                  active:scale-95

                  shadow-[0_0_14px_rgba(239,68,68,0.15)]
                "
              >
                Sign Up
              </button>
            </div>

            {/* =================================================
                MOBILE MENU BUTTON
            ================================================= */}

            <button
              type="button"
              onClick={() =>
                setMenuOpen((prev) => !prev)
              }
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

                hover:bg-white/10

                transition
                duration-200

                active:scale-90

                outline-none
              "
              aria-label={
                menuOpen
                  ? "Close menu"
                  : "Open menu"
              }
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>

        {/* ===================================================
            MOBILE MENU
        =================================================== */}

        <AnimatePresence initial={false}>
          {menuOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: -8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -8,
              }}
              transition={{
                duration: 0.2,
              }}
              className="
                lg:hidden
                border-t
                border-white/10
                bg-black/95
                overflow-hidden
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
                  {NAV_ITEMS.map((item) => {
                    const isActive =
                      active === item.id;

                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() =>
                          handleNavigation(item.id)
                        }
                        className={`
                          w-full
                          flex
                          items-center
                          justify-between

                          px-4
                          py-3.5
                          sm:py-4

                          rounded-xl

                          text-left

                          transition
                          duration-200

                          cursor-pointer

                          ${
                            isActive
                              ? "bg-red-600/15 text-white border border-red-500/20"
                              : "text-gray-300 hover:text-white hover:bg-white/5"
                          }
                        `}
                      >
                        <span className="text-sm sm:text-base">
                          {item.name}
                        </span>

                        {isActive && (
                          <span
                            className="
                              w-2
                              h-2
                              rounded-full
                              bg-red-500
                              shadow-[0_0_8px_rgba(239,68,68,0.6)]
                            "
                          />
                        )}
                      </button>
                    );
                  })}
                </nav>

                {/* Mobile Auth */}

                <div
                  className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    gap-3
                    mt-6
                  "
                >
                  <button
                    type="button"
                    onClick={() =>
                      handleNavigation("auth")
                    }
                    className="
                      w-full
                      py-3

                      rounded-full
                      border
                      border-red-500

                      text-white
                      text-sm
                      text-center

                      hover:bg-red-500/20

                      transition
                      duration-200

                      active:scale-[0.98]
                    "
                  >
                    Login
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      handleNavigation("auth")
                    }
                    className="
                      w-full
                      py-3

                      rounded-full
                      bg-red-600

                      text-white
                      text-sm
                      text-center

                      hover:bg-red-700

                      transition
                      duration-200

                      active:scale-[0.98]
                    "
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* =====================================================
          SEARCH OVERLAY
      ===================================================== */}

      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="
              fixed
              inset-0
              z-[100]

              bg-black/90

              flex
              items-start
              justify-center

              pt-20
              sm:pt-24
              md:pt-28

              px-3
              sm:px-5
            "
            onClick={closeSearch}
          >
            <motion.div
              initial={{
                opacity: 0,
                y: -20,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -15,
                scale: 0.98,
              }}
              transition={{
                duration: 0.2,
              }}
              onClick={(e) =>
                e.stopPropagation()
              }
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

                  rounded-xl
                  sm:rounded-2xl

                  px-3
                  sm:px-5

                  py-3
                  sm:py-4

                  shadow-[0_15px_45px_rgba(0,0,0,0.4)]
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
                  onChange={(e) =>
                    setSearchValue(e.target.value)
                  }
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

                <button
                  type="button"
                  onClick={closeSearch}
                  className="
                    text-gray-400
                    hover:text-white

                    transition
                    duration-200

                    cursor-pointer
                    shrink-0

                    hover:rotate-90
                  "
                  aria-label="Close search"
                >
                  <X size={20} />
                </button>
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

                  bg-black/95

                  scrollbar-thin
                "
              >
                {/* Quick Navigation */}

                {searchValue.trim().length === 0 ? (
                  <div className="p-3 sm:p-5">
                    <p
                      className="
                        text-gray-500
                        text-xs
                        sm:text-sm
                        mb-2
                        sm:mb-3
                        px-2
                      "
                    >
                      Quick Navigation
                    </p>

                    {NAV_ITEMS.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() =>
                          handleNavigation(item.id)
                        }
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
                          duration-150

                          cursor-pointer
                          text-left
                        "
                      >
                        <span className="text-sm">
                          {item.name}
                        </span>

                        <ArrowRight
                          size={16}
                          className="
                            text-gray-500
                            shrink-0
                          "
                        />
                      </button>
                    ))}
                  </div>
                ) : filteredItems.length > 0 ? (
                  <div className="p-2 sm:p-3">
                    {filteredItems.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() =>
                          handleNavigation(item.id)
                        }
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
                          duration-150

                          cursor-pointer
                          text-left
                        "
                      >
                        <span className="text-sm">
                          {item.name}
                        </span>

                        <ArrowRight
                          size={16}
                          className="
                            text-red-500
                            shrink-0
                          "
                        />
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 sm:p-10 text-center">
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