import React, { useState } from "react";
import { Search, Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Active Menu State
  const [active, setActive] = useState("home");

  // Navigation Items
  const navItems = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "Membership", id: "plans" },
    { name: "Coaching", id: "coaching" },
    { name: "About Us", id: "about" },
  ];

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        bg-white/10
        backdrop-blur-2xl
        border-b border-white/10
        shadow-[0_8px_32px_rgba(0,0,0,0.35)]
      "
    >
      {/* Glow Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* <div className="absolute -top-20 left-10 sm:left-20 w-[180px] sm:w-[250px] h-[180px] sm:h-[250px] bg-red-600 blur-[100px] rounded-full"></div>

        <div className="absolute -top-20 right-10 sm:right-20 w-[180px] sm:w-[250px] h-[180px] sm:h-[250px] bg-orange-500 blur-[100px] rounded-full"></div> */}
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between gap-3">
        
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 cursor-pointer shrink-0">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded bg-red-600"></div>

          <div>
            <h1 className="text-white font-bold text-sm sm:text-lg leading-none">
              FitMaker
            </h1>

            <p className="text-gray-400 text-[8px] sm:text-[10px] mt-1">
              Transform Your Body
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-sm cursor-pointer">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActive(item.id)}
              className={`
                relative pb-1 transition duration-300 active:scale-95

                ${
                  active === item.id
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }

                after:absolute after:left-0 after:-bottom-1
                after:w-full after:h-[2px]
                after:bg-red-500
                after:origin-left
                after:transition-transform after:duration-300

                ${
                  active === item.id
                    ? "after:scale-x-100"
                    : "after:scale-x-0 hover:after:scale-x-100"
                }
              `}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* Large Device Search Icon */}
          <button className="hidden md:flex w-10 h-10 rounded-full bg-orange-500 cursor-pointer border border-white/10 backdrop-blur-xl items-center justify-center text-white hover:bg-white/10 transition" >
            <Search size={18} />
          </button>

          {/* Mobile Search Field */}
          <div className="md:hidden flex items-center gap-2 bg-orange-500 text-white border border-white/10 rounded-full px-3 h-9 backdrop-blur-xl w-[130px] sm:w-[160px]">
            <Search size={14} className="text-white shrink-0" />

            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-xs text-white placeholder:text-white w-full"
            />
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
           <a href="#auth">
             <button className="px-5 py-2 rounded-full border border-red-500 text-white hover:bg-red-500/20 transition cursor-pointer text-sm" >
              Login
            </button>
           </a>

          <a href="#auth">
             <button className="px-5 py-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition cursor-pointer text-sm" >
              Sign Up
            </button>
          </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 pb-6 pt-4 bg-black/40 backdrop-blur-2xl border-t border-white/10">
          
          {/* Mobile Nav */}
          <nav className="flex flex-col gap-5 text-sm">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => {
                  setActive(item.id);
                  setMenuOpen(false);
                }}
                className={`
                  transition duration-300 active:scale-95

                  ${
                    active === item.id
                      ? "text-white translate-x-2"
                      : "text-gray-300 hover:text-white hover:translate-x-2"
                  }
                `}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-3 mt-6">
            <button className="w-full py-3 rounded-full border border-red-500 text-white hover:bg-red-500/20 transition">
              Login
            </button>

            <button className="w-full py-3 rounded-full bg-red-600 text-white hover:bg-red-700 transition">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;