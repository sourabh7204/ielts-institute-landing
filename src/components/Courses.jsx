import React, { useState } from "react";

export default function Courses({ openModal }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  const courses = [
    {
      title: "IELTS Regular",
      desc: "Comprehensive training covering all four modules with personalized feedback and progress tracking.",
      duration: "8 weeks",
      sessions: "24 sessions",
      level: "All levels",
      icon: "📚",
      color: "from-blue-500 to-cyan-500",
      features: ["Live classes", "Mock tests", "Study materials"],
    },
    {
      title: "IELTS Fast Track",
      desc: "Accelerated intensive program designed for quick score improvement with daily practice sessions.",
      duration: "4 weeks",
      sessions: "20 sessions",
      level: "Intermediate+",
      icon: "⚡",
      color: "from-indigo-500 to-purple-500",
      features: ["Daily classes", "1-on-1 sessions", "Priority support"],
    },
    {
      title: "IELTS Speaking Focus",
      desc: "Specialized program focused on speaking confidence, fluency, and pronunciation mastery.",
      duration: "6 weeks",
      sessions: "18 sessions",
      level: "All levels",
      icon: "🎯",
      color: "from-violet-500 to-fuchsia-500",
      features: ["Speaking practice", "Native tutors", "Recording feedback"],
    },
  ];

  return (
    <section
      id="courses"
      className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white via-slate-50 to-blue-50 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
            <span className="text-sm font-semibold text-blue-700">
              Popular Programs
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Choose Your Perfect
            <span className="block mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Learning Path
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Expert-designed courses tailored to your goals and timeline
          </p>
        </div>

        {/* Course cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {courses.map((course, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Gradient accent bar */}
              <div
                className={`h-2 bg-gradient-to-r ${
                  course.color
                } transform origin-left transition-transform duration-500 ${
                  hoveredCard === i ? "scale-x-100" : "scale-x-0"
                }`}
              ></div>

              {/* Card content */}
              <div className="p-6 sm:p-8 space-y-6">
                {/* Header with icon */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="text-4xl mb-3">{course.icon}</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {course.title}
                    </h3>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${course.color} text-white`}
                  >
                    {course.level}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {course.desc}
                </p>

                {/* Course details */}
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                    <svg
                      className="w-4 h-4 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                    <svg
                      className="w-4 h-4 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="font-medium">{course.sessions}</span>
                  </div>
                </div>

                {/* Features list */}
                <div className="space-y-2 pt-2 border-t border-gray-100">
                  {course.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <svg
                        className="w-4 h-4 text-green-500 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => openModal("Enroll")}
                  className={`w-full px-6 py-3.5 sm:py-4 bg-gradient-to-r ${course.color} text-white font-semibold rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3`}
                >
                  <span>Enroll Now</span>
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </div>

              {/* Decorative gradient on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
              ></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Not sure which course is right for you?
          </p>
          <button
            onClick={() => openModal("Get Guidance")}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50 shadow-sm hover:shadow-md transform hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            Talk to Our Counselor
          </button>
        </div>
      </div>
    </section>
  );
}
