import React, { useState } from "react";

export default function Testimonials() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const testimonials = [
    {
      name: "Ananya Sharma",
      text: "The mock tests and speaking practice sessions really boosted my confidence. The personalized feedback helped me identify and fix my weak areas. I scored Band 8!",
      img: "https://randomuser.me/api/portraits/women/50.jpg",
      score: "Band 8.0",
      course: "IELTS Fast Track",
      location: "Mumbai, India",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Rahul Mehta",
      text: "The teachers were incredibly supportive and helped me improve my writing significantly. Their structured approach and detailed corrections made all the difference.",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      score: "Band 7.5",
      course: "IELTS Regular",
      location: "Delhi, India",
      color: "from-indigo-500 to-purple-500",
    },
    {
      name: "Priya Nair",
      text: "Great learning environment with small batches that made learning so easy and interactive. The one-on-one attention was exactly what I needed to succeed.",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
      score: "Band 8.5",
      course: "IELTS Speaking Focus",
      location: "Bangalore, India",
      color: "from-violet-500 to-fuchsia-500",
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white via-slate-50 to-blue-50 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-full mb-4">
            <svg
              className="w-4 h-4 text-yellow-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-semibold text-yellow-700">
              Success Stories
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            What Our Students
            <span className="block mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Say About Us
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from students who achieved their dream IELTS scores
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Quote icon background */}
              <div className="absolute top-4 right-4 text-gray-100 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                <svg
                  className="w-16 h-16 sm:w-20 sm:h-20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Gradient accent */}
              <div
                className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${testimonial.color}`}
              ></div>

              <div className="relative space-y-6">
                {/* Profile section */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={testimonial.img}
                      alt={testimonial.name}
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover ring-4 ring-white shadow-md group-hover:ring-blue-100 transition-all duration-300"
                    />
                    <div
                      className={`absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r ${testimonial.color} rounded-full flex items-center justify-center shadow-md`}
                    >
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500 flex items-center gap-1">
                      <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {testimonial.location}
                    </p>
                  </div>
                </div>

                {/* Star rating */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, idx) => (
                    <svg
                      key={idx}
                      className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Footer with score and course */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r ${testimonial.color} bg-opacity-10`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                    <span
                      className={`text-xs sm:text-sm font-bold bg-gradient-to-r ${testimonial.color} bg-clip-text text-transparent`}
                    >
                      {testimonial.score}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">
                    {testimonial.course}
                  </span>
                </div>
              </div>

              {/* Hover gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
              ></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 text-center space-y-6">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 px-6 py-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
            <div className="flex-shrink-0">
              <div className="flex -space-x-3">
                {testimonials.map((t, idx) => (
                  <img
                    key={idx}
                    src={t.img}
                    alt={t.name}
                    className="w-10 h-10 rounded-full border-2 border-white shadow-md"
                  />
                ))}
              </div>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-gray-900 font-semibold text-base sm:text-lg">
                Join 5,000+ successful students
              </p>
              <p className="text-gray-600 text-sm">
                Start your IELTS journey today with expert guidance
              </p>
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-200 whitespace-nowrap">
              View All Reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
