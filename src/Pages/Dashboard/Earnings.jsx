import { ConfigProvider, Modal, Select, Table } from "antd";
import moment from "moment";
import { useMemo, useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { useGetEarningsQuery } from "../../redux/features/earningsApi";

const data = [
  {
    id: 1,
    orderId: "ORD1001",
    transactionID: "TXN5001",
    email: "alice.wilson@example.com",
    createdAt: "2025-05-01T10:00:00Z",
    amount: "$120.00",
  },
  {
    id: 2,
    orderId: "ORD1002",
    transactionID: "TXN5002",
    email: "bob.smith@example.com",
    createdAt: "2025-05-02T11:30:00Z",
    amount: "$150.00",
  },
  {
    id: 3,
    orderId: "ORD1003",
    transactionID: "TXN5003",
    email: "carol.jones@example.com",
    createdAt: "2025-05-03T09:15:00Z",
    amount: "$180.00",
  },
  {
    id: 4,
    orderId: "ORD1004",
    transactionID: "TXN5004",
    email: "david.lee@example.com",
    createdAt: "2025-05-04T08:45:00Z",
    amount: "$200.00",
  },
  {
    id: 5,
    orderId: "ORD1005",
    transactionID: "TXN5005",
    email: "emma.kim@example.com",
    createdAt: "2025-05-05T14:20:00Z",
    amount: "$170.00",
  },
  {
    id: 6,
    orderId: "ORD1006",
    transactionID: "TXN5006",
    email: "frank.brown@example.com",
    createdAt: "2025-05-06T12:00:00Z",
    amount: "$190.00",
  },
  {
    id: 7,
    orderId: "ORD1007",
    transactionID: "TXN5007",
    email: "grace.hall@example.com",
    createdAt: "2025-05-07T16:00:00Z",
    amount: "$160.00",
  },
  {
    id: 8,
    orderId: "ORD1008",
    transactionID: "TXN5008",
    email: "henry.scott@example.com",
    createdAt: "2025-05-08T17:30:00Z",
    amount: "$140.00",
  },
  {
    id: 9,
    orderId: "ORD1009",
    transactionID: "TXN5009",
    email: "irene.young@example.com",
    createdAt: "2025-05-09T13:45:00Z",
    amount: "$130.00",
  },
  {
    id: 10,
    orderId: "ORD1010",
    transactionID: "TXN5010",
    email: "jack.green@example.com",
    createdAt: "2025-05-10T10:15:00Z",
    amount: "$125.00",
  },
  {
    id: 11,
    orderId: "ORD1011",
    transactionID: "TXN5011",
    email: "kate.moore@example.com",
    createdAt: "2025-05-11T09:00:00Z",
    amount: "$155.00",
  },
  {
    id: 12,
    orderId: "ORD1012",
    transactionID: "TXN5012",
    email: "leo.adams@example.com",
    createdAt: "2025-05-12T15:30:00Z",
    amount: "$165.00",
  },
  {
    id: 13,
    orderId: "ORD1013",
    transactionID: "TXN5013",
    email: "mia.carter@example.com",
    createdAt: "2025-05-13T11:50:00Z",
    amount: "$185.00",
  },
  {
    id: 14,
    orderId: "ORD1014",
    transactionID: "TXN5014",
    email: "nate.ward@example.com",
    createdAt: "2025-05-14T14:05:00Z",
    amount: "$175.00",
  },
  {
    id: 15,
    orderId: "ORD1015",
    transactionID: "TXN5015",
    email: "olivia.price@example.com",
    createdAt: "2025-05-15T10:40:00Z",
    amount: "$145.00",
  },
  {
    id: 16,
    orderId: "ORD1016",
    transactionID: "TXN5016",
    email: "paul.king@example.com",
    createdAt: "2025-05-16T09:30:00Z",
    amount: "$135.00",
  },
  {
    id: 17,
    orderId: "ORD1017",
    transactionID: "TXN5017",
    email: "quinn.bailey@example.com",
    createdAt: "2025-05-17T08:20:00Z",
    amount: "$195.00",
  },
  {
    id: 18,
    orderId: "ORD1018",
    transactionID: "TXN5018",
    email: "rachel.morris@example.com",
    createdAt: "2025-05-18T13:10:00Z",
    amount: "$110.00",
  },
  {
    id: 19,
    orderId: "ORD1019",
    transactionID: "TXN5019",
    email: "samuel.rogers@example.com",
    createdAt: "2025-05-19T14:25:00Z",
    amount: "$105.00",
  },
  {
    id: 20,
    orderId: "ORD1020",
    transactionID: "TXN5020",
    email: "tina.bennett@example.com",
    createdAt: "2025-05-20T12:10:00Z",
    amount: "$115.00",
  },
];

const itemsPerPage = 9;

const Earnings = () => {
  const [page, setPage] = useState(1);
  const [value, setValue] = useState(null);

  const { data: ordersData } = useGetEarningsQuery();
  const orders = ordersData?.data?.orders;

  const handleInfoClick = (record) => {
    setValue(record);
  };

  const handleModalClose = () => {
    setValue(null);
  };

  const columns = useMemo(
    () => [
      {
        title: "Serial ID",
        dataIndex: "id",
        key: "id",
        render: (_, __, index) => (
          <p>{(page - 1) * itemsPerPage + index + 1}</p>
        ),
      },
      {
        title: "Order ID",
        dataIndex: "orderId",
        key: "orderId",
      },
      {
        title: "Transaction ID",
        dataIndex: "trxId",
        key: "trxId",
      },
      {
        title: "Email",
        dataIndex: "email",
        key: "email",
        render: (_, record) => <p>{record?.user?.email}</p>,
      },
      {
        title: "Date",
        dataIndex: "createdAt",
        key: "createdAt",
        render: (_, record) => <p>{moment(record?.createdAt).format("L")}</p>,
      },
      {
        title: "Amount",
        dataIndex: "price",
        key: "price",
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
    [page, handleInfoClick]
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2
          style={{ fontSize: "25px", fontWeight: "normal", color: "#0F665A" }}
        >
          Earnings
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
          pagination={{
            current: page,
            pageSize: itemsPerPage,
            onChange: setPage,
          }}
          className="custom-table"
        />
      </ConfigProvider>

      <Modal centered open={!!value} onCancel={handleModalClose} footer={false}>
        <div>
          <h4 className="text-lg font-medium mt-[35px]">Transaction Details</h4>
          <div className="flex items-center justify-between mt-4">
            <div>
              <p className="pb-[5px]">Transaction ID</p>
              <p className="pb-[5px]">Email</p>
              <p className="pb-[5px]">Date</p>
              <p>Transaction amount</p>
            </div>
            <div>
              <p className="pb-[5px] text-right">
                {value?.trxId || "Not Added Yet"}
              </p>
              <p className="pb-[5px] text-right">
                {value?.user?.email || "Not Added Yet"}
              </p>
              <p className="pb-[5px] text-right">
                {value?.createdAt ? moment(value.createdAt).format("L") : ""}
              </p>
              <p className="text-right">{value?.price || "Not Added Yet"}</p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Earnings;
