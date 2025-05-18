import { ConfigProvider, Modal, Select, Table } from "antd";
import moment from "moment";
import React, { useCallback, useMemo, useState } from "react";
import { BsInfoCircle } from "react-icons/bs";

const data = [
  {
    key: "1",
    userName: "john_doe",
    firstName: "John",
    lastName: "Doe",
    userEmail: "john.doe@example.com",
    provider: "HomeBright",
    providerEmail: "hello@homebright.com",
    category: "Cleaning",
    serviceType: "Move-In Cleaning",
    serviceLocation: "Houston, TX",
    price: 146,
    serviceImage:
      "https://i.ibb.co.com/TxDMxFpF/8a93140310fbd10e3adba404ff4c8d0fee3446ba.png",
    createdAt: "2024-07-17T00:00:00",
  },
  {
    key: "2",
    userName: "jane_smith",
    firstName: "Jane",
    lastName: "Smith",
    userEmail: "jane.smith@example.com",
    provider: "Green Lawn Care",
    providerEmail: "contact@greenlawn.com",
    category: "Maintenance",
    serviceType: "Tile Fixing",
    serviceLocation: "Phoenix, AZ",
    price: 100,
    serviceImage:
      "https://i.ibb.co.com/TxDMxFpF/8a93140310fbd10e3adba404ff4c8d0fee3446ba.png",
    createdAt: "2024-07-29T00:00:00",
  },
  {
    key: "3",
    userName: "ali_rahman",
    firstName: "Ali",
    lastName: "Rahman",
    userEmail: "ali.rahman@example.com",
    provider: "CleanPro Services",
    providerEmail: "support@cleanpro.com",
    category: "Maintenance",
    serviceType: "Plumbing Repair",
    serviceLocation: "Phoenix, AZ",
    price: 196,
    serviceImage:
      "https://i.ibb.co.com/TxDMxFpF/8a93140310fbd10e3adba404ff4c8d0fee3446ba.png",
    createdAt: "2024-07-29T00:00:00",
  },
  {
    key: "4",
    userName: "emily_chen",
    firstName: "Emily",
    lastName: "Chen",
    userEmail: "emily.chen@example.com",
    provider: "Green Lawn Care",
    providerEmail: "contact@greenlawn.com",
    category: "Electrical",
    serviceType: "Wiring Inspection",
    serviceLocation: "San Jose, CA",
    price: 198,
    serviceImage: "https://via.placeholder.com/100x60?text=Wiring+Inspection",
    createdAt: "2024-07-21T00:00:00",
  },
  {
    key: "5",
    userName: "michael_brown",
    firstName: "Michael",
    lastName: "Brown",
    userEmail: "michael.brown@example.com",
    provider: "HomeBright",
    providerEmail: "hello@homebright.com",
    category: "HVAC",
    serviceType: "AC Servicing",
    serviceLocation: "Chicago, IL",
    price: 121,
    serviceImage: "https://via.placeholder.com/100x60?text=AC+Servicing",
    createdAt: "2024-07-21T00:00:00",
  },
  {
    key: "6",
    userName: "sara_lee",
    firstName: "Sara",
    lastName: "Lee",
    userEmail: "sara.lee@example.com",
    provider: "CoolHome AC",
    providerEmail: "hello@coolhome.com",
    category: "Electrical",
    serviceType: "Wiring Inspection",
    serviceLocation: "Chicago, IL",
    price: 95,
    serviceImage: "https://via.placeholder.com/100x60?text=Wiring+Inspection",
    createdAt: "2024-07-12T00:00:00",
  },
  {
    key: "7",
    userName: "david_kim",
    firstName: "David",
    lastName: "Kim",
    userEmail: "david.kim@example.com",
    provider: "FixIt Fast",
    providerEmail: "info@fixitfast.com",
    category: "Gardening",
    serviceType: "Lawn Mowing",
    serviceLocation: "New York, NY",
    price: 87,
    serviceImage: "https://via.placeholder.com/100x60?text=Lawn+Mowing",
    createdAt: "2024-07-22T00:00:00",
  },
  {
    key: "8",
    userName: "lisa_white",
    firstName: "Lisa",
    lastName: "White",
    userEmail: "lisa.white@example.com",
    provider: "Spark Electricals",
    providerEmail: "contact@sparkelectricals.com",
    category: "HVAC",
    serviceType: "Vent Cleaning",
    serviceLocation: "Phoenix, AZ",
    price: 75,
    serviceImage: "https://via.placeholder.com/100x60?text=Vent+Cleaning",
    createdAt: "2024-07-04T00:00:00",
  },
  {
    key: "9",
    userName: "daniel_jones",
    firstName: "Daniel",
    lastName: "Jones",
    userEmail: "daniel.jones@example.com",
    provider: "ShineBright Windows",
    providerEmail: "shine@windows.com",
    category: "Electrical",
    serviceType: "Light Fixture Repair",
    serviceLocation: "Houston, TX",
    price: 145,
    serviceImage:
      "https://via.placeholder.com/100x60?text=Light+Fixture+Repair",
    createdAt: "2024-07-23T00:00:00",
  },
  {
    key: "10",
    userName: "nina_patel",
    firstName: "Nina",
    lastName: "Patel",
    userEmail: "nina.patel@example.com",
    provider: "Safe Electric",
    providerEmail: "support@safeelectric.com",
    category: "Gardening",
    serviceType: "Tree Trimming",
    serviceLocation: "Austin, TX",
    price: 92,
    serviceImage: "https://via.placeholder.com/100x60?text=Tree+Trimming",
    createdAt: "2024-07-16T00:00:00",
  },
  {
    key: "11",
    userName: "tom_clark",
    firstName: "Tom",
    lastName: "Clark",
    userEmail: "tom.clark@example.com",
    provider: "FixIt Fast",
    providerEmail: "info@fixitfast.com",
    category: "Electrical",
    serviceType: "Ceiling Fan Installation",
    serviceLocation: "Phoenix, AZ",
    price: 162,
    serviceImage:
      "https://via.placeholder.com/100x60?text=Ceiling+Fan+Installation",
    createdAt: "2024-07-29T00:00:00",
  },
  {
    key: "12",
    userName: "sophia_johnson",
    firstName: "Sophia",
    lastName: "Johnson",
    userEmail: "sophia.johnson@example.com",
    provider: "Spark Electricals",
    providerEmail: "contact@sparkelectricals.com",
    category: "Electrical",
    serviceType: "Ceiling Fan Installation",
    serviceLocation: "Dallas, TX",
    price: 87,
    serviceImage:
      "https://via.placeholder.com/100x60?text=Ceiling+Fan+Installation",
    createdAt: "2024-07-07T00:00:00",
  },
  {
    key: "13",
    userName: "liam_martin",
    firstName: "Liam",
    lastName: "Martin",
    userEmail: "liam.martin@example.com",
    provider: "CoolHome AC",
    providerEmail: "hello@coolhome.com",
    category: "Electrical",
    serviceType: "Light Fixture Repair",
    serviceLocation: "Jacksonville, FL",
    price: 119,
    serviceImage:
      "https://via.placeholder.com/100x60?text=Light+Fixture+Repair",
    createdAt: "2024-07-20T00:00:00",
  },
  {
    key: "14",
    userName: "olivia_lewis",
    firstName: "Olivia",
    lastName: "Lewis",
    userEmail: "olivia.lewis@example.com",
    provider: "FixIt Fast",
    providerEmail: "info@fixitfast.com",
    category: "Maintenance",
    serviceType: "Faucet Installation",
    serviceLocation: "San Diego, CA",
    price: 167,
    serviceImage: "https://via.placeholder.com/100x60?text=Faucet+Installation",
    createdAt: "2024-07-26T00:00:00",
  },
  {
    key: "15",
    userName: "noah_walker",
    firstName: "Noah",
    lastName: "Walker",
    userEmail: "noah.walker@example.com",
    provider: "ShineBright Windows",
    providerEmail: "shine@windows.com",
    category: "Maintenance",
    serviceType: "Faucet Installation",
    serviceLocation: "New York, NY",
    price: 145,
    serviceImage: "https://via.placeholder.com/100x60?text=Faucet+Installation",
    createdAt: "2024-07-25T00:00:00",
  },
  {
    key: "16",
    userName: "emma_scott",
    firstName: "Emma",
    lastName: "Scott",
    userEmail: "emma.scott@example.com",
    provider: "ShineBright Windows",
    providerEmail: "shine@windows.com",
    category: "Electrical",
    serviceType: "Ceiling Fan Installation",
    serviceLocation: "San Diego, CA",
    price: 162,
    serviceImage:
      "https://via.placeholder.com/100x60?text=Ceiling+Fan+Installation",
    createdAt: "2024-07-31T00:00:00",
  },
  {
    key: "17",
    userName: "james_hall",
    firstName: "James",
    lastName: "Hall",
    userEmail: "james.hall@example.com",
    provider: "CleanPro Services",
    providerEmail: "support@cleanpro.com",
    category: "Electrical",
    serviceType: "Light Fixture Repair",
    serviceLocation: "Austin, TX",
    price: 97,
    serviceImage:
      "https://via.placeholder.com/100x60?text=Light+Fixture+Repair",
    createdAt: "2024-07-24T00:00:00",
  },
  {
    key: "18",
    userName: "ava_young",
    firstName: "Ava",
    lastName: "Young",
    userEmail: "ava.young@example.com",
    provider: "Spark Electricals",
    providerEmail: "contact@sparkelectricals.com",
    category: "Electrical",
    serviceType: "Light Fixture Repair",
    serviceLocation: "Chicago, IL",
    price: 72,
    serviceImage:
      "https://via.placeholder.com/100x60?text=Light+Fixture+Repair",
    createdAt: "2024-07-25T00:00:00",
  },
  {
    key: "19",
    userName: "lucas_allen",
    firstName: "Lucas",
    lastName: "Allen",
    userEmail: "lucas.allen@example.com",
    provider: "CleanPro Services",
    providerEmail: "support@cleanpro.com",
    category: "Electrical",
    serviceType: "Ceiling Fan Installation",
    serviceLocation: "San Diego, CA",
    price: 198,
    serviceImage:
      "https://via.placeholder.com/100x60?text=Ceiling+Fan+Installation",
    createdAt: "2024-07-05T00:00:00",
  },
  {
    key: "20",
    userName: "mia_king",
    firstName: "Mia",
    lastName: "King",
    userEmail: "mia.king@example.com",
    provider: "Green Lawn Care",
    providerEmail: "contact@greenlawn.com",
    category: "Gardening",
    serviceType: "Lawn Mowing",
    serviceLocation: "Jacksonville, FL",
    price: 83,
    serviceImage: "https://via.placeholder.com/100x60?text=Lawn+Mowing",
    createdAt: "2024-07-05T00:00:00",
  },
];

const itemsPerPage = 10;

const Users = () => {
  const [page, setPage] = useState(1);
  const [value, setValue] = useState(null);

  const handleChange = useCallback((val) => {
    console.log(`selected ${val}`);
  }, []);

  const handleInfoClick = useCallback((record) => {
    setValue(record);
  }, []);

  const handleModalClose = useCallback(() => {
    setValue(null);
  }, []);

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
        title: "Provider",
        dataIndex: "provider",
        key: "provider",
      },
      {
        title: "Service Type",
        dataIndex: "category",
        key: "category",
      },
      {
        title: "Service Location",
        dataIndex: "serviceLocation",
        key: "serviceLocation",
      },
      {
        title: "Appt. Date",
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
            <BsInfoCircle
              className="text-lg text-[#F78F08] cursor-pointer"
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
          dataSource={data}
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

export default Users;
