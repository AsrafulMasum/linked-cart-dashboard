import { ConfigProvider, Modal, Select, Table } from "antd";
import moment from "moment";
import { useCallback, useEffect, useMemo, useState } from "react";
import { CiUser } from "react-icons/ci";
import { IoCalendarOutline, IoEyeOutline } from "react-icons/io5";
import card from "../../assets/card.svg";

const data = [
  {
    key: "1",
    orderId: "1001",
    productImage: [
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
    ],
    firstName: "John",
    lastName: "Doe",
    customerEmail: "john.doe@example.com",
    customerPhone: "+1-202-555-0111",
    cardNumber: "**** **** **** 1234",
    createdAt: "2025-05-01T10:30:00Z",
    quantity: 2,
    amount: 100,
    status: "Pending",
  },
  {
    key: "2",
    orderId: "1001",
    productImage: [
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
    ],
    firstName: "Jane",
    lastName: "Smith",
    customerEmail: "john.doe@example.com",
    customerPhone: "+1-202-555-0111",
    cardNumber: "**** **** **** 1234",
    createdAt: "2025-05-02T12:45:00Z",
    quantity: 1,
    amount: 50,
    status: "Completed",
  },
  {
    key: "3",
    orderId: "1001",
    productImage: [
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
    ],
    firstName: "Michael",
    lastName: "Johnson",
    customerEmail: "john.doe@example.com",
    customerPhone: "+1-202-555-0111",
    cardNumber: "**** **** **** 1234",
    createdAt: "2025-05-03T09:20:00Z",
    quantity: 3,
    amount: 150,
    status: "Shipped",
  },
  {
    key: "4",
    orderId: "1001",
    productImage: [
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
    ],
    firstName: "Emily",
    lastName: "Clark",
    customerEmail: "john.doe@example.com",
    customerPhone: "+1-202-555-0111",
    cardNumber: "**** **** **** 1234",
    createdAt: "2025-05-04T14:00:00Z",
    quantity: 4,
    amount: 200,
    status: "Delivered",
  },
  {
    key: "5",
    orderId: "1001",
    productImage: [
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
    ],
    firstName: "Chris",
    lastName: "Evans",
    customerEmail: "john.doe@example.com",
    customerPhone: "+1-202-555-0111",
    cardNumber: "**** **** **** 1234",
    createdAt: "2025-05-05T11:10:00Z",
    quantity: 1,
    amount: 60,
    status: "Pending",
  },
  {
    key: "6",
    orderId: "1001",
    productImage: [
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
    ],
    firstName: "Sarah",
    lastName: "Brown",
    customerEmail: "john.doe@example.com",
    customerPhone: "+1-202-555-0111",
    cardNumber: "**** **** **** 1234",
    createdAt: "2025-05-06T08:45:00Z",
    quantity: 5,
    amount: 250,
    status: "Cancelled",
  },
  {
    key: "7",
    orderId: "1001",
    productImage: [
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
    ],
    firstName: "David",
    lastName: "Lee",
    customerEmail: "john.doe@example.com",
    customerPhone: "+1-202-555-0111",
    cardNumber: "**** **** **** 1234",
    createdAt: "2025-05-07T13:30:00Z",
    quantity: 2,
    amount: 120,
    status: "Shipped",
  },
  {
    key: "8",
    orderId: "1001",
    productImage: [
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
    ],
    firstName: "Olivia",
    lastName: "Martinez",
    customerEmail: "john.doe@example.com",
    customerPhone: "+1-202-555-0111",
    cardNumber: "**** **** **** 1234",
    createdAt: "2025-05-08T10:20:00Z",
    quantity: 3,
    amount: 180,
    status: "Delivered",
  },
  {
    key: "9",
    orderId: "1001",
    productImage: [
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
    ],
    firstName: "Daniel",
    lastName: "White",
    customerEmail: "john.doe@example.com",
    customerPhone: "+1-202-555-0111",
    cardNumber: "**** **** **** 1234",
    createdAt: "2025-05-09T16:10:00Z",
    quantity: 1,
    amount: 45,
    status: "Completed",
  },
  {
    key: "10",
    orderId: "1001",
    productImage: [
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
    ],
    firstName: "Sophia",
    lastName: "Hall",
    customerEmail: "john.doe@example.com",
    customerPhone: "+1-202-555-0111",
    cardNumber: "**** **** **** 1234",
    createdAt: "2025-05-10T09:15:00Z",
    quantity: 6,
    amount: 300,
    status: "Pending",
  },
  {
    key: "11",
    orderId: "1001",
    productImage: [
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
    ],
    firstName: "Ethan",
    lastName: "Walker",
    customerEmail: "john.doe@example.com",
    customerPhone: "+1-202-555-0111",
    cardNumber: "**** **** **** 1234",
    createdAt: "2025-05-11T14:50:00Z",
    quantity: 2,
    amount: 110,
    status: "Cancelled",
  },
  {
    key: "12",
    orderId: "1001",
    productImage: [
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
    ],
    firstName: "Ava",
    lastName: "Lopez",
    customerEmail: "john.doe@example.com",
    customerPhone: "+1-202-555-0111",
    cardNumber: "**** **** **** 1234",
    createdAt: "2025-05-12T12:05:00Z",
    quantity: 4,
    amount: 190,
    status: "Delivered",
  },
  {
    key: "13",
    orderId: "1001",
    productImage: [
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
    ],
    firstName: "Noah",
    lastName: "Harris",
    customerEmail: "john.doe@example.com",
    customerPhone: "+1-202-555-0111",
    cardNumber: "**** **** **** 1234",
    createdAt: "2025-05-13T10:25:00Z",
    quantity: 3,
    amount: 165,
    status: "Shipped",
  },
  {
    key: "14",
    orderId: "1001",
    productImage: [
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
    ],
    firstName: "Isabella",
    lastName: "Lewis",
    customerEmail: "john.doe@example.com",
    customerPhone: "+1-202-555-0111",
    cardNumber: "**** **** **** 1234",
    createdAt: "2025-05-14T11:35:00Z",
    quantity: 2,
    amount: 95,
    status: "Completed",
  },
  {
    key: "15",
    orderId: "1001",
    productImage: [
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
    ],
    firstName: "James",
    lastName: "Young",
    customerEmail: "john.doe@example.com",
    customerPhone: "+1-202-555-0111",
    cardNumber: "**** **** **** 1234",
    createdAt: "2025-05-15T13:00:00Z",
    quantity: 1,
    amount: 40,
    status: "Pending",
  },
  {
    key: "16",
    orderId: "1001",
    productImage: [
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
    ],
    firstName: "Mia",
    lastName: "King",
    customerEmail: "john.doe@example.com",
    customerPhone: "+1-202-555-0111",
    cardNumber: "**** **** **** 1234",
    createdAt: "2025-05-16T09:40:00Z",
    quantity: 4,
    amount: 210,
    status: "Shipped",
  },
  {
    key: "17",
    orderId: "1001",
    productImage: [
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
    ],
    firstName: "Lucas",
    lastName: "Wright",
    customerEmail: "john.doe@example.com",
    customerPhone: "+1-202-555-0111",
    cardNumber: "**** **** **** 1234",
    createdAt: "2025-05-17T15:25:00Z",
    quantity: 2,
    amount: 115,
    status: "Delivered",
  },
  {
    key: "18",
    orderId: "1001",
    productImage: [
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
    ],
    firstName: "Charlotte",
    lastName: "Scott",
    customerEmail: "john.doe@example.com",
    customerPhone: "+1-202-555-0111",
    cardNumber: "**** **** **** 1234",
    createdAt: "2025-05-18T08:55:00Z",
    quantity: 5,
    amount: 275,
    status: "Completed",
  },
  {
    key: "19",
    orderId: "1001",
    productImage: [
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
    ],
    firstName: "Benjamin",
    lastName: "Green",
    customerEmail: "john.doe@example.com",
    customerPhone: "+1-202-555-0111",
    cardNumber: "**** **** **** 1234",
    createdAt: "2025-05-19T10:10:00Z",
    quantity: 3,
    amount: 135,
    status: "Pending",
  },
  {
    key: "20",
    orderId: "1001",
    productImage: [
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
    ],
    firstName: "Amelia",
    lastName: "Baker",
    customerEmail: "john.doe@example.com",
    customerPhone: "+1-202-555-0111",
    cardNumber: "**** **** **** 1234",
    createdAt: "2025-05-20T13:20:00Z",
    quantity: 2,
    amount: 90,
    status: "Shipped",
  },
];

const itemsPerPage = 10;

const OrdersList = () => {
  const [page, setPage] = useState(1);
  const [value, setValue] = useState(null);
  const [statusFilter, setStatusFilter] = useState("");
  const [dataSource, setDataSource] = useState(data);
  const [showStatusSelect, setShowStatusSelect] = useState(false);

  const handleChange = useCallback((val) => {
    console.log(`selected ${val}`);
  }, []);

  const handleInfoClick = useCallback((record) => {
    setValue(record);
  }, []);

  const handleModalClose = useCallback(() => {
    setValue(null);
  }, []);

  // Filter data when statusFilter changes
  useEffect(() => {
    if (statusFilter) {
      setDataSource(data.filter((item) => item.status === statusFilter));
    } else {
      setDataSource(data);
    }
  }, [statusFilter, data]);

  const statusOptions = [
    { value: "", label: "Status" },
    { value: "Pending", label: "Pending" },
    { value: "Completed", label: "Completed" },
    { value: "Shipped", label: "Shipped" },
    { value: "Delivered", label: "Delivered" },
    { value: "Cancelled", label: "Cancelled" },
  ];

  const columns = useMemo(
    () => [
      {
        title: "Serial ID",
        dataIndex: "orderId",
        key: "orderId",
      },
      {
        title: "Product Images",
        dataIndex: "productImage",
        key: "productImage",
        render: (images) => (
          <div className="flex gap-1">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Product ${idx}`}
                className="w-6 h-6 object-cover rounded border border-[#3F857B]"
              />
            ))}
          </div>
        ),
      },
      {
        title: "Customer Name",
        dataIndex: "customerName",
        key: "customerName",
        render: (_, record) => (
          <div className="flex items-center gap-2">
            <p>
              {record?.firstName || ""} {record?.lastName || ""}
            </p>
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
        dataIndex: "amount",
        key: "amount",
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
            Pending: { color: "#F78F08", bg: "#FFF7E6" },
            Completed: { color: "#0F665A", bg: "#E6F7F1" },
            Shipped: { color: "#1890FF", bg: "#E6F7FF" },
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
    ],
    [page, handleInfoClick, showStatusSelect, statusFilter]
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 style={{ fontSize: "25px", fontWeight: "normal" }}>Order List</h2>
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
          dataSource={dataSource}
          pagination={{
            current: page,
            pageSize: itemsPerPage,
            onChange: setPage,
          }}
          className="custom-table"
        />
      </ConfigProvider>

      <Modal
        width={800}
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
                    Pending: { color: "#F78F08", bg: "#FFF7E6" },
                    Completed: { color: "#0F665A", bg: "#E6F7F1" },
                    Shipped: { color: "#1890FF", bg: "#E6F7FF" },
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
                  Full Name : {value?.firstName || ""} {value?.lastName || ""}
                </p>
                <p className="text-[#5C5C5C] font-semibold">
                  Email : {value?.customerEmail}
                </p>
                <p className="text-[#5C5C5C] font-semibold">
                  Phone : {value?.customerPhone}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h4 className="text-[#60A548] text-xl font-semibold">
              Payment Info
            </h4>
            <div className="flex items-center gap-2 mt-4">
              <img className="py-1 px-1.5 border rounded" src={card} alt="" />
              <p className="text-[#5C5C5C] text-lg font-semibold">
                Master Card {value?.cardNumber}
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-[#60A548] text-xl font-semibold mt-10">
              Product Images
            </h4>
            <div className="flex items-center justify-between mt-4">
              <div className="flex gap-2">
                {value?.productImage.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Product ${idx}`}
                    className="w-10 h-10 object-cover rounded border border-[#3F857B]"
                  />
                ))}
              </div>
              <p className="text-lg text-[#5C5C5C] font-semibold">
                {value?.quantity}
              </p>
              <p className="text-lg text-[#5C5C5C] font-semibold">
                $ {value?.amount}
              </p>
            </div>
          </div>

          <hr />

          <div className="mt-8 flex items-center justify-between">
            <h4 className="text-primary text-2xl font-bold">Total</h4>
            <p className="text-xl text-primary font-semibold">
              $ {value?.amount}
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default OrdersList;
