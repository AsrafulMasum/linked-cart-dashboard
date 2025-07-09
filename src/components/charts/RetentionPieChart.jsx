import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const COLORS = ["#0F665A", "#ffffff"];

const RetentionPieChart = ({ totalEarnings }) => {
  const { pendingReveneue, revenuePercentage } = totalEarnings || {};
  const data = [
    { name: "Retained", value: revenuePercentage },
    { name: "Churned", value: pendingReveneue },
  ];
  return (
    <div className="w-full mx-auto p-3 bg-secondary rounded-md">
      <div className="flex items-center justify-between mb-8">
        <h4 className="text-xl font-semibold text-[#333333]">Retention Rate</h4>
        <p className="py-2 px-4 rounded-md bg-[#B5D0CC]">Weekly</p>
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
