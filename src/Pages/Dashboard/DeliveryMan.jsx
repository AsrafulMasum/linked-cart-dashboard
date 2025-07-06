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
    name: "John Doe",
    email: "john@example.com",
    contactNo: "+8801711001100",
    rating: 4.5,
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    nid: "https://via.placeholder.com/100x60?text=NID+1",
    drivingLicense: "https://via.placeholder.com/100x60?text=DL+1",
    status: "Active",
  },
  {
    _id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    contactNo: "+8801811002200",
    rating: 4.2,
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    nid: "https://via.placeholder.com/100x60?text=NID+2",
    drivingLicense: "https://via.placeholder.com/100x60?text=DL+2",
    status: "Inactive",
  },
  {
    _id: "3",
    name: "Robert Johnson",
    email: "robert@example.com",
    contactNo: "+8801711234567",
    rating: 4.0,
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    nid: "https://via.placeholder.com/100x60?text=NID+3",
    drivingLicense: "https://via.placeholder.com/100x60?text=DL+3",
    status: "Pending",
  },
  {
    _id: "4",
    name: "Emily Brown",
    email: "emily@example.com",
    contactNo: "+8801977112233",
    rating: 4.8,
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    nid: "https://via.placeholder.com/100x60?text=NID+4",
    drivingLicense: "https://via.placeholder.com/100x60?text=DL+4",
    status: "Active",
  },
  {
    _id: "5",
    name: "Michael Lee",
    email: "michael@example.com",
    contactNo: "+8801888995566",
    rating: 3.9,
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    nid: "https://via.placeholder.com/100x60?text=NID+5",
    drivingLicense: "https://via.placeholder.com/100x60?text=DL+5",
    status: "Inactive",
  },
  {
    _id: "6",
    name: "Olivia Davis",
    email: "olivia@example.com",
    contactNo: "+8801765432198",
    rating: 4.6,
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    nid: "https://via.placeholder.com/100x60?text=NID+6",
    drivingLicense: "https://via.placeholder.com/100x60?text=DL+6",
    status: "Active",
  },
  {
    _id: "7",
    name: "William Miller",
    email: "william@example.com",
    contactNo: "+8801755990088",
    rating: 3.7,
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    nid: "https://via.placeholder.com/100x60?text=NID+7",
    drivingLicense: "https://via.placeholder.com/100x60?text=DL+7",
    status: "Pending",
  },
  {
    _id: "8",
    name: "Sophia Wilson",
    email: "sophia@example.com",
    contactNo: "+8801822334455",
    rating: 4.4,
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    nid: "https://via.placeholder.com/100x60?text=NID+8",
    drivingLicense: "https://via.placeholder.com/100x60?text=DL+8",
    status: "Active",
  },
  {
    _id: "9",
    name: "James Anderson",
    email: "james@example.com",
    contactNo: "+8801799111122",
    rating: 3.5,
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    nid: "https://via.placeholder.com/100x60?text=NID+9",
    drivingLicense: "https://via.placeholder.com/100x60?text=DL+9",
    status: "Inactive",
  },
  {
    _id: "10",
    name: "Mia Martinez",
    email: "mia@example.com",
    contactNo: "+8801912345678",
    rating: 4.1,
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    nid: "https://via.placeholder.com/100x60?text=NID+10",
    drivingLicense: "https://via.placeholder.com/100x60?text=DL+10",
    status: "Pending",
  },
  {
    _id: "11",
    name: "Liam Clark",
    email: "liam@example.com",
    contactNo: "+8801744556677",
    rating: 4.3,
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    nid: "https://via.placeholder.com/100x60?text=NID+11",
    drivingLicense: "https://via.placeholder.com/100x60?text=DL+11",
    status: "Active",
  },
  {
    _id: "12",
    name: "Charlotte Lewis",
    email: "charlotte@example.com",
    contactNo: "+8801933445566",
    rating: 4.9,
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    nid: "https://via.placeholder.com/100x60?text=NID+12",
    drivingLicense: "https://via.placeholder.com/100x60?text=DL+12",
    status: "Active",
  },
  {
    _id: "13",
    name: "Benjamin Walker",
    email: "benjamin@example.com",
    contactNo: "+8801755667788",
    rating: 3.8,
    image: "https://randomuser.me/api/portraits/men/13.jpg",
    nid: "https://via.placeholder.com/100x60?text=NID+13",
    drivingLicense: "https://via.placeholder.com/100x60?text=DL+13",
    status: "Inactive",
  },
  {
    _id: "14",
    name: "Amelia Hall",
    email: "amelia@example.com",
    contactNo: "+8801844556677",
    rating: 4.0,
    image: "https://randomuser.me/api/portraits/women/14.jpg",
    nid: "https://via.placeholder.com/100x60?text=NID+14",
    drivingLicense: "https://via.placeholder.com/100x60?text=DL+14",
    status: "Pending",
  },
  {
    _id: "15",
    name: "Logan Allen",
    email: "logan@example.com",
    contactNo: "+8801966112233",
    rating: 4.4,
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    nid: "https://via.placeholder.com/100x60?text=NID+15",
    drivingLicense: "https://via.placeholder.com/100x60?text=DL+15",
    status: "Active",
  },
  {
    _id: "16",
    name: "Ella Young",
    email: "ella@example.com",
    contactNo: "+8801777888999",
    rating: 4.2,
    image: "https://randomuser.me/api/portraits/women/16.jpg",
    nid: "https://via.placeholder.com/100x60?text=NID+16",
    drivingLicense: "https://via.placeholder.com/100x60?text=DL+16",
    status: "Active",
  },
  {
    _id: "17",
    name: "Lucas Hernandez",
    email: "lucas@example.com",
    contactNo: "+8801855667788",
    rating: 3.6,
    image: "https://randomuser.me/api/portraits/men/17.jpg",
    nid: "https://via.placeholder.com/100x60?text=NID+17",
    drivingLicense: "https://via.placeholder.com/100x60?text=DL+17",
    status: "Inactive",
  },
  {
    _id: "18",
    name: "Avery King",
    email: "avery@example.com",
    contactNo: "+8801744332211",
    rating: 4.5,
    image: "https://randomuser.me/api/portraits/women/18.jpg",
    nid: "https://via.placeholder.com/100x60?text=NID+18",
    drivingLicense: "https://via.placeholder.com/100x60?text=DL+18",
    status: "Pending",
  },
  {
    _id: "19",
    name: "Henry Wright",
    email: "henry@example.com",
    contactNo: "+8801922334455",
    rating: 4.0,
    image: "https://randomuser.me/api/portraits/men/19.jpg",
    nid: "https://via.placeholder.com/100x60?text=NID+19",
    drivingLicense: "https://via.placeholder.com/100x60?text=DL+19",
    status: "Active",
  },
  {
    _id: "20",
    name: "Harper Scott",
    email: "harper@example.com",
    contactNo: "+8801900112233",
    rating: 4.7,
    image: "https://randomuser.me/api/portraits/women/20.jpg",
    nid: "https://via.placeholder.com/100x60?text=NID+20",
    drivingLicense: "https://via.placeholder.com/100x60?text=DL+20",
    status: "Inactive",
  },
];

const DeliveryMan = () => {
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
      //   {
      //     title: "Serial ID",
      //     dataIndex: "name",
      //     key: "name",
      //     render: (_, __, index) => (
      //       <p>{(page - 1) * itemsPerPage + index + 1}</p>
      //     ),
      //   },
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        render: (_, record) => (
          <div className="flex items-center gap-2">
            <img
              className="h-8 w-8 rounded-full object-cover"
              src={
                record?.image && record?.image.startsWith("https")
                  ? record?.image
                  : record?.image
                  ? `${imageUrl}${record?.image}`
                  : "/default-avatar.png"
              }
              alt=""
            />
            <p>{record?.name}</p>
          </div>
        ),
      },
      {
        title: "Email",
        dataIndex: "email",
        key: "email",
      },
      {
        title: "Contact Number",
        dataIndex: "contactNo",
        key: "contactNo",
      },
      {
        title: "Rating",
        dataIndex: "rating",
        key: "rating",
      },
      {
        title: "NID",
        dataIndex: "nid",
        key: "nid",
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
        title: "Driving License",
        dataIndex: "drivingLicense",
        key: "drivingLicense",
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
        title: "Status",
        dataIndex: "status",
        key: "status",
        align: "right",
        render: (_, record) => (
          <div className="flex justify-end pr-4">
            <button
              onClick={() => handleStatus(record)}
              className={`w-24 rounded-md text-sm py-[2px] ${
                record.status === "Active"
                  ? "bg-[#B5D0CC] text-primary"
                  : record.status === "Inactive"
                  ? "bg-[#FC605726] text-[#FC6057]"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {record.status}
            </button>
          </div>
        ),
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
          Delivery Man
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
        width={700}
        footer={false}
      >
        <div className="p-6">
          <h1 className="text-[20px] font-medium mb-3">Add Profile</h1>
          <form onSubmit={handleSubmit}>

            <div className="flex justify-center items-center gap-4 mb-4">
              <div className="w-1/2">
                <label style={{ display: "block", marginBottom: "5px" }}>
                  Profile Name
                </label>
                <input
                  value={form.profileName}
                  onChange={onChange}
                  type="text"
                  placeholder="Enter Profile Name"
                  style={{
                    border: "1px solid #E0E4EC",
                    padding: "10px",
                    height: "52px",
                    background: "white",
                    borderRadius: "8px",
                    outline: "none",
                    width: "100%",
                  }}
                  name="profileName"
                />
              </div>

              <div className="w-1/2">
                <label style={{ display: "block", marginBottom: "5px" }}>
                  Profile Image
                </label>
                <div className="h-[54px] w-full flex items-center justify-center border rounded-lg relative">
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
            </div>

            <div className="flex items-center gap-5 mb-4">
              <div className="w-1/2">
                <label style={{ display: "block", marginBottom: "5px" }}>
                  Email
                </label>
                <input
                  value={form.categoryName}
                  onChange={onChange}
                  type="text"
                  placeholder="Enter your email"
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

              <div className="w-1/2">
                <label style={{ display: "block", marginBottom: "5px" }}>
                  Contact Number
                </label>
                <input
                  value={form.contactNumber}
                  onChange={onChange}
                  type="text"
                  placeholder="Inter your contact number"
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
            </div>

            <div className="flex justify-between w-full mb-4 gap-4">
              <div className="w-1/2">
                <label style={{ display: "block", marginBottom: "5px" }}>
                  Profile Image
                </label>
                <div className="h-32 w-full flex items-center justify-center border rounded-lg relative">
                  {imgURL ? (
                    <img
                      className="w-full h-full z-10 rounded-full object-cover"
                      src={imgURL}
                      alt="preview img"
                    />
                  ) : (
                    <CiImageOn className="text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
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

              <div className="w-1/2">
                <label style={{ display: "block", marginBottom: "5px" }}>
                  Profile Image
                </label>
                <div className="h-32 w-full flex items-center justify-center border rounded-lg relative">
                  {imgURL ? (
                    <img
                      className="w-full h-full z-10 rounded-full object-cover"
                      src={imgURL}
                      alt="preview img"
                    />
                  ) : (
                    <CiImageOn className="text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
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
            </div>

            <input
              className="cursor-pointer"
              style={{
                border: "none",
                width: "100%",
                height: "48px",
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
        width={700}
        footer={false}
      >
        <div className="p-6">
          <h1 className="text-[20px] font-medium mb-3">Edit Profile</h1>
          <form onSubmit={handleSubmit}>

            <div className="flex justify-center items-center gap-4 mb-4">
              <div className="w-1/2">
                <label style={{ display: "block", marginBottom: "5px" }}>
                  Profile Name
                </label>
                <input
                  value={form.profileName}
                  onChange={onChange}
                  type="text"
                  placeholder="Enter Profile Name"
                  style={{
                    border: "1px solid #E0E4EC",
                    padding: "10px",
                    height: "52px",
                    background: "white",
                    borderRadius: "8px",
                    outline: "none",
                    width: "100%",
                  }}
                  name="profileName"
                />
              </div>

              <div className="w-1/2">
                <label style={{ display: "block", marginBottom: "5px" }}>
                  Profile Image
                </label>
                <div className="h-[54px] w-full flex items-center justify-center border rounded-lg relative">
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
            </div>

            <div className="flex items-center gap-5 mb-4">
              <div className="w-1/2">
                <label style={{ display: "block", marginBottom: "5px" }}>
                  Email
                </label>
                <input
                  value={form.email}
                  onChange={onChange}
                  type="text"
                  placeholder="Enter your email"
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

              <div className="w-1/2">
                <label style={{ display: "block", marginBottom: "5px" }}>
                  Contact Number
                </label>
                <input
                  value={form.contactNumber}
                  onChange={onChange}
                  type="text"
                  placeholder="Enter your contact number"
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
            </div>

            <div className="flex justify-between w-full mb-4 gap-4">
              <div className="w-1/2">
                <label style={{ display: "block", marginBottom: "5px" }}>
                  Profile Image
                </label>
                <div className="h-32 w-full flex items-center justify-center border rounded-lg relative">
                  {imgURL ? (
                    <img
                      className="w-full h-full z-10 rounded-full object-cover"
                      src={imgURL}
                      alt="preview img"
                    />
                  ) : (
                    <CiImageOn className="text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
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

              <div className="w-1/2">
                <label style={{ display: "block", marginBottom: "5px" }}>
                  Profile Image
                </label>
                <div className="h-32 w-full flex items-center justify-center border rounded-lg relative">
                  {imgURL ? (
                    <img
                      className="w-full h-full z-10 rounded-full object-cover"
                      src={imgURL}
                      alt="preview img"
                    />
                  ) : (
                    <CiImageOn className="text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
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
            </div>

            <input
              className="cursor-pointer"
              style={{
                border: "none",
                width: "100%",
                height: "48px",
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
            className="bg-[#0F665A] py-2 px-5 text-white rounded-md"
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

export default DeliveryMan;
