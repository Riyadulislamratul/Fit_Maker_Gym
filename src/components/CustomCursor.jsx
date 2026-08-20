import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth main cursor
  const cursorX = useSpring(mouseX, {
    stiffness: 500,
    damping: 30,
    mass: 0.5,
  });

  const cursorY = useSpring(mouseY, {
    stiffness: 500,
    damping: 30,
    mass: 0.5,
  });

  // Slower trailing cursor
  const trailX = useSpring(mouseX, {
    stiffness: 120,
    damping: 25,
    mass: 0.8,
  });

  const trailY = useSpring(mouseY, {
    stiffness: 120,
    damping: 25,
    mass: 0.8,
  });

  useEffect(() => {
    // Disable cursor on touch devices
    const isTouchDevice =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0;

    if (isTouchDevice) {
      return;
    }

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      setIsVisible(true);

      // Check if hovering interactive elements
      const target = e.target;

      if (
        target.closest(
          "button, a, input, textarea, select, [role='button'], .cursor-pointer"
        )
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

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
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Large Glow */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9997] hidden lg:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible ? 0.15 : 0,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          duration: 0.3,
        }}
      >
        <div className="h-32 w-32 rounded-full bg-red-600 blur-3xl" />
      </motion.div>

      {/* Trailing Ring */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden lg:block"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          width: isHovering ? 65 : 42,
          height: isHovering ? 65 : 42,
          borderColor: isHovering
            ? "rgba(249, 115, 22, 0.8)"
            : "rgba(239, 68, 68, 0.6)",
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20,
        }}
        className="rounded-full border"
      >
        {/* Rotating Ring */}
        <motion.div
          className="absolute inset-[-3px] rounded-full border border-dashed border-orange-500/50"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>

      {/* Main Cursor */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden lg:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isClicking
            ? 0.65
            : isHovering
            ? 1.35
            : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 25,
        }}
      >
        {/* Outer Glow */}
        <div className="absolute -inset-3 rounded-full bg-red-500/20 blur-md" />

        {/* Cursor */}
        <div className="relative h-3 w-3 rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.9)]">
          {/* Orange Center */}
          <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-400" />
        </div>
      </motion.div>

      {/* Click Ripple */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9996] hidden lg:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        initial={{
          opacity: 0,
          scale: 0.5,
        }}
        animate={
          isClicking
            ? {
                opacity: 1,
                scale: 1.8,
              }
            : {
                opacity: 0,
                scale: 0.5,
              }
        }
        transition={{
          duration: 0.35,
        }}
      >
        <div className="h-10 w-10 rounded-full border border-red-500 shadow-[0_0_25px_rgba(239,68,68,0.6)]" />
      </motion.div>
    </>
  );
};

export default CustomCursor;