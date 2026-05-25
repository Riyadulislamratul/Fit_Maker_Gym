import React, { useState } from "react";
import Trainer1 from "../assets/trainer1.png";
import Trainer2 from "../assets/trainer2.png";
import Trainer3 from "../assets/trainer3.png";
import Trainer4 from "../assets/trainer4.png";

const trainers = [
  {
    name: "Sam Cole",
    role: "Personal Trainer",
    image: Trainer1,
  },
  {
    name: "Michael Harris",
    role: "Personal Trainer",
    image: Trainer2,
  },
  {
    name: "John Anderson",
    role: "Personal Trainer",
    image: Trainer3,
  },
  {
    name: "Tom Blake",
    role: "Personal Trainer",
    image: Trainer4,
  },
  {
    name: "Sam Cole",
    role: "Personal Trainer",
    image: Trainer1,
  },
];

const TrainersSection = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleTrainers = showAll ? trainers : trainers.slice(0, 4);

  return (
    <section className="relative overflow-hidden py-24 text-white">
      {/* Glow */}
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-orange-500/20 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-4xl font-extrabold">
              Meet Our <span className="text-red-500">Trainers</span>
            </h2>

            <p className="mt-4 text-sm text-gray-400">
              At This Part You Can See Few Of The Many Positive Reviews Of Our
              Customers.
            </p>
          </div>

          <button
            onClick={() => setShowAll(!showAll)}
            className="cursor-pointer rounded-full border border-red-500/40 px-6 py-2 text-sm transition-all duration-300 hover:bg-red-500 hover:text-white hover:scale-105"
          >
            {showAll ? "Show Less" : "View All"}
          </button>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {visibleTrainers.map((trainer, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl border border-red-500/20 bg-[#111] transition-all duration-700 ease-in-out hover:-translate-y-3 hover:border-red-500 hover:shadow-[0_0_40px_rgba(255,0,0,0.25)]
              
              opacity-0 animate-[fadeIn_.6s_ease-in-out_forwards]
              `}
              style={{
                animationDelay: `${index * 120}ms`,
              }}
            >
              {/* Glow */}
              <div className="absolute -bottom-16 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-red-500/0 blur-3xl transition-all duration-500 group-hover:bg-red-500/30" />

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="h-[320px] w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold transition group-hover:text-red-500">
                  {trainer.name}
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  {trainer.role}
                </p>

                <button className="mt-5 cursor-pointer text-sm text-red-500 transition-all duration-300 hover:translate-x-2">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
};

export default TrainersSection;