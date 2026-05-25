import React from "react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#0b0b0b] py-20 text-white">
      {/* Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-red-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-2 lg:grid-cols-5">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded bg-red-600" />

            <h2 className="text-2xl font-extrabold">
              Fit<span className="text-red-500">Maker</span>
            </h2>
          </div>

          <p className="mt-6 text-sm leading-7 text-gray-400">
            Transform Your Body with FitMaker, Your Trusted Partner in
            Fitness. With Over 5 Years of Experience, We Offer Expert
            Coaching, Tailored Workout Plans, and Comprehensive Nutritional
            Guidance.
          </p>

          {/* Socials */}
          <div className="mt-8 flex gap-4">
            {["F", "Ig", "X", "Yt"].map((icon, i) => (
              <button
                key={i}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#111] text-sm transition cursor-pointer hover:border-red-500 hover:bg-red-500/10 hover:text-red-500 duration-500"
              >
                {icon}
              </button>
            ))}
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-bold text-red-500">Company</h3>

          <ul className="mt-6 space-y-4 text-sm text-gray-400">
            {[
              "About Us",
              "Our Services",
              "Careers",
              "Blog",
              "Testimonial",
              "Contact Us",
            ].map((item, index) => (
              <li
                key={index}
                className="cursor-pointer transition hover:text-red-500 duration-400"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-bold text-red-500">Resources</h3>

          <ul className="mt-6 space-y-4 text-sm text-gray-400">
            {[
              "Fitness Tools",
              "Workout Videos",
              "Nutrition Guides",
              "FAQ",
              "Success Stories",
              "Membership",
            ].map((item, index) => (
              <li
                key={index}
                className="cursor-pointer transition hover:text-red-500 duration-400"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold text-red-500">Contact Us</h3>

          <ul className="mt-6 space-y-5 text-sm text-gray-400 ">
            <li>📍 USA - Washington DC</li>
            <li>📞 123-456-789</li>
            <li>✉️ fitmaker@gmail.com</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;