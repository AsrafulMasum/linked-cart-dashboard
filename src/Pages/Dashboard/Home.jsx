import React, { useMemo, useState } from "react";
import totalUsers from "../../assets/totalUsers.svg";
import totalServices from "../../assets/totalServices.svg";
import earnings from "../../assets/earnings.svg";
import sold from "../../assets/sold.svg";
import orders from "../../assets/orders.svg";
import UsersBarChart from "../../components/charts/UsersBarChart";
import EarningLineChart from "../../components/charts/EarningLineChart";
import { useStatisticsQuery } from "../../redux/features/statisticsApi";

const Home = () => {
  const [userYear, setUserYear] = useState("");
  const [sellerYear, setSellerYear] = useState("");
  const { data } = useStatisticsQuery({ userYear, sellerYear });
  const { summury, totalSellbyMonth, totalUsersAndShopsDay } = data?.data || {};

  const handleUserYear = (year) => {
    setUserYear(year);
  };

  const handleSellerYear = (year) => {
    setSellerYear(year);
  };

  const statistics = [
    {
      title: "Total Products",
      amount: `${summury?.totalProducts}`,
      icon: (
        <img
          className="bg-primary p-[15px] rounded-full h-16 w-16"
          src={totalServices}
          alt="total products icon"
        />
      ),
    },
    {
      title: "Total Users",
      amount: `${summury?.totalUsers}`,
      icon: (
        <img
          className="bg-primary p-[15px] rounded-full h-16 w-16"
          src={totalUsers}
          alt="total users icon"
        />
      ),
    },
    {
      title: "Total Earnings",
      amount: `${summury?.totalEarnings}`,
      icon: (
        <img
          className="bg-primary p-[15px] rounded-full h-16 w-16"
          src={earnings}
          alt="earnings icon"
        />
      ),
    },
    {
      title: "Total Orders",
      amount: `${summury?.totalOrders}`,
      icon: (
        <img
          className="bg-primary p-[15px] rounded-full h-16 w-16"
          src={orders}
          alt="earnings icon"
        />
      ),
    },
    {
      title: "Total Sold",
      amount: `${summury?.totalSolds}`,
      icon: (
        <img
          className="bg-primary p-[15px] rounded-full h-16 w-16"
          src={sold}
          alt="earnings icon"
        />
      ),
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-5 gap-6 max-h-[150px] mb-4">
        {statistics.map(({ title, amount, icon }) => (
          <div
            key={title}
            className="bg-secondary rounded-lg py-8 pl-5 flex items-center gap-4"
          >
            <div>{icon}</div>
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-medium text-sub_title">{title}</h2>
              <h3 className="text-sub_title text-2xl font-semibold">
                {amount}
              </h3>
            </div>
          </div>
        ))}
      </div>
      <UsersBarChart
        totalUsersAndShopsDay={totalUsersAndShopsDay}
        handleUserYear={handleUserYear}
      />
      <EarningLineChart
        totalSellbyMonth={totalSellbyMonth}
        handleSellerYear={handleSellerYear}
      />
    </div>
  );
};

export default Home;
