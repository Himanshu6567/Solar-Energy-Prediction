import React from "react";

const HeroSection = () => {
  return (
    <section className="relative h-screen px-4 py-16 pt-32 overflow-hidden bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-gray-900 dark:to-gray-800 sm:px-6 lg:px-8">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 dark:opacity-5">
        <div className="absolute w-32 h-32 bg-yellow-400 rounded-full top-20 left-10 mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute w-48 h-48 bg-yellow-300 rounded-full top-40 right-20 mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute w-40 h-40 bg-yellow-500 rounded-full bottom-20 left-1/2 mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
          {/* Text Section */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
              Harness the Power of{" "}
              <span className="text-yellow-600 dark:text-yellow-400">
                Solar Predict
              </span>
            </h1>

            <p className="text-xl font-medium text-yellow-700 dark:text-yellow-300">
              Predict your solar energy potential anywhere, anytime with
              AI-powered accuracy.
            </p>

            <p className="max-w-2xl text-lg text-gray-700 dark:text-gray-300">
              Our advanced machine learning algorithms analyze location, weather
              patterns, and historical data to give you precise solar power
              generation forecasts. Optimize your solar investment and maximize
              energy efficiency.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="#get-started"
                className="inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-300 transform bg-yellow-600 shadow-lg hover:bg-yellow-700 rounded-xl hover:shadow-xl hover:-translate-y-1"
              >
                Get Started
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 font-semibold text-yellow-600 transition-colors duration-300 border-2 border-yellow-600 dark:text-yellow-400 dark:border-yellow-400 rounded-xl hover:bg-yellow-50 dark:hover:bg-yellow-900/20"
              >
                How It Works
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 pt-4 lg:justify-start"></div>
          </div>

          {/* Image Section */}
          <div className="relative flex-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <img
                src="https://cdn.pixabay.com/photo/2013/10/06/18/58/solar-field-191683_1280.jpg"
                alt="Solar panels in a field"
                className="object-cover w-full h-auto aspect-video"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating stats card */}
            <div className="absolute w-64 p-6 bg-white border border-gray-100 shadow-lg -bottom-6 -right-6 dark:bg-gray-800 rounded-xl dark:border-gray-700">
              <div className="flex items-center">
                <div className="p-3 text-yellow-600 bg-yellow-100 rounded-lg dark:bg-yellow-900/50 dark:text-yellow-300">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Energy Saved
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    1.2M kWh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
