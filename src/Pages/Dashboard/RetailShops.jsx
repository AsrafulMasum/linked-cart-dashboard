import { imageUrl } from "../../redux/api/baseApi";
import shopImage from "../../assets/shopImage.png";
import { useGetShopQuery } from "../../redux/features/shopApi";

const RetailShops = () => {
  const { data } = useGetShopQuery();
  const shops = data?.data?.shops;

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          marginBottom: "20px",
        }}
      >
        <h2 className="text-primary text-2xl font-semibold">Retail Shops</h2>
      </div>

      <div className="grid grid-cols-5 gap-6">
        {shops?.map((item) => (
          <div key={item._id} className="flex flex-col items-center gap-5">
            <img
              src={
                item?.profile && item?.profile.startsWith("http")
                  ? item?.profile
                  : item?.profile
                  ? `${imageUrl}${item?.profile}`
                  : "/default-avatar.png"
              }
              alt=""
            />
            <p className="text-sub_title text-xl font-medium">{item?.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default RetailShops;
