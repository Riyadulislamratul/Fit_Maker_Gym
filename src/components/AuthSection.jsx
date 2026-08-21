import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff, CheckCircle, Loader2 } from "lucide-react";

const AuthSection = () => {
  const [activeTab, setActiveTab] = useState("signup");

  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  // --------------------------------------------------
  // Input Handlers
  // --------------------------------------------------

  const handleSignupChange = (e) => {
    const { name, value } = e.target;

    setSignupData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;

    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // --------------------------------------------------
  // Validation
  // --------------------------------------------------

  const validateSignup = () => {
    const newErrors = {};

    if (!signupData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!signupData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(signupData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!signupData.password) {
      newErrors.password = "Password is required";
    } else if (signupData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const validateLogin = () => {
    const newErrors = {};

    if (!loginData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(loginData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!loginData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // --------------------------------------------------
  // Submit
  // --------------------------------------------------

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!validateSignup()) return;

    setLoading(true);
    setSuccess("");

    // Simulating API request
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setLoading(false);
    setSuccess("Account created successfully!");

    console.log("Signup Data:", signupData);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateLogin()) return;

    setLoading(true);
    setSuccess("");

    // Simulating API request
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setLoading(false);
    setSuccess("Login successful!");

    console.log("Login Data:", loginData);
  };

  // --------------------------------------------------
  // Switch Tabs
  // --------------------------------------------------

  const switchTab = (tab) => {
    setActiveTab(tab);
    setErrors({});
    setSuccess("");
  };

  return (
    <section
      className="relative overflow-hidden lg:overflow-visible py-20 text-white"
      id="auth"
    >
      {/* ==================================================
          BACKGROUND GLOWS
      ================================================== */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.5, 0.35],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute right-0 -top-30
          h-72 w-72
          rounded-full
          bg-orange-500
          blur-[120px]
          hidden lg:block
        "
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.45, 0.3],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          lg:left-[-100px]
          lg:bottom-0
          h-72 w-72
          rounded-full
          bg-red-500
          blur-[120px]
          bottom-40
          left-[-100px]
        "
      />

      {/* ==================================================
          MAIN CONTAINER
      ================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 50,
          scale: 0.97,
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
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          z-10
          rounded-3xl
          border border-red-500/30
          bg-transparent
          p-5 sm:p-8
          backdrop-blur-xl
          max-w-7xl
          mx-auto
        "
      >
        {/* ==================================================
            TABS
        ================================================== */}

        <div className="mb-8 flex items-center justify-center gap-8">
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => switchTab("signup")}
            className={`
              relative
              cursor-pointer
              pb-2
              text-lg
              font-semibold
              transition-colors
              duration-300
              ${
                activeTab === "signup"
                  ? "text-red-500"
                  : "text-gray-300 hover:text-white"
              }
            `}
          >
            Sign Up

            {activeTab === "signup" && (
              <motion.div
                layoutId="authTab"
                className="
                  absolute
                  bottom-0
                  left-0
                  h-[2px]
                  w-full
                  rounded-full
                  bg-red-500
                "
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
              />
            )}
          </motion.button>

          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => switchTab("login")}
            className={`
              relative
              cursor-pointer
              pb-2
              text-lg
              font-semibold
              transition-colors
              duration-300
              ${
                activeTab === "login"
                  ? "text-red-500"
                  : "text-gray-300 hover:text-white"
              }
            `}
          >
            Login

            {activeTab === "login" && (
              <motion.div
                layoutId="authTab"
                className="
                  absolute
                  bottom-0
                  left-0
                  h-[2px]
                  w-full
                  rounded-full
                  bg-red-500
                "
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
              />
            )}
          </motion.button>
        </div>

        {/* ==================================================
            FORM AREA
        ================================================== */}

        <div className="relative min-h-[420px] overflow-hidden">
          <AnimatePresence mode="wait">
            {/* ==================================================
                SIGN UP
            ================================================== */}

            {activeTab === "signup" && (
              <motion.form
                key="signup"
                onSubmit={handleSignup}
                initial={{
                  opacity: 0,
                  x: -40,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: 40,
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                }}
                className="space-y-5"
              >
                {/* Name */}

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Name
                  </label>

                  <motion.input
                    whileFocus={{
                      scale: 1.01,
                    }}
                    type="text"
                    name="name"
                    value={signupData.name}
                    onChange={handleSignupChange}
                    placeholder="Enter Your Name"
                    className={`
                      w-full
                      rounded-lg
                      border
                      bg-black/20
                      px-4
                      py-3
                      text-sm
                      outline-none
                      transition-all
                      duration-300
                      ${
                        errors.name
                          ? "border-red-600"
                          : "border-red-500/40 focus:border-red-500"
                      }
                    `}
                  />

                  <AnimatePresence>
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="mt-1 text-xs text-red-500"
                      >
                        {errors.name}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Email */}

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    E-Mail
                  </label>

                  <motion.input
                    whileFocus={{
                      scale: 1.01,
                    }}
                    type="email"
                    name="email"
                    value={signupData.email}
                    onChange={handleSignupChange}
                    placeholder="Enter Your E-Mail"
                    className={`
                      w-full
                      rounded-lg
                      border
                      bg-black/20
                      px-4
                      py-3
                      text-sm
                      outline-none
                      transition-all
                      duration-300
                      ${
                        errors.email
                          ? "border-red-600"
                          : "border-red-500/40 focus:border-red-500"
                      }
                    `}
                  />

                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-1 text-xs text-red-500"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </div>

                {/* Password */}

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Password
                  </label>

                  <div className="relative">
                    <motion.input
                      whileFocus={{
                        scale: 1.01,
                      }}
                      type={showSignupPassword ? "text" : "password"}
                      name="password"
                      value={signupData.password}
                      onChange={handleSignupChange}
                      placeholder="Enter Your Password"
                      className={`
                        w-full
                        rounded-lg
                        border
                        bg-black/20
                        px-4
                        py-3
                        pr-12
                        text-sm
                        outline-none
                        transition-all
                        duration-300
                        ${
                          errors.password
                            ? "border-red-600"
                            : "border-red-500/40 focus:border-red-500"
                        }
                      `}
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowSignupPassword(!showSignupPassword)
                      }
                      className="
                        absolute
                        right-4
                        top-1/2
                        -translate-y-1/2
                        cursor-pointer
                        text-gray-400
                        transition
                        hover:text-red-500
                      "
                    >
                      {showSignupPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>

                  {errors.password && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-1 text-xs text-red-500"
                    >
                      {errors.password}
                    </motion.p>
                  )}
                </div>

                {/* Submit */}

                <motion.button
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 25px rgba(239,68,68,0.35)",
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  disabled={loading}
                  type="submit"
                  className="
                    flex
                    w-full
                    cursor-pointer
                    items-center
                    justify-center
                    gap-2
                    rounded-lg
                    bg-red-600
                    py-3
                    text-sm
                    font-semibold
                    transition-all
                    duration-300
                    hover:bg-red-700
                    disabled:cursor-not-allowed
                    disabled:opacity-70
                  "
                >
                  {loading ? (
                    <>
                      <Loader2
                        size={18}
                        className="animate-spin"
                      />
                      Creating Account...
                    </>
                  ) : (
                    "Sign Up"
                  )}
                </motion.button>

                {/* Divider */}

                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-gray-600" />

                  <span className="text-sm text-gray-400">
                    Or
                  </span>

                  <div className="h-px flex-1 bg-gray-600" />
                </div>

                {/* Google */}

                <motion.button
                  type="button"
                  whileHover={{
                    scale: 1.01,
                    borderColor: "rgba(239,68,68,0.8)",
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="
                    flex
                    w-full
                    cursor-pointer
                    items-center
                    justify-center
                    gap-3
                    rounded-lg
                    border
                    border-red-500/40
                    py-3
                    text-sm
                    font-medium
                    transition-all
                    duration-300
                    hover:bg-red-500/10
                  "
                >
                  <span className="text-lg font-bold text-yellow-400">
                    G
                  </span>

                  Sign Up With Google
                </motion.button>
              </motion.form>
            )}

            {/* ==================================================
                LOGIN
            ================================================== */}

            {activeTab === "login" && (
              <motion.form
                key="login"
                onSubmit={handleLogin}
                initial={{
                  opacity: 0,
                  x: 40,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -40,
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                }}
                className="space-y-5"
              >
                {/* Email */}

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    E-Mail
                  </label>

                  <motion.input
                    whileFocus={{
                      scale: 1.01,
                    }}
                    type="email"
                    name="email"
                    value={loginData.email}
                    onChange={handleLoginChange}
                    placeholder="Enter Your E-Mail"
                    className={`
                      w-full
                      rounded-lg
                      border
                      bg-black/20
                      px-4
                      py-3
                      text-sm
                      outline-none
                      transition-all
                      duration-300
                      ${
                        errors.email
                          ? "border-red-600"
                          : "border-red-500/40 focus:border-red-500"
                      }
                    `}
                  />

                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-1 text-xs text-red-500"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </div>

                {/* Password */}

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Password
                  </label>

                  <div className="relative">
                    <motion.input
                      whileFocus={{
                        scale: 1.01,
                      }}
                      type={showLoginPassword ? "text" : "password"}
                      name="password"
                      value={loginData.password}
                      onChange={handleLoginChange}
                      placeholder="Enter Password"
                      className={`
                        w-full
                        rounded-lg
                        border
                        bg-black/20
                        px-4
                        py-3
                        pr-12
                        text-sm
                        outline-none
                        transition-all
                        duration-300
                        ${
                          errors.password
                            ? "border-red-600"
                            : "border-red-500/40 focus:border-red-500"
                        }
                      `}
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowLoginPassword(!showLoginPassword)
                      }
                      className="
                        absolute
                        right-4
                        top-1/2
                        -translate-y-1/2
                        cursor-pointer
                        text-gray-400
                        transition
                        hover:text-red-500
                      "
                    >
                      {showLoginPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>

                  {errors.password && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-1 text-xs text-red-500"
                    >
                      {errors.password}
                    </motion.p>
                  )}
                </div>

                {/* Forgot Password */}

                <div className="flex justify-end">
                  <button
                    type="button"
                    className="
                      cursor-pointer
                      text-xs
                      text-gray-400
                      transition
                      hover:text-red-500
                    "
                  >
                    Forgot Password?
                  </button>
                </div>

                {/* Login */}

                <motion.button
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 25px rgba(239,68,68,0.35)",
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  disabled={loading}
                  type="submit"
                  className="
                    flex
                    w-full
                    cursor-pointer
                    items-center
                    justify-center
                    gap-2
                    rounded-lg
                    bg-red-600
                    py-3
                    text-sm
                    font-semibold
                    transition-all
                    duration-300
                    hover:bg-red-700
                    disabled:cursor-not-allowed
                    disabled:opacity-70
                  "
                >
                  {loading ? (
                    <>
                      <Loader2
                        size={18}
                        className="animate-spin"
                      />
                      Logging In...
                    </>
                  ) : (
                    "Login"
                  )}
                </motion.button>

                {/* Google */}

                <motion.button
                  type="button"
                  whileHover={{
                    scale: 1.01,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="
                    flex
                    w-full
                    cursor-pointer
                    items-center
                    justify-center
                    gap-3
                    rounded-lg
                    border
                    border-red-500/40
                    py-3
                    text-sm
                    font-medium
                    transition-all
                    duration-300
                    hover:border-red-500
                    hover:bg-red-500/10
                  "
                >
                  <span className="text-lg font-bold text-yellow-400">
                    G
                  </span>

                  Login With Google
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {/* ==================================================
            SUCCESS MESSAGE
        ================================================== */}

        <AnimatePresence>
          {success && (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
              className="
                mt-5
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-green-500/30
                bg-green-500/10
                px-4
                py-3
                text-sm
                text-green-400
              "
            >
              <CheckCircle size={18} />

              {success}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default AuthSection;