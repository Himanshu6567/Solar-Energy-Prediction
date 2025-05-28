import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const energyData = [
  { date: "Mon", predicted: 18, actual: 16 },
  { date: "Tue", predicted: 19, actual: 17.5 },
  { date: "Wed", predicted: 20, actual: 19 },
  { date: "Thu", predicted: 21, actual: 20 },
  { date: "Fri", predicted: 22, actual: 21 },
];

const irradianceData = [
  { time: "8 AM", GHI: 120, DNI: 100, DHI: 50 },
  { time: "10 AM", GHI: 350, DNI: 300, DHI: 80 },
  { time: "12 PM", GHI: 600, DNI: 550, DHI: 100 },
  { time: "2 PM", GHI: 580, DNI: 520, DHI: 90 },
  { time: "4 PM", GHI: 400, DNI: 360, DHI: 70 },
];

const InteractiveVisuals = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-12 px-6 space-y-12">
      <div className="max-w-6xl mx-auto space-y-10">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
          🌍 Interactive Visuals
        </h2>

        {/* Simple Map (react-simple-maps) */}
        <div className="rounded-xl overflow-hidden shadow-lg h-72">
          <ComposableMap projection="geoMercator" width={800} height={400}>
            <Geographies geography="/path-to-your-geojson-file.json">
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#DDD"
                    stroke="#555"
                  />
                ))
              }
            </Geographies>
          </ComposableMap>
        </div>

        {/* Predicted vs Actual Chart */}
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
            📅 Predicted vs Actual Solar Energy
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={energyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis unit=" kWh" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="predicted"
                stroke="#facc15"
                name="Predicted"
              />
              <Line
                type="monotone"
                dataKey="actual"
                stroke="#34d399"
                name="Actual"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Solar Irradiance Chart */}
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
            ☀️ Solar Irradiance (GHI, DNI, DHI)
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={irradianceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis unit=" W/m²" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="GHI"
                stroke="#f59e0b"
                fill="#fde68a"
              />
              <Area
                type="monotone"
                dataKey="DNI"
                stroke="#ef4444"
                fill="#fecaca"
              />
              <Area
                type="monotone"
                dataKey="DHI"
                stroke="#3b82f6"
                fill="#bfdbfe"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default InteractiveVisuals;
