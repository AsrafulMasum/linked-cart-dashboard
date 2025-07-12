import { Progress } from "antd";
import userImg from "../../assets/user.jpg";
import { imageUrl } from "../../redux/api/baseApi";

const BestSellerChart = ({ topResellers }) => {
  return (
    <div className="bg-secondary p-4 rounded-xl shadow-sm">
      <div className="flex items-center justify-between mb-8">
        <h4 className="text-xl font-semibold text-[#333333]">
          Best Selling Retailer:
        </h4>
        <p className="py-2 px-4 rounded-md bg-[#B5D0CC]">Monthly</p>
      </div>

      <div className="flex flex-col gap-[15px] h-80 overflow-y-auto">
        {topResellers?.map((seller) => (
          <div
            key={seller?.shop?._id}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <img
                className="w-10 h-10 object-cover rounded-full"
                src={
                  seller?.shop?.profile &&
                  seller?.shop?.profile.startsWith("http")
                    ? seller?.shop?.profile
                    : seller?.shop?.profile
                    ? `${imageUrl}${seller?.shop?.profile}`
                    : "/default-avatar.png"
                }
                alt=""
              />
              <p>{seller?.shop?.name}</p>
            </div>
            <div className="w-60">
              <Progress
                strokeColor="#0F665A"
                trailColor="#B5D0CC"
                percent={85}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellerChart;
