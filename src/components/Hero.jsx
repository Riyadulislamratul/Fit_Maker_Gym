import React from "react";
import Card from "./Card";
// import Hero from "./assets/hero.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0f0f0f] text-white py-20">

      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-[300px] h-[300px] bg-orange-500 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-red-600 blur-[140px] rounded-full"></div>
      {/* Background Glow */}
   

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-10 py-20 grid lg:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div>
          <h1 className="text-6xl font-bold leading-tight">
            Achive Your
          </h1>

          <h1 className="text-7xl font-extrabold text-red-500 mt-3 uppercase italic">
            Fitness Goals
          </h1>

          <h2 className="text-4xl font-semibold mt-4">
            With FitMaker
          </h2>

          <p className="text-gray-400 mt-8 leading-8 max-w-xl">
            Join the Fitmaker community and transform your fitness
            journey with expert coaches and personalized programs.
          </p>

          {/* Buttons */}
          <div className="flex gap-5 mt-10">
            <button className="px-8 py-4 rounded-full bg-red-600 hover:bg-red-700 transition">
              Start Your Journey
            </button>

            <button className="px-8 py-4 rounded-full border border-orange-500 hover:bg-orange-500/10 transition">
              Explore Programs
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative flex justify-center">
             <div className="absolute top-0 -left-3 w-[100px] h-[100px] bg-orange-500 blur-[20px] rounded-full"></div>

      <div className="absolute -bottom-6 -right-10 w-[150px] h-[150px] bg-red-600 blur-[40px] rounded-full"></div>

          {/* Glow Circle */}
          <div className="absolute w-[450px] h-[450px] bg-red-600 blur-[120px] rounded-full"></div>

          {/* Main Circle */}
          <div className="relative w-[500px] h-[500px] rounded-full border border-red-500 bg-white/5 backdrop-blur-xl overflow-hidden flex items-end justify-center">
            <img
              src="/gym.png"
              alt="gym"
              className="h-full w-[430px] object-cover"
            />
          </div>

          {/* Floating Cards */}
          <div className="absolute top-16 left-0">
            <Card number="+80" title="Coaches" />
          </div>

          <div className="absolute top-10 right-0">
            <Card number="+1300" title="Positive Reviews" />
          </div>

          <div className="absolute bottom-10 left-5">
            <Card number="+1000" title="Workout Videos" />
          </div>

          <div className="absolute bottom-5 right-0">
            <Card number="+1500" title="Trainers" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;