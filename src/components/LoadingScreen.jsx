import React, { useEffect, useState } from "react";

const LoadingScreen = ({ onComplete, duration = 3000 }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Prevent scrolling while loader is visible
    document.body.style.overflow = "hidden";

    const startTime = Date.now();

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const percentage = Math.min((elapsed / duration) * 100, 100);

      setProgress(Math.floor(percentage));

      if (percentage < 100) {
        requestAnimationFrame(updateProgress);
      } else {
        // Small delay after reaching 100%
        setTimeout(() => {
          setIsExiting(true);

          // Wait for exit animation
          setTimeout(() => {
            document.body.style.overflow = "";

            if (onComplete) {
              onComplete();
            }
          }, 700);
        }, 250);
      }
    };

    const animationFrame = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(animationFrame);
      document.body.style.overflow = "";
    };
  }, [duration, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#050505] transition-all duration-700 ${
        isExiting
          ? "pointer-events-none opacity-0 scale-110"
          : "opacity-100 scale-100"
      }`}
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      {/* Main red glow */}
      <div className="absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-red-600/20 blur-[150px] animate-[pulseGlow_5s_ease-in-out_infinite]" />

      {/* Orange glow */}
      <div className="absolute -right-40 top-1/3 h-[450px] w-[450px] rounded-full bg-orange-500/15 blur-[150px] animate-[pulseGlow2_6s_ease-in-out_infinite]" />

      {/* Bottom glow */}
      <div className="absolute bottom-[-250px] left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[150px]" />

      {/* =====================================================
          PARTICLES
      ====================================================== */}

      <div className="absolute inset-0 pointer-events-none">
        {[
          {
            left: "8%",
            top: "18%",
            size: 4,
            delay: "0s",
            duration: "4s",
          },
          {
            left: "17%",
            top: "72%",
            size: 3,
            delay: "1s",
            duration: "5s",
          },
          {
            left: "28%",
            top: "32%",
            size: 5,
            delay: "2s",
            duration: "4.5s",
          },
          {
            left: "72%",
            top: "20%",
            size: 4,
            delay: "1.5s",
            duration: "5s",
          },
          {
            left: "83%",
            top: "65%",
            size: 3,
            delay: "0.5s",
            duration: "4s",
          },
          {
            left: "91%",
            top: "38%",
            size: 5,
            delay: "2.5s",
            duration: "5.5s",
          },
          {
            left: "62%",
            top: "82%",
            size: 3,
            delay: "1.2s",
            duration: "4.5s",
          },
          {
            left: "38%",
            top: "88%",
            size: 4,
            delay: "2s",
            duration: "5s",
          },
          {
            left: "5%",
            top: "45%",
            size: 3,
            delay: "3s",
            duration: "4s",
          },
          {
            left: "95%",
            top: "82%",
            size: 4,
            delay: "1s",
            duration: "5s",
          },
        ].map((particle, index) => (
          <span
            key={index}
            className="absolute rounded-full bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.8)] animate-[particleFloat_var(--duration)_ease-in-out_infinite]"
            style={{
              left: particle.left,
              top: particle.top,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: particle.delay,
              "--duration": particle.duration,
            }}
          />
        ))}
      </div>

      {/* =====================================================
          GRID
      ====================================================== */}

      <div
        className="
          absolute inset-0 opacity-[0.035]
          bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)]
          bg-[size:60px_60px]
        "
      />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-10 flex w-full max-w-xl flex-col items-center px-6 text-center">

        {/* Small top label */}
        <div className="mb-8 flex items-center gap-3 opacity-0 animate-[fadeDown_0.8s_0.1s_ease-out_forwards]">
          <span className="h-px w-8 bg-red-500" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.45em] text-gray-500">
            Premium Fitness
          </span>

          <span className="h-px w-8 bg-red-500" />
        </div>

        {/* =================================================
            LOGO MARK
        ================================================== */}

        <div className="relative flex h-48 w-48 items-center justify-center sm:h-56 sm:w-56">

          {/* Outer rotating ring */}
          <div
            className="
              absolute inset-0 rounded-full
              border border-red-500/20
              animate-[spinSlow_10s_linear_infinite]
            "
          >
            {/* Ring dot */}
            <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,1)]" />
          </div>

          {/* Orange rotating ring */}
          <div
            className="
              absolute inset-4 rounded-full
              border border-orange-500/20
              border-r-orange-500
              animate-[spinReverse_6s_linear_infinite]
            "
          />

          {/* Third ring */}
          <div
            className="
              absolute inset-8 rounded-full
              border border-red-500/10
              border-l-red-500/70
              animate-[spinSlow_5s_linear_infinite]
            "
          />

          {/* Main glow */}
          <div
            className="
              absolute h-28 w-28 rounded-full
              bg-red-600/20
              blur-2xl
              animate-[logoGlow_2s_ease-in-out_infinite]
            "
          />

          {/* Logo Circle */}
          <div
            className="
              relative flex h-28 w-28 items-center justify-center
              rounded-full
              border border-white/10
              bg-[#0c0c0c]/90
              shadow-[0_0_50px_rgba(239,68,68,0.15)]
              backdrop-blur-xl
              animate-[logoFloat_3s_ease-in-out_infinite]
            "
          >
            {/* Fitness mark */}
            <div className="flex items-end gap-1">

              <span
                className="
                  h-9 w-3 rotate-[-12deg]
                  rounded-sm bg-red-500
                  shadow-[0_0_12px_rgba(239,68,68,0.6)]
                  animate-[barPulse_1.5s_ease-in-out_infinite]
                "
              />

              <span
                className="
                  h-12 w-3 rotate-[-8deg]
                  rounded-sm bg-orange-500
                  shadow-[0_0_12px_rgba(249,115,22,0.6)]
                  animate-[barPulse_1.5s_0.15s_ease-in-out_infinite]
                "
              />

              <span
                className="
                  h-9 w-3 rotate-[-4deg]
                  rounded-sm bg-red-500
                  shadow-[0_0_12px_rgba(239,68,68,0.6)]
                  animate-[barPulse_1.5s_0.3s_ease-in-out_infinite]
                "
              />

            </div>
          </div>
        </div>

        {/* =================================================
            BRAND NAME
        ================================================== */}

        <div className="mt-7 opacity-0 animate-[fadeUp_0.8s_0.3s_ease-out_forwards]">

          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
            FIT
            <span className="text-red-500">MAKER</span>
          </h1>

          <p className="mt-2 text-[9px] uppercase tracking-[0.55em] text-gray-500 sm:text-[10px]">
            Transform Your Body
          </p>
        </div>

        {/* =================================================
            LOADING SECTION
        ================================================== */}

        <div className="mt-12 w-full max-w-sm opacity-0 animate-[fadeUp_0.8s_0.5s_ease-out_forwards]">

          {/* Status */}
          <div className="mb-3 flex items-center justify-between">

            <div className="flex items-center gap-2">

              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
              </span>

              <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-gray-500">
                {progress < 100 ? "Loading" : "Ready"}
              </span>

            </div>

            <span className="font-mono text-xs font-bold text-red-500">
              {progress.toString().padStart(3, "0")}%
            </span>

          </div>

          {/* Progress bar */}
          <div className="relative h-[3px] w-full overflow-hidden rounded-full bg-white/10">

            {/* Background glow */}
            <div className="absolute inset-0 bg-red-500/10" />

            {/* Progress */}
            <div
              className="
                relative h-full rounded-full
                bg-gradient-to-r from-red-600 via-red-500 to-orange-500
                shadow-[0_0_15px_rgba(239,68,68,0.8)]
                transition-[width] duration-100 ease-linear
              "
              style={{
                width: `${progress}%`,
              }}
            >
              {/* Moving highlight */}
              <span
                className="
                  absolute right-0 top-1/2
                  h-5 w-5 -translate-y-1/2
                  rounded-full bg-white/80
                  blur-md
                "
              />
            </div>
          </div>

          {/* Bottom labels */}
          <div className="mt-3 flex justify-between text-[8px] uppercase tracking-[0.25em] text-gray-600">
            <span>Get Ready</span>
            <span>FitMaker</span>
          </div>
        </div>

        {/* =================================================
            BOTTOM MESSAGE
        ================================================== */}

        <p
          className="
            mt-8 text-[9px] uppercase
            tracking-[0.35em] text-gray-600
            opacity-0
            animate-[fadeUp_0.8s_0.7s_ease-out_forwards]
          "
        >
          Your transformation starts here
        </p>
      </div>

      {/* =====================================================
          CORNER DECORATIONS
      ====================================================== */}

      <div className="absolute left-6 top-6 h-16 w-16 border-l border-t border-red-500/20 sm:left-10 sm:top-10" />

      <div className="absolute bottom-6 right-6 h-16 w-16 border-b border-r border-orange-500/20 sm:bottom-10 sm:right-10" />

      {/* =====================================================
          ANIMATIONS
      ====================================================== */}

      <style>
        {`
          @keyframes spinSlow {
            from {
              transform: rotate(0deg);
            }

            to {
              transform: rotate(360deg);
            }
          }

          @keyframes spinReverse {
            from {
              transform: rotate(360deg);
            }

            to {
              transform: rotate(0deg);
            }
          }

          @keyframes logoFloat {
            0%,
            100% {
              transform: translateY(0);
            }

            50% {
              transform: translateY(-7px);
            }
          }

          @keyframes logoGlow {
            0%,
            100% {
              transform: scale(0.9);
              opacity: 0.5;
            }

            50% {
              transform: scale(1.2);
              opacity: 1;
            }
          }

          @keyframes barPulse {
            0%,
            100% {
              transform: translateY(0) rotate(-8deg);
              opacity: 0.8;
            }

            50% {
              transform: translateY(-5px) rotate(-8deg);
              opacity: 1;
            }
          }

          @keyframes particleFloat {
            0% {
              transform: translateY(0) translateX(0);
              opacity: 0;
            }

            20% {
              opacity: 1;
            }

            50% {
              transform: translateY(-35px) translateX(15px);
              opacity: 0.8;
            }

            80% {
              opacity: 1;
            }

            100% {
              transform: translateY(-70px) translateX(-10px);
              opacity: 0;
            }
          }

          @keyframes pulseGlow {
            0%,
            100% {
              transform: translateY(-50%) scale(1);
              opacity: 0.5;
            }

            50% {
              transform: translateY(-50%) scale(1.25);
              opacity: 0.8;
            }
          }

          @keyframes pulseGlow2 {
            0%,
            100% {
              transform: scale(1);
              opacity: 0.4;
            }

            50% {
              transform: scale(1.3);
              opacity: 0.7;
            }
          }

          @keyframes fadeDown {
            from {
              opacity: 0;
              transform: translateY(-25px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(25px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            *,
            *::before,
            *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default LoadingScreen;