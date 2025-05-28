import React from "react";
// If you're using React Router for navigation

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full text-white bg-gray-900 shadow-md">
      <div className="flex items-center justify-between max-w-6xl px-6 py-4 mx-auto">
      <div className="inline-block px-4 py-2 mb-4 bg-yellow-200 rounded-full dark:bg-yellow-900/50">
              <span className="text-sm font-semibold text-yellow-800 dark:text-yellow-200">
                Solar Energy Prediction
              </span>
            </div>

        {/* Button for "Get Started" or "Try Now" */}
        <div>
          <a
            href="#"
            className="px-6 py-2 text-lg font-semibold text-black transition-colors duration-300 bg-yellow-500 rounded-full hover:bg-yellow-400"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
