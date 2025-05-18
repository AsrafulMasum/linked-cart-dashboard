import UsersBarChart from "../../components/charts/UsersBarChart";
import BestSellerChart from "../../components/charts/BestSellerChart";
import RetentionPieChart from "../../components/charts/RetentionPieChart";

const Analytics = () => {
  return (
    <div>
      <UsersBarChart />
      <div className="grid grid-cols-2 gap-4 mt-4">
        <BestSellerChart />
        <RetentionPieChart />
      </div>
    </div>
  );
};

export default Analytics;
