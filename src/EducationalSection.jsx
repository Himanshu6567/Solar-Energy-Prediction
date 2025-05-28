import React from "react";

const educationalBlogs = [
  {
    id: 1,
    title: "How Solar Energy Prediction Works",
    description:
      "Solar energy prediction uses a combination of weather data, solar irradiance measurements, and machine learning algorithms to forecast solar panel output.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    link: "https://www.gridx.ai/knowledge/what-is-solar-power-forecasting#:~:text=Physical%20solar%20forecasting%20is%20a,forecasts%20of%20photovoltaic%20energy%20output",
    category: "Solar Technology",
    date: "May 15, 2023",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "Comprehensive Guide to Solar Panel Installation",
    description:
      "A step-by-step guide to installing solar panels, from system sizing to final connection and inspection.",
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    link: "https://waaree.com/blog/step-by-step-solar-installation-guide/",
    category: "Installation",
    date: "June 2, 2023",
    readTime: "12 min read",
  },
  {
    id: 3,
    title: "Global Solar Incentives and Financial Benefits",
    description:
      "Explore government incentives, tax credits, and region-specific benefits for solar energy adoption.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    link: "https://redington.solar/financial-benefits-of-switching-to-solar-energy/#:~:text=Tax%20Incentives%20and%20Rebates&text=Most%20governments%20around%20the%20world,making%20it%20cheaper%20to%20install.",
    category: "Financial",
    date: "April 28, 2023",
    readTime: "10 min read",
  },
  {
    id: 4,
    title: "Solar Battery Storage Solutions",
    description:
      "Understanding battery options for solar energy storage and how to choose the right system for your needs.",
    image:
      "https://images.unsplash.com/photo-1557200134-90327ee9fafa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "https://aurorasolar.com/blog/storing-solar-energy-everything-you-need-to-know/",
    category: "Technology",
    date: "July 10, 2023",
    readTime: "9 min read",
  },
  {
    id: 5,
    title: "Maintaining Your Solar System for Optimal Performance",
    description:
      "Best practices for solar panel maintenance, cleaning, and performance monitoring.",
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    link: "https://www.ecoflow.com/us/blog/home-solar-system-maintenance-tips",
    category: "Maintenance",
    date: "August 5, 2023",
    readTime: "7 min read",
  },
];

const EducationalSection = () => {
  return (
    <section className="px-4 py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="inline-block px-3 py-1 mb-4 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full dark:text-blue-400 dark:bg-blue-900">
            Solar Knowledge Center
          </span>
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
            📚 Educational Resources
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            Learn everything about solar energy, from installation to
            optimization, with our comprehensive guides.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {educationalBlogs.map((blog) => (
            <div
              key={blog.id}
              className="overflow-hidden transition-shadow duration-300 bg-white shadow-lg dark:bg-gray-800 rounded-xl hover:shadow-xl"
            >
              <div className="relative w-full h-56 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <span className="inline-block px-2 py-1 text-xs font-semibold text-white bg-blue-600 rounded">
                    {blog.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center mb-3 text-sm text-gray-500 dark:text-gray-400">
                  <span>{blog.date}</span>
                  <span className="mx-2">•</span>
                  <span>{blog.readTime}</span>
                </div>

                <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                  {blog.title}
                </h3>

                <p className="mb-5 text-gray-600 dark:text-gray-300">
                  {blog.description}
                </p>

                <div className="flex items-center justify-between">
                  <a
                    target="_blank"
                    href={blog.link}
                    className="flex items-center font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                  >
                    Read More
                    <svg
                      className="w-4 h-4 ml-2"
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
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed View Modal (would be implemented with state in a real app) */}
        {/* <div className="hidden">
          {educationalBlogs.map((blog) => (
            <div
              key={blog.id}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="relative w-full h-64 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="p-8">
                  <div className="flex items-center mb-4 text-sm text-gray-500 dark:text-gray-400">
                    <span>{blog.category}</span>
                    <span className="mx-2">•</span>
                    <span>{blog.date}</span>
                    <span className="mx-2">•</span>
                    <span>{blog.readTime}</span>
                  </div>

                  <h3 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                    {blog.title}
                  </h3>

                  <div className="prose dark:prose-invert max-w-none">
                    {blog.detailedDescription.map((paragraph, index) => (
                      <p
                        key={index}
                        className="mb-4 text-gray-700 dark:text-gray-300"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div className="mt-8">
                    <button className="px-6 py-3 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700">
                      Close Article
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div> */}

        <div className="mt-16 text-center">
          <button className="px-8 py-3 font-medium text-white transition-all bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg">
            View All Resources
          </button>
        </div>
      </div>
    </section>
  );
};

export default EducationalSection;

