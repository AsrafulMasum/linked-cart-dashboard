import { ConfigProvider, Modal, Table } from "antd";
import { useState } from "react";
import { imageUrl } from "../../redux/api/baseApi";
import toast from "react-hot-toast";
import {
  useGetDeliveryManQuery,
  useUpdateDeliveryManMutation,
} from "../../redux/features/deliveryManApi";

const DeliveryMan = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const { data: deliveryManData, refetch } = useGetDeliveryManQuery(page);
  const deliveryMan = deliveryManData?.data?.users;
  const [updateDeliveryMan] = useUpdateDeliveryManMutation();
  const [modalOpen, setModalOpen] = useState("");
  console.log(deliveryMan);
  const handleStatus = async (record) => {
    let status;
    if (record?.status === "inactive") {
      status = "active";
    } else {
      status = "inactive";
    }
    const data = {
      id: record?._id,
      payload: { status },
    };
    try {
      const res = await updateDeliveryMan(data).unwrap();
      if (res?.success) {
        refetch();
        toast.success(res?.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.data?.message);
    }
  };
  console.log(modalOpen);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <div className="flex items-center gap-2">
          <img
            className="h-8 w-8 rounded-full object-cover"
            src={
              record?.profile && record?.profile.startsWith("https")
                ? record?.profile
                : record?.profile
                ? `${imageUrl}${record?.profile}`
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
      dataIndex: "contact",
      key: "contact",
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
      render: (_, record) => {
        return (
          <p>{record?.rating ? Number(record.rating).toFixed(1) : "0.0"}</p>
        );
      },
    },
    {
      title: "NID",
      dataIndex: "nid",
      key: "nid",
      render: (_, record) => (
        <div
          className="cursor-pointer"
          onClick={() => setModalOpen(record?.nid_image)}
        >
          {record?.nid_image ? (
            <img
              className="h-8 w-16 object-cover"
              src={
                record?.nid_image && record?.nid_image.startsWith("https")
                  ? record?.nid_image
                  : `${imageUrl}${record?.nid_image}`
              }
              alt=""
            />
          ) : (
            <p className="text-gray-500">No License</p>
          )}
        </div>
      ),
    },
    {
      title: "Driving License",
      dataIndex: "drivingLicense",
      key: "drivingLicense",
      render: (_, record) => (
        <div
          className="cursor-pointer"
          onClick={() => setModalOpen(record?.driverLicense)}
        >
          {record?.driverLicense ? (
            <img
              className="h-8 w-16 object-cover"
              src={
                record?.driverLicense &&
                record?.driverLicense.startsWith("https")
                  ? record?.driverLicense
                  : `${imageUrl}${record?.driverLicense}`
              }
              alt=""
            />
          ) : (
            <p className="text-gray-500">No License</p>
          )}
        </div>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      align: "center",
      render: (_, record) => (
        <div className="pr-4">
          <button
            onClick={() => handleStatus(record)}
            className={`w-24 rounded-md text-sm py-[2px] capitalize ${
              record.status === "active"
                ? "bg-[#B5D0CC] text-primary"
                : record.status === "inactive"
                ? "bg-[#FC605726] text-[#FC6057]"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {record.status}
          </button>
        </div>
      ),
    },
  ];

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
      </div>

      <ConfigProvider
        theme={{
          components: {
            Pagination: {
              itemActiveBg: "#0F665A",
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
          dataSource={deliveryMan}
          rowKey="_id"
          pagination={{
            total: deliveryManData?.data?.pagination?.total,
            current: page,
            pageSize: itemsPerPage,
            onChange: (page) => setPage(page),
          }}
          className="custom-table"
        />
      </ConfigProvider>

      <Modal
        centered
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        width={800}
        footer={false}
      >
        <div className="p-6 flex justify-center items-center">
          <img
            className="h-[400px] object-cover"
            src={
              modalOpen && modalOpen.startsWith("https")
                ? modalOpen
                : `${imageUrl}${modalOpen}`
            }
            alt=""
          />
        </div>
      </Modal>
    </>
  );
};

export default DeliveryMan;
