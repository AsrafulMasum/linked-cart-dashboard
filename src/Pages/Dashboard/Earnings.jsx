import { ConfigProvider, Modal, Select, Table } from "antd";
import moment from "moment";
import { useMemo, useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { useGetEarningsQuery } from "../../redux/features/earningsApi";

const itemsPerPage = 10;

const Earnings = () => {
  const [page, setPage] = useState(1);
  const [value, setValue] = useState(null);

  const { data: ordersData } = useGetEarningsQuery(page);
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
          rowKey="_id"
          pagination={{
            total: ordersData?.pagination?.total,
            current: page,
            pageSize: itemsPerPage,
            onChange: (page) => setPage(page),
          }}
          className="custom-table"
        />
      </ConfigProvider>

      {/* deatils modal */}
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
