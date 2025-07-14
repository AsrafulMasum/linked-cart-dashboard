import { Navigate, useLocation } from "react-router-dom";
import { Spin } from "antd";
import { useProfileQuery } from "../redux/features/authApi";
import { AiOutlineLoading } from "react-icons/ai";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const { data: profile, isLoading, isError, isFetching } = useProfileQuery();

  if (isLoading || isFetching) {
    return <div> <Spin indicator={<AiOutlineLoading style={{ fontSize: 48 }} spin />} /></div>;
  }

  if (isError) {
    return <Navigate to="/auth/login" state={{ from: location }} />;
  }

  if (
    profile?.data?.role &&
    (profile?.data?.role === "ADMIN" || profile?.data?.role === "SUPER_ADMIN")
  ) {
    return children;
  }

  return <Navigate to="/auth/login" state={{ from: location }} />;
};

export default ProtectedRoute;
