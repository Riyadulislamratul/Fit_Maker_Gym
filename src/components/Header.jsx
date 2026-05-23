import React from "react";
import { Search } from "lucide-react";

const Header = () => {
  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50

        bg-white/10
        backdrop-blur-2xl

        border-b border-white/10

        shadow-[0_8px_32px_rgba(0,0,0,0.35)]

        px-10 py-6
        flex items-center justify-between
      "
    >
      {/* Glow Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 left-20 w-[250px] h-[250px] bg-red-600 blur-[100px] rounded-full"></div>

        <div className="absolute -top-20 right-20 w-[250px] h-[250px] bg-orange-500 blur-[100px] rounded-full"></div>
      </div>

      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded bg-red-600"></div>

        <div>
          <h1 className="text-white font-bold text-lg">FitMaker</h1>

          <p className="text-gray-400 text-[10px]">Transform Your Body</p>
        </div>
      </div>

      {/* Nav */}
      <nav className="hidden md:flex items-center gap-10 text-sm">
        <a href="#" className="text-white border-b-2 border-red-500 pb-1">
          Home
        </a>

        <a href="#" className="text-gray-300 hover:text-white">
          Programs
        </a>

        <a href="#" className="text-gray-300 hover:text-white">
          Coaching
        </a>

        <a href="#" className="text-gray-300 hover:text-white">
          Membership
        </a>

        <a href="#" className="text-gray-300 hover:text-white">
          About Us
        </a>
      </nav>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center text-white">
          <Search size={18} />
        </button>

        <button className="px-5 py-2 rounded-full border border-red-500 text-white hover:bg-red-500/20 transition">
          Login
        </button>

        <button className="px-5 py-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
