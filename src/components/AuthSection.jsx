import React, { useState } from "react";

const AuthSection = () => {
  const [activeTab, setActiveTab] = useState("signup");

  return (
    <section className="relative overflow-hidden lg:overflow-visible py-20 text-white" id="auth">
      {/* Glow */}
      <div className="absolute right-0 -top-30 h-72 w-72 rounded-full bg-orange-500 blur-[120px] hidden lg:block" />
      <div className="absolute lg:left-[-100px] lg:bottom-0 h-72 w-72 rounded-full bg-red-500 blur-[120px] bottom-40 left-[-100px]" />

      <div className="relative z-10 rounded-3xl border border-red-500/30 bg-transparent p-8 backdrop-blur-xl max-w-7xl mx-auto">
        
        {/* Tabs */}
        <div className="mb-8 flex items-center justify-center gap-8">
          <button
            onClick={() => setActiveTab("signup")}
            className={`cursor-pointer border-b-2 pb-2 text-lg font-semibold transition-all duration-300 ${
              activeTab === "signup"
                ? "border-red-500 text-red-500"
                : "border-transparent text-gray-300 hover:text-white"
            }`}
          >
            Sign Up
          </button>

          <button
            onClick={() => setActiveTab("login")}
            className={`cursor-pointer border-b-2 pb-2 text-lg font-semibold transition-all duration-300 ${
              activeTab === "login"
                ? "border-red-500 text-red-500"
                : "border-transparent text-gray-300 hover:text-white"
            }`}
          >
            Login
          </button>
        </div>

        {/* Forms Wrapper (Smooth Transition) */}
        <div className="relative overflow-hidden min-h-[420px]">

          {/* SIGNUP */}
          <div
            className={`transition-all duration-500 ease-in-out ${
              activeTab === "signup"
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-6 absolute inset-0 pointer-events-none"
            }`}
          >
            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full rounded-lg border border-red-500/40 bg-black/20 px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-red-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">E-Mail</label>
                <input
                  type="email"
                  placeholder="Enter Your E-Mail"
                  className="w-full rounded-lg border border-red-500/40 bg-black/20 px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-red-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Password</label>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  className="w-full rounded-lg border border-red-500/40 bg-black/20 px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-red-500"
                />
              </div>

              <button className="w-full cursor-pointer rounded-lg bg-red-600 py-3 text-sm font-semibold transition-all duration-300 hover:scale-[1.02] hover:bg-red-700">
                Sign Up
              </button>

              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-gray-600" />
                <span className="text-sm text-gray-400">Or</span>
                <div className="h-px flex-1 bg-gray-600" />
              </div>

              <button className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg border border-red-500/40 py-3 text-sm font-medium transition-all duration-300 hover:border-red-500 hover:bg-red-500/10">
                <span className="text-lg text-yellow-400">G</span>
                Sign Up With Google
              </button>
            </div>
          </div>

          {/* LOGIN */}
          <div
            className={`transition-all duration-500 ease-in-out ${
              activeTab === "login"
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-6 absolute inset-0 pointer-events-none"
            }`}
          >
            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium">E-Mail</label>
                <input
                  type="email"
                  placeholder="Enter Your E-Mail"
                  className="w-full rounded-lg border border-red-500/40 bg-black/20 px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-red-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="w-full rounded-lg border border-red-500/40 bg-black/20 px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-red-500"
                />
              </div>

              <button className="w-full cursor-pointer rounded-lg bg-red-600 py-3 text-sm font-semibold transition-all duration-300 hover:scale-[1.02] hover:bg-red-700">
                Login
              </button>

              <button className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg border border-red-500/40 py-3 text-sm font-medium transition-all duration-300 hover:border-red-500 hover:bg-red-500/10">
                <span className="text-lg text-yellow-400">G</span>
                Login With Google
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AuthSection;