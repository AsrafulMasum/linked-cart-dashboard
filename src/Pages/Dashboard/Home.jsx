import React, { useMemo } from "react";
import totalUsers from "../../assets/totalUsers.svg";
import totalServices from "../../assets/totalServices.svg";
import earnings from "../../assets/earnings.svg";
import sold from "../../assets/sold.svg";
import orders from "../../assets/orders.svg";
import UsersBarChart from "../../components/charts/UsersBarChart";
import EarningLineChart from "../../components/charts/EarningLineChart";

const Home = () => {
  const statistics = useMemo(() => [
    {
      title: "Total Products",
      amount: "88K",
      icon: (
        <img
          className="bg-primary p-[15px] rounded-full"
          src={totalServices}
          alt="total products icon"
        />
      ),
    },
    {
      title: "Total Users",
      amount: "28K",
      icon: (
        <img
          className="bg-primary p-[15px] rounded-full"
          src={totalUsers}
          alt="total users icon"
        />
      ),
    },
    {
      title: "Total Earnings",
      amount: "$457.89K",
      icon: (
        <img
          className="bg-primary p-[15px] rounded-full"
          src={earnings}
          alt="earnings icon"
        />
      ),
    },
    {
      title: "Total Orders",
      amount: "220",
      icon: (
        <img
          className="bg-primary p-[15px] rounded-full"
          src={orders}
          alt="earnings icon"
        />
      ),
    },
    {
      title: "Total Sold",
      amount: "180",
      icon: (
        <img
          className="bg-primary p-[15px] rounded-full"
          src={sold}
          alt="earnings icon"
        />
      ),
    },
  ], []);

  return (
    <div>
      <div className="grid grid-cols-5 gap-6 h-[120px] mb-4">
        {statistics.map(({ title, amount, icon }) => (
          <div
            key={title}
            className="bg-secondary rounded-lg p-[25px] flex items-center gap-4"
          >
            <div>{icon}</div>
            <div className="flex flex-col gap-1">
              <h2 className="text-xl font-medium text-sub_title">{title}</h2>
              <h3 className="text-sub_title text-3xl font-semibold">{amount}</h3>
            </div>
          </div>
        ))}
      </div>
      <UsersBarChart />
      <EarningLineChart />
    </div>
  );
};

export default Home;