import React, { useState } from "react";
import { BookOpen, Users, Award, Headphones } from "lucide-react";

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
    {
      icon: BookOpen,
      title: "Expert Trainers",
      desc: "Certified instructors with years of experience and proven track records.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      stats: "15+ Years",
      detail: "Average teaching experience",
    },
    {
      icon: Users,
      title: "Small Batches",
      desc: "Individual attention with personalized learning paths for every student.",
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
      stats: "8-12 Students",
      detail: "Per batch maximum",
    },
    {
      icon: Award,
      title: "Guaranteed Results",
      desc: "Structured curriculum with continuous performance tracking and feedback.",
      color: "from-violet-500 to-fuchsia-500",
      bgColor: "bg-violet-50",
      iconColor: "text-violet-600",
      stats: "95% Success",
      detail: "Students achieve target score",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      desc: "Round-the-clock access to mentors whenever you need guidance or help.",
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      iconColor: "text-pink-600",
      stats: "Instant Help",
      detail: "Quick response guaranteed",
    },
  ];

  return (
    <section
      id="features"
      className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-blue-50 via-white to-slate-50 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full mb-4">
            <svg
              className="w-4 h-4 text-blue-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm font-semibold text-blue-700">
              Our Advantages
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Why Students
            <span className="block mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Choose Us
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Experience excellence with our comprehensive support system designed
            for your success
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              onMouseEnter={() => setActiveFeature(i)}
              onMouseLeave={() => setActiveFeature(null)}
              className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              {/* Top accent line */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                  feature.color
                } transform origin-left transition-transform duration-500 ${
                  activeFeature === i ? "scale-x-100" : "scale-x-0"
                }`}
              ></div>

              {/* Content */}
              <div className="relative space-y-4">
                {/* Icon container */}
                <div
                  className={`inline-flex p-4 rounded-2xl ${feature.bgColor} group-hover:scale-110 transition-transform duration-500`}
                >
                  <feature.icon
                    className={`${feature.iconColor} transition-transform duration-500 group-hover:rotate-6`}
                    size={40}
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
                <h3
                  className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300"
                  style={
                    activeFeature === i
                      ? {
                          backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                          backgroundClip: "text",
                        }
                      : {}
                  }
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {feature.desc}
                </p>

                {/* Stats badge */}
                <div className="pt-4 border-t border-gray-100 space-y-1">
                  <div
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r ${feature.color} bg-opacity-10`}
                  >
                    <span
                      className={`text-sm font-bold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}
                    >
                      {feature.stats}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">{feature.detail}</p>
                </div>
              </div>

              {/* Decorative corner element */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom statistics bar */}
        <div className="mt-16 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            { number: "5000+", label: "Students Trained" },
            { number: "98%", label: "Satisfaction Rate" },
            { number: "Band 7+", label: "Average Score" },
            { number: "50+", label: "Countries Served" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="text-center space-y-2 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-100 hover:border-blue-200 hover:bg-white/80 transition-all duration-300"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
