import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Retained", value: 65 },
  { name: "Churned", value: 35 },
];

const COLORS = ["#0F665A", "#ffffff"];

const RetentionPieChart = () => {
  return (
    <div className="w-full mx-auto p-3 bg-secondary rounded-md">
      <div className="flex items-center justify-between mb-8">
        <h4 className="text-xl font-semibold text-[#333333]">
          Retention Rate
        </h4>
        <select
          id=""
          value="Weekly"
          className="bg-[#B5D0CC] border border-gray-300 rounded-md py-2 px-2 appearance-auto pr-8 outline-none text-primary text-lg font-medium"
        >
          <option value="Weekly">Weekly</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            innerRadius={0}
            outerRadius={150}
            paddingAngle={2}
            dataKey="value"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index]}
                stroke={index === 1 ? "#146C60" : "none"}
                strokeWidth={index === 1 ? 2 : 0}
              />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `${value}%`} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RetentionPieChart;
