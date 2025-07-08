import { ConfigProvider, DatePicker } from "antd";
import { useState, useMemo } from "react";
import { FaChevronDown } from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const tooltipFormatter = (value) => `$${value.toLocaleString()}`;
const labelFormatter = (value) => `$${(value / 1000).toFixed(1)}k`;

const EarningLineChart = ({totalSellbyMonth, handleSellerYear}) => {
  const [selectedYear, setSelectedYear] = useState("");
  handleSellerYear(selectedYear);

  return (
    <div className="bg-secondary p-4 rounded-xl shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sub_title text-lg font-semibold">
          Monthly Earning
        </h3>
        <div className="relative">
          <label htmlFor="year-select" className="sr-only">
            Select year
          </label>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#0F665A",
                colorBgContainer: "#e7f0ef ",
              },
            }}
          >
            <DatePicker
              className="!cursor-pointer"
              picker="year"
              suffixIcon={<FaChevronDown className="text-gray-500 text-sm" />}
              onChange={(_, dateString) => {
                setSelectedYear(dateString);
              }}
              style={{ backgroundColor: "#e7f0ef " }}
            />
          </ConfigProvider>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={210}>
        <LineChart data={totalSellbyMonth}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip formatter={tooltipFormatter} />
          <Line
            type="monotone"
            dataKey="total"
            stroke="#8DB501"
            strokeWidth={2}
            dot={{ fill: "#222", r: 5 }}
          >
            <LabelList
              dataKey="total"
              position="top"
              formatter={labelFormatter}
            />
          </Line>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EarningLineChart;
