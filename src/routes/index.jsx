import { createBrowserRouter } from "react-router-dom";
import Auth from "../Layout/Auth/Auth";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Dashboard/Home";
import Users from "../Pages/Dashboard/Users";
import ChangePassword from "../Pages/Auth/ChangePassword";
import Subscription from "../Pages/Dashboard/Earnings";
import Profile from "../Pages/Dashboard/Profile";
import ForgotPassword from "../Pages/Auth/ForgotPassword";
import VerifyOtp from "../Pages/Auth/VerifyOtp";
import ResetPassword from "../Pages/Auth/ResetPassword";
import NotFound from "../NotFound";
import Notifications from "../Pages/Dashboard/Notifications";
import AboutUs from "../Pages/Dashboard/settings/AboutUs";
import PrivacyPolicy from "../Pages/Dashboard/settings/PrivacyPolicy";
import TermsAndConditions from "../Pages/Dashboard/settings/TermsAndCondition";
import Login from "../Pages/Auth/Login";
import FAQ from "../Pages/Dashboard/FAQ";
import RefundAndReturnPolicy from "../Pages/Dashboard/settings/RefundAndReturnPolicy";
import CookiesPolicy from "../Pages/Dashboard/settings/CookiesPolicy";
import RetailShops from "../Pages/Dashboard/RetailShops";
import OrdersList from "../Pages/Dashboard/OrdersList";
import Earnings from "../Pages/Dashboard/Earnings";
import ShopOwner from "../Pages/Dashboard/ShopOwner";
import Analytics from "../Pages/Dashboard/Analytics";
import Offers from "../Pages/Dashboard/Offers";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <ProtectedRoute><Main /></ProtectedRoute> ,
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/earnings",
        element: <Earnings />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/retailShops",
        element: <RetailShops />,
      },
      {
        path: "/orders",
        element: <OrdersList />,
      },
      {
        path: "/analytics",
        element: <Analytics />,
      },
      {
        path: "/shopOwner",
        element: <ShopOwner />,
      },
      {
        path: "/settings/about-us",
        element: <AboutUs />,
      },
      {
        path: "/settings/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/settings/terms-and-conditions",
        element: <TermsAndConditions />,
      },
      {
        path: "/settings/cookies-policy",
        element: <CookiesPolicy />,
      },
      {
        path: "/settings/refund-and-return-policy",
        element: <RefundAndReturnPolicy />,
      },
      {
        path: "/settings/change-password",
        element: <ChangePassword />,
      },
      {
        path: "/settings/profile",
        element: <Profile />,
      },
      {
        path: "/notification",
        element: <Notifications />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        path: "/auth",
        element: <Login />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "verify-otp",
        element: <VerifyOtp />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
