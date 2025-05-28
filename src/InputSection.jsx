import React, { useState } from "react";

const InputSection = ({setShowResult}) => {
  const [form, setForm] = useState({
    location: "",
    product: "",
    startDatetime: "",
    endDatetime: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // You can call an API here using fetch/axios
    setShowResult(true);
  };

  return (
    <section className="px-6 py-12 bg-white dark:bg-gray-800">
      <div className="max-w-4xl p-8 mx-auto bg-gray-100 shadow-xl dark:bg-gray-900 rounded-xl">
        <h2 className="mb-8 text-3xl font-bold text-center text-gray-900 dark:text-white">
          🌞 Enter Your Solar Prediction Details
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {/* Location */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              📍 Location
            </label>
            <input
              type="text"
              name="location"
              placeholder="Enter your city or pin code"
              value={form.location}
              onChange={handleChange}
              className="w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              required
            />
          </div>

          {/* Product Type */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              ⚙️ Product Type
            </label>
            <select
              name="product"
              value={form.product}
              onChange={handleChange}
              className="w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              required
            >
              <option value="">-- Select a Product --</option>
              <option value="Solar Panels">Solar Panels</option>
              <option value="Solar Inverter">Solar Inverter</option>
              <option value="Solar Battery">Solar Battery</option>
              <option value="Solar Water Heater">Solar Water Heater</option>
              <option value="Solar Lights">Solar Lights</option>
              <option value="Solar Street Lights">Solar Street Lights</option>
              <option value="Solar Lanterns">Solar Lanterns</option>
              <option value="Solar Mobile Chargers">
                Solar Mobile Chargers
              </option>
              <option value="Solar Fans">Solar Fans</option>
              <option value="Solar Cookers">Solar Cookers</option>
              <option value="Solar Water Pumps">Solar Water Pumps</option>
            </select>
          </div>

          {/* Start Datetime */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              🕒 Start Date & Time
            </label>
            <input
              type="datetime-local"
              name="startDatetime"
              value={form.startDatetime}
              onChange={handleChange}
              className="w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              required
            />
          </div>

          {/* End Datetime */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              🕒 End Date & Time
            </label>
            <input
              type="datetime-local"
              name="endDatetime"
              value={form.endDatetime}
              onChange={handleChange}
              className="w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-4 md:col-span-2">
            <button
              type="submit"
              className="px-8 py-3 font-semibold text-white transition bg-yellow-500 rounded-lg hover:bg-yellow-600"
            >
              🔍 Predict Now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default InputSection;
