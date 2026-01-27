import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import ChartDropDown from "../ChartDropdown/ChartDropDown";

const data = [
  { name: "Mon", calls: 45 },
  { name: "Tue", calls: 62 },
  { name: "Wed", calls: 58 },
  { name: "Thu", calls: 75 },
  { name: "Fri", calls: 92 },
  { name: "Sat", calls: 98 },
  { name: "Sun", calls: 55 },
];

const HomeChart = () => {
  return (
    <div className="bg-[#111827] p-6 rounded-xl border border-slate-800 w-full h-100">
      <ChartDropDown />

      <ResponsiveContainer width="100%" height="80%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorCalls" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#1e293b"
          />

          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#64748b", fontSize: 12 }}
            dy={10}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#64748b", fontSize: 12 }}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: "#1f2937",
              border: "none",
              borderRadius: "8px",
              color: "#fff",
            }}
            itemStyle={{ color: "#3b82f6" }}
          />

          <Area
            type="monotone"
            dataKey="calls"
            stroke="#3b82f6"
            strokeWidth={0}
            fillOpacity={1}
            fill="url(#colorCalls)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HomeChart;
