import { Button, Modal } from "antd";
import { useCallback, useState } from "react";
import addImg from "../../assets/addImg.svg";
import shopImage from "../../assets/shopImage.png";
import { PlusOutlined } from "@ant-design/icons";

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
  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
        {/* <div>
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
        </div> */}
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
