import { ConfigProvider, Modal, Select, Table } from "antd";
import moment from "moment";
import { useCallback, useEffect, useMemo, useState } from "react";
import { IoEyeOutline } from "react-icons/io5";

const data = [
  {
    key: "1",
    name: "1",
    productImage: [
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
    ],
    firstName: "John",
    lastName: "Doe",
    createdAt: "2025-05-01T10:30:00Z",
    quantity: 2,
    amount: 100,
    status: "Pending",
  },
  {
    key: "2",
    name: "2",
    productImage: [
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
    ],
    firstName: "Jane",
    lastName: "Smith",
    createdAt: "2025-05-02T12:45:00Z",
    quantity: 1,
    amount: 50,
    status: "Completed",
  },
  {
    key: "3",
    name: "3",
    productImage: [
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
    ],
    firstName: "Michael",
    lastName: "Johnson",
    createdAt: "2025-05-03T09:20:00Z",
    quantity: 3,
    amount: 150,
    status: "Shipped",
  },
  {
    key: "4",
    name: "4",
    productImage: [
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
    ],
    firstName: "Emily",
    lastName: "Clark",
    createdAt: "2025-05-04T14:00:00Z",
    quantity: 4,
    amount: 200,
    status: "Delivered",
  },
  {
    key: "5",
    name: "5",
    productImage: [
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
    ],
    firstName: "Chris",
    lastName: "Evans",
    createdAt: "2025-05-05T11:10:00Z",
    quantity: 1,
    amount: 60,
    status: "Pending",
  },
  {
    key: "6",
    name: "6",
    productImage: [
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
    ],
    firstName: "Sarah",
    lastName: "Brown",
    createdAt: "2025-05-06T08:45:00Z",
    quantity: 5,
    amount: 250,
    status: "Cancelled",
  },
  {
    key: "7",
    name: "7",
    productImage: [
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
    ],
    firstName: "David",
    lastName: "Lee",
    createdAt: "2025-05-07T13:30:00Z",
    quantity: 2,
    amount: 120,
    status: "Shipped",
  },
  {
    key: "8",
    name: "8",
    productImage: [
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
    ],
    firstName: "Olivia",
    lastName: "Martinez",
    createdAt: "2025-05-08T10:20:00Z",
    quantity: 3,
    amount: 180,
    status: "Delivered",
  },
  {
    key: "9",
    name: "9",
    productImage: [
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
    ],
    firstName: "Daniel",
    lastName: "White",
    createdAt: "2025-05-09T16:10:00Z",
    quantity: 1,
    amount: 45,
    status: "Completed",
  },
  {
    key: "10",
    name: "10",
    productImage: [
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
    ],
    firstName: "Sophia",
    lastName: "Hall",
    createdAt: "2025-05-10T09:15:00Z",
    quantity: 6,
    amount: 300,
    status: "Pending",
  },
  {
    key: "11",
    name: "11",
    productImage: [
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
    ],
    firstName: "Ethan",
    lastName: "Walker",
    createdAt: "2025-05-11T14:50:00Z",
    quantity: 2,
    amount: 110,
    status: "Cancelled",
  },
  {
    key: "12",
    name: "12",
    productImage: [
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
    ],
    firstName: "Ava",
    lastName: "Lopez",
    createdAt: "2025-05-12T12:05:00Z",
    quantity: 4,
    amount: 190,
    status: "Delivered",
  },
  {
    key: "13",
    name: "13",
    productImage: [
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
    ],
    firstName: "Noah",
    lastName: "Harris",
    createdAt: "2025-05-13T10:25:00Z",
    quantity: 3,
    amount: 165,
    status: "Shipped",
  },
  {
    key: "14",
    name: "14",
    productImage: [
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
    ],
    firstName: "Isabella",
    lastName: "Lewis",
    createdAt: "2025-05-14T11:35:00Z",
    quantity: 2,
    amount: 95,
    status: "Completed",
  },
  {
    key: "15",
    name: "15",
    productImage: [
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
    ],
    firstName: "James",
    lastName: "Young",
    createdAt: "2025-05-15T13:00:00Z",
    quantity: 1,
    amount: 40,
    status: "Pending",
  },
  {
    key: "16",
    name: "16",
    productImage: [
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
    ],
    firstName: "Mia",
    lastName: "King",
    createdAt: "2025-05-16T09:40:00Z",
    quantity: 4,
    amount: 210,
    status: "Shipped",
  },
  {
    key: "17",
    name: "17",
    productImage: [
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
    ],
    firstName: "Lucas",
    lastName: "Wright",
    createdAt: "2025-05-17T15:25:00Z",
    quantity: 2,
    amount: 115,
    status: "Delivered",
  },
  {
    key: "18",
    name: "18",
    productImage: [
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
    ],
    firstName: "Charlotte",
    lastName: "Scott",
    createdAt: "2025-05-18T08:55:00Z",
    quantity: 5,
    amount: 275,
    status: "Completed",
  },
  {
    key: "19",
    name: "19",
    productImage: [
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
    ],
    firstName: "Benjamin",
    lastName: "Green",
    createdAt: "2025-05-19T10:10:00Z",
    quantity: 3,
    amount: 135,
    status: "Pending",
  },
  {
    key: "20",
    name: "20",
    productImage: [
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
      "https://i.ibb.co/Txntgs82/67d2b16006cacaa9832a34d3df7e20cf95a975ec.png",
      "https://i.ibb.co/RGgb5zsj/1b127751246dbd7923a8bf64d53fd61b99a466fd.png",
    ],
    firstName: "Amelia",
    lastName: "Baker",
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
        dataIndex: "name",
        key: "name",
        render: (_, __, index) => (
          <p>{(page - 1) * itemsPerPage + index + 1}</p>
        ),
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
        <h2 style={{ fontSize: "25px", fontWeight: "normal" }}>User List</h2>
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

      <Modal open={!!value} onCancel={handleModalClose} footer={false}>
        <div>
          <h4 className="text-lg font-medium mt-[35px]">Client Information</h4>
          <div className="flex items-center justify-between mt-4">
            <div>
              <p className="pb-[5px]">User Name</p>
              <p className="pb-[5px]">Email</p>
              <p className="pb-[5px]">Service Type</p>
              <p>Start Date</p>
            </div>
            <div>
              <p className="pb-[5px] text-right">
                {value?.firstName || ""} {value?.lastName || ""}
              </p>
              <p className="pb-[5px] text-right">
                {value?.userEmail || "henry.green@example.com"}
              </p>
              <p className="pb-[5px] text-right">
                {value?.serviceType || "Home Service"}
              </p>
              <p className="text-right">
                {value?.createdAt ? moment(value.createdAt).format("L") : ""}
              </p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-medium mt-[35px]">
            Service Provider Information
          </h4>
          <div className="flex items-center justify-between mt-4">
            <div>
              <p className="pb-[5px]">Provider Name</p>
              <p className="pb-[5px]">Email</p>
              <p className="pb-[5px]">Service Type</p>
              <p>Start Date</p>
            </div>
            <div>
              <p className="pb-[5px] text-right">{value?.provider || "XYZ"}</p>
              <p className="pb-[5px] text-right">
                {value?.providerEmail || "henry.green@example.com"}
              </p>
              <p className="pb-[5px] text-right">
                {value?.serviceType || "Home Service"}
              </p>
              <p className="text-right">
                {value?.createdAt ? moment(value.createdAt).format("L") : ""}
              </p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-medium mt-[35px]">Service Information</h4>
          <div className="flex items-center justify-between mt-4">
            <div>
              <p className="pb-[5px]">Category</p>
              <p className="pb-[5px]">Service Name</p>
              <p className="pb-[5px] h-10">Service Image</p>
              <p className="pb-[5px]">Price</p>
              <p className="pb-[5px]">Booking Date</p>
              <p>Status</p>
            </div>
            <div>
              <p className="pb-[5px] text-right">
                {value?.category || "Home Service"}
              </p>
              <p className="pb-[5px] text-right">
                {value?.serviceType || "Cleaning"}
              </p>
              <div className="pb-[5px] flex justify-end">
                {value?.serviceImage ? (
                  <img
                    className="h-10 w-10 object-cover"
                    src={value.serviceImage}
                    alt="Service"
                  />
                ) : (
                  "No Image available"
                )}
              </div>
              <p className="pb-[5px] text-right">
                {value?.price ? `$ ${value.price}` : "$50"}
              </p>
              <p className="pb-[5px] text-right">
                {value?.createdAt ? moment(value.createdAt).format("L") : ""}
              </p>
              <Select
                defaultValue="ongoing"
                style={{ width: 200 }}
                onChange={handleChange}
                options={[
                  { value: "ongoing", label: "Ongoing" },
                  { value: "cancel", label: "Cancel" },
                  { value: "completed", label: "Completed" },
                ]}
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default OrdersList;
