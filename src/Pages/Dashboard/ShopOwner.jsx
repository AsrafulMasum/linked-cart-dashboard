import { ConfigProvider, Table } from "antd";
import moment from "moment";
import { useMemo, useState } from "react";

const initialData = [
  {
    key: 1,
    name: "John Doe",
    totalIncome: "$12,000",
    contactNumber: "+1-202-555-0123",
    createdAt: "2025-01-05T10:00:00Z",
    status: "Active",
  },
  {
    key: 2,
    name: "Emma Watson",
    totalIncome: "$15,500",
    contactNumber: "+1-202-555-0456",
    createdAt: "2025-01-10T12:30:00Z",
    status: "Inactive",
  },
  {
    key: 3,
    name: "Liam Smith",
    totalIncome: "$9,200",
    contactNumber: "+1-202-555-0789",
    createdAt: "2025-01-15T14:45:00Z",
    status: "Active",
  },
  {
    key: 4,
    name: "Sophia Johnson",
    totalIncome: "$20,300",
    contactNumber: "+1-202-555-0987",
    createdAt: "2025-01-20T11:00:00Z",
    status: "Inactive",
  },
  {
    key: 5,
    name: "William Brown",
    totalIncome: "$8,750",
    contactNumber: "+1-202-555-0321",
    createdAt: "2025-01-25T09:30:00Z",
    status: "Active",
  },
  {
    key: 6,
    name: "Olivia Davis",
    totalIncome: "$13,400",
    contactNumber: "+1-202-555-0654",
    createdAt: "2025-01-30T13:20:00Z",
    status: "Inactive",
  },
  {
    key: 7,
    name: "James Wilson",
    totalIncome: "$11,100",
    contactNumber: "+1-202-555-0780",
    createdAt: "2025-02-02T10:10:00Z",
    status: "Active",
  },
  {
    key: 8,
    name: "Isabella Martinez",
    totalIncome: "$16,700",
    contactNumber: "+1-202-555-0420",
    createdAt: "2025-02-07T15:00:00Z",
    status: "Active",
  },
  {
    key: 9,
    name: "Benjamin Anderson",
    totalIncome: "$10,500",
    contactNumber: "+1-202-555-0133",
    createdAt: "2025-02-12T08:45:00Z",
    status: "Inactive",
  },
  {
    key: 10,
    name: "Mia Thomas",
    totalIncome: "$18,600",
    contactNumber: "+1-202-555-0224",
    createdAt: "2025-02-17T14:30:00Z",
    status: "Inactive",
  },
  {
    key: 11,
    name: "Lucas Garcia",
    totalIncome: "$14,800",
    contactNumber: "+1-202-555-0345",
    createdAt: "2025-02-22T10:25:00Z",
    status: "Active",
  },
  {
    key: 12,
    name: "Charlotte Martinez",
    totalIncome: "$13,950",
    contactNumber: "+1-202-555-0499",
    createdAt: "2025-02-28T11:15:00Z",
    status: "Active",
  },
  {
    key: 13,
    name: "Elijah Robinson",
    totalIncome: "$17,200",
    contactNumber: "+1-202-555-0612",
    createdAt: "2025-03-04T12:10:00Z",
    status: "Active",
  },
  {
    key: 14,
    name: "Amelia Clark",
    totalIncome: "$9,950",
    contactNumber: "+1-202-555-0723",
    createdAt: "2025-03-08T13:50:00Z",
    status: "Inactive",
  },
  {
    key: 15,
    name: "Henry Rodriguez",
    totalIncome: "$11,600",
    contactNumber: "+1-202-555-0841",
    createdAt: "2025-03-12T09:40:00Z",
    status: "Active",
  },
  {
    key: 16,
    name: "Evelyn Lewis",
    totalIncome: "$15,300",
    contactNumber: "+1-202-555-0965",
    createdAt: "2025-03-16T10:55:00Z",
    status: "Active",
  },
  {
    key: 17,
    name: "Alexander Lee",
    totalIncome: "$12,450",
    contactNumber: "+1-202-555-1080",
    createdAt: "2025-03-20T15:25:00Z",
    status: "Inactive",
  },
  {
    key: 18,
    name: "Harper Walker",
    totalIncome: "$13,000",
    contactNumber: "+1-202-555-1122",
    createdAt: "2025-03-24T16:15:00Z",
    status: "Active",
  },
  {
    key: 19,
    name: "Daniel Hall",
    totalIncome: "$14,300",
    contactNumber: "+1-202-555-1234",
    createdAt: "2025-03-28T14:05:00Z",
    status: "Inactive",
  },
  {
    key: 20,
    name: "Abigail Allen",
    totalIncome: "$10,900",
    contactNumber: "+1-202-555-1357",
    createdAt: "2025-04-01T13:00:00Z",
    status: "Active",
  },
];

const itemsPerPage = 10;

const ShopOwner = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState(initialData);

  const handleStatus = (record) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.key === record.key
          ? {
              ...item,
              status:
                item.status === "Active"
                  ? "Inactive"
                  : item.status === "Inactive"
                  ? "Active"
                  : "Active",
            }
          : item
      )
    );
  };

  const columns = useMemo(
    () => [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Total Income",
        dataIndex: "totalIncome",
        key: "totalIncome",
      },
      {
        title: "Contact Number",
        dataIndex: "contactNumber",
        key: "contactNumber",
      },
      {
        title: "Start Date",
        dataIndex: "createdAt",
        key: "createdAt",
        render: (_, record) => <p>{moment(record?.createdAt).format("L")}</p>,
      },
      {
        title: "Actions",
        dataIndex: "actions",
        key: "actions",
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
    ],
    [page, data]
  );

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h2 style={{ fontSize: "25px", fontWeight: "normal", color: "#0F665A" }}>Shop Owners</h2>
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
          dataSource={data}
          pagination={{
            current: page,
            pageSize: itemsPerPage,
            onChange: setPage,
          }}
          className="custom-table"
        />
      </ConfigProvider>
    </>
  );
};

export default ShopOwner;
