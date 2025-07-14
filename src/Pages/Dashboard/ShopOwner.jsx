import { ConfigProvider, Table } from "antd";
import moment from "moment";
import { useMemo, useState } from "react";
import {
  useGetShopOwnerQuery,
  useUpdateShopOwnerMutation,
} from "../../redux/features/shopOwnerApi";
import toast from "react-hot-toast";

const itemsPerPage = 10;

const ShopOwner = () => {
  const [page, setPage] = useState(1);
  const { data, refetch } = useGetShopOwnerQuery(page);
  const shopOwner = data?.data?.users;

  const [updateShopOwner] = useUpdateShopOwnerMutation();

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
      const res = await updateShopOwner(data).unwrap();
      if (res?.success) {
        refetch();
        toast.success(res?.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.data?.message);
    }
  };

  const columns = useMemo(
    () => [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Email",
        dataIndex: "email",
        key: "email",
      },
      {
        title: "Total Income",
        dataIndex: "totalEarning",
        key: "totalEarning",
      },
      {
        title: "Contact Number",
        dataIndex: "contact",
        key: "contact",
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
    ],
    [page, data]
  );

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h2
          style={{ fontSize: "25px", fontWeight: "normal", color: "#0F665A" }}
        >
          Shop Owners
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
          rowKey="_id"
          columns={columns}
          dataSource={shopOwner}
          pagination={{
            total: data?.data?.pagination?.total,
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
