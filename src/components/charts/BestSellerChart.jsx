import { Progress } from "antd";
import userImg from "../../assets/user.jpg";

const BestSellerChart = () => {
  return (
    <div className="bg-secondary p-4 rounded-xl shadow-sm">
      <div className="flex items-center justify-between mb-8">
        <h4 className="text-xl font-semibold text-[#333333]">
          Best Selling Retailer:
        </h4>
        <select
          id=""
          value="Monthly"
          className="bg-[#B5D0CC] border border-gray-300 rounded-md py-2 px-2 appearance-auto pr-8 outline-none text-primary text-lg font-medium"
        >
          <option value="Monthly">Monthly</option>
        </select>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img className="w-10 h-10 rounded-full" src={userImg} alt="" />
            <p>Jon Duo</p>
          </div>
          <div className="w-60">
            <Progress strokeColor="#0F665A" trailColor="#B5D0CC" percent={85} />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img className="w-10 h-10 rounded-full" src={userImg} alt="" />
            <p>Jon Duo</p>
          </div>
          <div className="w-60">
            <Progress strokeColor="#0F665A" trailColor="#B5D0CC" percent={85} />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img className="w-10 h-10 rounded-full" src={userImg} alt="" />
            <p>Jon Duo</p>
          </div>
          <div className="w-60">
            <Progress strokeColor="#0F665A" trailColor="#B5D0CC" percent={85} />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img className="w-10 h-10 rounded-full" src={userImg} alt="" />
            <p>Jon Duo</p>
          </div>
          <div className="w-60">
            <Progress strokeColor="#0F665A" trailColor="#B5D0CC" percent={85} />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img className="w-10 h-10 rounded-full" src={userImg} alt="" />
            <p>Jon Duo</p>
          </div>
          <div className="w-60">
            <Progress strokeColor="#0F665A" trailColor="#B5D0CC" percent={85} />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img className="w-10 h-10 rounded-full" src={userImg} alt="" />
            <p>Jon Duo</p>
          </div>
          <div className="w-60">
            <Progress strokeColor="#0F665A" trailColor="#B5D0CC" percent={85} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellerChart;
