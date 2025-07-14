import { useState, useCallback } from "react";
import { ConfigProvider, Pagination } from "antd";
import toast from "react-hot-toast";
import bell from "../../assets/bell.svg";
import {
  useGetNotificationsQuery,
  useReadNotificationMutation,
} from "../../redux/features/notificationApi";
import { formatDistanceToNow } from "date-fns";

const Notifications = () => {
  const [page, setPage] = useState(1);
  const { data: notificationData, refetch } = useGetNotificationsQuery(page);
  const [readNotification] = useReadNotificationMutation();
  const handleRead = async () => {
    try {
      const { success, message } = await readNotification().unwrap();
      if (success) {
        toast.success(message);
        refetch();
      }
    } catch (error) {
      toast.error(error?.data?.message);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[22px]">All Notifications</h2>
        <button
          className="bg-primary text-white h-10 px-4 rounded-md"
          onClick={handleRead}
        >
          Read All
        </button>
      </div>

      <div className="grid grid-cols-1 gap-5">
        {notificationData?.data?.notifications?.map((notification, index) => (
          <div
            key={notification?._id}
            className={`p-3 rounded-lg flex items-center gap-3 ${
              notification?.read ? "bg-transparent" : "bg-[#E7F0EF]"
            }`}
          >
            <img
              className="object-cover"
              style={{
                backgroundColor: "#E7F0EF",
                padding: "8px",
                borderRadius: "100%",
                objectFit: "cover",
              }}
              src={bell}
              alt="Notification"
            />
            <div>
              <p>
                <span>{notification.user}</span> {notification.text}
              </p>
              <p style={{ color: "gray", marginTop: "4px" }}>
                {formatDistanceToNow(new Date(notification?.createdAt), {
                  addSuffix: true,
                })}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-end mt-6">
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
          <Pagination
            current={page}
            total={notificationData?.data?.pagination?.total}
            showQuickJumper={false}
            showSizeChanger={false}
            onChange={(page) => setPage(page)}
          />
        </ConfigProvider>
      </div>
    </div>
  );
};

export default Notifications;
