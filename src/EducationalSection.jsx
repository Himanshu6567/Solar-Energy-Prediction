
import React from "react";


const educationalBlogs = [
  {
    id: 1,
    title: "How Solar Energy Prediction Works",
    description:
      "Solar energy prediction uses a combination of weather data, solar irradiance measurements, and machine learning algorithms to forecast solar panel output.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    link: "#",
    category: "Solar Technology",
    date: "May 15, 2023",
    readTime: "8 min read",
    detailedDescription: [
      "Solar energy prediction is vital for optimizing energy generation in solar power systems. By accurately forecasting energy production, system owners can better manage their energy usage and storage.",
      "Predicting solar energy output requires understanding multiple factors:",
      "- Solar irradiance (sunlight intensity)",
      "- Cloud cover and atmospheric conditions",
      "- Temperature effects on panel efficiency",
      "- Time of day and seasonal variations",
      "- Panel orientation and tilt angle",
      "Modern prediction systems use machine learning models trained on historical weather patterns and real-time satellite data. These models can predict energy output with over 90% accuracy for the next 24-48 hours.",
      "For homeowners, these predictions help in:",
      "- Planning energy consumption",
      "- Optimizing battery storage usage",
      "- Reducing reliance on grid power during peak rate periods",
    ],
  },
  {
    id: 2,
    title: "Comprehensive Guide to Solar Panel Installation",
    description:
      "A step-by-step guide to installing solar panels, from system sizing to final connection and inspection.",
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    link: "#",
    category: "Installation",
    date: "June 2, 2023",
    readTime: "12 min read",
    detailedDescription: [
      "Installing solar panels is a multi-stage process that requires careful planning and execution. Here's a detailed breakdown:",
      "1. Energy Assessment:",
      "- Analyze your electricity bills to determine consumption patterns",
      "- Calculate the required system size (typically 4-8kW for average homes)",
      "- Consider future energy needs (EV charging, home additions)",
      "2. Site Evaluation:",
      "- Roof inspection for structural integrity",
      "- Shade analysis using solar pathfinder tools",
      "- Optimal panel placement considering azimuth and tilt",
      "3. System Design:",
      "- Selection of panels (monocrystalline vs polycrystalline)",
      "- Inverter type (string vs microinverters)",
      "- Racking system selection",
      "4. Permitting:",
      "- Building permits from local authorities",
      "- Utility interconnection agreements",
      "- Possible HOA approvals",
      "5. Installation:",
      "- Mounting system installation",
      "- Panel placement and wiring",
      "- Inverter and electrical work",
      "6. Inspection & Activation:",
      "- Local building department inspection",
      "- Utility meter upgrade (if needed)",
      "- System commissioning and monitoring setup",
    ],
  },
  {
    id: 3,
    title: "Global Solar Incentives and Financial Benefits",
    description:
      "Explore government incentives, tax credits, and region-specific benefits for solar energy adoption.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    link: "#",
    category: "Financial",
    date: "April 28, 2023",
    readTime: "10 min read",
    detailedDescription: [
      "Financial incentives for solar energy vary significantly by country and region. Here's a comprehensive overview:",
      "United States:",
      "- Federal Investment Tax Credit (ITC): 30% of system cost (2023)",
      "- State-level rebates (e.g., California's SGIP program)",
      "- Net metering policies in 38 states",
      "- Property tax exemptions in many states",
      "European Union:",
      "- VAT reductions on solar equipment (5-10% in most countries)",
      "- Feed-in tariffs in Germany and Spain",
      "- Green energy grants in Eastern Europe",
      "Asia:",
      "- China's Golden Sun program subsidies",
      "- India's 30% capital subsidy for rooftop solar",
      "- Japan's FIT program with guaranteed rates",
      "Australia:",
      "- Small-scale Technology Certificates (STCs)",
      "- State-based rebates (e.g., Victoria's Solar Homes program)",
      "- Feed-in tariffs for excess energy",
      "Additional Financial Considerations:",
      "- Increased home value (average 4.1% increase according to Zillow)",
      "- Solar renewable energy certificates (SRECs)",
      "- Accelerated depreciation for commercial systems",
      "- Green energy loans with favorable terms",
    ],
  },
  {
    id: 4,
    title: "Solar Battery Storage Solutions",
    description:
      "Understanding battery options for solar energy storage and how to choose the right system for your needs.",
    image:
      "https://images.unsplash.com/photo-1557200134-90327ee9fafa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "#",
    category: "Technology",
    date: "July 10, 2023",
    readTime: "9 min read",
    detailedDescription: [
      "Solar battery storage systems allow homeowners to store excess solar energy for use when the sun isn't shining. Key considerations:",
      "Battery Types:",
      "1. Lithium-Ion (Most Common):",
      "- High energy density",
      "- Long lifespan (10-15 years)",
      "- 90-95% round-trip efficiency",
      "- Examples: Tesla Powerwall, LG Chem",
      "2. Lead-Acid:",
      "- Lower cost upfront",
      "- Shorter lifespan (5-8 years)",
      "- 80-85% efficiency",
      "- Good for off-grid systems",
      "3. Flow Batteries:",
      "- Emerging technology",
      "- Very long lifespan (20+ years)",
      "- Excellent for large-scale storage",
      "Sizing Your Battery System:",
      "- Calculate your critical loads (what you want to power during outages)",
      "- Consider your solar production patterns",
      "- Factor in local utility rates and net metering policies",
      "Integration Options:",
      "- AC-coupled (works with any existing solar system)",
      "- DC-coupled (more efficient but requires compatible inverter)",
      "- Hybrid inverters with built-in battery management",
      "Cost Considerations:",
      "- Average installed cost: $800-$1,200 per kWh",
      "- Federal tax credit applies to battery if charged by solar",
      "- Some states offer additional battery incentives",
    ],
  },
  {
    id: 5,
    title: "Maintaining Your Solar System for Optimal Performance",
    description:
      "Best practices for solar panel maintenance, cleaning, and performance monitoring.",
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    link: "#",
    category: "Maintenance",
    date: "August 5, 2023",
    readTime: "7 min read",
    detailedDescription: [
      "Proper maintenance can extend the life of your solar system and maintain optimal efficiency. Here's what you need to know:",
      "Routine Maintenance Tasks:",
      "- Visual inspections every 6 months",
      "- Checking for shading from new vegetation",
      "- Monitoring system performance data",
      "- Inspecting wiring and connections",
      "Cleaning Guidelines:",
      "- Frequency: 2-4 times per year (depends on location)",
      "- Best time: Early morning or evening",
      "- Use soft brush and deionized water",
      "- Avoid abrasive cleaners and high-pressure washers",
      "Performance Monitoring:",
      "- Review daily production data",
      "- Watch for sudden drops in output",
      "- Compare with historical data and weather patterns",
      "- Understand seasonal variations",
      "Professional Servicing:",
      "- Inverter servicing every 3-5 years",
      "- Electrical safety checks",
      "- Roof integrity inspections",
      "- Warranty claims processing",
      "Troubleshooting Common Issues:",
      "- Reduced output: Check for dirt, shading, or inverter issues",
      "- No production: Verify system status, check circuit breakers",
      "- Error messages: Consult manual or contact installer",
      "Winter Considerations:",
      "- Snow removal techniques (self-cleaning or soft brushes)",
      "- Angle adjustments in snowy climates",
      "- Understanding reduced winter production",
    ],
  },
];

const EducationalSection = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
            Solar Knowledge Center
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            📚 Educational Resources
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Learn everything about solar energy, from installation to
            optimization, with our comprehensive guides.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {educationalBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <span className="inline-block px-2 py-1 text-xs font-semibold text-white bg-blue-600 rounded">
                    {blog.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <span>{blog.date}</span>
                  <span className="mx-2">•</span>
                  <span>{blog.readTime}</span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {blog.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-5">
                  {blog.description}
                </p>

                <div className="flex justify-between items-center">
                  <a
                    href={blog.link}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium flex items-center"
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
        <div className="hidden">
          {educationalBlogs.map((blog) => (
            <div
              key={blog.id}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-8">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span>{blog.category}</span>
                    <span className="mx-2">•</span>
                    <span>{blog.date}</span>
                    <span className="mx-2">•</span>
                    <span>{blog.readTime}</span>
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    {blog.title}
                  </h3>

                  <div className="prose dark:prose-invert max-w-none">
                    {blog.detailedDescription.map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-gray-700 dark:text-gray-300 mb-4"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div className="mt-8">
                    <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                      Close Article
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition-all hover:shadow-lg">
            View All Resources
          </button>
        </div>
      </div>
    </section>
  );
};

export default EducationalSection;
