import { Button, Modal } from "antd";
import { useCallback, useState } from "react";
import addImg from "../../assets/addImg.svg";
import shopImage from "../../assets/shopImage.png";
import { PlusOutlined } from "@ant-design/icons";

const initialData = [
  {
    key: "1",
    category: "Maintenance",
    serviceType: "Plumbing Repair",
    price: 135,
    serviceImage:
      "https://i.ibb.co.com/TxDMxFpF/8a93140310fbd10e3adba404ff4c8d0fee3446ba.png",
    createdAt: "2024-07-22T00:00:00",
  },
  {
    key: "2",
    category: "Cleaning",
    serviceType: "Window Cleaning",
    price: 75,
    serviceImage:
      "https://i.ibb.co.com/TxDMxFpF/8a93140310fbd10e3adba404ff4c8d0fee3446ba.png",
    createdAt: "2024-07-15T00:00:00",
  },
  {
    key: "3",
    category: "Maintenance",
    serviceType: "Tile Fixing",
    price: 197,
    serviceImage: "https://via.placeholder.com/100x60?text=Tile+Fixing",
    createdAt: "2024-07-14T00:00:00",
  },
  {
    key: "4",
    category: "HVAC",
    serviceType: "Heater Repair",
    price: 162,
    serviceImage: "https://via.placeholder.com/100x60?text=Heater+Repair",
    createdAt: "2024-07-24T00:00:00",
  },
  {
    key: "5",
    category: "Cleaning",
    serviceType: "Window Cleaning",
    price: 172,
    serviceImage: "https://via.placeholder.com/100x60?text=Window+Cleaning",
    createdAt: "2024-07-13T00:00:00",
  },
  {
    key: "6",
    category: "Cleaning",
    serviceType: "Window Cleaning",
    price: 193,
    serviceImage: "https://via.placeholder.com/100x60?text=Window+Cleaning",
    createdAt: "2024-07-07T00:00:00",
  },
  {
    key: "7",
    category: "Maintenance",
    serviceType: "Faucet Installation",
    price: 170,
    serviceImage: "https://via.placeholder.com/100x60?text=Faucet+Installation",
    createdAt: "2024-07-31T00:00:00",
  },
  {
    key: "8",
    category: "Electrical",
    serviceType: "Ceiling Fan Installation",
    price: 117,
    serviceImage:
      "https://via.placeholder.com/100x60?text=Ceiling+Fan+Installation",
    createdAt: "2024-07-29T00:00:00",
  },
  {
    key: "9",
    category: "Gardening",
    serviceType: "Tree Trimming",
    price: 160,
    serviceImage: "https://via.placeholder.com/100x60?text=Tree+Trimming",
    createdAt: "2024-07-30T00:00:00",
  },
  {
    key: "10",
    category: "Cleaning",
    serviceType: "Window Cleaning",
    price: 95,
    serviceImage: "https://via.placeholder.com/100x60?text=Window+Cleaning",
    createdAt: "2024-07-08T00:00:00",
  },
  {
    key: "11",
    category: "Maintenance",
    serviceType: "Tile Fixing",
    price: 165,
    serviceImage: "https://via.placeholder.com/100x60?text=Tile+Fixing",
    createdAt: "2024-07-24T00:00:00",
  },
  {
    key: "12",
    category: "Electrical",
    serviceType: "Ceiling Fan Installation",
    price: 163,
    serviceImage:
      "https://via.placeholder.com/100x60?text=Ceiling+Fan+Installation",
    createdAt: "2024-07-05T00:00:00",
  },
  {
    key: "13",
    category: "Gardening",
    serviceType: "Tree Trimming",
    price: 97,
    serviceImage: "https://via.placeholder.com/100x60?text=Tree+Trimming",
    createdAt: "2024-07-13T00:00:00",
  },
  {
    key: "14",
    category: "HVAC",
    serviceType: "AC Servicing",
    price: 162,
    serviceImage: "https://via.placeholder.com/100x60?text=AC+Servicing",
    createdAt: "2024-07-10T00:00:00",
  },
  {
    key: "15",
    category: "Maintenance",
    serviceType: "Faucet Installation",
    price: 145,
    serviceImage: "https://via.placeholder.com/100x60?text=Faucet+Installation",
    createdAt: "2024-07-07T00:00:00",
  },
  {
    key: "16",
    category: "HVAC",
    serviceType: "Heater Repair",
    price: 110,
    serviceImage: "https://via.placeholder.com/100x60?text=Heater+Repair",
    createdAt: "2024-07-12T00:00:00",
  },
  {
    key: "17",
    category: "Maintenance",
    serviceType: "Faucet Installation",
    price: 193,
    serviceImage: "https://via.placeholder.com/100x60?text=Faucet+Installation",
    createdAt: "2024-07-10T00:00:00",
  },
  {
    key: "18",
    category: "Electrical",
    serviceType: "Wiring Inspection",
    price: 116,
    serviceImage: "https://via.placeholder.com/100x60?text=Wiring+Inspection",
    createdAt: "2024-07-08T00:00:00",
  },
  {
    key: "19",
    category: "Cleaning",
    serviceType: "Window Cleaning",
    price: 71,
    serviceImage: "https://via.placeholder.com/100x60?text=Window+Cleaning",
    createdAt: "2024-07-15T00:00:00",
  },
  {
    key: "20",
    category: "Gardening",
    serviceType: "Tree Trimming",
    price: 172,
    serviceImage: "https://via.placeholder.com/100x60?text=Tree+Trimming",
    createdAt: "2024-07-21T00:00:00",
  },
];

const RetailShops = () => {
  const shopData = [
    {
      _id: "1",
      name: "SwiftCart",
      image: { shopImage },
    },
    {
      _id: "2",
      name: "SwiftCart",
      image: { shopImage },
    },
    {
      _id: "3",
      name: "SwiftCart",
      image: { shopImage },
    },
    {
      _id: "4",
      name: "SwiftCart",
      image: { shopImage },
    },
    {
      _id: "5",
      name: "SwiftCart",
      image: { shopImage },
    },
    {
      _id: "6",
      name: "SwiftCart",
      image: { shopImage },
    },
    {
      _id: "7",
      name: "SwiftCart",
      image: { shopImage },
    },
    {
      _id: "8",
      name: "SwiftCart",
      image: { shopImage },
    },
    {
      _id: "9",
      name: "SwiftCart",
      image: { shopImage },
    },
    {
      _id: "10",
      name: "SwiftCart",
      image: { shopImage },
    },
  ];

  const [data, setData] = useState(initialData);
  const [openAddModel, setOpenAddModel] = useState(false);
  const [form, setForm] = useState({
    category: "",
    serviceType: "",
    serviceImage: "",
  });
  const [imgURL, setImgURL] = useState("");

  // Handle image upload
  const onChange = useCallback((e) => {
    const file = e.target.files[0];
    if (file) {
      const imgUrl = URL.createObjectURL(file);
      setImgURL(imgUrl);
      setForm((prev) => ({ ...prev, serviceImage: imgUrl }));
    }
    e.target.value = "";
  }, []);

  // Handle form submission
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!form.category || !form.serviceType) return;
      setData([
        ...data,
        {
          key: Date.now().toString(),
          ...form,
          price: 0,
          createdAt: new Date().toISOString(),
        },
      ]);
      setForm({ category: "", serviceType: "", serviceImage: "" });
      setImgURL("");
      setOpenAddModel(false);
    },
    [form, data]
  );

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
        <div>
          <Button
            onClick={() => {
              setOpenAddModel(true);
              setForm({ category: "", serviceType: "", serviceImage: "" });
              setImgURL("");
            }}
            style={{
              width: "177px",
              height: "40px",
              boxShadow: "0px 2px 4px 0px #0000001A",
              backgroundColor: "#0F665A",
              border: "none",
              transition: "none",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            <PlusOutlined />
            <span style={{ margin: 0 }}>Add Service</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4">
        {shopData.map((item) => (
          <div key={item._id} className="flex flex-col items-center">
            <img src={shopImage} alt="" />
            <p className="text-sub_title text-xl font-medium">{item?.name}</p>
          </div>
        ))}
      </div>

      {/* Add Modal */}
      <Modal
        centered
        open={openAddModel}
        onCancel={() => setOpenAddModel(false)}
        width={500}
        footer={false}
      >
        <div className="p-6">
          <h1 className="text-[20px] font-medium mb-3">Add Shop</h1>
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center items-center gap-10 mb-10">
              <div>
                <input
                  onChange={onChange}
                  type="file"
                  id="img"
                  style={{ display: "none" }}
                />
                <label
                  className="relative flex items-center justify-center"
                  htmlFor="img"
                  style={{
                    width: "120px",
                    height: "120px",
                    cursor: "pointer",
                    borderRadius: "100%",
                    background: "#E0E0E0",
                    overflow: "hidden",
                  }}
                >
                  {imgURL ? (
                    <img
                      src={imgURL}
                      alt="Preview"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "100%",
                      }}
                    />
                  ) : (
                    <img className="h-6 w-6 object-cover" src={addImg} alt="" />
                  )}
                </label>
              </div>
            </div>
            <div style={{ marginBottom: "16px" }}>
              <label style={{ display: "block", marginBottom: "5px" }}>
                Shop Name
              </label>
              <input
                value={form.category}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, category: e.target.value }))
                }
                type="text"
                placeholder="Enter Shop Name"
                style={{
                  border: "1px solid #E0E4EC",
                  padding: "10px",
                  height: "52px",
                  background: "white",
                  borderRadius: "8px",
                  outline: "none",
                  width: "100%",
                }}
                name="category"
              />
            </div>
            <input
              className="cursor-pointer"
              style={{
                border: "none",
                width: "100%",
                height: "44px",
                marginTop: "10px",
                background: "#0F665A",
                color: "white",
                borderRadius: "8px",
                outline: "none",
                padding: "10px 20px",
              }}
              value="Submit"
              type="submit"
            />
          </form>
        </div>
      </Modal>
    </>
  );
};

export default RetailShops;
