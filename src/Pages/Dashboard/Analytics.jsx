import UsersBarChart from "../../components/charts/UsersBarChart";
import BestSellerChart from "../../components/charts/BestSellerChart";
import RetentionPieChart from "../../components/charts/RetentionPieChart";
import { useState } from "react";
import { useAnalyticsQuery } from "../../redux/features/statisticsApi";

const Analytics = () => {
  const [userYear, setUserYear] = useState("");
  const { data } = useAnalyticsQuery({ userYear });
  const { totalEarnings, topResellers, totalUsersAndShops } = data?.data || {};

  const handleUserYear = (year) => {
    setUserYear(year);
  };
  return (
    <div>
      <UsersBarChart
        totalUsersAndShopsDay={totalUsersAndShops}
        handleUserYear={handleUserYear}
      />
      <div className="grid grid-cols-2 gap-4 mt-4">
        <BestSellerChart topResellers={topResellers} />
        <RetentionPieChart totalEarnings={totalEarnings} />
      </div>
    </div>
  );
};

export default Analytics;
