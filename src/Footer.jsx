import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-2xl font-bold">Solar Predict</div>
          <div className="space-x-6">
            <a
              href="#"
              className="text-lg hover:text-yellow-500 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-lg hover:text-yellow-500 transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-lg hover:text-yellow-500 transition-colors duration-300"
            >
              About
            </a>
          </div>
        </div>
        <div className="text-center text-gray-400 mt-6">
          &copy; {new Date().getFullYear()} Solar Predict. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
