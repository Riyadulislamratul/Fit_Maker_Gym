import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const clickTimeout = useRef(null);

  // --------------------------------------------------
  // Mouse Position
  // --------------------------------------------------

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // --------------------------------------------------
  // Main Cursor - Very Fast
  // --------------------------------------------------

  const cursorX = useSpring(mouseX, {
    stiffness: 800,
    damping: 35,
    mass: 0.3,
  });

  const cursorY = useSpring(mouseY, {
    stiffness: 800,
    damping: 35,
    mass: 0.3,
  });

  // --------------------------------------------------
  // Outer Ring - Smooth / Slight Delay
  // --------------------------------------------------

  const ringX = useSpring(mouseX, {
    stiffness: 180,
    damping: 24,
    mass: 0.7,
  });

  const ringY = useSpring(mouseY, {
    stiffness: 180,
    damping: 24,
    mass: 0.7,
  });

  // --------------------------------------------------
  // Large Glow - More Delayed
  // --------------------------------------------------

  const glowX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
    mass: 1,
  });

  const glowY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
    mass: 1,
  });

  // --------------------------------------------------
  // Mouse Events
  // --------------------------------------------------

  useEffect(() => {
    // Don't use custom cursor on touch devices
    const isTouchDevice =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0;

    if (isTouchDevice) return;

    const handleMouseMove = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);

      if (!isVisible) {
        setIsVisible(true);
      }

      // Detect interactive elements
      const target = event.target;

      if (!(target instanceof Element)) {
        setIsHovering(false);
        return;
      }

      const interactiveElement = target.closest(
        "button, a, input, textarea, select, [role='button'], .cursor-pointer"
      );

      setIsHovering(Boolean(interactiveElement));
    };

    // --------------------------------------------------
    // Mouse Down
    // --------------------------------------------------

    const handleMouseDown = () => {
      setIsClicking(true);

      // Clear previous timeout
      if (clickTimeout.current) {
        clearTimeout(clickTimeout.current);
      }
    };

    // --------------------------------------------------
    // Mouse Up
    // --------------------------------------------------

    const handleMouseUp = () => {
      // Keep click animation visible for a short moment
      clickTimeout.current = setTimeout(() => {
        setIsClicking(false);
      }, 180);
    };

    // --------------------------------------------------
    // Mouse Leaves Browser
    // --------------------------------------------------

    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsHovering(false);
      setIsClicking(false);
    };

    // --------------------------------------------------
    // Mouse Enters Browser
    // --------------------------------------------------

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);

      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);

      if (clickTimeout.current) {
        clearTimeout(clickTimeout.current);
      }
    };
  }, [mouseX, mouseY, isVisible]);

  return (
    <>
      {/* ==================================================
          LARGE AMBIENT GLOW
      ================================================== */}

      <motion.div
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[9996]
          hidden
          lg:block
        "
        style={{
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible ? 0.13 : 0,
          scale: isHovering ? 1.35 : 1,
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
      >
        <div
          className="
            h-36
            w-36
            rounded-full
            bg-red-600
            blur-3xl
          "
        />
      </motion.div>

      {/* ==================================================
          OUTER TRAILING RING
      ================================================== */}

      <motion.div
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[9998]
          hidden
          lg:block
        "
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible ? 1 : 0,

          width: isHovering ? 64 : 42,
          height: isHovering ? 64 : 42,

          borderColor: isHovering
            ? "rgba(249,115,22,0.9)"
            : "rgba(239,68,68,0.65)",
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 22,
          mass: 0.5,
        }}
      >
        {/* Outer Ring */}
        <div
          className="
            absolute
            inset-0
            rounded-full
            border
          "
        />

        {/* Rotating Dashed Ring */}

        <motion.div
          className="
            absolute
            -inset-[3px]
            rounded-full
            border
            border-dashed
            border-orange-500/50
          "
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Small Ring Glow */}

        <motion.div
          className="
            absolute
            inset-1
            rounded-full
            border
            border-red-500/20
          "
          animate={{
            scale: isHovering ? 1.08 : 1,
            opacity: isHovering ? 1 : 0.5,
          }}
          transition={{
            duration: 0.3,
          }}
        />
      </motion.div>

      {/* ==================================================
          MAIN CURSOR
      ================================================== */}

      <motion.div
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[10000]
          hidden
          lg:block
        "
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible ? 1 : 0,

          scale: isClicking
            ? 0.55
            : isHovering
            ? 1.4
            : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 600,
          damping: 25,
        }}
      >
        {/* Cursor Glow */}

        <div
          className="
            absolute
            -inset-3
            rounded-full
            bg-red-500/25
            blur-md
          "
        />

        {/* Main Dot */}

        <div
          className="
            relative
            h-3
            w-3
            rounded-full
            bg-red-500
            shadow-[0_0_15px_rgba(239,68,68,0.9)]
          "
        >
          {/* Orange Center */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-1
              w-1
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-orange-400
            "
          />
        </div>
      </motion.div>

      {/* ==================================================
          CLICK RIPPLE
      ================================================== */}

      <motion.div
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[9997]
          hidden
          lg:block
        "
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isClicking ? 1 : 0,
          scale: isClicking ? 1.8 : 0.5,
        }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
      >
        <div
          className="
            h-10
            w-10
            rounded-full
            border
            border-red-500
            shadow-[0_0_30px_rgba(239,68,68,0.7)]
          "
        />
      </motion.div>

      {/* ==================================================
          CLICK SECONDARY RIPPLE
      ================================================== */}

      <motion.div
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[9995]
          hidden
          lg:block
        "
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isClicking ? 0.5 : 0,
          scale: isClicking ? 2.6 : 0.5,
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        <div
          className="
            h-8
            w-8
            rounded-full
            border
            border-orange-500/60
          "
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;