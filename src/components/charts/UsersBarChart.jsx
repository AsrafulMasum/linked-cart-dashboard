import { ConfigProvider, DatePicker } from "antd";
import { useState, useMemo } from "react";
import { FaChevronDown } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const UsersBarChart = ({ totalUsersAndShopsDay, handleUserYear }) => {
  const [selectedYear, setSelectedYear] = useState("");
  handleUserYear(selectedYear);
  
  return (
    <div className="bg-secondary p-4 rounded-xl shadow-sm mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sub_title text-lg font-semibold">
          Total users statistics
        </h3>
        <div className="flex items-center space-x-4">
          {/* Legend */}
          <div className="flex items-center space-x-3 text-sm">
            <div className="flex items-center space-x-1">
              <span className="w-3 h-3 rounded-full bg-sub_title" />
              <span className="text-sub_title">User</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-primary">Shops</span>
            </div>
          </div>
          {/* Dropdown */}
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
      </div>
      <ResponsiveContainer width="100%" height={215}>
        <BarChart data={totalUsersAndShopsDay} barSize={10}>
          <CartesianGrid vertical={false} stroke="#757575" />
          <XAxis dataKey="month" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip />
          <Bar
            dataKey="customers"
            fill="#757575"
            name="User"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="shops"
            fill="#8DB501"
            name="Shops"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UsersBarChart;
