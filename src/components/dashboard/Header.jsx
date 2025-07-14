import React, { useEffect, useMemo } from "react";
import { imageUrl } from "../../redux/api/baseApi";
import { Link } from "react-router-dom";
import { FaRegBell } from "react-icons/fa6";
import { Badge } from "antd";
import { useProfileQuery } from "../../redux/features/authApi";
import { useGetNotificationsQuery } from "../../redux/features/notificationApi";

const Header = () => {
  const { data } = useProfileQuery();
  const user = data?.data;
  const { data: notificationData, refetch } = useGetNotificationsQuery();
  const unreadCount = useMemo(() => notificationData?.data?.unreadCount || 0, [notificationData]);
  useEffect(() => {
    const interval = setInterval(() => {
      refetch();
    }, 1000);
    return () => clearInterval(interval);
  }, [refetch]);

  const src =
    user?.profile && user?.profile.startsWith("http")
      ? user?.profile
      : user?.profile
      ? `${imageUrl}${user?.profile}`
      : "/default-avatar.png";

  return (
    <div className="flex items-center gap-8 justify-end bg-secondary h-20 mt-8 ml-14 mr-6 rounded-lg p-5">
      <Link to="/notification" className="h-fit mt-[10px]">
        <Badge count={unreadCount}>
          <FaRegBell color="#757575" size={20} />
        </Badge>
      </Link>

      <Link to="/profile" className="flex items-center gap-3">
        <img
          style={{
            clipPath: "circle()",
            width: 45,
            height: 45,
            objectFit: "cover",
          }}
          src={src}
          alt="User avatar"
        />
        <p>{user?.name || "User"}</p>
      </Link>
    </div>
  );
};

export default Header;
