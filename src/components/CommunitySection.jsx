import React from "react";

const features = [
  {
    title: "Personalized Workout Plans",
    desc: "Customized routines that match your fitness level and goals, ensuring you achieve the best results in the most efficient way.",
  },
  {
    title: "Expert Coaching",
    desc: "Work with certified trainers who will guide you every step of the way to ensure you're on the right track.",
  },
  {
    title: "Community Support",
    desc: "Join a vibrant community of fitness enthusiasts where you can share experiences, get motivated, and stay inspired.",
  },
  {
    title: "Exclusive Resources",
    desc: "Access premium content, including video tutorials, nutrition guides, and members-only discounts on fitness gear.",
  },
];

const CommunitySection = () => {
  return (
    <section className="relative overflow-hidden lg:overflow-visible py-20 text-white">
      {/* Glow Effects */}
      <div className="absolute lg:-left-20 lg:-top-17 lg:size-72 rounded-full bg-red-500 blur-[120px] left-0 top-20 size-37" />
      <div className="absolute lg:right-0 lg:bottom-0 h-72 w-72 rounded-full bg-orange-500 blur-[120px] right-0 bottom-49" />

      <div className="relative max-w-7xl mx-auto z-10">
        <h2 className="text-4xl font-extrabold leading-tight text-center">
          Join Our <span className="text-red-500">Fitness Community</span>
        </h2>

        <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400 text-center mx-auto">
          Sign Up Now To Unlock Exclusive Access To Personalized Workout
          Plans, Expert Coaching, And A Supportive Community That Will Help
          You Achieve Your Fitness Goals.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {features.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden cursor-pointer rounded-2xl border border-red-500/20 bg-[#111] p-5 transition-all duration-500 hover:-translate-y-2 hover:border-red-500/50 hover:shadow-[0_0_35px_rgba(255,0,0,0.25)]"
            >
              {/* Glow */}
              <div className="absolute -bottom-10 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-red-500/0 blur-3xl transition-all duration-500 group-hover:bg-red-500/30" />

              <h3 className="relative text-lg font-bold text-white transition duration-300 group-hover:text-red-500">
                {item.title}
              </h3>

              <p className="relative mt-3 text-sm leading-6 text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;