import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full text-white bg-gray-900 shadow-md">
      <div className="flex items-center justify-between max-w-6xl px-4 py-3 mx-auto sm:px-6 sm:py-4">
        {/* Logo/Brand */}
        <div className="inline-block px-3 py-1 text-sm bg-yellow-200 rounded-full sm:px-4 sm:py-2 sm:mb-4 sm:text-base dark:bg-yellow-900/50">
          <span className="font-semibold text-yellow-800 dark:text-yellow-200">
            Solar Energy Prediction
          </span>
        </div>

        {/* Mobile menu button */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-400 hover:text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:block">
          <a
            href="#"
            className="px-4 py-1 text-sm font-semibold text-black transition-colors duration-300 bg-yellow-500 rounded-full sm:px-6 sm:py-2 sm:text-lg hover:bg-yellow-400"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-gray-900 sm:hidden">
            <div className="flex flex-col items-center px-4 py-2 space-y-2">
              <a
                href="#"
                className="w-full px-4 py-2 text-center font-semibold text-black transition-colors duration-300 bg-yellow-500 rounded-full hover:bg-yellow-400"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
