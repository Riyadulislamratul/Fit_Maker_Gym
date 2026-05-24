import React from "react";
import Card from "./Card";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0f0f0f] text-white pt-24 lg:pt-30 pb-16 lg:pb-20">
      {/* Background Glow */}
      <div className="absolute top-20 left-0 sm:left-10 w-[220px] sm:w-[300px] h-[220px] sm:h-[300px] bg-orange-500 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-10 right-0 sm:right-10 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-red-600 blur-[140px] rounded-full"></div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-16 lg:py-20 grid lg:grid-cols-2 gap-14 lg:gap-10 items-center">
        
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Achive Your
          </h1>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-red-500 mt-3 uppercase italic leading-tight">
            Fitness Goals
          </h1>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mt-4">
            With FitMaker
          </h2>

          <p className="text-gray-400 mt-6 lg:mt-8 leading-7 lg:leading-8 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base">
            Join the Fitmaker community and transform your fitness
            journey with expert coaches and personalized programs.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 sm:gap-5 mt-8 lg:mt-10">
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-red-600 hover:bg-red-700 transition cursor-pointer">
              Start Your Journey
            </button>

            <button className="w-full sm:w-auto px-8 py-4 rounded-full border border-orange-500 hover:bg-orange-500/10 transition cursor-pointer">
              Explore Programs
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative flex justify-center items-center">
          
          {/* Small Glows */}
          <div className="absolute top-0 left-5 sm:-left-3 w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] bg-orange-500 blur-[20px] rounded-full"></div>

          <div className="absolute -bottom-4 sm:-bottom-6 right-0 sm:-right-10 w-[100px] sm:w-[150px] h-[100px] sm:h-[150px] bg-red-600 blur-[40px] rounded-full"></div>

          {/* Main Glow */}
          <div className="absolute w-[260px] sm:w-[380px] lg:w-[450px] h-[260px] sm:h-[380px] lg:h-[450px] bg-red-600 blur-[120px] rounded-full"></div>

          {/* Main Circle */}
          <div className="relative w-[280px] sm:w-[380px] lg:w-[500px] h-[280px] sm:h-[380px] lg:h-[500px] rounded-full border border-red-500 bg-white/5 backdrop-blur-xl overflow-hidden flex items-end justify-center">
            <img
              src="/gym.png"
              alt="gym"
              className="h-full w-[240px] sm:w-[330px] lg:w-[430px] object-cover"
            />
          </div>

          {/* Floating Cards */}

          {/* Top Left */}
          <div className="absolute top-2 sm:top-10 lg:top-16 left-0 sm:-left-2 lg:left-0 scale-75 sm:scale-90 lg:scale-100">
            <Card number="+80" title="Coaches" />
          </div>

          {/* Top Right */}
          <div className="absolute top-0 sm:top-5 lg:top-10 right-0 sm:-right-2 lg:right-0 scale-75 sm:scale-90 lg:scale-100">
            <Card number="+1300" title="Positive Reviews" />
          </div>

          {/* Bottom Left */}
          <div className="absolute bottom-2 sm:bottom-8 lg:bottom-10 left-2 sm:left-4 lg:left-5 scale-75 sm:scale-90 lg:scale-100">
            <Card number="+1000" title="Workout Videos" />
          </div>

          {/* Bottom Right */}
          <div className="absolute bottom-0 sm:bottom-3 lg:bottom-5 right-0 sm:-right-2 lg:right-0 scale-75 sm:scale-90 lg:scale-100">
            <Card number="+1500" title="Trainers" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;