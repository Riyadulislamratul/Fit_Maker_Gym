import React from "react";
import GYM1 from "../assets/gym1.jpg";
import GYM2 from "../assets/gym2.jpg";
import GYM3 from "../assets/gym3.jpg";
import GYM4 from "../assets/gym4.jpg";

const services = [
  {
    title: "LOSING WEIGHT",
    subtitle: "Click To Join Our Losing Weight Plan",
    description:
      "Achieve sustainable weight loss with custom meal plans, workout routines, and expert guidance.",
    image: GYM1,
  },
  {
    title: "BUILDING MUSCLE",
    subtitle: "Click To Join Our Building Muscle Plan",
    description:
      "Develop strength and gain lean muscle through professional training plans and nutrition guidance.",
    image: GYM2,
  },
  {
    title: "TRAINING IN HOME",
    subtitle: "Click To See Our Ultimate Home Plan",
    description:
      "Stay fit without leaving home using our effective and flexible home workout plans.",
    image: GYM3,
  },
  {
    title: "GYM PLAN",
    subtitle: "Click, Start Your Fitness Journey",
    description:
      "Build confidence and improve fitness with our complete gym training programs.",
    image: GYM4,
  },
];

const ServicesSection = () => {
  return (
    <section className="relative py-50 text-white">
      {/* Glow Background */}
      <div className="absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-red-600/20 blur-[120px]" />
      <div className="absolute right-[-120px] bottom-0 h-72 w-72 rounded-full bg-orange-500 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold">
            Our <span className="text-red-500">Services</span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm text-gray-400">
            At This Part You Can Easily Access All Of Our Services.
            Take A Look At Them And Choose Which Ever You Want.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border cursor-pointer border-red-500/10 bg-[#111] transition-all duration-500 hover:-translate-y-3 hover:border-red-500/50 hover:shadow-[0_0_40px_rgba(255,0,0,0.25)]"
            >
              {/* Image Placeholder */}
              <div className="h-[320px] w-full overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900">
                <div className="flex h-full items-center justify-center text-gray-600 transition duration-500 group-hover:scale-110">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover opacity-80"
                  />
                </div>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-black transition duration-500 group-hover:from-red-500/10" />

              {/* Animated Glow */}
              <div className="absolute -bottom-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-red-500/0 blur-3xl transition-all duration-500 group-hover:bg-red-500/30" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-5">
                <div>
                  <h3 className="text-xl font-extrabold text-red-500 transition duration-300 group-hover:translate-x-2">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-xs font-semibold text-gray-200">
                    {service.subtitle}
                  </p>

                  <p className="mt-4 text-xs leading-6 text-gray-400 transition duration-300 group-hover:text-gray-300">
                    {service.description}
                  </p>
                </div>

                <button className="flex items-center gap-2 text-sm font-semibold text-white transition-all duration-300 group-hover:gap-4 group-hover:text-red-500">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;