import React from "react";

export default function CTA({ openModal }) {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800"></div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Content Container */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center justify-center mb-6 sm:mb-8">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-white/10 text-white backdrop-blur-sm border border-white/20">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Limited Time Offer
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Ready to Achieve Your
            <span className="block mt-1 bg-gradient-to-r from-yellow-200 via-yellow-100 to-white bg-clip-text text-transparent">
              Desired Band Score?
            </span>
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
            Join thousands of successful students and start your IELTS journey
            with personalized guidance and proven strategies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4">
            <button
              onClick={() => openModal("Join Now")}
              className="group relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-semibold text-blue-600 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Get Started Now
                <svg
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
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
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></div>
            </button>

            <button
              onClick={() => openModal("Learn More")}
              className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-semibold text-white bg-white/10 backdrop-blur-sm rounded-xl border-2 border-white/30 hover:bg-white/20 hover:border-white/40 transition-all duration-200"
            >
              Learn More
              <svg
                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-sm text-blue-100 px-4">
            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-yellow-300 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-medium">5,000+ Students</span>
            </div>
            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-green-300 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium">98% Success Rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
