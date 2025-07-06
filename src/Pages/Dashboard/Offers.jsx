import { Button, Calendar, ConfigProvider, Modal, Table } from "antd";
import { useEffect, useMemo, useState } from "react";
import deleteIcon from "../../assets/delete.svg";
import { PlusOutlined } from "@ant-design/icons";
import { CiEdit, CiImageOn } from "react-icons/ci";
import { imageUrl } from "../../redux/api/baseApi";
import toast from "react-hot-toast";
import { FaRegEdit } from "react-icons/fa";
import {
  useCreateBannerMutation,
  useGetBannerQuery,
  useDeleteBannerMutation,
  useUpdateBannerMutation,
} from "../../redux/features/bannerApi";

const data = [
  {
    _id: "1",
    image: "https://via.placeholder.com/150x80?text=Banner+1",
    name: "Summer Sale",
    startDate: "2025-07-01",
    endDate: "2025-07-15",
  },
  {
    _id: "2",
    image: "https://via.placeholder.com/150x80?text=Banner+2",
    name: "Winter Fest",
    startDate: "2025-12-01",
    endDate: "2025-12-31",
  },
  {
    _id: "3",
    image: "https://via.placeholder.com/150x80?text=Banner+3",
    name: "New Year Blast",
    startDate: "2025-12-29",
    endDate: "2026-01-05",
  },
  {
    _id: "4",
    image: "",
    name: "Flash Deals",
    startDate: "2025-08-10",
    endDate: "2025-08-12",
  },
  {
    _id: "5",
    image: "https://via.placeholder.com/150x80?text=Banner+5",
    name: "Mega Discounts",
    startDate: "2025-09-01",
    endDate: "2025-09-10",
  },
  {
    _id: "6",
    image: "https://via.placeholder.com/150x80?text=Banner+6",
    name: "Eid Offer",
    startDate: "2025-07-15",
    endDate: "2025-07-25",
  },
  {
    _id: "7",
    image: "https://via.placeholder.com/150x80?text=Banner+7",
    name: "Black Friday",
    startDate: "2025-11-27",
    endDate: "2025-11-30",
  },
  {
    _id: "8",
    image: "https://via.placeholder.com/150x80?text=Banner+8",
    name: "Cyber Monday",
    startDate: "2025-12-02",
    endDate: "2025-12-03",
  },
  {
    _id: "9",
    image: "https://via.placeholder.com/150x80?text=Banner+9",
    name: "Tech Deals",
    startDate: "2025-10-01",
    endDate: "2025-10-10",
  },
  {
    _id: "10",
    image: "https://via.placeholder.com/150x80?text=Banner+10",
    name: "Back to School",
    startDate: "2025-08-01",
    endDate: "2025-08-31",
  },
  {
    _id: "11",
    image: "https://via.placeholder.com/150x80?text=Banner+11",
    name: "Spring Sale",
    startDate: "2025-03-15",
    endDate: "2025-03-25",
  },
  {
    _id: "12",
    image: "https://via.placeholder.com/150x80?text=Banner+12",
    name: "Valentine's Day",
    startDate: "2025-02-10",
    endDate: "2025-02-14",
  },
  {
    _id: "13",
    image: "https://via.placeholder.com/150x80?text=Banner+13",
    name: "Mother's Day",
    startDate: "2025-05-10",
    endDate: "2025-05-12",
  },
  {
    _id: "14",
    image: "https://via.placeholder.com/150x80?text=Banner+14",
    name: "Father's Day",
    startDate: "2025-06-15",
    endDate: "2025-06-17",
  },
  {
    _id: "15",
    image: "https://via.placeholder.com/150x80?text=Banner+15",
    name: "Halloween",
    startDate: "2025-10-28",
    endDate: "2025-10-31",
  },
  {
    _id: "16",
    image: "https://via.placeholder.com/150x80?text=Banner+16",
    name: "Diwali Sale",
    startDate: "2025-11-01",
    endDate: "2025-11-10",
  },
  {
    _id: "17",
    image: "https://via.placeholder.com/150x80?text=Banner+17",
    name: "Clearance Sale",
    startDate: "2025-07-20",
    endDate: "2025-07-30",
  },
  {
    _id: "18",
    image: "https://via.placeholder.com/150x80?text=Banner+18",
    name: "New Arrivals",
    startDate: "2025-08-15",
    endDate: "2025-08-22",
  },
  {
    _id: "19",
    image: "https://via.placeholder.com/150x80?text=Banner+19",
    name: "Monsoon Mania",
    startDate: "2025-07-05",
    endDate: "2025-07-10",
  },
  {
    _id: "20",
    image: "https://via.placeholder.com/150x80?text=Banner+20",
    name: "End of Season",
    startDate: "2025-09-20",
    endDate: "2025-09-30",
  },
];

const Offers = () => {
  // const { data: bannerData, refetch } = useGetBannerQuery();
  // console.log(bannerData?.data);
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;
  // const [data, setData] = useState(null);
  const [value, setValue] = useState(null);
  const [openAddModel, setOpenAddModel] = useState(false);
  const [form, setForm] = useState({
    categoryName: "",
    image: "",
    startDate: "",
    endDate: "",
  });
  const [imgURL, setImgURL] = useState();
  const [showDelete, setShowDelete] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [editImageFile, setEditImageFile] = useState(null);
  const [imgEditURL, setImgEditURL] = useState("");
  const [showCalendarFor, setShowCalendarFor] = useState(null);
  //   const [createBanner] = useCreateBannerMutation();
  //   const [updateBanner] = useUpdateBannerMutation();
  //   const [deleteBanner] = useDeleteBannerMutation();

  // useEffect(() => {
  //   setData(bannerData?.data);
  // }, [bannerData]);

  // Handle image upload
  const onChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "categoryName") {
      setForm((prev) => ({ ...prev, categoryName: value }));
    } else if (name === "image" && files && files[0]) {
      const file = files[0];
      const imgUrl = URL.createObjectURL(file);
      setImgURL(imgUrl);
      setImageFile(file);
      setForm((prev) => ({ ...prev, serviceImage: imgUrl }));
    }
  };

  // Add new service
  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   const formData = new FormData();
    //   formData.append("name", form.categoryName);
    //   if (imageFile) {
    //     formData.append("image", imageFile);
    //   }
    //   await createBanner(formData).unwrap();
    //   setOpenAddModel(false);
    //   setForm({ categoryName: "", image: "" });
    //   setImgURL("");
    //   setImageFile(null);
    //   refetch();
    //   toast.success("Banner added successfully");
    // } catch (err) {
    //   console.error("Add banner failed", err);
    //   toast.error("Add banner failed");
    // }
  };

  // Edit service
  const handleEdit = async (e) => {
    e.preventDefault();
    // try {
    //   const formData = new FormData();
    //   formData.append("name", form.categoryName);
    //   if (editImageFile) {
    //     formData.append("image", editImageFile);
    //   }

    //   await updateBanner({
    //     id: value._id,
    //     body: formData,
    //   }).unwrap();
    //   setValue(null);
    //   setForm({ categoryName: "", image: "" });
    //   setImgEditURL("");
    //   setEditImageFile(null);
    //   refetch();
    //   toast.success("Service updated successfully");
    // } catch (err) {
    //   console.error("Edit category failed", err);
    // }
  };

  // Delete service
  const handleDelete = async () => {
    // try {
    //   await deleteBanner(deleteId).unwrap();
    //   setShowDelete(false);
    //   setDeleteId("");
    //   refetch();
    //   toast.success("Banner deleted successfully");
    // } catch (err) {
    //   console.error("Delete banner failed.", err);
    //   toast.error("Deletion banner failed.");
    // }
  };

  // Open edit modal and set form values
  const openEditModal = (record) => {
    setValue(record);
    setForm({
      categoryName: record.CategoryName || "",
      image: record.image || "",
    });
    setImgEditURL(
      record.image
        ? record.image.startsWith("http")
          ? record.image
          : `${imageUrl}${record.image}`
        : ""
    );
    setEditImageFile(null);
  };

  const onEditImageChange = (e) => {
    const { files } = e.target;
    if (files && files[0]) {
      const file = files[0];
      const imgUrl = URL.createObjectURL(file);
      setImgEditURL(imgUrl);
      setEditImageFile(file);
    }
  };

  const onEditInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "categoryName") {
      setForm((prev) => ({ ...prev, categoryName: value }));
    }
  };

  const handleDateChange = (value) => {
    console.log(value);
    if (value) {
      setShowCalendarFor(null);
    }
    // const formattedDate = dayjs(value).format("YYYY-MM-DD");

    // if (showCalendarFor === "start") {
    //   setForm((prev) => ({ ...prev, startDate: formattedDate }));
    // } else if (showCalendarFor === "end") {
    //   setForm((prev) => ({ ...prev, endDate: formattedDate }));
    // }

    // setShowCalendarFor(null);
  };

  const columns = useMemo(
    () => [
      {
        title: "Serial ID",
        dataIndex: "name",
        key: "name",
        render: (_, __, index) => (
          <p>{(page - 1) * itemsPerPage + index + 1}</p>
        ),
      },
      {
        title: "Offer Image",
        dataIndex: "image",
        key: "image",
        render: (_, record) => (
          <div>
            <img
              className="h-8 w-16 object-cover"
              src={
                record?.image && record?.image.startsWith("https")
                  ? record?.image
                  : record?.image
                  ? `${imageUrl}${record?.image}`
                  : "/default-avatar.png"
              }
              alt=""
            />
          </div>
        ),
      },
      {
        title: "Offer Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Start Date",
        dataIndex: "startDate",
        key: "startDate",
      },
      {
        title: "End Date",
        dataIndex: "endDate",
        key: "endDate",
      },
      {
        title: "Actions",
        dataIndex: "actions",
        key: "actions",
        align: "right",
        render: (_, record) => (
          <div className="flex justify-end gap-8">
            <CiEdit
              className="cursor-pointer text-2xl text-[#F78F08]"
              onClick={() => openEditModal(record)}
            />
            <img
              className="cursor-pointer"
              onClick={() => {
                setDeleteId(record?._id);
                setShowDelete(true);
              }}
              src={deleteIcon}
              alt="Delete Icon"
            />
          </div>
        ),
      },
    ],
    [page, itemsPerPage, openEditModal]
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
        <h3
          style={{
            color: "#0F665A",
            fontSize: 24,
            fontWeight: "500",
            lineHeight: "24px",
          }}
        >
          Offers
        </h3>
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
            <span style={{ margin: 0 }}>Add Offer</span>
          </Button>
        </div>
      </div>

      <ConfigProvider
        theme={{
          components: {
            Pagination: {
              itemActiveBg: "#3536FF",
              borderRadius: "100%",
            },
          },
          token: {
            colorPrimary: "white",
          },
        }}
      >
        <Table
          columns={columns}
          dataSource={data}
          rowKey="_id"
          pagination={{
            current: page,
            pageSize: itemsPerPage,
            onChange: setPage,
          }}
          className="custom-table"
        />
      </ConfigProvider>

      {/* Add Modal */}
      <Modal
        centered
        open={openAddModel}
        onCancel={() => setOpenAddModel(false)}
        width={500}
        footer={false}
      >
        <div className="p-6">
          <h1 className="text-[20px] font-medium mb-3">Add Offer</h1>
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center items-center gap-10 mb-10">
              <div className="h-32 w-32 flex items-center justify-center bg-gray-300 rounded-full relative">
                {imgURL ? (
                  <img
                    className="w-full h-full z-10 rounded-full object-cover"
                    src={imgURL}
                    alt="preview img"
                  />
                ) : (
                  <CiImageOn className="text-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                )}
                <input
                  onChange={onChange}
                  type="file"
                  id="img"
                  name="image"
                  className="display-none absolute top-0 left-0 w-full h-full cursor-pointer opacity-0 z-50"
                />
              </div>
            </div>

            <div style={{ marginBottom: "16px" }}>
              <label style={{ display: "block", marginBottom: "5px" }}>
                Offer Name
              </label>
              <input
                value={form.categoryName}
                onChange={onChange}
                type="text"
                placeholder="Enter Offer Name"
                style={{
                  border: "1px solid #E0E4EC",
                  padding: "10px",
                  height: "52px",
                  background: "white",
                  borderRadius: "8px",
                  outline: "none",
                  width: "100%",
                }}
                name="categoryName"
              />
            </div>

            <div style={{ marginBottom: "16px" }}>
              <label style={{ display: "block", marginBottom: "5px" }}>
                Discount
              </label>
              <input
                value={form.categoryName}
                onChange={onChange}
                type="text"
                placeholder="Discount"
                style={{
                  border: "1px solid #E0E4EC",
                  padding: "10px",
                  height: "52px",
                  background: "white",
                  borderRadius: "8px",
                  outline: "none",
                  width: "100%",
                }}
                name="categoryName"
              />
            </div>

            <div className="flex justify-between w-full mb-4 gap-4">
              <div style={{ width: "100%" }}>
                <label style={{ display: "block", marginBottom: "5px" }}>
                  Start Date
                </label>
                <div
                  onClick={() => setShowCalendarFor("start")}
                  style={{
                    border: "1px solid #E0E4EC",
                    padding: "10px",
                    height: "52px",
                    background: "white",
                    borderRadius: "8px",
                    outline: "none",
                    width: "100%",
                    cursor: "pointer",
                  }}
                >
                  <span className="text-gray-400">
                    {form.startDate || "Start Date"}
                  </span>
                </div>
              </div>

              <div style={{ width: "100%" }}>
                <label style={{ display: "block", marginBottom: "5px" }}>
                  End Date
                </label>
                <div
                  onClick={() => setShowCalendarFor("end")}
                  style={{
                    border: "1px solid #E0E4EC",
                    padding: "10px",
                    height: "52px",
                    background: "white",
                    borderRadius: "8px",
                    outline: "none",
                    width: "100%",
                    cursor: "pointer",
                  }}
                >
                  <span className="text-gray-400">
                    {form.endDate || "End Date"}
                  </span>
                </div>
              </div>
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

      {/* Edit Modal */}
      <Modal
        centered
        open={!!value}
        onCancel={() => {
          setValue(null);
          setImgEditURL("");
          setEditImageFile(null);
        }}
        width={500}
        footer={false}
      >
        <div className="p-6">
          <h1 className="text-[20px] font-medium mb-3">Edit Offer</h1>
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center items-center gap-10 mb-10">
              <div className="h-32 w-32 flex items-center justify-center bg-gray-300 rounded-full relative">
                {imgURL ? (
                  <img
                    className="w-full h-full z-10 rounded-full object-cover"
                    src={imgURL}
                    alt="preview img"
                  />
                ) : (
                  <CiImageOn className="text-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                )}
                <input
                  onChange={onChange}
                  type="file"
                  id="img"
                  name="image"
                  className="display-none absolute top-0 left-0 w-full h-full cursor-pointer opacity-0 z-50"
                />
              </div>
            </div>

            <div style={{ marginBottom: "16px" }}>
              <label style={{ display: "block", marginBottom: "5px" }}>
                Offer Name
              </label>
              <input
                value={form.categoryName}
                onChange={onChange}
                type="text"
                placeholder="Enter Offer Name"
                style={{
                  border: "1px solid #E0E4EC",
                  padding: "10px",
                  height: "52px",
                  background: "white",
                  borderRadius: "8px",
                  outline: "none",
                  width: "100%",
                }}
                name="categoryName"
              />
            </div>

            <div style={{ marginBottom: "16px" }}>
              <label style={{ display: "block", marginBottom: "5px" }}>
                Discount
              </label>
              <input
                value={form.categoryName}
                onChange={onChange}
                type="text"
                placeholder="Discount"
                style={{
                  border: "1px solid #E0E4EC",
                  padding: "10px",
                  height: "52px",
                  background: "white",
                  borderRadius: "8px",
                  outline: "none",
                  width: "100%",
                }}
                name="categoryName"
              />
            </div>

            <div className="flex justify-between w-full mb-4 gap-4">
              <div style={{ width: "100%" }}>
                <label style={{ display: "block", marginBottom: "5px" }}>
                  Start Date
                </label>
                <div
                  onClick={() => setShowCalendarFor("start")}
                  style={{
                    border: "1px solid #E0E4EC",
                    padding: "10px",
                    height: "52px",
                    background: "white",
                    borderRadius: "8px",
                    outline: "none",
                    width: "100%",
                    cursor: "pointer",
                  }}
                >
                  <span className="text-gray-400">
                    {form.startDate || "Start Date"}
                  </span>
                </div>
              </div>

              <div style={{ width: "100%" }}>
                <label style={{ display: "block", marginBottom: "5px" }}>
                  End Date
                </label>
                <div
                  onClick={() => setShowCalendarFor("end")}
                  style={{
                    border: "1px solid #E0E4EC",
                    padding: "10px",
                    height: "52px",
                    background: "white",
                    borderRadius: "8px",
                    outline: "none",
                    width: "100%",
                    cursor: "pointer",
                  }}
                >
                  <span className="text-gray-400">
                    {form.endDate || "End Date"}
                  </span>
                </div>
              </div>
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

      {/* Delete Modal */}
      <Modal
        centered
        open={showDelete}
        onCancel={() => setShowDelete(false)}
        width={400}
        footer={false}
      >
        <div className="p-6 text-center">
          <p className="text-[#D93D04] text-center font-semibold">
            Are you sure!
          </p>
          <p className="pt-4 pb-12 text-center">
            Do you want to delete this content?
          </p>
          <button
            onClick={handleDelete}
            className="bg-[#3536FF] py-2 px-5 text-white rounded-md"
          >
            Confirm
          </button>
        </div>
      </Modal>

      {showCalendarFor && (
        <div
          className="fixed left-0 top-0 w-full h-full flex items-center justify-center z-[9999] bg-black bg-opacity-30"
          style={{ pointerEvents: "auto" }}
        >
          <div
            className="bg-white shadow-lg rounded-md p-2 max-w-96"
            style={{ minWidth: 320 }}
          >
            <Calendar fullscreen={false} onSelect={handleDateChange} />
          </div>
        </div>
      )}
    </>
  );
};

export default Offers;
