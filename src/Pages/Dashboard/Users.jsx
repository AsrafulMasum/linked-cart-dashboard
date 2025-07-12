import { ConfigProvider, Input, Modal, Table } from "antd";
import moment from "moment";
import { useMemo, useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { useGetUsersQuery } from "../../redux/features/usersApi";
import { imageUrl } from "../../redux/api/baseApi";

const itemsPerPage = 10;

const Users = () => {
  const [srcText, setSrcText] = useState("");
  const [page, setPage] = useState(1);
  const { data: usersData } = useGetUsersQuery({srcText, page});
  const [value, setValue] = useState(null);
  const users = usersData?.data;

  const handleSearchChange = (e) => {
    e.preventDefault();
    setSrcText(e.target.value);
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
        title: "User Name",
        dataIndex: "userName",
        key: "userName",
        render: (_, record) => (
          <div className="flex items-center gap-2">
            <p>{record?.name || ""}</p>
          </div>
        ),
      },
      // {
      //   title: "Category",
      //   dataIndex: "category",
      //   key: "category",
      // },
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
        title: "Date",
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
          <div className="flex justify-end gap-8">
            <IoEyeOutline
              className="text-2xl text-sub_title cursor-pointer"
              onClick={() => setValue(record)}
            />
            {/* <img
              className="cursor-pointer"
              onClick={() => {
                setDeleteId(record?.key);
                setShowDelete(true);
              }}
              src={deleteIcon}
              alt="Delete Icon"
            /> */}
          </div>
        ),
      },
    ],
    [page]
  );

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-primary text-2xl font-semibold">User List</h2>
        <div
          style={{
            width: "353px",
            height: "40px",
            borderRadius: "8px",
          }}
        >
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#0F665A",
              },
            }}
          >
            <Input
              placeholder="Search..."
              onChange={handleSearchChange}
              prefix={<FiSearch size={14} color="#868FA0" />}
              style={{
                width: "100%",
                height: "100%",
                fontSize: "14px",
                backgroundColor: "#FAFAFA",
              }}
              size="middle"
            />
          </ConfigProvider>
        </div>
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
          dataSource={users}
          pagination={{
            total: usersData?.pagination?.total,
            current: page,
            pageSize: itemsPerPage,
            onChange: (page) => setPage(page),
          }}
          className="custom-table"
        />
      </ConfigProvider>

      <Modal
        centered
        open={!!value}
        onCancel={() => setValue(null)}
        footer={false}
      >
        <div className="p-2">
          <div className="flex justify-center">
            <img
              className="h-36 w-36 rounded-full object-cover"
              src={
                value?.profile && value?.profile.startsWith("https")
                  ? value?.profile
                  : value?.profile
                  ? `${imageUrl}${value?.profile}`
                  : "/logo.svg"
              }
              alt="user image"
            />
          </div>
          <div className="flex items-center justify-between mt-[35px]">
            <div>
              <p className="pb-[5px]">User Name</p>
              <p className="pb-[5px]">Email</p>
              <p className="pb-[5px]">Contact Number</p>
              <p>Start Date</p>
            </div>
            <div>
              <p className="pb-[5px] text-right">
                {value?.name || "Not Added yet"}
              </p>
              <p className="pb-[5px] text-right">
                {value?.email || "Not Added yet"}
              </p>
              <p className="pb-[5px] text-right">
                {value?.contact || "Not Added yet"}
              </p>
              <p className="text-right">
                {value?.createdAt ? moment(value.createdAt).format("L") : ""}
              </p>
            </div>
          </div>
        </div>
      </Modal>

      {/* <Modal
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
      </Modal> */}
    </>
  );
};

export default Users;
