import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const dummyData = {
  location: "Dehradun, India",
  device: "Power Bank 10000mAh",
  startDate: "2025-05-14",
  endDate: "2025-05-20",
  overallChargeSuccessRate: 76.42,
  data: [
    { date: "2025-05-14T00:00:00Z", chargeProbabilityPercent: 68.2 },
    { date: "2025-05-15T00:00:00Z", chargeProbabilityPercent: 73.5 },
    { date: "2025-05-16T00:00:00Z", chargeProbabilityPercent: 82.1 },
    { date: "2025-05-17T00:00:00Z", chargeProbabilityPercent: 78.6 },
    { date: "2025-05-18T00:00:00Z", chargeProbabilityPercent: 75.0 },
    { date: "2025-05-19T00:00:00Z", chargeProbabilityPercent: 79.3 },
    { date: "2025-05-20T00:00:00Z", chargeProbabilityPercent: 78.7 }
  ]
};

const SolarChargeGraph = () => {
  return (
    <div className="mx-auto bg-white shadow-lg p-6 rounded-2xl dark:bg-gray-900 [w-100%]">
      <h2 className="mb-4 text-xl font-bold text-center text-gray-800 dark:text-white">
        Solar Charge Prediction for {dummyData.device}
      </h2>
      <p className="mb-2 text-sm text-center text-gray-600 dark:text-gray-300">
        Location: {dummyData.location}
      </p>
      <p className="mb-6 text-sm text-center text-gray-600 dark:text-gray-300">
        Avg. Charge Probability:{" "}
        <span className="font-semibold text-green-600 dark:text-green-400">
          {dummyData.overallChargeSuccessRate.toFixed(2)}%
        </span>
      </p>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={dummyData.data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            tickFormatter={(str) => new Date(str).toLocaleDateString()}
          />
          <YAxis domain={[0, 100]} />
          <Tooltip
            formatter={(value) => `${value.toFixed(1)}%`}
            labelFormatter={(label) =>
              new Date(label).toLocaleDateString("en-IN", {
                weekday: "short",
                year: "numeric",
                month: "short",
                day: "numeric"
              })
            }
          />
          <Line
            type="monotone"
            dataKey="chargeProbabilityPercent"
            stroke="#22c55e"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SolarChargeGraph;
