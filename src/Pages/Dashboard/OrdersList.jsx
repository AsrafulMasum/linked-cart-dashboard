import { ConfigProvider, Modal, Select, Table } from "antd";
import moment from "moment";
import { useState } from "react";
import { CiUser } from "react-icons/ci";
import { IoCalendarOutline, IoEyeOutline } from "react-icons/io5";
import { useGetOrderListQuery } from "../../redux/features/orderListApi";
import { imageUrl } from "../../redux/api/baseApi";

const itemsPerPage = 10;

const OrdersList = () => {
  const [page, setPage] = useState(1);
  const [value, setValue] = useState(null);
  const [statusFilter, setStatusFilter] = useState("");
  const { data: orderLists } = useGetOrderListQuery({
    status: statusFilter,
    page,
  });
  const orders = orderLists?.data?.orders;

  const handleInfoClick = (record) => {
    setValue(record);
  };

  const handleModalClose = () => {
    setValue(null);
  };

  const statusOptions = [
    { value: "", label: "Status" },
    { value: "Placed", label: "Placed" },
    { value: "Confirmed", label: "Confirmed" },
    { value: "Packed", label: "Packed" },
    { value: "On the way", label: "On the way" },
    { value: "Delivered", label: "Delivered" },
    { value: "cancelled", label: "cancelled" },
  ];

  const columns = [
    {
      title: "Order Id",
      dataIndex: "orderId",
      key: "orderId",
    },
    {
      title: "Product Images",
      dataIndex: "productImage",
      key: "productImage",
      render: (_, record) => {
        return (
          <div className="flex gap-1">
            {record?.items?.map((item) => (
              <img
                key={item?._id}
                src={
                  item?.product?.image &&
                  item?.product?.image.startsWith("http")
                    ? item?.product?.image
                    : item?.product?.image
                    ? `${imageUrl}${item?.product?.image}`
                    : "/default-avatar.png"
                }
                alt={`Product ${item?._id}`}
                className="w-6 h-6 object-cover rounded border border-[#3F857B]"
              />
            ))}
          </div>
        );
      },
    },
    {
      title: "Customer Name",
      dataIndex: "customerName",
      key: "customerName",
      render: (_, record) => (
        <div className="flex items-center gap-2">
          <p>{record?.user?.name || "Not Added Yet"}</p>
        </div>
      ),
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (_, record) => <p>{moment(record?.createdAt).format("L")}</p>,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Amount",
      dataIndex: "price",
      key: "price",
    },
    {
      title: (
        <Select
          value={statusFilter}
          onChange={(val) => setStatusFilter(val)}
          style={{ width: 120 }}
          options={statusOptions}
          placeholder="Status"
          bordered={false}
          dropdownStyle={{ zIndex: 2000 }}
        />
      ),
      dataIndex: "status",
      key: "status",
      render: (status) => {
        // Color map for status
        const statusColorMap = {
          Placed: { color: "#1890FF", bg: "#E6F7FF" },
          Confirmed: { color: "#722ED1", bg: "#F9F0FF" },
          Packed: { color: "#F78F08", bg: "#FFF7E6" },
          "On the way": { color: "#13C2C2", bg: "#E6FFFB" },
          Delivered: { color: "#52C41A", bg: "#F6FFED" },
          Cancelled: { color: "#FF4D4F", bg: "#FFF1F0" },
        };

        const { color } = statusColorMap[status] || {
          color: "#333",
        };
        return (
          <span
            style={{
              color,
              borderRadius: 6,
              padding: "2px 12px",
              fontWeight: 500,
              fontSize: 13,
              display: "inline-block",
              minWidth: 80,
              textAlign: "center",
              letterSpacing: 0.2,
            }}
          >
            {status}
          </span>
        );
      },
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      align: "right",
      render: (_, record) => (
        <div className="flex justify-end pr-4">
          <IoEyeOutline
            className="text-2xl text-sub_title cursor-pointer"
            onClick={() => handleInfoClick(record)}
          />
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2
          style={{ fontSize: "25px", fontWeight: "normal", color: "#0F665A" }}
        >
          Order List
        </h2>
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
          dataSource={orders}
          rowKey="_id"
          pagination={{
            total: orderLists?.pagination?.total,
            current: page,
            pageSize: itemsPerPage,
            showSizeChanger: false,
            onChange: (page) => setPage(page),
          }}
          className="custom-table"
        />
      </ConfigProvider>

      {/* details modal */}
      <Modal
        width={900}
        centered
        open={!!value}
        onCancel={handleModalClose}
        footer={false}
      >
        <div className="p-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-4">
                <p className="text-xl font-semibold text-sub_title">
                  Order ID : {value?.orderId}
                </p>
                {/* Status badge with dynamic background color */}
                {(() => {
                  const statusColorMap = {
                    Placed: { color: "#1890FF", bg: "#E6F7FF" },
                    Confirmed: { color: "#722ED1", bg: "#F9F0FF" },
                    Packed: { color: "#F78F08", bg: "#FFF7E6" },
                    "On the way": { color: "#13C2C2", bg: "#E6FFFB" },
                    Delivered: { color: "#52C41A", bg: "#F6FFED" },
                    Cancelled: { color: "#FF4D4F", bg: "#FFF1F0" },
                  };
                  const { color, bg } = statusColorMap[value?.status] || {
                    color: "#333",
                    bg: "#f0f0f0",
                  };
                  return (
                    <p
                      className="py-1 px-5 rounded text-lg"
                      style={{ background: bg, color, fontWeight: 500 }}
                    >
                      {value?.status}
                    </p>
                  );
                })()}
              </div>
              <div className="flex items-center gap-4 mt-4 text-[#5C5C5C]">
                <IoCalendarOutline className="text-2xl" />
                <p className="text-lg">
                  {" "}
                  {moment(value?.createdAt).format("L")}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="p-2 bg-gray-100 rounded h-16">
                <CiUser className="text-5xl" />
              </div>
              <div>
                <h4 className="text-[#60A548] text-xl font-semibold">
                  Customer
                </h4>
                <p className="text-[#5C5C5C] font-semibold">
                  Full Name : {value?.user?.name || "Not Added Yet"}
                </p>
                <p className="text-[#5C5C5C] font-semibold">
                  Email : {value?.user?.email}
                </p>
                <p className="text-[#5C5C5C] font-semibold">
                  Phone : {value?.user?.contact}
                </p>
              </div>
            </div>
          </div>

          {/* <div className="mt-10">
            <h4 className="text-[#60A548] text-xl font-semibold">
              Payment Info
            </h4>
            <div className="flex items-center gap-2 mt-4">
              <img className="py-1 px-1.5 border rounded" src={card} alt="" />
              <p className="text-[#5C5C5C] text-lg font-semibold">
                Master Card {value?.cardNumber}
              </p>
            </div>
          </div> */}

          <div className="mb-6">
            <h4 className="text-[#60A548] text-xl font-semibold mt-10">
              Product Images
            </h4>
            <div className="flex items-center justify-between mt-4">
              <div className="flex gap-2">
                {value?.items.map((item) => (
                  <img
                    key={item?._id}
                    src={
                      item?.product?.image &&
                      item?.product?.image.startsWith("http")
                        ? item?.product?.image
                        : item?.product?.image
                        ? `${imageUrl}${item?.product?.image}`
                        : "/default-avatar.png"
                    }
                    alt={`Product ${item?._id}`}
                    className="w-10 h-10 object-cover rounded border border-[#3F857B]"
                  />
                ))}
              </div>
              <p className="text-lg text-[#5C5C5C] font-semibold">
                {value?.quantity}
              </p>
              <p className="text-lg text-[#5C5C5C] font-semibold">
                $ {value?.price}
              </p>
            </div>
          </div>

          <hr />

          <div className="mt-8 flex items-center justify-between">
            <h4 className="text-primary text-2xl font-bold">Total</h4>
            <p className="text-xl text-primary font-semibold">
              $ {value?.price}
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default OrdersList;
