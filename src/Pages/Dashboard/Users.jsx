import { ConfigProvider, Input, Modal, Table } from "antd";
import moment from "moment";
import { useCallback, useMemo, useState } from "react";
import deleteIcon from "../../assets/delete.svg";
import { IoEyeOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";

const initialData = [
  {
    key: "1",
    firstName: "John",
    lastName: "Doe",
    category: "Health & Wellness",
    email: "john.doe@example.com",
    mobileNumber: "+1234567890",
    createdAt: "2024-05-01T10:00:00Z",
  },
  {
    key: "2",
    firstName: "Jane",
    lastName: "Smith",
    category: "Health & Wellness",
    email: "jane.smith@example.com",
    mobileNumber: "+1987654321",
    createdAt: "2024-06-15T08:30:00Z",
  },
  {
    key: "3",
    firstName: "Alice",
    lastName: "Johnson",
    category: "Health & Wellness",
    email: "alice.johnson@example.com",
    mobileNumber: "+1112233445",
    createdAt: "2024-07-20T12:45:00Z",
  },
  {
    key: "4",
    firstName: "Bob",
    lastName: "Williams",
    category: "Health & Wellness",
    email: "bob.williams@example.com",
    mobileNumber: "+1123456789",
    createdAt: "2024-03-18T14:00:00Z",
  },
  {
    key: "5",
    firstName: "Emma",
    lastName: "Brown",
    category: "Health & Wellness",
    email: "emma.brown@example.com",
    mobileNumber: "+9988776655",
    createdAt: "2024-04-10T09:15:00Z",
  },
  {
    key: "6",
    firstName: "Liam",
    lastName: "Davis",
    category: "Health & Wellness",
    email: "liam.davis@example.com",
    mobileNumber: "+5566778899",
    createdAt: "2024-01-25T17:30:00Z",
  },
  {
    key: "7",
    firstName: "Olivia",
    lastName: "Garcia",
    category: "Health & Wellness",
    email: "olivia.garcia@example.com",
    mobileNumber: "+1234987654",
    createdAt: "2024-02-10T10:20:00Z",
  },
  {
    key: "8",
    firstName: "Noah",
    lastName: "Martinez",
    category: "Health & Wellness",
    email: "noah.martinez@example.com",
    mobileNumber: "+7865432190",
    createdAt: "2024-08-08T11:00:00Z",
  },
  {
    key: "9",
    firstName: "Sophia",
    lastName: "Rodriguez",
    category: "Health & Wellness",
    email: "sophia.rodriguez@example.com",
    mobileNumber: "+2223334444",
    createdAt: "2024-06-03T16:15:00Z",
  },
  {
    key: "10",
    firstName: "James",
    lastName: "Lee",
    category: "Health & Wellness",
    email: "james.lee@example.com",
    mobileNumber: "+3216549870",
    createdAt: "2024-05-21T13:10:00Z",
  },
  {
    key: "11",
    firstName: "Isabella",
    lastName: "Walker",
    category: "Health & Wellness",
    email: "isabella.walker@example.com",
    mobileNumber: "+6543219870",
    createdAt: "2024-01-05T15:00:00Z",
  },
  {
    key: "12",
    firstName: "Ethan",
    lastName: "Hall",
    category: "Health & Wellness",
    email: "ethan.hall@example.com",
    mobileNumber: "+3456789012",
    createdAt: "2024-03-12T08:25:00Z",
  },
  {
    key: "13",
    firstName: "Mia",
    lastName: "Allen",
    category: "Dining",
    email: "mia.allen@example.com",
    mobileNumber: "+4343434343",
    createdAt: "2024-09-01T09:45:00Z",
  },
  {
    key: "14",
    firstName: "Alexander",
    lastName: "Young",
    category: "Dining",
    email: "alex.young@example.com",
    mobileNumber: "+6565656565",
    createdAt: "2024-02-22T07:30:00Z",
  },
  {
    key: "15",
    firstName: "Charlotte",
    lastName: "Hernandez",
    category: "Dining",
    email: "charlotte.hernandez@example.com",
    mobileNumber: "+7778889990",
    createdAt: "2024-04-30T13:50:00Z",
  },
  {
    key: "16",
    firstName: "Benjamin",
    lastName: "King",
    category: "Dining",
    email: "ben.king@example.com",
    mobileNumber: "+9090909090",
    createdAt: "2024-07-11T14:35:00Z",
  },
  {
    key: "17",
    firstName: "Amelia",
    lastName: "Wright",
    category: "Dining",
    email: "amelia.wright@example.com",
    mobileNumber: "+8181818181",
    createdAt: "2024-10-09T10:05:00Z",
  },
  {
    key: "18",
    firstName: "Lucas",
    lastName: "Lopez",
    category: "Dining",
    email: "lucas.lopez@example.com",
    mobileNumber: "+2323232323",
    createdAt: "2024-11-13T11:40:00Z",
  },
  {
    key: "19",
    firstName: "Harper",
    lastName: "Scott",
    category: "Dining",
    email: "harper.scott@example.com",
    mobileNumber: "+5656565656",
    createdAt: "2024-12-01T09:30:00Z",
  },
  {
    key: "20",
    firstName: "Henry",
    lastName: "Green",
    category: "Dining",
    email: "henry.green@example.com",
    mobileNumber: "+7878787878",
    createdAt: "2024-08-25T12:10:00Z",
  },
];

const itemsPerPage = 9;

const Users = () => {
  const [srcText, setSrcText] = useState("");
  const [page, setPage] = useState(1);
  const [data, setData] = useState(initialData);
  const [value, setValue] = useState(null);
  const [showDelete, setShowDelete] = useState(false);
  const [deleteId, setDeleteId] = useState("");

  const handleSearchChange = (e) => {
    e.preventDefault();
    setSrcText(e.target.value);
  };

  const handleDelete = useCallback(() => {
    setData((prev) => prev.filter((item) => item.key !== deleteId));
    setShowDelete(false);
    setDeleteId("");
  }, [deleteId]);

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
            <p>
              {record?.firstName || ""} {record?.lastName || ""}
            </p>
          </div>
        ),
      },
      {
        title: "Category",
        dataIndex: "category",
        key: "category",
      },
      {
        title: "Email",
        dataIndex: "email",
        key: "email",
      },
      {
        title: "Contact Number",
        dataIndex: "mobileNumber",
        key: "mobileNumber",
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
            <img
              className="cursor-pointer"
              onClick={() => {
                setDeleteId(record?.key);
                setShowDelete(true);
              }}
              src={deleteIcon}
              alt="Delete Icon"
            />
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
              <p className="pb-[5px]">Category</p>
              <p>Start Date</p>
            </div>
            <div>
              <p className="pb-[5px] text-right">
                {value?.firstName || ""} {value?.lastName || ""}
              </p>
              <p className="pb-[5px] text-right">
                {value?.email || "Not Added yet"}
              </p>
              <p className="pb-[5px] text-right">
                {value?.mobileNumber || "Not Added yet"}
              </p>
              <p className="pb-[5px] text-right">
                {value?.category || "Home Service"}
              </p>
              <p className="text-right">
                {value?.createdAt ? moment(value.createdAt).format("L") : ""}
              </p>
            </div>
          </div>
        </div>
      </Modal>

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
    </>
  );
};

export default Users;
